import { Container, Logo, Content, Form } from "./styles";
import Polygon from '../../assets/logo/polygon-blue.svg';
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useNavigate} from 'react-router-dom';
import { signUpValidate } from "./validate";
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'


interface userProps{
    name: string,
    email: string,
    password: string
}


export function SignUp() {
    const navigate = useNavigate();
    const {register, handleSubmit, formState: {errors, isSubmitting}, } = useForm({
        resolver: zodResolver(signUpValidate)
    })
    
    const onSubmit: SubmitHandler<userProps> = ({email, name, password}) => {
        event?.preventDefault();
        console.log('teste');
    }

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
                    <Form onSubmit={handleSubmit(() => onSubmit)}>
                        <Input 
                            label="Seu nome"
                            name="name"
                            type="text"
                            register={register("name")}
                            error={errors.name?.message?.toString()}
                            placeholder="Exemplo: Maria da Silva"
                        />
                        <Input
                            label="Email"
                            name="email"
                            type="email"
                            register={register("email")}
                            placeholder="Exemplo: exemplo@exemplo.com"
                            error={errors.email?.message?.toString()}
                        />
                        <Input
                            label="Senha"
                            name="password"
                            type="password"
                            register={register('password')}
                            placeholder="No minimo 6 caracteres"
                            error={errors.password?.message?.toString()}
                        />
                        <Button
                            type="submit" 
                            text="Criar conta"
                            loading={isSubmitting}
                        />
                        <button className="link" onClick={() => navigate("/")}>Já tenho uma conta</button>
                    </Form>
                </div>
            </Content>
        </Container>
    );
}