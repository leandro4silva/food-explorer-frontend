import { Container, Logo, Content, Form } from "./styles";
import Polygon from '../../assets/logo/Polygon.svg';
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useNavigate} from 'react-router-dom';

export function SignUp() {

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
                    <h2>Crie sua conta</h2>
                    <Form>
                        <Input 
                            label="Seu nome"
                            name="name"
                            type="text"
                            placeholder="Exemplo: Maria da Silva"
                        />
                        <Input
                            label="Email"
                            name="email"
                            type="email"
                            placeholder="Exemplo: exemplo@exemplo.com"
                        />
                        <Input
                            label="Senha"
                            name="password"
                            type="password"
                            placeholder="No minimo 6 caracteres"
                        />
                        <Button 
                            text="Criar conta"
                        />
                        <button className="link" onClick={() => navigate("/login")}>Já tenho uma conta</button>
                    </Form>
                </div>
            </Content>
        </Container>
    );
}