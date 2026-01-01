import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Hero from "@/components/Hero"; // Or a smaller PageHeader component
import { motion } from "framer-motion";

export default function About() {
    return (
        <main className="min-h-screen flex flex-col bg-background">
            <Navbar />

            {/* Simple Header */}
            <div className="bg-primary-dark pt-32 pb-16 px-6 text-center text-white">
                <h1 className="text-4xl md:text-6xl font-serif mb-4">Our Heritage</h1>
                <p className="text-white/80 text-lg max-w-2xl mx-auto">
                    The story of True Cinnamon is the story of Sri Lanka's finest spice.
                </p>
            </div>

            <Section>
                <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-serif text-primary-dark mb-6">
                            The Art of Processing
                        </h2>
                        <p className="text-foreground/80 leading-relaxed mb-6">
                            Processing and peeling Ceylon Cinnamon follows a tradition and a method unique to Sri Lanka.
                            Leaves and twigs are separated from the harvested stick before peeling.
                            Peeling cinnamon sticks is a complex skill to master, requiring dextrous handwork and a traditional set of tools.
                        </p>
                        <p className="text-foreground/80 leading-relaxed">
                            The end result of peeling is a delicate and long cinnamon stick carved out of the soft inner layer of the bark.
                            Similar to a cigar in structure, Ceylon Cinnamon is pale golden in colour while sweet and refined in flavour and fragrance.
                        </p>
                    </div>
                    <div className="relative h-[400px] bg-neutral-200 rounded-lg overflow-hidden shadow-xl">
                        {/* Image Placeholder */}
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: "url('/images/process.png')" }}
                        />
                    </div>
                </div>
            </Section>

            <Section className="bg-cream">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-serif text-primary-dark mb-10 text-center">
                        Health Benefits
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Low Coumarin", text: "Contains only 0.004% coumarin compared to Cassia's 5%, making it safe for daily consumption liver-friendly." },
                            { title: "Cognitive Boost", text: "Consuming Ceylon Cinnamon improves cognition, increases focus, and memory." },
                            { title: "Blood Sugar Control", text: "Helps regulate blood sugar levels and increases insulin sensitivity." },
                            { title: "Skin Health", text: "Cinnamon oil helps reduce skin diseases like acne and eczema." },
                            { title: "Antioxidant Rich", text: "Packed with powerful antioxidants that reduce inflammation." },
                            { title: "Heart Health", text: "Reduces risk of heart diseases by lowering cholesterol levels." }
                        ].map((benefit, i) => (
                            <div key={i} className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow rounded-sm border-t-4 border-secondary">
                                <h3 className="text-xl font-serif text-primary mb-3">{benefit.title}</h3>
                                <p className="text-foreground/70 text-sm leading-relaxed">{benefit.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            <Footer />
        </main>
    );
}
