
'use server';
/**
 * @fileOverview An AI flow to summarize a user's message.
 *
 * - summarizeMessage - A function that takes a message and returns its summary.
 * - SummarizeMessageInput - The input type for the summarizeMessage function.
 * - SummarizeMessageOutput - The return type for the summarizeMessage function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit'; // Changed from 'genkit/zod'

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
    const response = await prompt(input);
    
    // Check if the response itself is falsy, or if the 'output' field is missing or falsy.
    // Genkit prompts with an output schema are expected to return { output: YourOutputType }
    if (!response || !response.output) { 
      console.error('AI summary generation failed. Response or response.output from AI is missing or malformed.', response);
      throw new Error('The AI failed to generate a valid summary. The response from the AI was incomplete or did not match the expected format.');
    }
    return response.output; // Return the structured output
  }
);

