"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PortfolioGallery } from "@/components/portfolio-gallery"
import { motion } from "framer-motion"

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4"
            >
              Our Complete Portfolio
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-balance text-accent">
              Bathroom Transformations
              <span className="block mt-2 bg-gradient-to-r from-primary via-primary to-green-400 bg-clip-text text-transparent">
                Across Seattle
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Explore our complete collection of premium bathroom remodels. Each project showcases our commitment to quality, craftsmanship, and customer satisfaction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <PortfolioGallery />

      <Footer />
    </main>
  )
}
