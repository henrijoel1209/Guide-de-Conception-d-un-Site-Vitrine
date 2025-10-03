import React from 'react';
import { Github, Linkedin, Twitter, Facebook, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">GUIDE</h3>
            <p className="text-gray-400 text-sm">
              Plateforme d'apprentissage pour les développeurs débutants.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Accueil</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white">À propos</a></li>
              <li><a href="#courses" className="text-gray-400 hover:text-white">Cours</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-4">Cours</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">HTML</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">CSS</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">JavaScript</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Plus de cours à venir...</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-4">Contact</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">GitHub</span>
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="mailto:anehenrijoel2@gmail.com" className="text-gray-400 hover:text-white">
                <span className="sr-only">Email</span>
                <Mail className="h-6 w-6" />
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-400">
              Une question ? Envoyez-nous un email à <a href="mailto:anehenrijoel2@gmail.com" className="text-blue-400 hover:underline">anehenrijoel2@gmail.com</a>
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} GUIDE - Plateforme d'apprentissage. Tous droits réservés.
            <br />
            Créé par <span className="font-semibold">ANE HENRI JOEL</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
