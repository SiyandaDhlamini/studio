'use server';

/**
 * @fileOverview Provides personalized suggestions for improving the look and feel of a portfolio using AI.
 *
 * - generatePortfolioIdeas - A function that generates portfolio improvement suggestions.
 * - GeneratePortfolioIdeasInput - The input type for the generatePortfolioIdeas function.
 * - GeneratePortfolioIdeasOutput - The return type for the generatePortfolioIdeas function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GeneratePortfolioIdeasInputSchema = z.object({
  portfolioDescription: z
    .string()
    .describe('Description of the current portfolio design and content.'),
  userPreferences: z
    .string()
    .optional()
    .describe('Optional user preferences or specific areas for improvement.'),
});
export type GeneratePortfolioIdeasInput = z.infer<
  typeof GeneratePortfolioIdeasInputSchema
>;

const GeneratePortfolioIdeasOutputSchema = z.object({
  suggestions: z
    .array(z.string())
    .describe(
      'A list of personalized suggestions for improving the portfolio design and content.'
    ),
  reasoning: z
    .string()
    .optional()
    .describe('The AI’s reasoning behind the suggestions.'),
});
export type GeneratePortfolioIdeasOutput = z.infer<
  typeof GeneratePortfolioIdeasOutputSchema
>;

export async function generatePortfolioIdeas(
  input: GeneratePortfolioIdeasInput
): Promise<GeneratePortfolioIdeasOutput> {
  return generatePortfolioIdeasFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generatePortfolioIdeasPrompt',
  input: {schema: GeneratePortfolioIdeasInputSchema},
  output: {schema: GeneratePortfolioIdeasOutputSchema},
  prompt: `You are an AI portfolio assistant, skilled at providing personalized suggestions for improving online portfolios.

  Based on the current portfolio design and content provided, generate a list of actionable suggestions.

  Consider these aspects when providing suggestions:
  - Visual appeal (color schemes, typography, imagery)
  - Content engagement (project descriptions, skills presentation)
  - User experience (navigation, mobile-friendliness)
  - New project ideas

  Portfolio Description: {{{portfolioDescription}}}
  User Preferences: {{{userPreferences}}}

  Provide the suggestions in a clear and concise manner, and include a brief explanation of your reasoning for each suggestion.
  Format the output as a JSON object with 'suggestions' and 'reasoning' fields.
  `,
});

const generatePortfolioIdeasFlow = ai.defineFlow(
  {
    name: 'generatePortfolioIdeasFlow',
    inputSchema: GeneratePortfolioIdeasInputSchema,
    outputSchema: GeneratePortfolioIdeasOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
