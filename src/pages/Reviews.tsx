import { Layout } from "@/components/Layout";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    company: "TechStart Inc.",
    rating: 5,
    text: "Alex delivered an exceptional website that perfectly captured our brand vision. The attention to detail and professionalism was outstanding. Our conversion rates increased by 60% after the redesign.",
    avatar: "/api/placeholder/80/80",
    project: "Website Redesign"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Marketing Director",
    company: "Digital Solutions",
    rating: 5,
    text: "Working with Alex was a game-changer for our digital presence. The UI/UX design not only looked beautiful but also significantly improved user engagement. Highly recommended!",
    avatar: "/api/placeholder/80/80",
    project: "UI/UX Design"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Startup Founder",
    company: "InnovateLab",
    rating: 5,
    text: "The complete branding package Alex created helped us secure our first round of funding. The brand identity was professional, memorable, and perfectly represented our vision.",
    avatar: "/api/placeholder/80/80",
    project: "Brand Identity"
  },
  {
    id: 4,
    name: "David Thompson",
    role: "E-commerce Manager",
    company: "RetailPlus",
    rating: 5,
    text: "Alex built us a fantastic e-commerce platform that's both user-friendly and powerful. Sales have increased by 40% since launch, and customer feedback has been overwhelmingly positive.",
    avatar: "/api/placeholder/80/80",
    project: "E-commerce Development"
  },
  {
    id: 5,
    name: "Lisa Park",
    role: "Creative Director",
    company: "MediaFlow",
    rating: 5,
    text: "The video editing work Alex did for our promotional campaign was exceptional. The attention to detail and creative vision really brought our brand story to life.",
    avatar: "/api/placeholder/80/80",
    project: "Video Production"
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Product Manager",
    company: "AppVenture",
    rating: 5,
    text: "Alex designed our mobile app interface with incredible precision. The user experience is seamless, and our app store ratings have improved significantly since the redesign.",
    avatar: "/api/placeholder/80/80",
    project: "Mobile App Design"
  }
];

export default function Reviews() {
  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  return (
    <Layout>
      <div className="min-h-screen pt-20 pb-16 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center space-y-4 mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
              Client Reviews
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See what my clients have to say about working with me
            </p>
            
            {/* Overall Rating */}
            <div className="flex items-center justify-center space-x-2 mt-8">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-6 h-6 ${i < Math.floor(averageRating) ? 'fill-accent text-accent' : 'text-muted-foreground'}`} 
                  />
                ))}
              </div>
              <span className="text-2xl font-bold text-foreground">{averageRating.toFixed(1)}</span>
              <span className="text-muted-foreground">({reviews.length} reviews)</span>
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-card rounded-2xl p-6 border border-border hover-lift"
              >
                {/* Quote Icon */}
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Quote className="w-6 h-6 text-primary" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{review.text}"
                </p>

                {/* Project Type */}
                <div className="mb-4">
                  <span className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded-full">
                    {review.project}
                  </span>
                </div>

                {/* Client Info */}
                <div className="flex items-center space-x-3 border-t border-border pt-4">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">{review.name}</h4>
                    <p className="text-sm text-muted-foreground">{review.role}</p>
                    <p className="text-xs text-muted-foreground">{review.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-primary/10 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Ready to Join These Happy Clients?
              </h2>
              <p className="text-muted-foreground mb-6">
                Let's work together to create something amazing for your business
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary-hover transition-colors">
                  Start Your Project
                </button>
                <button className="border border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary/10 transition-colors">
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}