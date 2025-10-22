import { Facebook, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary/30 border-t border-border py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Content - 3 Columns */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-8">
            {/* Column 1 - Brand */}
            <div>
              <div className="mb-4">
                <img
                  src="/seattlebaths-logo.png"
                  alt="Seattle Baths"
                  className="h-16 w-auto"
                />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Transforming bathrooms across Seattle with expert craftsmanship and innovative design.
              </p>
              {/* Social Media */}
              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Column 2 - Contact Us */}
            <div>
              <h3 className="font-bold text-lg mb-4">Contact Us</h3>
              <div className="space-y-3">
                <a href="tel:4253455194" className="block text-base font-bold text-primary hover:text-primary/80 transition-colors">
                  (425) 345-5194
                </a>
                <a href="mailto:info@seattlebathremodels.com" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  info@seattlebathremodels.com
                </a>
              </div>
            </div>

            {/* Column 3 - Offices */}
            <div className="md:text-right">
              <h3 className="font-bold text-lg mb-4">Our Offices</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-sm text-accent mb-2">Redmond</h4>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>4172 148th Ave NE</p>
                    <p>Redmond, WA 98052</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-sm text-accent mb-2">Woodinville</h4>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>19501 144th Ave NE, B-500</p>
                    <p>Woodinville, WA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Seattle Bath Remodels. All rights reserved. | Licensed & Insured</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
