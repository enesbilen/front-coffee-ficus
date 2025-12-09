'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('tr');

  // LocalStorage'dan dil tercihini yükle
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage === 'tr' || savedLanguage === 'en') {
      setLanguage(savedLanguage);
    }
  }, []);

  // Dil değiştiğinde localStorage'a kaydet
  const changeLanguage = (lang) => {
    if (lang === 'tr' || lang === 'en') {
      setLanguage(lang);
      localStorage.setItem('language', lang);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

