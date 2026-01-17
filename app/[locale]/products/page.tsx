import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import { useTranslations } from "next-intl";

export default function Products() {
    const t = useTranslations("ProductsPage");
    const tItems = useTranslations("ProductsPage.items");

    const products = [
        {
            id: 1,
            name: tItems("p1.name"),
            description: tItems("p1.desc"),
            price: tItems("p1.price"),
            image: "/images/hero-bg.png"
        },
        {
            id: 2,
            name: tItems("p2.name"),
            description: tItems("p2.desc"),
            price: tItems("p2.price"),
            image: "/images/hero-bg.png"
        },
        {
            id: 3,
            name: tItems("p3.name"),
            description: tItems("p3.desc"),
            price: tItems("p3.price"),
            image: "/images/hero-bg.png"
        },
        {
            id: 4,
            name: tItems("p4.name"),
            description: tItems("p4.desc"),
            price: tItems("p4.price"),
            image: "/images/hero-bg.png"
        }
    ];

    return (
        <main className="min-h-screen flex flex-col bg-background">
            <Navbar />

            <div className="bg-secondary pt-32 pb-16 px-6 text-center text-white">
                <h1 className="text-4xl md:text-6xl font-serif mb-4">{t("headerTitle")}</h1>
                <p className="text-white/80 text-lg max-w-2xl mx-auto">
                    {t("headerDesc")}
                </p>
            </div>

            <Section>
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {products.map((product) => (
                            <div key={product.id} className="group bg-white shadow-sm hover:shadow-lg transition-shadow duration-300">
                                <div className="aspect-square bg-neutral-100 overflow-hidden relative">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                        style={{ backgroundImage: `url('${product.image}')` }}
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-lg font-serif text-primary-dark mb-2">{product.name}</h3>
                                    <p className="text-foreground/60 text-sm mb-4 min-h-[40px]">{product.description}</p>
                                    <div className="flex items-center justify-between mt-4 border-t border-neutral-100 pt-4">
                                        <span className="font-bold text-primary">{product.price}</span>
                                        <button className="text-xs uppercase tracking-wider font-semibold hover:text-primary transition-colors">
                                            {t("detailsBtn")}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            <Footer />
        </main>
    );
}
