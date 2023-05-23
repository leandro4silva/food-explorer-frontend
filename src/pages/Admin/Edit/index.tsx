import { Container, Content, Back, Form } from "./styles";
import { Header } from "../../../components/Header";
import {CaretLeft} from '@phosphor-icons/react';
import { Footer } from "../../../components/Footer";
import { Input } from "../../../components/Input";
import { IngredientsItem } from "../../../components/IngredientsItem";
import { useNavigate } from "react-router-dom";

export function Edit(){
    const navigate = useNavigate();

    function handleBack(){
        navigate(-1);
    }

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
                            <Input label="Imagem do prato" />
                        </div>
                        <div>
                            <Input label="Nome" />
                        </div>
                        <div>
                            <Input label="Categoria"/>
                        </div>
                    </div>
                    <div className="two-input-group">
                        <div className="ingredients">
                            <label>Ingredientes</label>
                            <div>
                                <IngredientsItem isNew={false}/>
                                <IngredientsItem isNew />
                                <IngredientsItem isNew />

                            </div>                           
                        </div>
                        <div>
                            <Input label="Preço" />
                        </div>
                    </div>
                </Form>
            </Content>
            
        </Container>
    )
}