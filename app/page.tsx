import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <Hero />

      {/* Introduction Section */}
      <Section className="bg-cream">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <span className="text-secondary tracking-widest uppercase font-semibold text-sm block mb-4">
            The World's Finest Spice
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-primary-dark mb-8">
            Why Ceylon Cinnamon?
          </h2>
          <p className="text-lg text-foreground/80 leading-relaxed mb-8 max-w-3xl mx-auto">
            A Cinnamon variety native to Sri Lanka and is grown and manufactured in Sri Lanka is known as
            <strong> Ceylon Cinnamon</strong> or <strong>True Cinnamon</strong>.
            Produced from the plant <em>Cinnamomum zeylanicum</em>, pure Ceylon Cinnamon is celebrated globally
            for its delicate flavor, unique aroma, and numerous health benefits.
            Unlike common Cassia cinnamon, our True Cinnamon is ultra-low in coumarin and rich in antioxidants.
          </p>
          <Link href="/about" className="inline-flex items-center text-primary hover:text-primary-light font-semibold uppercase tracking-wide transition-colors">
            Read Our Story <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </Section>

      {/* Featured Products Preview (Placeholder) */}
      <Section className="bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12">
            <div>
              <span className="text-secondary tracking-widest uppercase font-semibold text-sm block mb-2">
                Our Collection
              </span>
              <h2 className="text-4xl font-serif text-primary-dark">
                Premium Products
              </h2>
            </div>
            <Link href="/products" className="hidden md:flex items-center text-primary-dark hover:text-primary transition-colors mt-4 md:mt-0">
              View All Products <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Product Card Placeholders */}
            {[
              { title: "Cinnamon Sticks", desc: "Hand-peeled quills, perfectly rolled." },
              { title: "Cinnamon Powder", desc: "Finely ground for aromatic perfection." },
              { title: "Cinnamon Oil", desc: "Pure essential oil for wellness." }
            ].map((product, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="aspect-[4/5] bg-cream-light mb-6 overflow-hidden relative">
                  {/* Placeholder for Product Image */}
                  <div className="absolute inset-0 bg-neutral-200 group-hover:bg-neutral-300 transition-colors flex items-center justify-center text-neutral-400">
                    Product Image
                  </div>
                </div>
                <h3 className="text-2xl font-serif text-primary-dark mb-2 group-hover:text-primary transition-colors">
                  {product.title}
                </h3>
                <p className="text-foreground/70">{product.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link href="/products" className="inline-flex items-center text-primary-dark hover:text-primary transition-colors">
              View All Products <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
