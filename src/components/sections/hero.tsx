import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SectionWrapper } from '@/components/section-wrapper';

export function HeroSection() {
  return (
    <SectionWrapper id="home" className="bg-secondary/50">
      <div className="grid gap-12 md:grid-cols-2 items-center">
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Siyanda Dhlamini
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground md:text-xl">
            A passionate Full-Stack Developer creating modern, responsive, and
            user-friendly web applications. Welcome to my digital space.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="#contact">Get in Touch</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#projects">View My Work</Link>
            </Button>
          </div>
        </div>
        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto">
          <Image
            src="/Elegance.png"
            alt="Siyanda Dhlamini profile picture"
            width={400}
            height={400}
            priority
            className="rounded-full object-cover shadow-lg border-4 border-card"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
