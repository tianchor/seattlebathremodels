"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bath, Droplets, Accessibility, Sparkles, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const services = [
  {
    icon: Bath,
    title: "Walk-In Tubs",
    description: "Safe, accessible bathing solutions with therapeutic features for comfort and independence.",
    features: ["Low threshold entry", "Built-in seating", "Hydrotherapy jets", "Quick drain system"],
    image: "/images/bathroom-design-07.jpg",
  },
  {
    icon: Droplets,
    title: "Accessible Showers",
    description: "Barrier-free shower systems designed for safety without compromising on style.",
    features: ["Zero-threshold entry", "Non-slip flooring", "Grab bars", "Adjustable fixtures"],
    image: "/images/bathroom-design-11.jpg",
  },
  {
    icon: Sparkles,
    title: "Full Bathroom Remodels",
    description: "Complete transformations that maximize space, functionality, and aesthetic appeal.",
    features: ["Custom design", "Quality materials", "Modern fixtures", "Expert installation"],
    image: "/images/bathroom-design-09.jpg",
  },
  {
    icon: Accessibility,
    title: "ADA Compliance",
    description: "Modifications that meet accessibility standards while maintaining beautiful design.",
    features: ["Code compliant", "Universal design", "Safety features", "Future-proof solutions"],
    image: "/images/bathroom-design-14.jpg",
  },
]

function ServiceCard({ service, index }: { service: (typeof services)[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const Icon = service.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="h-full"
    >
      <Card className="border-2 border-border/50 hover:border-primary/50 hover:shadow-2xl transition-all duration-300 h-full group bg-card/50 backdrop-blur-sm overflow-hidden relative">
        <div className="absolute inset-0 z-0">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover opacity-30"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-white/60" />
        </div>
        <CardContent className="p-6 sm:p-8 relative z-10">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
            transition={{ duration: 0.6, delay: index * 0.1 + 0.2, type: "spring", stiffness: 200 }}
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform"
          >
            <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
          </motion.div>
          <h3 className="text-xl sm:text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
          <p className="text-sm sm:text-base text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
          <ul className="space-y-2 sm:space-y-2.5 mb-6">
            {service.features.map((feature, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.3 + idx * 0.05 }}
                className="flex items-center gap-2.5 text-xs sm:text-sm group/item"
              >
                <motion.div
                  whileHover={{ scale: 1.5 }}
                  className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"
                />
                <span className="group-hover/item:text-foreground transition-colors">{feature}</span>
              </motion.li>
            ))}
          </ul>
          <motion.div
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <Button variant="ghost" asChild className="gap-2 p-0 h-auto text-primary hover:text-primary/80 font-semibold group-hover:gap-3 transition-all">
              <a href="/contact">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="py-16 sm:py-20 md:py-32 bg-gradient-to-b from-secondary/20 via-secondary/30 to-background">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12 sm:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4"
          >
            What We Offer
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-balance text-accent">Our Services</h2>
          <p className="text-base sm:text-lg text-muted-foreground text-pretty leading-relaxed">
            From accessible solutions to complete renovations, we bring expertise and artistry to every project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
