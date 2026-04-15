import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Hero from "@/components/Hero"; // Or a smaller PageHeader component
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function About() {
    const t = useTranslations("About");
    const tBenefits = useTranslations("About.benefits");

    return (
        <main className="min-h-screen flex flex-col bg-background">
            <Navbar />

            {/* Simple Header */}
            <div className="bg-primary-dark pt-32 pb-16 px-6 text-center text-white">
                <h1 className="text-4xl md:text-6xl font-serif mb-4">{t("headerTitle")}</h1>
                <p className="text-white/80 text-lg max-w-2xl mx-auto">
                    {t("headerDesc")}
                </p>
            </div>

            <Section>
                <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-serif text-primary-dark mb-6">
                            {t("processTitle")}
                        </h2>
                        <p className="text-foreground/80 leading-relaxed mb-6">
                            {t("processDesc1")}
                        </p>
                        <p className="text-foreground/80 leading-relaxed">
                            {t("processDesc2")}
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
                        {t("benefitsTitle")}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: tBenefits("lowCoumarinTitle"), text: tBenefits("lowCoumarinDesc") },
                            { title: tBenefits("cognitiveTitle"), text: tBenefits("cognitiveDesc") },
                            { title: tBenefits("bloodSugarTitle"), text: tBenefits("bloodSugarDesc") },
                            { title: tBenefits("skinHealthTitle"), text: tBenefits("skinHealthDesc") },
                            { title: tBenefits("antioxidantTitle"), text: tBenefits("antioxidantDesc") },
                            { title: tBenefits("heartHealthTitle"), text: tBenefits("heartHealthDesc") }
                        ].map((benefit, i) => (
                            <div key={i} className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow rounded-sm border-t-4 border-secondary">
                                <h3 className="text-xl font-serif text-primary mb-3">{benefit.title}</h3>
                                <p className="text-foreground/70 text-sm leading-relaxed">{benefit.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>
        </main>
    );
}
