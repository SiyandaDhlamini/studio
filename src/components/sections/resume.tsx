
'use client';

import { Download, ExternalLink, Eye } from 'lucide-react';
import { SectionWrapper } from '@/components/section-wrapper';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { education, experience, certifications } from '@/lib/data';
import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function ResumeSection() {
  return (
    <SectionWrapper id="resume" className="bg-secondary/50">
      <div className="text-center mb-12">
        <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
          Experience & Education
        </h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
          My professional journey and academic background.
        </p>
      </div>

      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <h3 className="font-headline text-2xl font-semibold mb-6">
            Work Experience
          </h3>
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
            {experience.map((item, index) => (
              <div
                key={index}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border bg-card shadow-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                   <div className="h-3 w-3 bg-primary rounded-full"></div>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]">
                  <Card>
                    <CardHeader>
                      <p className="text-muted-foreground">{item.period}</p>
                      <CardTitle className="font-headline">{item.role}</CardTitle>
                      <p className="font-semibold text-primary">{item.company}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='space-y-12'>
          <div>
            <h3 className="font-headline text-2xl font-semibold mb-6">
              Education
            </h3>
            <div className="space-y-4">
              {education.map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <p className="text-muted-foreground">{item.period}</p>
                    <CardTitle className="font-headline">{item.degree}</CardTitle>
                    <p className="font-semibold text-primary">{item.institution}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-headline text-2xl font-semibold mb-6">
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((item, index) => {
                const certImage = PlaceHolderImages.find(
                  (img) => img.id === item.imageUrl
                );
                return (
                  <Card key={index} className="flex flex-col">
                    <CardHeader className="flex-grow">
                      <p className="text-muted-foreground">{item.period}</p>
                      <CardTitle className="font-headline">{item.name}</CardTitle>
                      <p className="font-semibold text-primary">{item.institution}</p>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </CardContent>
                    <CardFooter className="flex-wrap gap-2 justify-end">
                      {certImage && (
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="secondary" size="sm">
                              View Certificate <Eye className="ml-2 h-4 w-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-3xl">
                            <DialogHeader>
                              <DialogTitle>{item.name}</DialogTitle>
                              <DialogDescription>
                                {item.institution} - {item.period}
                              </DialogDescription>
                            </DialogHeader>
                            <div className="relative aspect-[4/3] w-full">
                              <Image
                                src={certImage.imageUrl}
                                alt={`Certificate for ${item.name}`}
                                fill
                                className="object-contain"
                                data-ai-hint={certImage.imageHint}
                              />
                            </div>
                          </DialogContent>
                        </Dialog>
                      )}
                      {item.pdfUrl && (
                        <Button asChild variant="outline" size="sm">
                          <a href={item.pdfUrl} target="_blank" rel="noopener noreferrer">
                            Verify Certificate
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-16">
        <Button asChild size="lg">
          <a href="/siyanda_dhlamini_resume.pdf" download>
            <Download className="mr-2 h-5 w-5" />
            Download My Resume
          </a>
        </Button>
      </div>
    </SectionWrapper>
  );
}
