import { Container, Content, Back, Form } from "./styles";
import { Header } from "../../../components/Header";
import { CaretLeft } from '@phosphor-icons/react';
import { Footer } from "../../../components/Footer";
import { Input } from "../../../components/Input";
import { Select, Option } from "../../../components/Select";
import { IngredientsItem } from "../../../components/IngredientsItem";
import { Textarea } from "../../../components/Textarea";
import { Button } from "../../../components/Button";
import { FileInput } from "../../../components/FileInput";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../../services/api";
import { ToastContent, toastAlert } from "../../../components/Toast";

interface CategoryProps {
    id: string,
    name: string
}

export function CreateDish() {
    const navigate = useNavigate();
    const [categorys, setCategorys] = useState<CategoryProps[]>([]);
    const [newIngredient, setNewIngredient] = useState('');
    const [ingredient, setIngredient] = useState<string[]>([]);
    const [image, setImage] = useState<File>();

    function handleBack() {
        navigate(-1);
    }

    function handleAddIngredients() {
        if(!newIngredient){
            return toastAlert({
                message: 'Preencha o nome do ingrediente antes de adicionar.',
                type: 'error'
            });
        }

        setIngredient(prevState => [...prevState, newIngredient]);
        setNewIngredient('');
    }

    function handleAddImage(e: React.FormEvent<HTMLInputElement>){
        if(e.currentTarget.files){
            const file = e.currentTarget.files[0]
            setImage(file)

            

            const imagePreview = URL.createObjectURL(file)
            //console.log(imagePreview)
        }
    }

    function handleRemoveIngredient(deletedIngredient: string){
        setIngredient(prevState => prevState.filter(ingredient => ingredient != deletedIngredient ? true : false))
    }

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
                <Form>
                    <h2>Adicionar prato</h2>
                    <div className="three-input-group">
                        <div>
                            <FileInput name="image" label={image?.name || "Selecione imagem"} onChange={handleAddImage}/>
                        </div>
                        <div>
                            <Input label="Nome" name="name" placeholder="Ex.: Salada Ceasar" />
                        </div>
                        <div>
                            <Select label="Categoria" name="category" placeholder="Selecione a categoria do prato">
                                {
                                    categorys && categorys.map((category) => {
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
                                    ingredient.map((item, index) => {
                                        return (
                                            <IngredientsItem 
                                                key={index}
                                                isNew={false} 
                                                name={item}
                                                onClick={() => handleRemoveIngredient(item)} 
                                            />
                                        )
                                    })
                                }
                                <IngredientsItem isNew onClick={handleAddIngredients} value={newIngredient} onChange={e => setNewIngredient(e.target.value)} />
                            </div>
                        </div>
                        <div>
                            <Input label="Preço" placeholder="R$ 00,00" />
                        </div>
                    </div>
                    <div className="description">
                        <Textarea label="Descrição" name="description" placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" />
                    </div>
                    <div className="button-save-content">
                        <div>
                            <Button text="Salvar alteração" type="button" light={true} />
                        </div>
                    </div>
                </Form>
            </Content>
            <Footer />
            <ToastContent />
        </Container>
    )
}