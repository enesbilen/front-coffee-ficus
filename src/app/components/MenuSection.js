'use client';

import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function MenuSection({ title, children, defaultOpen = true }) {
    const { language } = useLanguage();
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className="mb-10">
            <div
                className="text-base font-semibold tracking-[0.12em] mb-[10px] cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                {title}
            </div>
            <div className="h-[1px] bg-[#ddd] mb-5"></div>

            {isOpen ? (
                <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                    {children}
                </div>
            ) : (
                <div
                    className="text-sm text-[#777] mt-[6px] cursor-pointer"
                    onClick={() => setIsOpen(true)}
                >
                    {language === 'tr' ? 'Genişletmek için tıklayın' : 'Click to expand'}
                </div>
            )}
        </div>
    );
}
