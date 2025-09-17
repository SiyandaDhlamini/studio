import { SectionWrapper } from '@/components/section-wrapper';
import { skills } from '@/lib/data';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function SkillsSection() {
  return (
    <SectionWrapper id="skills">
      <div className="text-center mb-12">
        <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
          Skills
        </h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
          A look at my technical expertise and professional abilities.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-2xl">
              Technical Skills
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {skills.technical.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-1">
                  <span className="text-base font-medium">{skill.name}</span>
                  <span className="text-sm font-medium text-muted-foreground">
                    {skill.level}%
                  </span>
                </div>
                <Progress value={skill.level} aria-label={`${skill.name} proficiency`} />
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-2xl">
              Soft Skills
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {skills.soft.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-1">
                  <span className="text-base font-medium">{skill.name}</span>
                   <span className="text-sm font-medium text-muted-foreground">
                    {skill.level}%
                  </span>
                </div>
                <Progress value={skill.level} aria-label={`${skill.name} proficiency`} />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
}
