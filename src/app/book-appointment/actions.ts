
'use server';

import { format } from 'date-fns';
import { summarizeMessage } from '@/ai/flows/summarize-message-flow';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import type { AppointmentFormValues } from './schemas'; // Updated import

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
