'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { navLinks, socialLinks } from '@/lib/data';

export function Header() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      const sections = navLinks.map((link) =>
        document.getElementById(link.href.substring(1))
      );
      let currentSection = 'home';
      sections.forEach((section) => {
        if (section) {
          const sectionTop = section.offsetTop - 100;
          if (window.scrollY >= sectionTop) {
            currentSection = section.id;
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink = ({ href, name }: { href: string; name: string }) => (
    <Link
      href={href}
      onClick={() => isMobileMenuOpen && setIsMobileMenuOpen(false)}
      className={cn(
        'text-sm font-medium transition-colors hover:text-primary',
        activeSection === href.substring(1)
          ? 'text-primary'
          : 'text-muted-foreground'
      )}
    >
      {name}
    </Link>
  );
  
  const socialIcons = (
    <div className="flex items-center gap-2">
      {socialLinks.map((link) => (
        <Button
          key={link.name}
          variant="ghost"
          size="icon"
          asChild
          className="text-muted-foreground hover:text-primary"
        >
          <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
            <link.icon className="h-5 w-5" />
          </a>
        </Button>
      ))}
    </div>
  );

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled
          ? 'border-b bg-background/80 backdrop-blur-sm'
          : 'border-transparent'
      )}
    >
      <div className="container flex h-16 items-center">
        <Link href="#home" className="mr-auto flex items-center gap-2">
          <span className="font-headline text-lg font-bold text-primary">
            Siyanda Dhlamini
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2 ml-4">
          {/* Social icons are not rendered here anymore */}
        </div>

        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden ml-auto">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-xs">
            <div className="flex h-full flex-col p-6">
              <div className="mb-8 flex items-center justify-between">
                 <Link href="#home" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                    <span className="font-headline text-lg font-bold text-primary">Siyanda Dhlamini</span>
                 </Link>
                 <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close navigation menu</span>
                 </Button>
              </div>
              <nav className="flex flex-col gap-6 text-lg">
                {navLinks.map((link) => (
                  <NavLink key={link.href} {...link} />
                ))}
              </nav>
              <div className="mt-auto pt-6">
                <div className="flex justify-center gap-4">
                  {socialIcons}
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
