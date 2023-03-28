import { Container, Logo, Content, Form } from "./styles";
import { useNavigate } from 'react-router-dom';
import Polygon from '../../assets/logo/polygon-blue.svg';
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignIn() {
    const navigate = useNavigate();

    return (
        <Container>
            <Logo>
                <div>
                    <img src={Polygon} alt="Poligono azul" />
                    <h1>food explorer</h1>
                </div>
            </Logo>
            <Content>
                <div>
                    <h2>Faça login</h2>
                    <Form>
                        <Input
                            label="Email"
                            name="email"
                            type="email"
                            placeholder="Exemplo: exemplo@exemplo.com.br"
                        />
                        <Input
                            label="Senha"
                            name="password"
                            type="password"
                            placeholder="No mínimo 6 caracteres"
                        />
                        <Button
                            text="Entrar"
                        />
                        <button className="link" onClick={() => navigate("/register")}>Criar uma conta</button>
                    </Form>
                </div>
            </Content>
        </Container>
    );
}