import { Button } from "@/components/ui/button";
import { ArrowRight, Palette, Code, Video, Layers } from "lucide-react";
import profileImage from "@/assets/profile-hero.jpg";

export function HeroSection() {
  const skills = [
    { icon: Palette, label: "UI/UX Design" },
    { icon: Code, label: "Web Development" },
    { icon: Layers, label: "Branding" },
    { icon: Video, label: "Video Editing" },
  ];

  return (
    <section className="min-h-screen pt-20 pb-16 gradient-hero relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-mint-green/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blush-pink/20 rounded-full blur-3xl animate-float" style={{animationDelay: "2s"}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Alex
                </span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-muted-foreground font-medium">
                A Freelance Designer & Developer
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Creating beautiful digital experiences through thoughtful design and clean code. 
                Let's bring your vision to life with modern, user-centered solutions.
              </p>
            </div>

            {/* Skills */}
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={skill.label}
                  className="flex items-center space-x-3 p-3 bg-card/60 backdrop-blur-sm rounded-lg border border-border/50 hover-lift"
                >
                  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                    <skill.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{skill.label}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground">
                View Portfolio
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
                Contact Me
              </Button>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Frame */}
              <div className="w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-sky-blue to-lavender rounded-3xl p-2 hover-lift">
                <div className="w-full h-full bg-card rounded-2xl overflow-hidden">
                  <img
                    src={profileImage}
                    alt="Alex - Freelance Designer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-accent rounded-xl flex items-center justify-center animate-float">
                <Palette className="w-6 h-6 text-accent-foreground" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-secondary rounded-xl flex items-center justify-center animate-float" style={{animationDelay: "1s"}}>
                <Code className="w-6 h-6 text-secondary-foreground" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}