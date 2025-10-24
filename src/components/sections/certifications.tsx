
'use client';

import { Eye, Download } from 'lucide-react';
import { SectionWrapper } from '@/components/section-wrapper';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import { certifications } from '@/lib/data';
import React from 'react';
import Link from 'next/link';

export function CertificationsSection() {
  return (
    <SectionWrapper id="certifications">
      <div className="text-center mb-12">
        <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
          Certifications
        </h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
          A collection of my professional certifications.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {certifications.map((item, index) => {
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
                {item.pdfUrl && (
                   <Button variant="secondary" size="sm" asChild>
                     <Link href={item.pdfUrl} target="_blank">
                        View Certificate <Eye className="ml-2 h-4 w-4" />
                     </Link>
                   </Button>
                )}
              </CardFooter>
            </Card>
          );
        })}
      </div>
       <div className="text-center mt-16">
        <Button asChild size="lg">
          <a href="/Resume.pdf" download>
            <Download className="mr-2 h-5 w-5" />
            Download My Resume
          </a>
        </Button>
      </div>
    </SectionWrapper>
  );
}
