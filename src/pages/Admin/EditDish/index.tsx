import { Container, Content, Back, Form } from "./styles";
import { Header } from "../../../components/Header";
import {CaretLeft} from '@phosphor-icons/react';
import { Footer } from "../../../components/Footer";
import { Input } from "../../../components/Input";
import { Select } from "../../../components/Select";
import { IngredientsItem } from "../../../components/IngredientsItem";
import { Textarea } from "../../../components/Textarea";
import { Button } from "../../../components/Button";
import { FileInput } from "../../../components/FileInput";
import { useNavigate } from "react-router-dom";

export function EditDish(){
    const navigate = useNavigate();

    function handleBack(){
        navigate(-1);
    }

    const category = [
        {text: 'Refeição', value: 'refeicao'},
        {text: 'Sobremesas ', value: 'sobremesas'},
        {text: 'Bebidas', value: 'bebidas'},
    ]

    return(
        <Container>
            <Header isAdmin/>
            <Content>
                <Back onClick={handleBack}>
                    <CaretLeft size={32}/>
                    voltar
                </Back>
                <Form>
                    <h2>Editar prato</h2>
                    <div className="three-input-group">
                        <div>
                            <FileInput />
                        </div>
                        <div>
                            <Input label="Nome" name="name" placeholder="Ex.: Salada Ceasar" />
                        </div>
                        <div>
                            <Select label="Categoria" name="category" options={category} placeholder="Selecione a categoria do prato"/>
                        </div>
                    </div>
                    <div className="two-input-group">
                        <div className="ingredients">
                            <label>Ingredientes</label>
                            <div>
                                <IngredientsItem isNew={false}/>
                                <IngredientsItem isNew/>
                            </div>                           
                        </div>
                        <div>
                            <Input label="Preço" placeholder="R$ 00,00" />
                        </div>
                    </div>
                    <div className="description">
                        <Textarea label="Descrição" name="description" placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"/>
                    </div>
                    <div className="button-save-content">
                        <div>
                            <Button text="Salvar alteração" type="button" light={true}/>
                        </div>
                    </div>
                </Form>
            </Content>
            <Footer />
        </Container>
    )
}