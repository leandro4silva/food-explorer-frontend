import { Container, Content, Back, Form } from "./styles";
import { Header } from "../../../components/Header";
import { CaretLeft, WarningCircle } from '@phosphor-icons/react';
import { Footer } from "../../../components/Footer";
import { Input } from "../../../components/Input";
import { Select, Option } from "../../../components/Select";
import { IngredientsItem } from "../../../components/IngredientsItem";
import { Textarea } from "../../../components/Textarea";
import { Button } from "../../../components/Button";
import { FileInput } from "../../../components/FileInput";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { api } from "../../../services/api";
import { ToastContent, toastAlert } from "../../../components/Toast";
import { createDishValidate } from "./validate";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { priceMask } from "../../../utils/masks";
import { useSession } from "../../../hooks/session";

interface CategoryProps {
    id: string,
    name: string
}

interface IngredientProps {
    id: string,
    name: string
}

export function CreateDish() {
    const navigate = useNavigate();
    const [categorys, setCategorys] = useState<CategoryProps[]>([]);
    const [category, setCategory] = useState('');
    const [newIngredient, setNewIngredient] = useState('');
    const [ingredients, setIngredients] = useState<IngredientProps[]>([]);
    const [imageFile, setImageFile] = useState<File>();
    const { setMessageSession, sessionMessage } = useSession();

    const { register, handleSubmit, setError, formState: { errors, isSubmitting } } = useForm({
        resolver: zodResolver(createDishValidate)
    });

    function handleBack() {
        navigate(-1);
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

    function handleAddImage(e: React.FormEvent<HTMLInputElement>) {
        if (e.currentTarget.files) {
            const file = e.currentTarget.files[0]
            setImageFile(file)
        }
    }

    function handleRemoveIngredient(deletedIngredient: string) {
        setIngredients(prevState => prevState.filter(ingredient => ingredient.name != deletedIngredient ? true : false))
    }

    function handleSelectCategory(value: string){
        setCategory(value);
    }

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        if (ingredients.length == 0) {
            setError('ingredients', { type: 'custom', message: 'Selecione um ingrediente' });
        }

        if(!category){
            setError('category', { type: 'custom', message: 'Selecione uma categoria' });
        }

        try {
            await api.post("/dishs", {
                image: "",
                name: data.name,
                category,
                price: data.price,
                description: data.description,
                ingredients
            });

            if (imageFile) {
                const fileUploadForm = new FormData();
                fileUploadForm.append("image", imageFile);

                await api.patch(`/dishs/image/${data.name}`, fileUploadForm)
            }

            setMessageSession({
                message: `O prato ${data.name} foi adicionado com sucesso!`,
                type: 'success'
            })

            navigate("/admin/dashboard");
        } catch (error: any) {
            toastAlert({
                message: 'Não foi possivel realizar o cadastro do prato, tente novamente mais tarde',
                type: 'error'
            })
        }
    }

    useEffect(() => {
        let hasError = false;

        Object.keys(errors).map((error) => {
            if (error) {
                hasError = true
            }
        })

        if (hasError) {
            toastAlert({
                message: 'Alguns campos estão incorretos. Corrija os campos em vermelho.',
                type: 'error'
            });
        }
    }, [errors]);

    useEffect(() => {
        async function fetchCategory() {
            const response = await api.get<CategoryProps[]>('/categorys')
            setCategorys(response.data);
        }
        fetchCategory();
    }, [])

    return (
        <Container>
            <Header isAdmin />
            <Content>
                <Back onClick={handleBack}>
                    <CaretLeft size={32} />
                    voltar
                </Back>
                <Form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
                    <h2>Adicionar prato</h2>
                    <div className="three-input-group">
                        <div>
                            <FileInput
                                name="image"
                                label={imageFile?.name || "Selecione imagem"}
                                onChange={handleAddImage}
                                register={register('image')}
                                error={errors.image?.message?.toString()}
                            />
                        </div>
                        <div>
                            <Input
                                label="Nome"
                                name="name"
                                type="text"
                                placeholder="Ex.: Salada Ceasar"
                                register={register('name')}
                                error={errors.name?.message?.toString()}
                            />
                        </div>
                        <div>
                            <Select
                                label="Categoria"
                                name="category"
                                placeholder="Selecione a categoria do prato"
                                onValueChange={handleSelectCategory}
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
                            <div>
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
                            </div>
                            {
                                errors.ingredients?.message ?
                                    <span> <WarningCircle size={18} /> {errors.ingredients?.message?.toString()}</span>
                                    : null
                            }
                        </div>
                        <div>
                            <Input
                                label="Preço"
                                placeholder="R$ 00,00"
                                name="price"
                                mask={priceMask}
                                register={register('price')}
                                error={errors.price?.message?.toString()}
                            />
                        </div>
                    </div>
                    <div className="description">
                        <Textarea
                            label="Descrição"
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
            </Content>
            <Footer />
            <ToastContent />
        </Container>
    )
}