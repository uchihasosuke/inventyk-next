'use server';
/**
 * @fileOverview An AI flow to summarize a user's message.
 *
 * - summarizeMessage - A function that takes a message and returns its summary.
 * - SummarizeMessageInput - The input type for the summarizeMessage function.
 * - SummarizeMessageOutput - The return type for the summarizeMessage function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit/zod';

const SummarizeMessageInputSchema = z.object({
  message: z.string().describe('The user message to be summarized.'),
});
export type SummarizeMessageInput = z.infer<typeof SummarizeMessageInputSchema>;

const SummarizeMessageOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the user message, focusing on key points and intent for a consultation.'),
});
export type SummarizeMessageOutput = z.infer<typeof SummarizeMessageOutputSchema>;

export async function summarizeMessage(input: SummarizeMessageInput): Promise<SummarizeMessageOutput> {
  return summarizeMessageFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeMessagePrompt',
  input: { schema: SummarizeMessageInputSchema },
  output: { schema: SummarizeMessageOutputSchema },
  prompt: `You are an expert assistant tasked with summarizing user messages for a consultation booking. 
  The summary should be brief (1-2 sentences) and capture the main purpose or query in the message. 
  This summary will help the consultant prepare for the meeting.

  User Message:
  {{{message}}}

  Please provide a concise summary.`,
});

const summarizeMessageFlow = ai.defineFlow(
  {
    name: 'summarizeMessageFlow',
    inputSchema: SummarizeMessageInputSchema,
    outputSchema: SummarizeMessageOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    if (!output) {
      throw new Error('Failed to get summary from AI');
    }
    return output;
  }
);
