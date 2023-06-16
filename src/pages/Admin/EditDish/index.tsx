import { Container, Content, Back, Form, ContentLoader } from "./styles";
import { Header } from "../../../components/Header";
import { CaretLeft, WarningCircle } from '@phosphor-icons/react';
import { Footer } from "../../../components/Footer";
import { Input } from "../../../components/Input";
import { Select, Option } from "../../../components/Select";
import { IngredientsItem } from "../../../components/IngredientsItem";
import { Textarea } from "../../../components/Textarea";
import { Button } from "../../../components/Button";
import { FileInput } from "../../../components/FileInput";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../../services/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { editDishValidate } from "./validate";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Loader } from "../../../components/Loader";
import { priceMask } from "../../../utils/masks";
import { ToastContent, toastAlert } from "../../../components/Toast";
import { useSession } from "../../../hooks/session";

interface DishProp {
    id: string;
    image: string;
    name: string;
    category: string;
    ingredients: Array<IngredientProps>
    price: string;
    description: string;
}

interface IngredientProps {
    id: string,
    name: string
}

interface CategoryProps {
    id: string,
    name: string
}


export function EditDish() {
    const navigate = useNavigate();
    const params = useParams();
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [imageFile, setImageFile] = useState<File>();
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [newIngredient, setNewIngredient] = useState('');
    const [ingredients, setIngredients] = useState<IngredientProps[]>([]);
    const [loadingDish, setLoadingDish] = useState(true);
    const [categorys, setCategorys] = useState<CategoryProps[]>([]);
    const [category, setCategory] = useState('');
    const {setMessageSession, sessionMessage } = useSession();


    const { register, handleSubmit, setError, formState: { errors, isSubmitting } } = useForm({
        resolver: zodResolver(editDishValidate)
    });

    function handleBack() {
        navigate(-1);
    }

    async function getDishData() {
        const response = await api.get(`/dishs/${params.id}`);
        setLoadingDish(false);
        setId(response.data.id)
        setImage(response.data.image)
        setName(response.data.name)
        setCategory(response.data.category)
        setPrice(response.data.price)
        setIngredients(response.data.ingredients)
        setDescription(response.data.description)
    }

    async function fetchCategory() {
        const response = await api.get<CategoryProps[]>('/categorys')
        setCategorys(response.data);
    }

    function handleAddImage(e: React.FormEvent<HTMLInputElement>) {
        if (e.currentTarget.files) {
            const file = e.currentTarget.files[0]
            setImageFile(file)
            setImage(file.name)
        }
    }

    function handleAddIngredients() {
        if (!newIngredient) {
            return toastAlert({
                message: 'Preencha o nome do ingrediente antes de adicionar.',
                type: 'error'
            });
        }
        setIngredients(prevState => [...prevState, {
            id: "",
            name: newIngredient
        }]);
        setNewIngredient('');

        if (errors.ingredients) {
            setError('ingredients', { type: 'custom', message: '' });
        }
    }

    function handleSelectCategory(value: string) {
        setCategory(value);
    }

    function handleRemoveIngredient(deletedIngredient: string) {
        setIngredients(prevState => prevState.filter(ingredient => ingredient.name != deletedIngredient ? true : false))
    }

    const hadleForm: SubmitHandler<FieldValues> = async (data) => {
        if (ingredients.length == 0) {
            setError('ingredients', { type: 'custom', message: 'Selecione um ingrediente' });
        }

        if(!category){
            setError('category', { type: 'custom', message: 'Selecione uma categoria' });
        }
        try{
            await api.put('/dishs', {
                id,
                image,
                name,
                category,
                price,
                description,
                ingredients
            })

            if (imageFile) {
                const fileUploadForm = new FormData();
                fileUploadForm.append("image", imageFile);
    
                await api.patch(`/dishs/image/${name}`, fileUploadForm)
            }

            setMessageSession({
                message: `O prato ${name} foi editado com sucesso!`,
                type: 'success'
            })

            navigate("/admin/dashboard");
        }catch (error: any) {
            toastAlert({
                message: 'Não foi possivel realizar o cadastro do prato, tente novamente mais tarde',
                type: 'error'
            })
        }
    }

    function handleSearchDish(searchValue: string){
        console.log(searchValue)
    }

    useEffect(() => {
        getDishData();
        fetchCategory();
    }, [])

    return (
        <Container>
            <Header isAdmin handleSearch={handleSearchDish}/>
            <Content>
                <Back onClick={handleBack}>
                    <CaretLeft size={32} />
                    voltar
                </Back>
                {
                    !loadingDish ?
                        <Form onSubmit={handleSubmit(hadleForm)} encType="multipart/form-data">
                            <h2>Editar prato</h2>
                            <div className="three-input-group">
                                <div>
                                    <FileInput
                                        name="image"
                                        label={image || "Selecione imagem"}
                                        onChange={handleAddImage}
                                        register={register('image')}
                                        error={errors.image?.message?.toString()}
                                    />
                                </div>
                                <div>
                                    <Input
                                        label="Nome"
                                        name="name"
                                        register={register('name')}
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Ex.: Salada Ceasar"
                                        error={errors.name?.message?.toString()}
                                    />
                                </div>
                                <div>
                                    <Select
                                        label="Categoria"
                                        name="category"
                                        placeholder="Selecione a categoria do prato"
                                        onValueChange={handleSelectCategory}
                                        value={category}
                                        register={register('category')}
                                        error={errors.category?.message?.toString()}
                                    >
                                        {
                                            categorys && categorys.map((category, index) => {
                                                return (
                                                    <Option
                                                        content={category.name}
                                                        value={category.id}
                                                        key={category.id}
                                                    />
                                                )
                                            })
                                        }
                                    </Select>
                                </div>
                            </div>
                            <div className="two-input-group">
                                <div className="ingredients">
                                    <label>Ingredientes</label>
                                    <div className="ingredients">
                                        {
                                            ingredients.map((item, index) => {
                                                return (
                                                    <IngredientsItem
                                                        key={index}
                                                        isNew={false}
                                                        name="ingredient"
                                                        text={item.name}
                                                        onClick={() => handleRemoveIngredient(item.name)}
                                                    />
                                                )
                                            })
                                        }
                                        <IngredientsItem isNew onClick={handleAddIngredients} value={newIngredient} onChange={e => setNewIngredient(e.target.value)} />
                                        {
                                            errors.ingredients?.message ?
                                                <span> <WarningCircle size={18} /> {errors.ingredients?.message?.toString()}</span>
                                                : null
                                        }
                                    </div>
                                </div>
                                <div>
                                    <Input
                                        label="Preço"
                                        placeholder="R$ 00,00"
                                        name="price"
                                        value={price}
                                        mask={priceMask}
                                        register={register('price')}
                                        error={errors.price?.message?.toString()}
                                        onAccept={(value, mask) => setPrice(value)}
                                        onChange={() => {}}
                                    />
                                </div>
                            </div>
                            <div className="description">
                                <Textarea
                                    label="Descrição"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    name="description"
                                    register={register('description')}
                                    error={errors.description?.message?.toString()}
                                    placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                                />
                            </div>
                            <div className="button-save-content">
                                <div>
                                    <Button text="Salvar alteração" type="submit" light={true} loading={isSubmitting} />
                                </div>
                            </div>
                        </Form>
                        :
                        <ContentLoader>
                            <Loader width={50} height={50} />
                        </ContentLoader>
                }
            </Content>
            <Footer />
            <ToastContent />
        </Container>
    )
}