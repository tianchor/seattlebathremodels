"use client"

import { useState, useEffect, useCallback } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Play, Pause, X } from "lucide-react"

const portfolioImages = [
  {
    id: 1,
    src: "/images/bathroom-design-01.jpg",
    title: "Modern Walk-In Shower",
    category: "Accessible Shower",
    description: "Contemporary design with frameless glass and premium tile work"
  },
  {
    id: 2,
    src: "/images/bathroom-design-02.jpg",
    title: "Luxury Walk-In Tub",
    category: "Walk-In Tub",
    description: "Safe and stylish bathing solution with therapeutic jets"
  },
  {
    id: 3,
    src: "/images/bathroom-design-03.jpg",
    title: "Contemporary Full Remodel",
    category: "Full Remodel",
    description: "Complete transformation with floating vanity and modern fixtures"
  },
  {
    id: 4,
    src: "/images/bathroom-design-04.jpg",
    title: "Spa-Inspired Retreat",
    category: "Full Remodel",
    description: "Natural stone accents create a serene spa atmosphere"
  },
  {
    id: 5,
    src: "/images/bathroom-design-05.jpg",
    title: "Accessible Master Bath",
    category: "ADA Compliance",
    description: "Barrier-free design with grab bars and wide doorways"
  },
  {
    id: 6,
    src: "/images/bathroom-design-06.jpg",
    title: "Classic Elegance",
    category: "Full Remodel",
    description: "Timeless design with marble countertops and traditional fixtures"
  },
  {
    id: 7,
    src: "/images/bathroom-design-07.jpg",
    title: "Minimalist Haven",
    category: "Full Remodel",
    description: "Clean lines and neutral tones for a peaceful sanctuary"
  },
  {
    id: 8,
    src: "/images/bathroom-design-08.jpg",
    title: "Rustic Charm",
    category: "Full Remodel",
    description: "Warm wood tones meet modern functionality"
  },
  {
    id: 9,
    src: "/images/bathroom-design-09.jpg",
    title: "Urban Oasis",
    category: "Full Remodel",
    description: "Industrial-chic design with exposed elements"
  },
  {
    id: 10,
    src: "/images/bathroom-design-10.jpg",
    title: "Coastal Retreat",
    category: "Full Remodel",
    description: "Beach-inspired palette with ocean-blue accents"
  },
  {
    id: 11,
    src: "/images/bathroom-design-11.jpg",
    title: "Executive Suite",
    category: "Full Remodel",
    description: "Luxury finishes and high-end fixtures throughout"
  },
  {
    id: 12,
    src: "/images/bathroom-design-12.jpg",
    title: "Transitional Beauty",
    category: "Full Remodel",
    description: "Perfect blend of traditional and contemporary styles"
  },
  {
    id: 13,
    src: "/images/bathroom-design-13.jpg",
    title: "Family-Friendly Design",
    category: "Full Remodel",
    description: "Practical layout with ample storage and durability"
  },
  {
    id: 14,
    src: "/images/bathroom-design-14.jpg",
    title: "Sophisticated Space",
    category: "Full Remodel",
    description: "Dark tones and dramatic lighting create ambiance"
  },
  {
    id: 15,
    src: "/images/bathroom-design-15.jpg",
    title: "Timeless Design",
    category: "Full Remodel",
    description: "Classic white and chrome never go out of style"
  },
]

