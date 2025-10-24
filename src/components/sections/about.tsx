import { SectionWrapper } from '@/components/section-wrapper';

export function AboutSection() {
  return (
    <SectionWrapper id="about">
      <div className="text-center mb-12">
        <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
          About Me
        </h2>
      </div>
      <div className="mx-auto max-w-4xl space-y-6 text-lg text-muted-foreground text-center">
        <p>
          Hello, I’m Siyanda — a versatile IT and AI professional passionate
          about leveraging technology to solve real-world problems. I have
          experience in IT system support, office administration, and
          generative AI, including prompt engineering, large language models,
          and ethical AI practices.
        </p>
        <p>
          I enjoy combining technical expertise with creativity to develop
          innovative solutions, streamline processes, and enhance
          productivity. Whether it’s troubleshooting IT systems, optimizing
          workflows, or experimenting with cutting-edge AI tools like
          ChatGPT, I thrive on making technology work smarter for people.
        </p>
        <p>
          I’m always eager to learn, collaborate, and contribute to projects
          that push the boundaries of innovation while delivering tangible
          impact.
        </p>
      </div>
    </SectionWrapper>
  );
}
