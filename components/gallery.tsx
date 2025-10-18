"use client"

import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const projects = [
  {
    title: "Modern Walk-In Shower",
    category: "Accessible Shower",
    image: "/images/bathroom-design-01.jpg",
  },
  {
    title: "Luxury Walk-In Tub",
    category: "Walk-In Tub",
    image: "/images/bathroom-design-02.jpg",
  },
  {
    title: "Contemporary Full Remodel",
    category: "Full Remodel",
    image: "/images/bathroom-design-03.jpg",
  },
  {
    title: "Spa-Inspired Retreat",
    category: "Full Remodel",
    image: "/images/bathroom-design-04.jpg",
  },
  {
    title: "Accessible Master Bath",
    category: "ADA Compliance",
    image: "/images/bathroom-design-05.jpg",
  },
  {
    title: "Classic Elegance",
    category: "Full Remodel",
    image: "/images/bathroom-design-06.jpg",
  },
]

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group"
    >
      <Card className="overflow-hidden cursor-pointer border-0 transition-all duration-300 hover:shadow-2xl p-0">
        <motion.div
          className="relative aspect-[4/3] overflow-hidden bg-muted"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <motion.img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-full object-cover object-center"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />

          {/* Gradient Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
          />

          {/* Category Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-3 left-3 bg-primary text-primary-foreground px-3 py-1.5 rounded-full text-xs font-semibold"
          >
            {project.category}
          </motion.div>

          {/* Project Info */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileHover={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white"
          >
            <h3 className="text-lg sm:text-xl font-bold mb-2">{project.title}</h3>
            <motion.div
              initial={{ width: 0 }}
              whileHover={{ width: "3rem" }}
              transition={{ duration: 0.3 }}
              className="h-1 bg-primary rounded-full"
            />
          </motion.div>
        </motion.div>
      </Card>
    </motion.div>
  )
}

export function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="gallery" className="py-16 sm:py-20 md:py-32 bg-gradient-to-b from-background to-secondary/20">
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
            Our Work
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-balance text-accent">
            Recent Projects
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground text-pretty leading-relaxed">
            Explore our portfolio of stunning bathroom transformations across the Seattle area.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            href="/portfolio"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            View Full Portfolio
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
