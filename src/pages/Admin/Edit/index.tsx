import { Container, Content, Back, Form } from "./styles";
import { Header } from "../../../components/Header";
import {CaretLeft} from '@phosphor-icons/react';
import { Footer } from "../../../components/Footer";
import { Input } from "../../../components/Input";
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
                            <Input label="Nome" />
                        </div>
                        <div>
                            <Input label="Nome" />
                        </div>
                        <div>
                            <Input label="Nome"/>
                        </div>
                    </div>
                </Form>
            </Content>
            
        </Container>
    )
}