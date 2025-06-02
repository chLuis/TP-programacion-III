import { z } from 'zod/v4';

export const ContactFormSchema = z.object({
  name: z.string().trim().min(1, 'El nombre es requerido.').max(40, 'Nombre muy extenso'),
  email: z.email('El email no es válido.').max(52, 'Email muy extenso'),
  subject: z.string().trim().min(1, 'El asunto es requerido.').max(32, 'El asunto no puede tener mas de 32 caracteres'),
  message: z.string().trim().min(1, 'El mensaje es requerido.').max(255, 'El contenido no puede superar los 255 caracteres'),
});

export type ContactFormType = z.infer<typeof ContactFormSchema>;
