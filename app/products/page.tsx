import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";

const products = [
    {
        id: 1,
        name: "Ceylon Cinnamon Quills",
        description: "Premium grade Alba cinnamon sticks, hand-rolled to perfection.",
        price: "$25.00 / 100g",
        image: "/images/hero-bg.png" // Reusing for now
    },
    {
        id: 2,
        name: "Cinnamon Powder",
        description: "Finely ground authentic Ceylon cinnamon for baking and cooking.",
        price: "$15.00 / 100g",
        image: "/images/hero-bg.png"
    },
    {
        id: 3,
        name: "Leaf Oil",
        description: "Steam distilled cinnamon leaf oil, perfect for aromatherapy.",
        price: "$30.00 / 50ml",
        image: "/images/hero-bg.png"
    },
    {
        id: 4,
        name: "Bark Oil",
        description: "Potent and pure cinnamon bark oil for medicinal use.",
        price: "$45.00 / 10ml",
        image: "/images/hero-bg.png"
    }
];

export default function Products() {
    return (
        <main className="min-h-screen flex flex-col bg-background">
            <Navbar />

            <div className="bg-secondary pt-32 pb-16 px-6 text-center text-white">
                <h1 className="text-4xl md:text-6xl font-serif mb-4">Our Collection</h1>
                <p className="text-white/80 text-lg max-w-2xl mx-auto">
                    From the plantation to your pantry, experience the finest quality.
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
                                            Details
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
