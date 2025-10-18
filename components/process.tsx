import { Card, CardContent } from "@/components/ui/card"

const steps = [
  {
    number: "1",
    title: "Free Consultation",
    description: "We visit your home to understand your needs, take measurements, and discuss your vision.",
  },
  {
    number: "2",
    title: "Custom Design",
    description: "Our team creates a detailed plan with 3D renderings and material selections tailored to you.",
  },
  {
    number: "3",
    title: "Professional Installation",
    description: "Expert craftsmen bring your design to life with precision and attention to detail.",
  },
  {
    number: "4",
    title: "Final Walkthrough",
    description: "We ensure every detail meets our high standards and your complete satisfaction.",
  },
]

export function Process() {
  return (
    <section id="process" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 text-accent"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Our Process
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            A seamless journey from concept to completion, designed around your schedule and preferences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <Card key={index} className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-2 hover:border-accent/50">
              <CardContent className="p-6">
                <div className="text-6xl font-bold bg-gradient-to-r from-primary via-primary to-green-400 bg-clip-text text-transparent mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
