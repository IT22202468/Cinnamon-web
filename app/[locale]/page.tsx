import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import { Link } from "@/navigation";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Home");
  const tProd = useTranslations("Home.products");

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <Hero />

      {/* Introduction Section */}
      <Section className="bg-cream relative pb-0">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <span className="text-secondary tracking-widest uppercase font-semibold text-sm block mb-4">
            {t("introBadge")}
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-primary-dark mb-8">
            {t("introTitle")}
          </h2>
          <p
            className="text-lg text-foreground/80 leading-relaxed mb-8 max-w-3xl mx-auto"
            dangerouslySetInnerHTML={{ __html: t.raw("introDesc") }}
          />
          <Link href="/about" className="inline-flex items-center text-primary hover:text-primary-light font-semibold uppercase tracking-wide transition-colors">
            {t("readStory")} <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
        {/* <div
          className="mx-auto block w-full h-24 drop-shadow-sm repeat-divider mt-5"
          aria-hidden="true"
        /> */}
      </Section>

      {/* Featured Products Preview (Placeholder) */}
      <Section className="bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12">
            <div>
              <span className="text-secondary tracking-widest uppercase font-semibold text-sm block mb-2">
                {t("collectionBadge")}
              </span>
              <h2 className="text-4xl font-serif text-primary-dark">
                {t("collectionTitle")}
              </h2>
            </div>
            <Link href="/products" className="hidden md:flex items-center text-primary-dark hover:text-primary transition-colors mt-4 md:mt-0">
              {t("viewAll")} <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Product Card Placeholders */}
            {[
              { title: tProd("stickTitle"), desc: tProd("stickDesc") },
              { title: tProd("powderTitle"), desc: tProd("powderDesc") },
              { title: tProd("oilTitle"), desc: tProd("oilDesc") }
            ].map((product, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="aspect-4/5 bg-cream-light mb-6 overflow-hidden relative">
                  {/* Product Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: "url('/images/hero-bg.png')" }}
                  />
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
              {t("viewAll")} <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}
