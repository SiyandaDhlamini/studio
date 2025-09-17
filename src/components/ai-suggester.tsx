'use client';

import { useState } from 'react';
import {
  generatePortfolioIdeas,
  type GeneratePortfolioIdeasOutput,
} from '@/ai/flows/generate-portfolio-ideas';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Wand2, Loader2, Sparkles } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from '@/components/ui/sheet';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { ScrollArea } from './ui/scroll-area';

const formSchema = z.object({
  portfolioDescription: z
    .string()
    .min(50, 'Please provide a more detailed description (at least 50 characters).'),
  userPreferences: z.string().optional(),
});

const defaultDescription = `My portfolio has a clean and modern design with a light gray background (#f5f6fa). The primary color is a royal blue (#1e3799), and the accent color for highlights is black (#2d3436). I use 'Space Grotesk' for headlines and 'Inter' for body text. The layout is a single page with sections for Home, About, Projects, Skills, Resume, and Contact.`;

export function AiSuggester() {
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] =
    useState<GeneratePortfolioIdeasOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      portfolioDescription: defaultDescription,
      userPreferences: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setSuggestions(null);
    try {
      const result = await generatePortfolioIdeas(values);
      setSuggestions(result);
    } catch (error) {
      console.error('AI suggestion error:', error);
      toast({
        title: 'Error',
        description: 'Failed to generate suggestions. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="default"
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg"
        >
          <Wand2 className="h-6 w-6" />
          <span className="sr-only">Get AI Design Suggestions</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-2xl">
        <ScrollArea className="h-full pr-6">
          <SheetHeader className="text-left">
            <SheetTitle className="font-headline text-2xl">
              AI Style Suggester
            </SheetTitle>
            <SheetDescription>
              Get personalized feedback and ideas to improve your portfolio's
              look and feel.
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-6 py-4">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="portfolioDescription"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Current Portfolio Description</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Describe your portfolio's current design..."
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="userPreferences"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Specific areas for improvement (optional)
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="e.g., 'Make it more playful', 'Suggest better project ideas'"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <SheetFooter className="mt-4">
                  <Button type="submit" disabled={isLoading} className="w-full">
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Generating Ideas...
                      </>
                    ) : (
                      'Get Suggestions'
                    )}
                  </Button>
                </SheetFooter>
              </form>
            </Form>

            {suggestions && (
              <div className="mt-6 space-y-6">
                <Card className="bg-secondary/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 font-headline text-xl">
                      <Sparkles className="h-5 w-5 text-accent" />
                      Here are your personalized suggestions:
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="list-disc space-y-2 pl-5 text-sm text-foreground">
                      {suggestions.suggestions.map((suggestion, index) => (
                        <li key={index}>{suggestion}</li>
                      ))}
                    </ul>
                    {suggestions.reasoning && (
                      <div>
                        <h4 className="font-semibold mt-4 mb-2">Reasoning:</h4>
                        <p className="text-sm text-muted-foreground italic">
                          {suggestions.reasoning}
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
