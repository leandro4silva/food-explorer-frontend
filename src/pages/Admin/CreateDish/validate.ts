import * as z from 'zod';

const MAX_FILE_SIZE = 500000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

export const createDishValidate = z.object({
    image: z.any()
    .refine((files) => files?.[0], "Selecione uma imagem")
    .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, `Maximo de tamanho da imagem é 5MB.`)
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      "Somente imagens no formato '.jpg', '.jpeg', '.png' e '.webp' são suportados."),
    name: z.string().nonempty("Você deve inserir um nome valido"),
    category: z.string().nonempty({
        message: "Selecione uma categoria"
    }),
    price: z.string().nonempty("Você deve inserir um preço"),
    description: z.string().nonempty("Você deve inserir uma descrição "),
})