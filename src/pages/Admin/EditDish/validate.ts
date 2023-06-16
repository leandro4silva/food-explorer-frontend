import * as z from 'zod';


export const editDishValidate = z.object({
    name: z.string().nonempty("Você deve inserir um nome valido"),
    price: z.string().nonempty("Você deve inserir um preço"),
    description: z.string().nonempty("Você deve inserir uma descrição "),
})