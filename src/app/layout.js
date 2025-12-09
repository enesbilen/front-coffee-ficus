import "./globals.css";
import { LanguageProvider } from "./contexts/LanguageContext";

export const metadata = {
  title: "Ficus Botanics Coffee",
  description: "Ficus Botanics Coffee Menu",
  icons: {
    icon: '/ficuslogo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
