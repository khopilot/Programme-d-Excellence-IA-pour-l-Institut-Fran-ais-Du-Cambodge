import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Institut Français - Demo",
  description: "Démonstration du site web de l'Institut Français",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <header className="bg-blue-900 text-white">
          <div className="container mx-auto px-4 py-6">
            <nav className="flex items-center justify-between">
              <div className="text-2xl font-bold">Institut Français</div>
              <ul className="flex space-x-6">
                <li><a href="/" className="hover:text-blue-200">Accueil</a></li>
                <li><a href="/courses" className="hover:text-blue-200">Cours</a></li>
                <li><a href="/events" className="hover:text-blue-200">Événements</a></li>
                <li><a href="/about" className="hover:text-blue-200">À propos</a></li>
                <li><a href="/contact" className="hover:text-blue-200">Contact</a></li>
              </ul>
            </nav>
          </div>
        </header>
        
        <main className="min-h-screen">
          {children}
        </main>

        <footer className="bg-gray-100">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact</h3>
                <p>Institut Français</p>
                <p>123 Rue Example</p>
                <p>75001 Paris, France</p>
                <p>Email: contact@institut-francais.demo</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Liens Rapides</h3>
                <ul className="space-y-2">
                  <li><a href="/programs" className="hover:text-blue-600">Nos programmes</a></li>
                  <li><a href="/resources" className="hover:text-blue-600">Ressources</a></li>
                  <li><a href="/news" className="hover:text-blue-600">Actualités</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Suivez-nous</h3>
                <div className="flex space-x-4">
                  <a href="#" className="hover:text-blue-600">Facebook</a>
                  <a href="#" className="hover:text-blue-600">Twitter</a>
                  <a href="#" className="hover:text-blue-600">Instagram</a>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200 text-center">
              <p>© {new Date().getFullYear()} Institut Français. Tous droits réservés.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
