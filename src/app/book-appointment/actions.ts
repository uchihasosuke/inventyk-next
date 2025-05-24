
'use server';

import { z } from 'zod';
import { format } from 'date-fns';
import { summarizeMessage } from '@/ai/flows/summarize-message-flow';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export const appointmentFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  date: z.date({ required_error: 'Please select a date for your appointment.' }),
  time: z.string({ required_error: 'Please select a time slot.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }).max(500, { message: 'Message cannot exceed 500 characters.' }),
});

export type AppointmentFormValues = z.infer<typeof appointmentFormSchema>;

export async function handleAppointmentSubmit(data: AppointmentFormValues) {
  try {
    console.log('Original Appointment Data:', data);
    
    const { summary } = await summarizeMessage({ message: data.message });
    console.log('AI Summarized Message:', summary);

    const bookingDetails = {
      name: data.name,
      email: data.email,
      date: format(data.date, 'yyyy-MM-dd'), // Format date for storage
      time: data.time,
      message: data.message,
      messageSummary: summary,
      submittedAt: serverTimestamp(), // Use Firestore server timestamp
    };

    await addDoc(collection(db, 'appointments'), bookingDetails);
    console.log('Booking Details successfully stored in Firestore:', bookingDetails);

    return { success: true, message: 'Appointment booked successfully! We will be in touch shortly.' };
  } catch (error) {
    console.error('Error booking appointment or saving to Firestore:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred.';
    return { success: false, message: `Failed to book appointment: ${errorMessage}` };
  }
}
