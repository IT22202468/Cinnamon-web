"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import { Mail, Phone, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Contact() {
    const t = useTranslations("Contact");

    return (
        <main className="min-h-screen flex flex-col bg-background">
            <Navbar />

            <div className="bg-primary pt-32 pb-16 px-6 text-center text-white">
                <h1 className="text-4xl md:text-6xl font-serif mb-4">{t("headerTitle")}</h1>
                <p className="text-white/80 text-lg max-w-2xl mx-auto">
                    {t("headerDesc")}
                </p>
            </div>

            <Section>
                <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <h2 className="text-3xl font-serif text-primary-dark">{t("getInTouchTitle")}</h2>
                        <p className="text-foreground/70">
                            {t("getInTouchDesc")}
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-primary/10 p-3 rounded-full text-primary">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground">{t("visitUs")}</h3>
                                    <p className="text-foreground/70">
                                        123 Cinnamon Gardens, Colombo 07, Sri Lanka
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-primary/10 p-3 rounded-full text-primary">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground">{t("callUs")}</h3>
                                    <p className="text-foreground/70">+94 11 234 5678</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-primary/10 p-3 rounded-full text-primary">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground">{t("emailUs")}</h3>
                                    <p className="text-foreground/70">info@truecinnamon.lk</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-white p-8 shadow-lg rounded-sm border-t-4 border-primary">
                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-foreground mb-2">{t("form.name")}</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 border border-neutral-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                    placeholder={t("form.placeholderName")}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-foreground mb-2">{t("form.email")}</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 border border-neutral-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                    placeholder={t("form.placeholderEmail")}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-foreground mb-2">{t("form.message")}</label>
                                <textarea
                                    rows={4}
                                    className="w-full px-4 py-3 border border-neutral-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                    placeholder={t("form.placeholderMessage")}
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-primary hover:bg-primary-light text-white font-semibold py-4 uppercase tracking-widest transition-colors"
                                onClick={(e) => e.preventDefault()}
                            >
                                {t("form.send")}
                            </button>
                        </form>
                    </div>
                </div>
            </Section>

        </main>
    );
}
