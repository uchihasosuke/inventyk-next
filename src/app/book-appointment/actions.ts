
'use server';

import { format } from 'date-fns';
import { summarizeMessage } from '@/ai/flows/summarize-message-flow';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import type { AppointmentFormValues } from './schemas';

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
    console.error('Error booking appointment or saving to Firestore (Raw Error):', error);
    
    let clientErrorMessage = 'An unexpected error occurred while processing your appointment.';
    
    if (error instanceof Error) {
      clientErrorMessage = error.message;
    } else if (typeof error === 'string') {
      clientErrorMessage = error;
    } else {
      // Attempt to get a string representation for complex errors, but be cautious
      try {
        // For Genkit errors or other structured errors, they might have more specific details
        if (typeof error === 'object' && error !== null) {
            if ('details' in error && typeof error.details === 'string') {
                clientErrorMessage = error.details as string;
            } else if ('message' in error && typeof error.message === 'string') {
                 clientErrorMessage = error.message as string;
            } else {
                const stringifiedError = JSON.stringify(error);
                if (stringifiedError !== '{}') { // Avoid empty object strings
                    clientErrorMessage = stringifiedError;
                }
            }
        }
      } catch (e) {
        // If stringify fails or error is not an object, stick to a generic message or already set message
        console.error('Could not stringify the error object:', e);
      }
    }
    
    console.error('Processed error message for client:', clientErrorMessage);
    return { success: false, message: `Failed to book appointment: ${clientErrorMessage}` };
  }
}
