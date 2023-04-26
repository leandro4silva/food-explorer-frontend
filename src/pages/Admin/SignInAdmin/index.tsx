import { Container, Content, Form } from "./styles";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";
import {FieldValues, SubmitHandler, useForm} from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { signInAdminValidate } from "./validate";



export function SignInAdmin(){
    const {register, handleSubmit, setError, formState:{errors, isSubmitting}} = useForm({
        resolver: zodResolver(signInAdminValidate)
    });

    const onSubmit: SubmitHandler<FieldValues> = async ({ email, password }) => {
        console.log(email)
    }

    return(
        <Container>
            <Content>
                <h2>Login</h2>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Input 
                        placeholder="Exemplo: admin@admin.com" 
                        label="Usuário" 
                        register={register("email")} 
                        error={errors.email?.message?.toString()}
                    />
                    <Input 
                        placeholder="No minimo 6 caracteres" 
                        label="Senha" 
                        register={register("password")}
                        error={errors.email?.message?.toString()}
                    />
                    <Button text="Entrar" />
                </Form>
            </Content>
        </Container>
    )
}