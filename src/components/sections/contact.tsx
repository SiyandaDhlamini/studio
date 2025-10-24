'use client';

import { SectionWrapper } from '@/components/section-wrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { socialLinks } from '@/lib/data';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';

export function ContactSection() {
  const { toast } = useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Message from ${name} (${email})`;
    const mailtoLink = `mailto:siyandanxele68@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    
    // Check if the link opens a new window, which it should
    const newWindow = window.open(mailtoLink, '_blank');

    if (newWindow) {
        newWindow.focus();
        toast({
          title: 'Email client opened',
          description: "Please send your message using your email application.",
        });
        // Clear form after a short delay
        setTimeout(() => {
          setName('');
          setEmail('');
          setMessage('');
        }, 1000);
    } else {
        toast({
            title: 'Could not open email client',
            description: "Your browser may be blocking pop-ups. You can email me directly at siyandanxele68@gmail.com",
            variant: 'destructive',
        });
    }
  };

  return (
    <SectionWrapper id="contact">
      <div className="text-center mb-12">
        <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
          Get In Touch
        </h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
          I'm currently open to new opportunities. Feel free to reach out.
        </p>
      </div>

      <div className="mx-auto max-w-4xl">
        <Card>
          <CardContent className="p-6 md:p-8">
            <form onSubmit={handleSubmit} className="grid gap-6">
              <div className="space-y-2 text-center">
                <p className="text-muted-foreground">
                  Please use the social links below to get in touch or fill out this form to send me an email.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={email} onChange={(e) => setEmail(e.target.value)} required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message..."
                  className="min-h-[150px]"
                  value={message} onChange={(e) => setMessage(e.target.value)} required
                />
              </div>
              <div className="flex justify-end">
                <Button type="submit" className="w-full md:w-auto">
                  Send Message
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <p className="text-muted-foreground mb-4">Or connect with me on:</p>
          <div className="flex justify-center gap-4">
            {socialLinks.map((link) => (
              <Button key={link.name} variant="outline" size="icon" asChild>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                >
                  <link.icon className="h-5 w-5" />
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
