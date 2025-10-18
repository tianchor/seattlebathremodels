"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, ArrowRight, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"

export function CTA() {
  const benefits = [
    "Quick Installation",
    "Premium Materials",
    "Lifetime Warranty",
  ]

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/images/bathroom-design-10.jpg')" }}
        />
        {/* Dark gradient overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
      </div>

      {/* Animated Grid Pattern from hero */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"
      />

      {/* Decorative blur elements from hero */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-0 -left-32 w-96 h-96 bg-primary rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="absolute bottom-0 -right-32 w-96 h-96 bg-primary rounded-full blur-[120px] pointer-events-none"
      />

      <div className="container mx-auto px-4 relative z-10">
        <Card className="max-w-4xl mx-auto bg-transparent border-0 shadow-none">
          <CardContent className="p-8 md:p-12 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-6xl font-bold mb-4 text-balance text-white"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Ready to Transform Your Bathroom?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg mb-6 text-white/90 max-w-2xl mx-auto text-pretty leading-relaxed"
            >
              Schedule your free consultation today and discover how we can create the bathroom of your dreams.
            </motion.p>

            {/* Benefits Pills similar to hero */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-3 mb-8"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
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

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 text-base px-8 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white hover:text-accent font-semibold"
                >
                  <Phone className="w-5 h-5" />
                  (425) 357-7867
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button size="lg" asChild className="gap-2 text-base px-8 bg-primary hover:bg-primary/90 text-white font-bold shadow-2xl shadow-primary/50">
                  <a href="https://clienthub.getjobber.com/booking/eada2ae7-fd52-442f-83bd-e9d7e03ed2dd/" target="_blank" rel="noopener noreferrer">
                    Schedule Consultation
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6 border-t border-white/20"
            >
              <div className="flex items-center gap-2 text-sm text-white/90">
                <Mail className="w-4 h-4" />
                info@seattlebathremodels.com
              </div>
            </motion.div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
