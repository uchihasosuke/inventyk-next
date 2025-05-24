
import { z } from 'zod';

export const appointmentFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  date: z.date({ required_error: 'Please select a date for your appointment.' }),
  time: z.string({ required_error: 'Please select a time slot.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }).max(500, { message: 'Message cannot exceed 500 characters.' }),
});

export type AppointmentFormValues = z.infer<typeof appointmentFormSchema>;
