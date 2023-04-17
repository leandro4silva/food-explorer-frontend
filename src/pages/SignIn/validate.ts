import * as z from 'zod';

export const signInValidate = z.object({
    email: z.string().nonempty('Você deve inserir um email').email('Você deve inserir um email valido'),
    password: z.string().nonempty('Você deve insetir sua senha').min(6, 'A senha deve conter no minimo 6 caracter').max(250, 'A senha deve conter no maximo 250 caracter')
})