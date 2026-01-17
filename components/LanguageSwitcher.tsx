"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/navigation";
import { ChangeEvent, useTransition } from "react";

export default function LanguageSwitcher() {
    const t = useTranslations("LanguageSwitcher");
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isPending, startTransition] = useTransition();

    const handleCreate = (nextLocale: string) => {
        startTransition(() => {
            // @ts-ignore
            router.replace(pathname, { locale: nextLocale });
        });
    };

    const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const nextLocale = e.target.value;
        handleCreate(nextLocale);
    };

    return (
        <div className="relative inline-block text-left">
            <select
                defaultValue={locale}
                onChange={onSelectChange}
                disabled={isPending}
                className="bg-transparent text-white border border-white/30 rounded px-2 py-1 text-sm focus:outline-none focus:border-primary option:text-black"
                style={{ color: "inherit" }}
            >
                <option value="en" className="text-black">{t('en')}</option>
                <option value="si" className="text-black">{t('si')}</option>
                <option value="ar" className="text-black">{t('ar')}</option>
            </select>
        </div>
    );
}
