import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Filter } from "lucide-react";

const categories = ["All", "UI/UX", "Web Development", "Branding", "Video"];

const projects = [
  {
    id: 1,
    title: "E-Commerce Mobile App",
    description: "Modern shopping app with intuitive user experience and seamless checkout flow.",
    category: "UI/UX",
    tags: ["Mobile", "UI/UX", "Figma"],
    image: "/api/placeholder/400/300",
    link: "#"
  },
  {
    id: 2,
    title: "Restaurant Website",
    description: "Responsive website with online ordering system and reservation management.",
    category: "Web Development",
    tags: ["React", "Next.js", "Tailwind"],
    image: "/api/placeholder/400/300",
    link: "#"
  },
  {
    id: 3,
    title: "Tech Startup Branding",
    description: "Complete brand identity including logo, guidelines, and marketing materials.",
    category: "Branding",
    tags: ["Logo", "Brand Guide", "Print"],
    image: "/api/placeholder/400/300",
    link: "#"
  },
  {
    id: 4,
    title: "Product Demo Video",
    description: "Engaging promotional video showcasing SaaS product features and benefits.",
    category: "Video",
    tags: ["Motion Graphics", "After Effects"],
    image: "/api/placeholder/400/300",
    link: "#"
  },
  {
    id: 5,
    title: "Dashboard Design",
    description: "Clean and functional admin dashboard with data visualization components.",
    category: "UI/UX",
    tags: ["Dashboard", "Charts", "Admin"],
    image: "/api/placeholder/400/300",
    link: "#"
  },
  {
    id: 6,
    title: "Agency Website",
    description: "Modern agency website with portfolio showcase and contact system.",
    category: "Web Development",
    tags: ["Vue.js", "GSAP", "CMS"],
    image: "/api/placeholder/400/300",
    link: "#"
  }
];

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter(
    project => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            My Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore my recent projects and see how I help businesses grow through design and development.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="rounded-full"
            >
              <Filter className="w-4 h-4 mr-2" />
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover-lift"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button variant="secondary" size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Projects
            <ExternalLink className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}