export function PortfolioGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoplay, setIsAutoplay] = useState(true)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  // Autoplay functionality
  useEffect(() => {
    if (!isAutoplay) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % portfolioImages.length)
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(interval)
  }, [isAutoplay])

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % portfolioImages.length)
  }, [])

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + portfolioImages.length) % portfolioImages.length)
  }, [])

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index)
  }, [])

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
    setIsAutoplay(false)
  }, [])

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false)
  }, [])

  const lightboxNext = useCallback(() => {
    setLightboxIndex((prev) => (prev + 1) % portfolioImages.length)
  }, [])

  const lightboxPrevious = useCallback(() => {
    setLightboxIndex((prev) => (prev - 1 + portfolioImages.length) % portfolioImages.length)
  }, [])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxOpen) {
        if (e.key === "ArrowLeft") lightboxPrevious()
        if (e.key === "ArrowRight") lightboxNext()
        if (e.key === "Escape") closeLightbox()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [lightboxOpen, lightboxPrevious, lightboxNext, closeLightbox])

  return (
    <>
      <section className="py-16 sm:py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Main Carousel */}
          <div className="max-w-6xl mx-auto mb-12">
            <Card className="overflow-hidden border-0 shadow-2xl">
              <div className="relative aspect-[16/10] bg-muted">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute inset-0 cursor-pointer"
                    onClick={() => openLightbox(currentIndex)}
                  >
                    <img
                      src={portfolioImages[currentIndex].src}
                      alt={portfolioImages[currentIndex].title}
                      className="w-full h-full object-cover"
                    />

                    {/* Image Info Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 sm:p-8">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <div className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold mb-2">
                          {portfolioImages[currentIndex].category}
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                          {portfolioImages[currentIndex].title}
                        </h3>
                        <p className="text-white/90 text-sm sm:text-base">
                          {portfolioImages[currentIndex].description}
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows */}
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm transition-all hover:scale-110"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm transition-all hover:scale-110"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Autoplay Control */}
                <button
                  onClick={() => setIsAutoplay(!isAutoplay)}
                  className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm transition-all hover:scale-110"
                  aria-label={isAutoplay ? "Pause autoplay" : "Start autoplay"}
                >
                  {isAutoplay ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </button>

                {/* Progress Indicator */}
                <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1.5 rounded-full backdrop-blur-sm text-sm font-semibold">
                  {currentIndex + 1} / {portfolioImages.length}
                </div>
              </div>
            </Card>

            {/* Thumbnail Navigation */}
            <div className="flex justify-center items-center gap-2 mt-6 flex-wrap">
              {portfolioImages.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => goToSlide(index)}
                  className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden transition-all ${
                    index === currentIndex
                      ? "ring-4 ring-primary scale-110 shadow-lg"
                      : "opacity-60 hover:opacity-100 hover:scale-105"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                >
                  <img
                    src={image.src}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Grid Gallery */}
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-accent">
              All Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="group cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <Card className="overflow-hidden border-0 transition-all duration-300 hover:shadow-2xl p-0">
                    <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                      <motion.img
                        src={image.src}
                        alt={image.title}
                        className="absolute inset-0 w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                      />
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-4"
                      >
                        <div className="text-white">
                          <div className="text-xs font-semibold mb-1 text-primary">
                            {image.category}
                          </div>
                          <h3 className="text-lg font-bold">{image.title}</h3>
                        </div>
                      </motion.div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-7xl w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full max-h-[85vh] flex items-center justify-center">
                <img
                  src={portfolioImages[lightboxIndex].src}
                  alt={portfolioImages[lightboxIndex].title}
                  className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                />

                {/* Lightbox Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 text-white rounded-b-lg">
                  <div className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold mb-2">
                    {portfolioImages[lightboxIndex].category}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">
                    {portfolioImages[lightboxIndex].title}
                  </h3>
                  <p className="text-white/90">
                    {portfolioImages[lightboxIndex].description}
                  </p>
                </div>

                {/* Close Button */}
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm transition-all hover:scale-110 z-10"
                  aria-label="Close lightbox"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Navigation */}
                <button
                  onClick={lightboxPrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full backdrop-blur-sm transition-all hover:scale-110 z-10"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>
                <button
                  onClick={lightboxNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full backdrop-blur-sm transition-all hover:scale-110 z-10"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>

                {/* Image Counter */}
                <div className="absolute top-4 left-4 bg-black/50 text-white px-4 py-2 rounded-full backdrop-blur-sm text-sm font-semibold z-10">
                  {lightboxIndex + 1} / {portfolioImages.length}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
