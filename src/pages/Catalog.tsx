import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star } from "lucide-react";

const services = [
  {
    id: 1,
    name: "Logo Design",
    description: "Professional logo design with 3 concepts and unlimited revisions",
    price: "$299",
    category: "Branding",
    features: ["3 Logo Concepts", "Unlimited Revisions", "Vector Files", "Brand Guidelines"],
    popular: false
  },
  {
    id: 2,
    name: "Website Development",
    description: "Responsive website with modern design and CMS integration",
    price: "$1,499",
    category: "Web Development",
    features: ["Responsive Design", "CMS Integration", "SEO Optimized", "Contact Forms"],
    popular: true
  },
  {
    id: 3,
    name: "UI/UX Design",
    description: "Complete user interface design for web or mobile applications",
    price: "$899",
    category: "UI/UX",
    features: ["User Research", "Wireframes", "High-fidelity Mockups", "Prototype"],
    popular: false
  },
  {
    id: 4,
    name: "Brand Package",
    description: "Complete branding solution including logo, guidelines, and assets",
    price: "$799",
    category: "Branding",
    features: ["Logo Design", "Brand Guidelines", "Business Cards", "Social Media Kit"],
    popular: false
  },
  {
    id: 5,
    name: "E-commerce Website",
    description: "Full e-commerce solution with payment integration and admin panel",
    price: "$2,499",
    category: "Web Development",
    features: ["Payment Integration", "Inventory Management", "Admin Dashboard", "Mobile App"],
    popular: false
  },
  {
    id: 6,
    name: "Video Editing",
    description: "Professional video editing for promotional or educational content",
    price: "$399",
    category: "Video",
    features: ["Color Grading", "Motion Graphics", "Audio Enhancement", "Multiple Formats"],
    popular: false
  }
];

const categories = ["All", "Branding", "Web Development", "UI/UX", "Video"];

export default function Catalog() {
  return (
    <Layout>
      <div className="min-h-screen pt-20 pb-16 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center space-y-4 mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
              Service Catalog
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional design and development services with transparent pricing
            </p>
          </div>

          {/* Categories Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button key={category} variant="outline" className="rounded-full">
                {category}
              </Button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="relative bg-card rounded-2xl p-6 border border-border hover-lift group"
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute -top-3 left-6">
                    <Badge className="bg-accent text-accent-foreground">
                      <Star className="w-3 h-3 mr-1" />
                      Popular
                    </Badge>
                  </div>
                )}

                {/* Category */}
                <Badge variant="secondary" className="mb-4">
                  {service.category}
                </Badge>

                {/* Service Info */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {service.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {service.description}
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Price and Action */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="text-2xl font-bold text-foreground">
                      {service.price}
                    </div>
                    <Button variant="default" size="sm">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Request Service
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}