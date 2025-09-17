import { SectionWrapper } from '@/components/section-wrapper';

export function AboutSection() {
  return (
    <SectionWrapper id="about">
      <div className="grid gap-12 md:grid-cols-5">
        <div className="md:col-span-2">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
            About Me
          </h2>
        </div>
        <div className="md:col-span-3 space-y-6 text-lg text-muted-foreground">
          <p>
            Hello! I'm Siyanda, a dedicated and creative developer with a passion
            for building beautiful and functional digital experiences. My journey
            into technology started with a fascination for how things work, which
            led me to pursue a degree in Computer Science.
          </p>
          <p>
            Throughout my studies and internships, I've honed my skills in both
            front-end and back-end development, allowing me to bring ideas to
            life from concept to deployment. I thrive in collaborative
            environments and enjoy solving complex problems with clean,
            efficient code.
          </p>
          <p>
            My goal is to leverage my skills to contribute to innovative projects
            that make a positive impact. I am a lifelong learner, constantly
            exploring new technologies and methodologies to stay at the forefront
            of web development. When I'm not coding, you can find me exploring
            hiking trails or experimenting with new recipes.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
