"use client"

import { useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin } from "lucide-react"

export default function ContactPage() {
  useEffect(() => {
    // Load Jobber form script
    const script = document.createElement("script")
    script.src = "https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js"
    script.setAttribute("clienthub_id", "1b2b42c1-c76e-46c3-864c-ee6460458d7c-1482031")
    script.setAttribute("form_url", "https://clienthub.getjobber.com/client_hubs/1b2b42c1-c76e-46c3-864c-ee6460458d7c/public/work_request/embedded_work_request_form?form_id=1482031")
    script.async = true
    document.body.appendChild(script)

    // Load Jobber form CSS
    const link = document.createElement("link")
    link.rel = "stylesheet"
    link.href = "https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css"
    link.media = "screen"
    document.head.appendChild(link)

    return () => {
      document.body.removeChild(script)
      document.head.removeChild(link)
    }
  }, [])

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "(425) 345-5194",
      link: "tel:4253455194"
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@seattlebathremodels.com",
      link: "mailto:info@seattlebathremodels.com"
    },
    {
      icon: MapPin,
      title: "Service Area",
      content: "Seattle & Surrounding Areas",
      link: null
    }
  ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url('/images/bathroom-design-10.jpg')" }}
          />
          {/* Dark gradient overlay for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        </div>

        {/* Animated Grid Pattern */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.03 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-[1] bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"
        />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
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
              className="inline-block bg-primary/20 backdrop-blur-md border border-primary/30 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4"
            >
              Get In Touch
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-balance text-white">
              Contact Us Today
              <span className="block mt-2 bg-gradient-to-r from-primary via-primary to-green-400 bg-clip-text text-transparent">
                Free Consultation
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto text-pretty leading-relaxed">
              Ready to transform your bathroom? Get in touch with our team for a free consultation and quote.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-accent">
                Request a Free Quote
              </h2>
              <p className="text-lg text-muted-foreground">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>

            {/* Jobber Form Container */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-2xl p-8 sm:p-12"
            >
              <div id="1b2b42c1-c76e-46c3-864c-ee6460458d7c-1482031"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us CTA */}
      <section className="py-16 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-accent">
              Why Choose Seattle Bath Remodels?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <p className="text-muted-foreground">Satisfaction Rate</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold text-center mb-12 text-accent"
            >
              Get In Touch
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-secondary/20 rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-sm font-semibold text-muted-foreground mb-2">
                    {info.title}
                  </h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-base font-bold text-accent hover:text-primary transition-colors"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-base font-bold text-accent">
                      {info.content}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
