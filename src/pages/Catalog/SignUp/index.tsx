import { Container, Logo, Content, Form } from "./styles";
import Polygon from '../../../assets/logo/polygon-blue.svg';
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";
import { useNavigate } from 'react-router-dom';
import { signUpValidate } from "./validate";
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import { api } from "../../../services/api";
import { useEffect, useLayoutEffect, useState } from "react";
import { ToastContent, toastAlert } from '../../../components/Toast';
import { useAuth } from "../../../hooks/auth"
import { useSession } from "../../../hooks/session";


function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}

export function SignUp() {
    const [width, height] = useWindowSize();
    const {setMessageSession, sessionMessage } = useSession();
    const { signIn } = useAuth();
    const navigate = useNavigate();
    const { register, handleSubmit, setError, formState: { errors, isSubmitting }, } = useForm({
        resolver: zodResolver(signUpValidate)
    });

    const onSubmit: SubmitHandler<FieldValues> = async ({ email, name, password }) => {
        try {
            const response = await api.post('/users', {
                email,
                name,
                password
            });

            
            if (response.status = 201) {
                const hasError = await signIn({ email, password, isAdmin: false });
                if(!hasError){
                    setMessageSession({
                        message: `${name}, o seu cadastro foi realizado com sucesso, aproveite =)`,
                        type: 'success'
                    });

                    navigate("/");
                }
            }
        } catch (error: any) {
            if (error.response && error.response.data.type == 'email') {
                setError('email', { type: 'custom', message: error.response.data.message })
                toastAlert({
                    message: 'Alguns campos estão incorretos. Corrija os campos em vermelho.',
                    type: 'error'
                });
            } else {
                toastAlert({
                    message: 'Não foi possivel realizar o cadastro, tente novamente mais tarde',
                    type: 'error'
                })
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
            toastAlert({
                message: 'Alguns campos estão incorretos. Corrija os campos em vermelho.',
                type: 'error'
            });
        }
    }, [errors]);

    return (
        <Container>
            <Logo>
                <div className="logo">
                    <img src={Polygon} alt="Poligono azul" />
                    <h1>food explorer</h1>
                </div>
                <div className="form">
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
            </Logo>
            {
                width > 1024 &&
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
            }
            <ToastContent />
        </Container>
    );
}