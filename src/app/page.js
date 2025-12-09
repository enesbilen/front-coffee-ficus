'use client';

import { useState, useEffect } from 'react';
import MenuSection from "./components/MenuSection";
import MenuItem from "./components/MenuItem";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { getMenu } from "./lib/api";
import { useLanguage } from "./contexts/LanguageContext";

export default function Home() {
  const { language } = useLanguage();
  const [menuData, setMenuData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        setLoading(true);
        const response = await getMenu();
        // API response formatı: { success: true, data: { categories: [], products: [] } }
        if (response.success && response.data) {
          setMenuData(response.data);
        } else {
          setError(language === 'tr' ? 'Menü verisi alınamadı' : 'Menu data could not be retrieved');
        }
      } catch (err) {
        console.error('Menü yüklenirken hata:', err);
        setError(language === 'tr' ? 'Menü yüklenirken bir hata oluştu' : 'An error occurred while loading the menu');
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, [language]);

  if (loading) {
    return (
      <div className="w-full max-w-[480px] mx-auto py-6 px-6 md:px-0">
        <Header />
        <div className="text-center py-20 text-[#777]">
          {language === 'tr' ? 'Yükleniyor...' : 'Loading...'}
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full max-w-[480px] mx-auto py-6 px-6 md:px-0">
        <Header />
        <div className="text-center py-20 text-red-600">{error}</div>
        <Footer />
      </div>
    );
  }

  if (!menuData || !menuData.categories || !menuData.products) {
    return (
      <div className="w-full max-w-[480px] mx-auto py-6 px-6 md:px-0">
        <Header />
        <div className="text-center py-20 text-[#777]">
          {language === 'tr' ? 'Menü verisi bulunamadı' : 'Menu data not found'}
        </div>
        <Footer />
      </div>
    );
  }

  // Kategorileri sortOrder'a göre sırala
  const sortedCategories = [...menuData.categories].sort((a, b) => a.sortOrder - b.sortOrder);
  
  // Ürünleri kategori ID'sine göre grupla
  const productsByCategory = {};
  menuData.products.forEach(product => {
    if (product.status === 1) { // Sadece aktif ürünleri göster
      if (!productsByCategory[product.categoryId]) {
        productsByCategory[product.categoryId] = [];
      }
      productsByCategory[product.categoryId].push(product);
    }
  });

  return (
    <div className="w-full max-w-[480px] mx-auto py-6 px-6 md:px-0">
      <Header />

      {sortedCategories.map((category) => {
        if (category.status !== 1) return null; // Sadece aktif kategorileri göster
        
        const categoryProducts = productsByCategory[category.id] || [];
        
        // Eğer kategoride ürün yoksa kategoriyi gösterme
        if (categoryProducts.length === 0) return null;
        
        const categoryName = category.name?.[language] || category.name?.tr || category.name?.en || 'Kategori';
        
        return (
          <MenuSection 
            key={category.id} 
            title={categoryName.toUpperCase()} 
            defaultOpen={true}
          >
            {categoryProducts.map(product => {
              const productName = product.name?.[language] || product.name?.tr || product.name?.en || 'Ürün';
              const productDescription = product.description?.[language] || product.description?.tr || product.description?.en || '';
              const productPrice = product.price ? `${product.price} ₺` : '';

              return (
                <MenuItem 
                  key={product.id}
                  name={productName}
                  price={productPrice}
                  description={productDescription}
                />
              );
            })}
          </MenuSection>
        );
      })}

      <Footer />
    </div>
  );
}

