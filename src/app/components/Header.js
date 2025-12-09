'use client';

import Image from "next/image";
import { useLanguage } from "../contexts/LanguageContext";

export default function Header() {
    const { language, changeLanguage } = useLanguage();

    return (
        <div className="text-center mb-10">
            <div className="flex justify-center mb-6">
                <Image
                    src="/ficuslogo.png"
                    alt="Ficus Botanics Coffee"
                    width={120}
                    height={120}
                    className="object-contain"
                    priority
                />
            </div>
            <h1 className="text-[18px] tracking-[0.22em] text-[#111] font-normal uppercase mb-4">
                Ficus Botanics Coffee
            </h1>
            <div className="flex justify-center gap-2">
                <button
                    onClick={() => changeLanguage('tr')}
                    className={`px-4 py-1 text-sm font-medium transition-colors ${
                        language === 'tr'
                            ? 'text-[var(--gold)] border-b-2 border-[var(--gold)]'
                            : 'text-[#777] hover:text-[#111]'
                    }`}
                >
                    TR
                </button>
                <span className="text-[#ddd]">|</span>
                <button
                    onClick={() => changeLanguage('en')}
                    className={`px-4 py-1 text-sm font-medium transition-colors ${
                        language === 'en'
                            ? 'text-[var(--gold)] border-b-2 border-[var(--gold)]'
                            : 'text-[#777] hover:text-[#111]'
                    }`}
                >
                    EN
                </button>
            </div>
        </div>
    );
}
