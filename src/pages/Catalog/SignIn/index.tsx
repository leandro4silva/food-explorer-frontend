import { Container, Logo, Content, Form } from "./styles";
import { useNavigate } from 'react-router-dom';
import Polygon from '../../../assets/logo/polygon-blue.svg';
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";
import { signInValidate } from "./validate";
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../../../hooks/auth";
import { ToastContent, toastAlert } from '../../../components/Toast';
import { useEffect, useLayoutEffect, useState } from "react";

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

export function SignIn() {
    const [width, height] = useWindowSize();
    const { register, handleSubmit, setError, formState: { errors, isSubmitting } } = useForm({
        resolver: zodResolver(signInValidate)
    });

    const navigate = useNavigate();

    const { signIn } = useAuth();

    const onSubmit: SubmitHandler<FieldValues> = async ({ email, password }) => {
        const error = await signIn({
            email,
            password,
            isAdmin: false
        });

        if (error?.type == 'auth') {
            setError('email', { type: 'custom', message: error.message });
            setError('password', { type: 'custom', message: error.message });
            toastAlert({
                message: 'Alguns campos estão incorretos. Corrija os campos em vermelho.',
                type: 'error'
            });
        } else {
            toastAlert({
                message: 'Error ao tentar realizar o login, contate o administrador',
                type: 'error'
            });
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
                            label="Email"
                            name="email"
                            type="email"
                            register={register("email")}
                            placeholder="Exemplo: exemplo@exemplo.com.br"
                            error={errors.email?.message?.toString()}
                        />
                        <Input
                            label="Senha"
                            name="password"
                            type="password"
                            register={register("password")}
                            placeholder="No mínimo 6 caracteres"
                            error={errors.password?.message?.toString()}
                        />
                        <Button
                            type="submit"
                            text="Entrar"
                            loading={isSubmitting}
                        />
                        <button className="link" onClick={() => navigate("/register")}>Criar uma conta</button>
                    </Form>
                </div>
            </Logo>
            {
                width > 1024 &&
                    <Content>
                        <div>
                            <h2>Faça login</h2>
                            <Form onSubmit={handleSubmit(onSubmit)}>
                                <Input
                                    label="Email"
                                    name="email"
                                    type="email"
                                    register={register("email")}
                                    placeholder="Exemplo: exemplo@exemplo.com.br"
                                    error={errors.email?.message?.toString()}
                                />
                                <Input
                                    label="Senha"
                                    name="password"
                                    type="password"
                                    register={register("password")}
                                    placeholder="No mínimo 6 caracteres"
                                    error={errors.password?.message?.toString()}
                                />
                                <Button
                                    type="submit"
                                    text="Entrar"
                                    loading={isSubmitting}
                                />
                                <button className="link" onClick={() => navigate("/register")}>Criar uma conta</button>
                            </Form>
                        </div>
                    </Content>
            }
            <ToastContent />
        </Container>
    );
}