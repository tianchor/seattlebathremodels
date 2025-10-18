"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"

const testimonials = [
  {
    name: "Margaret Thompson",
    location: "Ballard, Seattle",
    rating: 5,
    text: "The walk-in tub installation exceeded our expectations. The team was professional, clean, and finished on time. My mother can now bathe safely and independently.",
  },
  {
    name: "David Chen",
    location: "Capitol Hill, Seattle",
    rating: 5,
    text: "Our bathroom went from outdated to stunning. The design team listened to our ideas and created something even better than we imagined. Highly recommend!",
  },
  {
    name: "Sarah Martinez",
    location: "West Seattle",
    rating: 5,
    text: "Professional from start to finish. They handled everything - permits, materials, installation. The accessible shower is beautiful and functional. Worth every penny.",
  },
]

function TestimonialCard({ testimonial, index }: { testimonial: (typeof testimonials)[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ y: -8 }}
      className="h-full"
    >
      <Card className="h-full border-2 border-border/50 hover:border-primary/30 hover:shadow-2xl transition-all duration-300 bg-card/50 backdrop-blur-sm">
        <CardContent className="p-6 sm:p-8 flex flex-col h-full">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.4, delay: index * 0.15 + 0.2 }}
            className="flex gap-1 mb-4"
          >
            {[...Array(testimonial.rating)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ duration: 0.3, delay: index * 0.15 + 0.3 + i * 0.05, type: "spring" }}
                whileHover={{ scale: 1.2, rotate: 15 }}
              >
                <Star className="w-5 h-5 fill-primary text-primary" />
              </motion.div>
            ))}
          </motion.div>
          <p className="text-sm sm:text-base text-muted-foreground mb-6 leading-relaxed flex-grow">
            "{testimonial.text}"
          </p>
          <div className="border-t border-border/50 pt-4 mt-auto">
            <div className="font-bold text-base">{testimonial.name}</div>
            <div className="text-sm text-muted-foreground">{testimonial.location}</div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  }

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection
      if (nextIndex < 0) nextIndex = testimonials.length - 1
      if (nextIndex >= testimonials.length) nextIndex = 0
      return nextIndex
    })
  }

  return (
    <section id="testimonials" className="py-16 sm:py-20 md:py-32 bg-gradient-to-b from-secondary/20 via-secondary/30 to-background">
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
            Testimonials
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-balance">
            What Our Clients Say
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground text-pretty leading-relaxed">
            Don't just take our word for it - hear from homeowners who've experienced the Seattle Bath Remodels
            difference.
          </p>
        </motion.div>

        {/* Mobile Carousel */}
        <div className="block lg:hidden max-w-xl mx-auto relative">
          <div className="relative overflow-hidden h-[320px] sm:h-[280px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute w-full"
              >
                <Card className="border-2 border-border/50 shadow-xl">
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed text-sm sm:text-base">
                      "{testimonials[currentIndex].text}"
                    </p>
                    <div>
                      <div className="font-bold text-base">{testimonials[currentIndex].name}</div>
                      <div className="text-sm text-muted-foreground">{testimonials[currentIndex].location}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-4 mt-6">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(-1)}
              className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1)
                    setCurrentIndex(index)
                  }}
                  whileHover={{ scale: 1.2 }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? "bg-primary w-6" : "bg-border"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(1)}
              className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
