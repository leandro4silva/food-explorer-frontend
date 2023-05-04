import { Container, Logo, Content, Form } from "./styles";
import Polygon from '../../../assets/logo/polygon-blue.svg';
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";
import { useNavigate } from 'react-router-dom';
import { signUpValidate } from "./validate";
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import { api } from "../../../services/api";
import { useEffect } from "react";
import { ToastContent, toastAlert } from '../../../components/Toast';
import { useAuth } from "../../../hooks/auth"


export function SignUp() {
    const { register, handleSubmit, setError, formState: { errors, isSubmitting }, } = useForm({
        resolver: zodResolver(signUpValidate)
    });

    const { signIn } = useAuth();

    const navigate = useNavigate();

    const onSubmit: SubmitHandler<FieldValues> = async ({ email, name, password }) => {
        try {
            const response = await api.post('/users', {
                email,
                name,
                password
            });

            if (response.status = 201) {
                const hasError = await signIn({ email, password, isAdmin: false });
                !hasError ? navigate("/") : null
            }
        } catch (error: any) {
            if (error.response && error.response.data.type == 'email') {
                setError('email', { type: 'custom', message: error.response.data.message })
                toastAlert('Alguns campos estão incorretos. Corrija os campos em vermelho.');
            } else {
                toastAlert('Não foi possivel realizar o cadastro, tente novamente mais tarde')
            }
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
            toastAlert('Alguns campos estão incorretos. Corrija os campos em vermelho.');
        }
    }, [errors]);

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
                    <Form onSubmit={handleSubmit(onSubmit)}>
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
                        <button type="button" className="link" onClick={() => navigate("/")}>Já tenho uma conta</button>
                    </Form>
                </div>
            </Content>
            <ToastContent />
        </Container>
    );
}