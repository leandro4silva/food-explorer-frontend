import * as z from 'zod';

export const signUpValidate = z.object({
    name: z.string().nonempty("Você deve inserir seu nome"),
    email: z.string().nonempty("Você deve inserir seu email").email("Insira um email valido"),
    password: z.string().nonempty("Você deve inserir sua senha")
});