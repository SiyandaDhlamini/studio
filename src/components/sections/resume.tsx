
'use client';

import { Download, ExternalLink, Upload } from 'lucide-react';
import { SectionWrapper } from '@/components/section-wrapper';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import { education, experience, certifications as defaultCertifications } from '@/lib/data';
import React, { useState, useRef } from 'react';
import type { Certification } from '@/lib/data';
import { Label } from '../ui/label';

export function ResumeSection() {
  const [certifications, setCertifications] = useState<Certification[]>(defaultCertifications);
  const fileInputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const newCertifications = [...certifications];
      newCertifications[index] = {
        ...newCertifications[index],
        pdfUrl: URL.createObjectURL(file),
      };
      setCertifications(newCertifications);
    }
  };

  const handleUploadClick = (index: number) => {
    fileInputRefs.current[index]?.click();
  };


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
              {certifications.map((item, index) => (
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
                      <input
                        type="file"
                        accept="application/pdf"
                        onChange={(e) => handleFileChange(e, index)}
                        className="hidden"
                        ref={(el) => (fileInputRefs.current[index] = el)}
                      />
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => handleUploadClick(index)}
                      >
                        Upload PDF
                        <Upload className="ml-2 h-4 w-4" />
                      </Button>
                      {item.pdfUrl && (
                      <Button asChild variant="outline" size="sm">
                        <a href={item.pdfUrl} target="_blank" rel="noopener noreferrer">
                          View Certificate
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                      )}
                    </CardFooter>
                </Card>
              ))}
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
