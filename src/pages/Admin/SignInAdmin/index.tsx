import { Container, Content, Form } from "./styles";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";
import {FieldValues, SubmitHandler, useForm} from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { signInAdminValidate } from "./validate";
import { useAuth } from '../../../hooks/auth';
import { ToastContent, toastAlert } from '../../../components/Toast';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function SignInAdmin(){
    const {register, handleSubmit, setError, formState:{errors, isSubmitting}} = useForm({
        resolver: zodResolver(signInAdminValidate)
    });

    const {signIn} = useAuth();

    const navigate = useNavigate();

    const onSubmit: SubmitHandler<FieldValues> = async ({ email, password }) => {
        const error = await signIn({
            email,
            password,
            isAdmin: true
        });

        if(!error){
            navigate('/admin/dashboard');
        }

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
            if(error){
                hasError = true
            }
        })

        if(hasError){
            toastAlert({
                message: 'Alguns campos estão incorretos. Corrija os campos em vermelho.',
                type: 'error'
            });
        }
    }, [errors]);

    return(
        <Container>
            <Content>
                <h2>Login</h2>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Input 
                        placeholder="Exemplo: admin@admin.com" 
                        name="email"
                        type="email"
                        label="Usuário" 
                        register={register("email")} 
                        error={errors.email?.message?.toString()}
                    />
                    <Input 
                        placeholder="No minimo 6 caracteres" 
                        name="password"
                        type="password"
                        label="Senha" 
                        register={register("password")}
                        error={errors.email?.message?.toString()}
                    />
                    <Button text="Entrar" loading={isSubmitting} />
                </Form>
            </Content>
            <ToastContent />
        </Container>
    )
}