
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { SectionWrapper } from '@/components/section-wrapper';
import { projects } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function ProjectsSection() {
  return (
    <SectionWrapper id="projects" className="bg-secondary/50">
      <div className="text-center mb-12">
        <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
          My Projects
        </h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
          Here are some of the key projects I've worked on.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => {
          const projectImage = project.image.startsWith('/')
            ? { imageUrl: project.image, imageHint: '' }
            : PlaceHolderImages.find((img) => img.id === project.image);

          return (
            <Card
              key={project.title}
              className="flex flex-col overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              {projectImage && (
                <div className="relative h-48 w-full">
                  <Image
                    src={projectImage.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover"
                    data-ai-hint={projectImage.imageHint}
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle className="font-headline text-xl">
                  {project.title}
                </CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                <Button variant="ghost" asChild size="sm">
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                    GitHub <ArrowUpRight className="h-4 w-4 ml-1" />
                  </a>
                </Button>
                <Button variant="default" asChild size="sm">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    Live Demo <ArrowUpRight className="h-4 w-4 ml-1" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
