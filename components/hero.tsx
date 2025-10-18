"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, CheckCircle2, Star } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  const stats = [
    { value: "500+", label: "Projects Completed" },
    { value: "15+", label: "Years Experience" },
    { value: "100%", label: "Satisfaction Rate" },
  ];

  const benefits = [
    "Lifetime Warranty",
    "Quick Installation",
    "Premium Materials"
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image with Modern Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="w-full h-full"
        >
          <img
            src="/images/bathroom-design-15.jpg"
            alt="Luxury bathroom remodel"
            className="w-full h-full object-cover"
          />
        </motion.div>
        {/* Dark gradient overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/30 to-black/60" />
      </div>

      {/* Animated Grid Pattern */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 z-[1] bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"
      />

      {/* Content - Centralized */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10 py-18 md:py-16">
        <div className="max-w-5xl mx-auto text-center">
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-md border border-primary/30 rounded-full px-5 py-2.5 mb-8"
          >
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span className="text-xs font-semibold text-white">
              Seattle's #1 Rated Bathroom Remodeler
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white leading-[1.05] tracking-tight"
          >
            Bring Your Dream
            <span className="block mt-2 bg-gradient-to-r from-primary via-primary to-green-400 bg-clip-text text-transparent">
            Bathroom to Life
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg sm:text-xl font-medium mb-7 text-white/90 max-w-3xl mx-auto"
          >
            Professional remodeling in{" "}
            <span className="text-primary font-bold">days, not weeks</span>
            <br className="hidden sm:block" />
            with guaranteed quality & lifetime warranty
          </motion.p>

          {/* Benefits Pills - Centered */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: 0.6 + index * 0.1,
                  type: "spring",
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2.5"
              >
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm font-semibold text-white">
                  {benefit}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons - Centered */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="lg"
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground text-base md:text-lg px-8 py-7 rounded-xl font-bold shadow-2xl shadow-primary/50 hover:shadow-primary/70 transition-all group"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (425) 357-7867
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
            
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
            className="grid grid-cols-3 gap-4 sm:gap-8 max-w-3xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 1.1 + index * 0.1,
                  type: "spring",
                }}
                whileHover={{ y: -5 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 sm:p-6"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-medium text-white/80">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute top-1/4 -left-32 w-96 h-96 bg-primary rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary rounded-full blur-[120px] pointer-events-none"
      />
    </section>
  );
}
