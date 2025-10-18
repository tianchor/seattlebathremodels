import { Shield, Award, Clock, Heart } from "lucide-react"

const reasons = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully licensed contractors with comprehensive insurance coverage for your peace of mind.",
  },
  {
    icon: Award,
    title: "Expert Craftsmanship",
    description: "15+ years of experience delivering exceptional quality on every project.",
  },
  {
    icon: Clock,
    title: "On-Time Completion",
    description: "We respect your time with efficient project management and clear timelines.",
  },
  {
    icon: Heart,
    title: "Customer-Focused",
    description: "Your satisfaction is our priority. We listen, adapt, and deliver beyond expectations.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 text-balance text-accent"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Why Choose Seattle Bath Remodels
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            We combine technical expertise with genuine care to create bathrooms that improve your quality of life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 rounded-full bg-accent group-hover:bg-accent/90 flex items-center justify-center mx-auto mb-4 transition-colors">
                  <Icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{reason.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
