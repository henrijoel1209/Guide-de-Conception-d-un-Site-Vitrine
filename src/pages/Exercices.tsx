import React from 'react';
import { Code, CheckCircle, AlertCircle } from 'lucide-react';

const Exercices: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            <span className="block">Exercices pratiques</span>
            <span className="block text-blue-600">Développement Web</span>
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            Améliorez vos compétences en développement web avec ces exercices pratiques
          </p>
        </div>

        {/* Exercice 1 */}
        <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-12">
          <div className="px-4 py-5 sm:px-6 bg-blue-50">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Exercice 1 - Structure HTML d'un site vitrine
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Création de la structure HTML de base pour un site vitrine
            </p>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Objectif
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                Créer la structure HTML de base d'un site vitrine avec 7 pages sans utiliser de CSS.
              </dd>
            </div>
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 bg-gray-50">
              <dt className="text-sm font-medium text-gray-500">
                Consignes
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Créez 7 pages HTML liées entre elles</li>
                  <li>Structurez le contenu avec des balises HTML sémantiques</li>
                  <li>Ne pas utiliser de CSS</li>
                  <li>Inclure un menu de navigation sur chaque page</li>
                  <li>Organiser les fichiers dans les dossiers appropriés</li>
                </ul>
              </dd>
            </div>
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500 flex items-center">
                <span>Structure de dossiers</span>
                <span className="ml-2 text-blue-600 text-lg font-semibold">Réponse</span>
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 font-mono">
                <div className="space-y-6">
                  <div className="bg-gray-50 p-4 rounded-md">
                    <h4 className="font-medium text-gray-900 mb-2">Structure des dossiers :</h4>
                    <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto text-sm">
{`/
├── index.html
│   ├── css/
│   ├── js/
│   ├── images/
│   │   ├── logo.png
│   │   ├── hero-bg.jpg
│   └── libs/
└── pages/
    ├── a-propos.html
    ├── services.html
    ├── realisations.html
    ├── demande-service.html
    ├── cv.html
    ├── contact.html`}
                    </pre>
                  </div>

                  <div className="mt-6">
                    <h4 className="font-medium text-gray-900 mb-3">1. Fichier index.html :</h4>
                    <div className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                      <pre className="text-sm">
{`<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Accueil | Mon Portfolio</title>
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="index.html">Accueil</a></li>
                <li><a href="pages/a-propos.html">À propos</a></li>
                <li><a href="pages/services.html">Services</a></li>
                <li><a href="pages/realisations.html">Réalisations</a></li>
                <li><a href="pages/contact.html">Contact</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <h1>Bienvenue sur mon portfolio</h1>
        <p>Je suis développeur web passionné par la création de sites web modernes.</p>
    </main>
    
    <footer>
        <p>&copy; 2025 Mon Portfolio</p>
    </footer>
</body>
</html>`}
                      </pre>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="font-medium text-gray-900 mb-3">2. Fichier pages/a-propos.html :</h4>
                    <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto text-sm">
{`<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>À propos | Mon Portfolio</title>
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="../index.html">Accueil</a></li>
                <li><a href="a-propos.html">À propos</a></li>
                <li><a href="services.html">Services</a></li>
                <li><a href="realisations.html">Réalisations</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <h1>À propos de moi</h1>
        <section>
            <h2>Mon parcours</h2>
            <p>Je suis développeur web avec 5 ans d'expérience...</p>
        </section>
    </main>
    
    <footer>
        <p>&copy; 2025 Mon Portfolio</p>
    </footer>
</body>
</html>`}
                    </pre>
                  </div>

                  <div className="mt-6">
                    <h4 className="font-medium text-gray-900 mb-3">3. Fichier pages/services.html :</h4>
                    <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto text-sm">
{`<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Services | Mon Portfolio</title>
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="../index.html">Accueil</a></li>
                <li><a href="a-propos.html">À propos</a></li>
                <li><a href="services.html">Services</a></li>
                <li><a href="realisations.html">Réalisations</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <h1>Mes Services</h1>
        <section>
            <h2>Développement Web</h2>
            <p>Création de sites web sur mesure...</p>
        </section>
    </main>
    
    <footer>
        <p>&copy; 2025 Mon Portfolio</p>
    </footer>
</body>
</html>`}
                    </pre>
                  </div>

                  <div className="mt-6">
                    <h4 className="font-medium text-gray-900 mb-3">4. Fichier pages/contact.html :</h4>
                    <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto text-sm">
{`<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact | Mon Portfolio</title>
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="../index.html">Accueil</a></li>
                <li><a href="a-propos.html">À propos</a></li>
                <li><a href="services.html">Services</a></li>
                <li><a href="realisations.html">Réalisations</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <h1>Contactez-moi</h1>
        <form action="#" method="post">
            <div>
                <label for="nom">Nom :</label>
                <input type="text" id="nom" name="nom" required>
            </div>
            <div>
                <label for="email">Email :</label>
                <input type="email" id="email" name="email" required>
            </div>
            <div>
                <label for="message">Message :</label>
                <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit">Envoyer</button>
        </form>
    </main>
    
    <footer>
        <p>&copy; 2025 Mon Portfolio</p>
    </footer>
</body>
</html>`}
                    </pre>
                  </div>
                </div>
              </dd>
            </div>
            
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Correction
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-green-400" aria-hidden="true" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-green-700">
                        La structure de base est correcte. Voici les points clés à vérifier :
                      </p>
                      <ul className="mt-2 list-disc pl-5 text-sm text-green-700">
                        <li>Utilisation de balises sémantiques (header, nav, main, section, footer)</li>
                        <li>Navigation fonctionnelle entre toutes les pages</li>
                        <li>Structure de dossiers organisée</li>
                        <li>Pas de style CSS</li>
                        <li>Formulaires correctement structurés</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <AlertCircle className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-yellow-700">
                        Points de vigilance :
                      </p>
                      <ul className="mt-2 list-disc pl-5 text-sm text-yellow-700">
                        <li>Vérifiez que tous les liens sont relatifs et fonctionnent</li>
                        <li>Assurez-vous que le contenu est bien structuré avec des titres hiérarchiques</li>
                        <li>Utilisez l'attribut <code>for</code> dans les labels lié à l'<code>id</code> des inputs</li>
                        <li>Vérifiez l'indentation et la validité du code HTML</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </dd>
            </div>
          </div>
        </div>

        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6 bg-blue-50">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Prochain exercice
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              JavaScript et interactivité
            </p>
          </div>
          <div className="px-4 py-5 sm:p-6">
            <p className="text-gray-600 mb-4">
              Dans le prochain exercice, nous allons ajouter des fonctionnalités JavaScript pour rendre le site interactif.
            </p>
            <button
              disabled
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 opacity-50 cursor-not-allowed"
            >
              <span>Exercice suivant</span>
              <svg className="ml-2 -mr-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exercices;