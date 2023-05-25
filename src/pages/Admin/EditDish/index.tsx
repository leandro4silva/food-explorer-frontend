import { Container, Content, Back, Form } from "./styles";
import { Header } from "../../../components/Header";
import {CaretLeft} from '@phosphor-icons/react';
import { Footer } from "../../../components/Footer";
import { Input } from "../../../components/Input";
import { Select } from "../../../components/Select";
import { IngredientsItem } from "../../../components/IngredientsItem";
import { Textarea } from "../../../components/Textarea";
import { Button } from "../../../components/Button";
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
                            <Input label="Nome" placeholder="Ex.: Salada Ceasar" />
                        </div>
                        <div>
                            <Select label="Categoria">
                                <option value="">yao</option>
                                <option value="">yao</option>
                                <option value="">yao</option>
                                <option value="">yao</option>
                            </Select>
                        </div>
                    </div>
                    <div className="two-input-group">
                        <div className="ingredients">
                            <label>Ingredientes</label>
                            <div>
                                <IngredientsItem isNew={false}/>
                                <IngredientsItem isNew={false}/>
                                <IngredientsItem isNew={false}/>
                                <IngredientsItem isNew={false}/>
                                <IngredientsItem isNew={false}/>
                                <IngredientsItem isNew={false}/>
                                <IngredientsItem isNew />
                            </div>                           
                        </div>
                        <div>
                            <Input label="Preço" />
                        </div>
                    </div>
                    <div className="description">
                        <Textarea label="Descrição" placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"/>
                    </div>
                    <div className="button-save-content">
                        <div>
                            <Button text="Salvar alteração" light={true}/>
                        </div>
                    </div>
                </Form>
            </Content>
            <Footer />
        </Container>
    )
}