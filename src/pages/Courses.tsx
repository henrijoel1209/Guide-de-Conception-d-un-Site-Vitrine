import React, { useState } from 'react';
import { Code, Layers, ChevronDown, ChevronUp, CheckCircle, Clock, ListChecks } from 'lucide-react';

// Interfaces
interface LessonContent {
  id: string;
  title: string;
  duration: string;
  completed: boolean;
  content?: string[];
}

interface Module {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  lessons: LessonContent[];
}

interface Course {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  modules: Module[];
}

const Courses: React.FC = () => {
  // État pour gérer l'affichage
  const [expandedCourse, setExpandedCourse] = useState<string | null>(null);
  const [expandedModule, setExpandedModule] = useState<string | null>(null);
  const [selectedLesson, setSelectedLesson] = useState<LessonContent | null>(null);

  // Gestion des événements
  const handleLessonClick = (e: React.MouseEvent, lesson: LessonContent) => {
    e.stopPropagation(); // Empêche la propagation du clic au parent
    setSelectedLesson(selectedLesson?.id === lesson.id ? null : lesson);
  };

  const closeLesson = () => {
    setSelectedLesson(null);
  };

  const handleLessonComplete = () => {
    if (!selectedLesson) return;
    
    // Mettre à jour l'état des cours pour marquer la leçon comme terminée
    const updatedCourses = courses.map(course => ({
      ...course,
      modules: course.modules.map(module => ({
        ...module,
        lessons: module.lessons.map(lesson => 
          lesson.id === selectedLesson.id 
            ? { ...lesson, completed: !lesson.completed }
            : lesson
        )
      }))
    }));
    
    // Mettre à jour l'état local
    setSelectedLesson({
      ...selectedLesson,
      completed: !selectedLesson.completed
    });
    
    // Ici, vous pourriez ajouter un appel API pour sauvegarder la progression
    console.log('Leçon marquée comme terminée :', selectedLesson.id);
  };

  const handleDownloadResources = () => {
    if (!selectedLesson) return;
    
    // Créer un lien de téléchargement factice pour la démonstration
    // Dans une application réelle, vous devriez pointer vers une vraie ressource
    const resources = {
      'html-intro': 'https://example.com/resources/html-intro.zip',
      'html-structure': 'https://example.com/resources/html-structure.zip',
      'html-text': 'https://example.com/resources/html-text.zip',
      'html-links': 'https://example.com/resources/html-links.zip',
      'html-tables': 'https://example.com/resources/html-tables.zip',
      'html-forms': 'https://example.com/resources/html-forms.zip',
      'html-semantic': 'https://example.com/resources/html-semantic.zip',
      'html-practice': 'https://example.com/resources/html-practice.zip'
    };
    
    const resourceUrl = resources[selectedLesson.id as keyof typeof resources] || '#';
    
    // Créer un élément <a> invisible pour déclencher le téléchargement
    const link = document.createElement('a');
    link.href = resourceUrl;
    link.download = `ressources-${selectedLesson.id}.zip`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    console.log('Téléchargement des ressources pour :', selectedLesson.id);
  };

  const toggleCourse = (e: React.MouseEvent, courseId: string) => {
    e.stopPropagation(); // Empêche la propagation du clic au parent
    setExpandedCourse(expandedCourse === courseId ? null : courseId);
    setExpandedModule(null);
  };

  const toggleModule = (e: React.MouseEvent, moduleId: string) => {
    e.stopPropagation(); // Empêche la propagation du clic au parent
    setExpandedModule(expandedModule === moduleId ? null : moduleId);
  };

  // Données des cours - Démarrage avec HTML uniquement
  const courses: Course[] = [
    {
      id: 'debutant-web',
      title: 'Débutant en Développement Web',
      description: 'Apprenez les bases du développement web avec HTML, étape par étape.',
      icon: <Code className="w-6 h-6" />,
      color: 'bg-blue-100 text-blue-600',
      modules: [
        {
          id: 'html-bases',
          title: 'Les bases du HTML',
          description: 'Maîtrisez les fondamentaux du HTML pour structurer vos premières pages web.',
          icon: <Layers className="w-5 h-5" />,
          lessons: [
            { 
              id: 'html-intro', 
              title: '1. Introduction au HTML', 
              duration: '30 min', 
              completed: false,
              content: [
                'Comprendre ce qu\'est le HTML',
                'Structure de base d\'un document HTML',
                'Créer votre première page HTML',
                'Visualiser votre page dans un navigateur'
              ]
            },
            { 
              id: 'html-structure', 
              title: '2. Structure de base', 
              duration: '45 min', 
              completed: false,
              content: [
                'La déclaration DOCTYPE',
                'Les balises html, head et body',
                'Les métadonnées (charset, viewport, titre)', 
                'Les commentaires en HTML'
              ]
            },
            { 
              id: 'html-text', 
              title: '3. Texte et titres', 
              duration: '45 min', 
              completed: false,
              content: [
                'Les titres (h1 à h6)',
                'Les paragraphes et sauts de ligne',
                'Mise en forme de base (gras, italique)',
                'Les listes (ordonnées et non ordonnées)'
              ]
            },
            { 
              id: 'html-links', 
              title: '4. Liens et images', 
              duration: '45 min', 
              completed: false,
              content: [
                'Créer des liens internes et externes',
                'Les ancres dans la même page',
                'Intégrer des images',
                'Les attributs alt et title'
              ]
            },
            { 
              id: 'html-tables', 
              title: '5. Tableaux', 
              duration: '1h', 
              completed: false,
              content: [
                'Créer un tableau simple',
                'Fusionner des cellules',
                'En-têtes de colonnes et de lignes',
                'Accessibilité des tableaux'
              ]
            },
            { 
              id: 'html-forms', 
              title: '6. Formulaires', 
              duration: '1h 15min', 
              completed: false,
              content: [
                'La balise form et ses attributs',
                'Les différents types de champs',
                'Les boutons et la validation',
                'Organisation avec fieldset et legend'
              ]
            },
            { 
              id: 'html-semantic', 
              title: '7. HTML sémantique', 
              duration: '45 min', 
              completed: false,
              content: [
                'Pourquoi la sémantique est importante',
                'Les balises sémantiques (header, nav, main, section, etc.)',
                'Améliorer l\'accessibilité',
                'Exercice pratique'
              ]
            },
            { 
              id: 'html-practice', 
              title: '8. Projet pratique', 
              duration: '2h', 
              completed: false,
              content: [
                'Créer une page CV personnelle',
                'Structurer le contenu',
                'Ajouter des liens et des images',
                'Mettre en forme avec les balises appropriées'
              ]
            }
          ]
        }
        // Les modules CSS et autres seront ajoutés ultérieurement
      ]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Nos Cours en Ligne
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Apprenez à votre rythme avec nos cours complets et interactifs
          </p>
        </div>
        
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Mes cours
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Découvrez les cours conçus pour vous accompagner dans votre apprentissage du développement web.
          </p>
        </div>

        {selectedLesson ? (
          <div className="mt-8 bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">{selectedLesson.title}</h3>
                <div className="flex items-center">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mr-4">
                    <Clock className="h-4 w-4 mr-1" />
                    {selectedLesson.duration}
                  </span>
                  <button
                    onClick={closeLesson}
                    className="text-gray-400 hover:text-gray-500 focus:outline-none"
                  >
                    <span className="sr-only">Fermer</span>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
              
              {selectedLesson.content && selectedLesson.content.length > 0 && (
                <div className="mt-6">
                  <h4 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                    <ListChecks className="w-5 h-5 mr-2 text-blue-600" />
                    Objectifs de la leçon
                  </h4>
                  <ul className="space-y-2">
                    {selectedLesson.content.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="text-lg font-medium text-gray-900 mb-4">Contenu détaillé</h4>
                <div className="prose max-w-none">
                  {selectedLesson.id === 'html-intro' && (
                    <div className="space-y-6">
                      <section>
                        <h3 className="text-xl font-semibold mb-3">Qu'est-ce que le HTML ?</h3>
                        <p>Le HTML (HyperText Markup Language) est le langage standard pour créer des pages web. Il permet de structurer le contenu d'une page en utilisant des balises.</p>
                        <div className="mt-4 bg-gray-50 p-4 rounded-md">
                          <h4 className="font-medium mb-2">Exemple de structure de base :</h4>
                          <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
{`<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ma première page</title>
</head>
<body>
  <h1>Bienvenue sur ma page</h1>
  <p>Ceci est mon premier paragraphe en HTML.</p>
</body>
</html>`}
                          </pre>
                        </div>
                      </section>

                      <section className="mt-6">
                        <h3 className="text-xl font-semibold mb-3">Comment créer votre première page HTML</h3>
                        <ol className="list-decimal pl-5 space-y-2">
                          <li>Ouvrez un éditeur de texte (comme VS Code, Sublime Text, ou même le Bloc-notes)</li>
                          <li>Copiez le code ci-dessus</li>
                          <li>Enregistrez le fichier avec l'extension <code className="bg-gray-100 px-1.5 py-0.5 rounded">.html</code> (par exemple <code className="bg-gray-100 px-1.5 py-0.5 rounded">index.html</code>)</li>
                          <li>Ouvrez le fichier dans votre navigateur en double-cliquant dessus</li>
                        </ol>
                      </section>

                      <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-400 rounded">
                        <h4 className="font-medium text-blue-800">Astuce :</h4>
                        <p className="text-blue-700 mt-1">Utilisez la touche F12 ou faites un clic droit puis "Inspecter" pour ouvrir les outils de développement de votre navigateur et voir le code HTML de n'importe quelle page web.</p>
                      </div>
                    </div>
                  )}

                  {selectedLesson.id === 'html-structure' && (
                    <div className="space-y-6">
                      <section>
                        <h3 className="text-xl font-semibold mb-3">Structure de base d'un document HTML</h3>
                        <p>Un document HTML bien structuré contient plusieurs éléments essentiels :</p>
                        
                        <div className="mt-4 bg-gray-50 p-4 rounded-md">
                          <h4 className="font-medium mb-2">La déclaration DOCTYPE</h4>
                          <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
{`<!DOCTYPE html>`}
                          </pre>
                          <p className="mt-2 text-sm text-gray-600">Cette déclaration indique au navigateur qu'il s'agit d'un document HTML5.</p>
                        </div>

                        <div className="mt-4 bg-gray-50 p-4 rounded-md">
                          <h4 className="font-medium mb-2">L'élément racine html</h4>
                          <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
{`<html lang="fr">
  <!-- Contenu de la page -->
</html>`}
                          </pre>
                          <p className="mt-2 text-sm text-gray-600">L'attribut <code className="bg-gray-100 px-1 py-0.5 rounded">lang</code> spécifie la langue de la page.</p>
                        </div>

                        <div className="mt-4 bg-gray-50 p-4 rounded-md">
                          <h4 className="font-medium mb-2">L'en-tête (head)</h4>
                          <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
{`<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Titre de la page</title>
  <meta name="description" content="Description de la page">
  <link rel="stylesheet" href="styles.css">
</head>`}
                          </pre>
                        </div>

                        <div className="mt-4 bg-gray-50 p-4 rounded-md">
                          <h4 className="font-medium mb-2">Le corps (body)</h4>
                          <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
{`<body>
  <!-- Contenu visible de la page -->
  <h1>Mon titre principal</h1>
  <p>Un paragraphe de texte.</p>
</body>`}
                          </pre>
                        </div>
                      </section>

                      <section className="mt-6">
                        <h3 className="text-xl font-semibold mb-3">Les commentaires en HTML</h3>
                        <p>Les commentaires permettent d'ajouter des notes dans le code qui ne seront pas affichées dans le navigateur :</p>
                        <pre className="mt-2 bg-gray-100 p-3 rounded text-sm overflow-x-auto">
{`<!-- Ceci est un commentaire en HTML -->
<p>Ce texte est visible</p>
<!-- 
  Les commentaires sur plusieurs lignes
  sont également possibles
-->`}
                        </pre>
                      </section>
                    </div>
                  )}

                  {selectedLesson.id === 'html-text' && (
                    <div className="space-y-6">
                      <section>
                        <h3 className="text-xl font-semibold mb-3">Les titres (h1 à h6)</h3>
                        <p>Les titres permettent de structurer hiérarchiquement votre contenu :</p>
                        <div className="mt-4 bg-gray-50 p-4 rounded-md">
                          <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
{`<h1>Titre principal (utilisé une seule fois par page)</h1>
<h2>Sous-titre de section</h2>
<h3>Sous-section</h3>
<h4>Et ainsi de suite...</h4>
<h5>Jusqu'à h6</h5>
<h6>Le plus petit niveau de titre</h6>`}
                          </pre>
                        </div>
                      </section>

                      <section className="mt-6">
                        <h3 className="text-xl font-semibold mb-3">Les paragraphes et sauts de ligne</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-medium mb-2">Code HTML</h4>
                            <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
{`<p>Ceci est un paragraphe.</p>
<p>Ceci est un autre paragraphe avec un <br>saut de ligne à l'intérieur.</p>

<pre>
  Le texte préformaté
  préserve les espaces
  et les sauts de ligne
</pre>

<hr>
<p>Une règle horizontale au-dessus de ce texte.</p>`}
                            </pre>
                          </div>
                          <div>
                            <h4 className="font-medium mb-2">Résultat</h4>
                            <div className="bg-white p-4 border rounded">
                              <p>Ceci est un paragraphe.</p>
                              <p>Ceci est un autre paragraphe avec un <br />saut de ligne à l'intérieur.</p>
                              <pre className="mt-2 bg-gray-100 p-2 rounded">
  Le texte préformaté
  préserve les espaces
  et les sauts de ligne
                              </pre>
                              <hr className="my-3" />
                              <p>Une règle horizontale au-dessus de ce texte.</p>
                            </div>
                          </div>
                        </div>
                      </section>

                      <section className="mt-6">
                        <h3 className="text-xl font-semibold mb-3">Mise en forme de base</h3>
                        <div className="overflow-x-auto">
                          <table className="min-w-full bg-white border border-gray-200">
                            <thead>
                              <tr className="bg-gray-100">
                                <th className="py-2 px-4 border-b">Balise</th>
                                <th className="py-2 px-4 border-b">Description</th>
                                <th className="py-2 px-4 border-b">Exemple</th>
                                <th className="py-2 px-4 border-b">Résultat</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="py-2 px-4 border-b"><code>&lt;strong&gt;</code></td>
                                <td className="py-2 px-4 border-b">Texte en gras (forte importance)</td>
                                <td className="py-2 px-4 border-b"><code>&lt;strong&gt;Important&lt;/strong&gt;</code></td>
                                <td className="py-2 px-4 border-b"><strong>Important</strong></td>
                              </tr>
                              <tr>
                                <td className="py-2 px-4 border-b"><code>&lt;em&gt;</code></td>
                                <td className="py-2 px-4 border-b">Texte en italique (emphase)</td>
                                <td className="py-2 px-4 border-b"><code>&lt;em&gt;Italique&lt;/em&gt;</code></td>
                                <td className="py-2 px-4 border-b"><em>Italique</em></td>
                              </tr>
                              <tr>
                                <td className="py-2 px-4 border-b"><code>&lt;u&gt;</code></td>
                                <td className="py-2 px-4 border-b">Souligné</td>
                                <td className="py-2 px-4 border-b"><code>&lt;u&gt;Souligné&lt;/u&gt;</code></td>
                                <td className="py-2 px-4 border-b"><u>Souligné</u></td>
                              </tr>
                              <tr>
                                <td className="py-2 px-4 border-b"><code>&lt;mark&gt;</code></td>
                                <td className="py-2 px-4 border-b">Surligné</td>
                                <td className="py-2 px-4 border-b"><code>&lt;mark&gt;Surligné&lt;/mark&gt;</code></td>
                                <td className="py-2 px-4 border-b"><mark>Surligné</mark></td>
                              </tr>
                              <tr>
                                <td className="py-2 px-4 border-b"><code>&lt;small&gt;</code></td>
                                <td className="py-2 px-4 border-b">Texte plus petit</td>
                                <td className="py-2 px-4 border-b"><code>&lt;small&gt;Petit texte&lt;/small&gt;</code></td>
                                <td className="py-2 px-4 border-b"><small>Petit texte</small></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </section>

                      <section className="mt-6">
                        <h3 className="text-xl font-semibold mb-3">Listes ordonnées et non ordonnées</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-medium mb-2">Liste non ordonnée</h4>
                            <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
{`<ul>
  <li>Élément 1</li>
  <li>Élément 2
    <ul>
      <li>Sous-élément 2.1</li>
      <li>Sous-élément 2.2</li>
    </ul>
  </li>
  <li>Élément 3</li>
</ul>`}
                            </pre>
                          </div>
                          <div>
                            <h4 className="font-medium mb-2">Liste ordonnée</h4>
                            <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
{`<ol>
  <li>Première étape</li>
  <li>Deuxième étape
    <ol type="a">
      <li>Sous-étape a</li>
      <li>Sous-étape b</li>
    </ol>
  </li>
  <li>Dernière étape</li>
</ol>`}
                            </pre>
                          </div>
                        </div>
                      </section>
                    </div>
                  )}

                  {selectedLesson.id === 'html-links' && (
                    <div className="space-y-6">
                      <section>
                        <h3 className="text-xl font-semibold mb-3">Créer des liens</h3>
                        <p>La balise <code className="bg-gray-100 px-1.5 py-0.5 rounded">&lt;a&gt;</code> est utilisée pour créer des liens hypertextes :</p>
                        
                        <div className="mt-4 bg-gray-50 p-4 rounded-md">
                          <h4 className="font-medium mb-2">Lien vers une autre page web</h4>
                          <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
{`<a href="https://www.example.com">Visitez Example.com</a>`}
                          </pre>
                          <p className="mt-2 text-sm text-gray-600">Ouvre le lien dans le même onglet.</p>
                        </div>

                        <div className="mt-4 bg-gray-50 p-4 rounded-md">
                          <h4 className="font-medium mb-2">Ouvrir dans un nouvel onglet</h4>
                          <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
{`<a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
  Ouvrir dans un nouvel onglet
</a>`}
                          </pre>
                          <p className="mt-2 text-sm text-gray-600">Les attributs <code className="bg-gray-100 px-1 py-0.5 rounded">target="_blank"</code> et <code className="bg-gray-100 px-1 py-0.5 rounded">rel="noopener noreferrer"</code> sont importants pour la sécurité.</p>
                        </div>

                        <div className="mt-4 bg-gray-50 p-4 rounded-md">
                          <h4 className="font-medium mb-2">Lien vers une ancre dans la même page</h4>
                          <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
{`<h2 id="section1">Section 1</h2>
<p>Contenu de la section 1...</p>

<!-- Plus bas dans la page -->
<a href="#section1">Retour à la section 1</a>`}
                          </pre>
                        </div>
                      </section>

                      <section className="mt-6">
                        <h3 className="text-xl font-semibold mb-3">Intégrer des images</h3>
                        <p>La balise <code className="bg-gray-100 px-1.5 py-0.5 rounded">&lt;img&gt;</code> est utilisée pour insérer des images :</p>
                        
                        <div className="mt-4 bg-gray-50 p-4 rounded-md">
                          <h4 className="font-medium mb-2">Image de base</h4>
                          <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
{`<img 
  src="chemin/vers/image.jpg" 
  alt="Description de l'image" 
  width="400" 
  height="300">`}
                          </pre>
                          <ul className="mt-2 text-sm text-gray-600 space-y-1">
                            <li><strong>src :</strong> Chemin vers l'image (obligatoire)</li>
                            <li><strong>alt :</strong> Texte alternatif (obligatoire pour l'accessibilité)</li>
                            <li><strong>width / height :</strong> Dimensions en pixels (optionnel mais recommandé)</li>
                          </ul>
                        </div>

                        <div className="mt-4 bg-gray-50 p-4 rounded-md">
                          <h4 className="font-medium mb-2">Image avec légende</h4>
                          <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
{`<figure>
  <img 
    src="chemin/vers/image.jpg" 
    alt="Paysage montagneux"
    width="600"
    height="400">
  <figcaption>Un magnifique paysage montagneux au coucher du soleil</figcaption>
</figure>`}
                          </pre>
                        </div>
                      </section>

                      <section className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-400 rounded">
                        <h3 className="text-lg font-semibold text-blue-800 mb-2">Bonnes pratiques</h3>
                        <ul className="list-disc pl-5 space-y-1 text-blue-700">
                          <li>Toujours fournir un texte alternatif (<code className="bg-blue-100 px-1 py-0.5 rounded">alt</code>) pour les images</li>
                          <li>Utiliser des chemins relatifs pour les images de votre site</li>
                          <li>Optimiser les images pour le web (taille et poids)</li>
                          <li>Utiliser des formats modernes comme WebP pour de meilleures performances</li>
                          <li>Pour les images décoratives, utiliser <code className="bg-blue-100 px-1 py-0.5 rounded">alt=""</code></li>
                        </ul>
                      </section>
                    </div>
                  )}

                  {selectedLesson.id === 'html-tables' && (
                    <div className="space-y-6">
                      <section>
                        <h3 className="text-xl font-semibold mb-3">Créer un tableau simple</h3>
                        <p>Les tableaux en HTML sont créés avec les balises <code className="bg-gray-100 px-1.5 py-0.5 rounded">&lt;table&gt;</code>, <code className="bg-gray-100 px-1.5 py-0.5 rounded">&lt;tr&gt;</code>, <code className="bg-gray-100 px-1.5 py-0.5 rounded">&lt;th&gt;</code> et <code className="bg-gray-100 px-1.5 py-0.5 rounded">&lt;td&gt;</code> :</p>
                        
                        <div className="mt-4 bg-gray-50 p-4 rounded-md">
                          <h4 className="font-medium mb-2">Structure de base d'un tableau</h4>
                          <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
{`<table>
  <thead>
    <tr>
      <th>Nom</th>
      <th>Âge</th>
      <th>Ville</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Jean Dupont</td>
      <td>28</td>
      <td>Paris</td>
    </tr>
    <tr>
      <td>Marie Martin</td>
      <td>34</td>
      <td>Lyon</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="3">2 personnes au total</td>
    </tr>
  </tfoot>
</table>`}
                          </pre>
                        </div>
                      </section>

                      <section className="mt-6">
                        <h3 className="text-xl font-semibold mb-3">Fusionner des cellules</h3>
                        <p>Utilisez les attributs <code className="bg-gray-100 px-1.5 py-0.5 rounded">colspan</code> et <code className="bg-gray-100 px-1.5 py-0.5 rounded">rowspan</code> pour fusionner des cellules :</p>
                        
                        <div className="mt-4 grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-medium mb-2">Code HTML</h4>
                            <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
{`<table class="border border-gray-300">
  <tr>
    <th colspan="2" class="text-center">Horaires d'ouverture</th>
  </tr>
  <tr>
    <td rowspan="2">Lundi - Vendredi</td>
    <td>9h - 12h</td>
  </tr>
  <tr>
    <td>14h - 18h</td>
  </tr>
  <tr>
    <td>Samedi</td>
    <td>10h - 16h</td>
  </tr>
  <tr>
    <td>Dimanche</td>
    <td>Fermé</td>
  </tr>
</table>`}
                            </pre>
                          </div>
                          <div>
                            <h4 className="font-medium mb-2">Résultat</h4>
                            <div className="border border-gray-300 p-4 rounded">
                              <table className="border border-gray-300 w-full">
                                <tr className="border-b border-gray-300">
                                  <th colSpan={2} className="border border-gray-300 p-2 text-center bg-gray-100">Horaires d'ouverture</th>
                                </tr>
                                <tr>
                                  <td rowSpan={2} className="border border-gray-300 p-2">Lundi - Vendredi</td>
                                  <td className="border border-gray-300 p-2">9h - 12h</td>
                                </tr>
                                <tr>
                                  <td className="border border-gray-300 p-2">14h - 18h</td>
                                </tr>
                                <tr>
                                  <td className="border border-gray-300 p-2">Samedi</td>
                                  <td className="border border-gray-300 p-2">10h - 16h</td>
                                </tr>
                                <tr>
                                  <td className="border border-gray-300 p-2">Dimanche</td>
                                  <td className="border border-gray-300 p-2">Fermé</td>
                                </tr>
                              </table>
                            </div>
                          </div>
                        </div>
                      </section>

                      <section className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-400 rounded">
                        <h3 className="text-lg font-semibold text-blue-800 mb-2">Bonnes pratiques pour les tableaux</h3>
                        <ul className="list-disc pl-5 space-y-1 text-blue-700">
                          <li>Utilisez <code className="bg-blue-100 px-1 py-0.5 rounded">&lt;thead&gt;</code>, <code className="bg-blue-100 px-1 py-0.5 rounded">&lt;tbody&gt;</code> et <code className="bg-blue-100 px-1 py-0.5 rounded">&lt;tfoot&gt;</code> pour une meilleure structure</li>
                          <li>Utilisez <code className="bg-blue-100 px-1 py-0.5 rounded">&lt;th scope="col"&gt;</code> pour les en-têtes de colonne et <code className="bg-blue-100 px-1 py-0.5 rounded">&lt;th scope="row"&gt;</code> pour les en-têtes de ligne</li>
                          <li>Évitez d'utiliser les tableaux pour la mise en page - utilisez plutôt CSS Grid ou Flexbox</li>
                          <li>Ajoutez des attributs <code className="bg-blue-100 px-1 py-0.5 rounded">aria-*</code> pour améliorer l'accessibilité</li>
                          <li>Assurez-vous que le contenu reste compréhensible même sans le style visuel</li>
                        </ul>
                      </section>
                    </div>
                  )}

                  {selectedLesson.id === 'html-forms' && (
                    <div className="space-y-6">
                      <section>
                        <h3 className="text-xl font-semibold mb-3">Créer un formulaire de base</h3>
                        <p>Les formulaires sont créés avec la balise <code className="bg-gray-100 px-1.5 py-0.5 rounded">&lt;form&gt;</code> et contiennent différents types de champs :</p>
                        
                        <div className="mt-4 bg-gray-50 p-4 rounded-md">
                          <h4 className="font-medium mb-2">Exemple de formulaire d'inscription</h4>
                          <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
{`<form action="/inscription" method="POST">
  <div class="mb-4">
    <label for="nom" class="block mb-1">Nom complet :</label>
    <input type="text" id="nom" name="nom" required
           class="w-full p-2 border rounded">
  </div>

  <div class="mb-4">
    <label for="email" class="block mb-1">Email :</label>
    <input type="email" id="email" name="email" required
           class="w-full p-2 border rounded">
  </div>

  <div class="mb-4">
    <label for="password" class="block mb-1">Mot de passe :</label>
    <input type="password" id="password" name="password" required
           minlength="8" class="w-full p-2 border rounded">
  </div>

  <div class="mb-4">
    <label class="flex items-center">
      <input type="checkbox" name="newsletter" class="mr-2">
      <span>M'abonner à la newsletter</span>
    </label>
  </div>

  <div class="mb-4">
    <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded">
      S'inscrire
    </button>
  </div>
</form>`}
                          </pre>
                        </div>
                      </section>

                      <section className="mt-6">
                        <h3 className="text-xl font-semibold mb-3">Types de champs de formulaire</h3>
                        
                        <div className="overflow-x-auto mt-4">
                          <table className="min-w-full bg-white border border-gray-200">
                            <thead>
                              <tr className="bg-gray-100">
                                <th className="py-2 px-4 border-b text-left">Type</th>
                                <th className="py-2 px-4 border-b text-left">Description</th>
                                <th className="py-2 px-4 border-b text-left">Exemple</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="py-2 px-4 border-b"><code>text</code></td>
                                <td className="py-2 px-4 border-b">Champ de texte sur une ligne</td>
                                <td className="py-2 px-4 border-b"><input type="text" className="border p-1 w-full" placeholder="Saisissez du texte" /></td>
                              </tr>
                              <tr>
                                <td className="py-2 px-4 border-b"><code>email</code></td>
                                <td className="py-2 px-4 border-b">Champ pour les adresses email</td>
                                <td className="py-2 px-4 border-b"><input type="email" className="border p-1 w-full" placeholder="email@exemple.com" /></td>
                              </tr>
                              <tr>
                                <td className="py-2 px-4 border-b"><code>password</code></td>
                                <td className="py-2 px-4 border-b">Champ pour les mots de passe (masqué)</td>
                                <td className="py-2 px-4 border-b"><input type="password" className="border p-1 w-full" /></td>
                              </tr>
                              <tr>
                                <td className="py-2 px-4 border-b"><code>number</code></td>
                                <td className="py-2 px-4 border-b">Champ pour les nombres</td>
                                <td className="py-2 px-4 border-b"><input type="number" className="border p-1 w-24" min="1" max="100" /></td>
                              </tr>
                              <tr>
                                <td className="py-2 px-4 border-b"><code>date</code></td>
                                <td className="py-2 px-4 border-b">Sélecteur de date</td>
                                <td className="py-2 px-4 border-b"><input type="date" className="border p-1" /></td>
                              </tr>
                              <tr>
                                <td className="py-2 px-4 border-b"><code>radio</code></td>
                                <td className="py-2 px-4 border-b">Boutons radio (choix unique)</td>
                                <td className="py-2 px-4 border-b">
                                  <label className="inline-flex items-center mr-4">
                                    <input type="radio" name="option" className="mr-1" /> Option 1
                                  </label>
                                  <label className="inline-flex items-center">
                                    <input type="radio" name="option" className="mr-1" /> Option 2
                                  </label>
                                </td>
                              </tr>
                              <tr>
                                <td className="py-2 px-4 border-b"><code>checkbox</code></td>
                                <td className="py-2 px-4 border-b">Case à cocher</td>
                                <td className="py-2 px-4 border-b">
                                  <label className="inline-flex items-center">
                                    <input type="checkbox" className="mr-1" /> Accepter les conditions
                                  </label>
                                </td>
                              </tr>
                              <tr>
                                <td className="py-2 px-4 border-b"><code>select</code></td>
                                <td className="py-2 px-4 border-b">Menu déroulant</td>
                                <td className="py-2 px-4 border-b">
                                  <select className="border p-1 w-full">
                                    <option value="">Sélectionnez...</option>
                                    <option value="1">Option 1</option>
                                    <option value="2">Option 2</option>
                                    <option value="3">Option 3</option>
                                  </select>
                                </td>
                              </tr>
                              <tr>
                                <td className="py-2 px-4 border-b"><code>textarea</code></td>
                                <td className="py-2 px-4 border-b">Zone de texte multiligne</td>
                                <td className="py-2 px-4 border-b">
                                  <textarea rows={2} className="border p-1 w-full"></textarea>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </section>

                      <section className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-400 rounded">
                        <h3 className="text-lg font-semibold text-blue-800 mb-2">Bonnes pratiques pour les formulaires</h3>
                        <ul className="list-disc pl-5 space-y-1 text-blue-700">
                          <li>Toujours utiliser des balises <code className="bg-blue-100 px-1 py-0.5 rounded">&lt;label&gt;</code> associées aux champs avec l'attribut <code className="bg-blue-100 px-1 py-0.5 rounded">for</code></li>
                          <li>Utilisez des attributs <code className="bg-blue-100 px-1 py-0.5 rounded">required</code>, <code className="bg-blue-100 px-1 py-0.5 rounded">minlength</code>, <code className="bg-blue-100 px-1 py-0.5 rounded">maxlength</code> pour la validation côté client</li>
                          <li>Groupez les champs liés avec <code className="bg-blue-100 px-1 py-0.5 rounded">&lt;fieldset&gt;</code> et <code className="bg-blue-100 px-1 py-0.5 rounded">&lt;legend&gt;</code></li>
                          <li>Ajoutez des messages d'erreur clairs et accessibles</li>
                          <li>Utilisez des types d'entrée appropriés pour une meilleure expérience utilisateur sur mobile</li>
                          <li>Pensez à la validation côté serveur en plus de la validation côté client</li>
                        </ul>
                      </section>
                    </div>
                  )}

                  {selectedLesson.id === 'html-semantic' && (
                    <div className="space-y-6">
                      <section>
                        <h3 className="text-xl font-semibold mb-3">Qu'est-ce que le HTML sémantique ?</h3>
                        <p>Le HTML sémantique consiste à utiliser des balises qui donnent du sens au contenu plutôt que de se contenter de balises génériques comme <code className="bg-gray-100 px-1.5 py-0.5 rounded">&lt;div&gt;</code> ou <code className="bg-gray-100 px-1.5 py-0.5 rounded">&lt;span&gt;</code>.</p>
                        
                        <div className="mt-4 bg-gray-50 p-4 rounded-md">
                          <h4 className="font-medium mb-2">Balises sémantiques courantes</h4>
                          <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
{`<header>   <!-- En-tête de la page ou d'une section -->
<nav>      <!-- Barre de navigation principale -->
<main>     <!-- Contenu principal de la page -->
<article>  <!-- Contenu autonome (article, billet de blog, etc.) -->
<section>  <!-- Section thématique de contenu -->
<aside>    <!-- Contenu complémentaire (barre latérale) -->
<footer>   <!-- Pied de page ou de section -->
<figure>   <!-- Contenu autonome comme une image, un schéma, etc. -->
<figcaption> <!-- Légende pour un élément <figure> -->
<time>     <!-- Représente une date ou une heure -->
<mark>     <!-- Mise en évidence de texte -->`}
                          </pre>
                        </div>
                      </section>

                      <section className="mt-6">
                        <h3 className="text-xl font-semibold mb-3">Structure sémantique d'une page web</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-medium mb-2">Code HTML</h4>
                            <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
{`<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mon Site Web</title>
</head>
<body>
  <header>
    <h1>Mon Site Web</h1>
    <nav>
      <ul>
        <li><a href="#accueil">Accueil</a></li>
        <li><a href="#articles">Articles</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <article>
      <h2>Article du jour</h2>
      <p>Contenu de l'article...</p>
      <footer>
        <p>Publié le <time datetime="2023-10-03">3 octobre 2023</time></p>
      </footer>
    </article>
  </main>

  <aside>
    <h3>À propos</h3>
    <p>Quelques informations supplémentaires...</p>
  </aside>

  <footer>
    <p>&copy; 2023 Mon Site Web. Tous droits réservés.</p>
  </footer>
</body>
</html>`}
                            </pre>
                          </div>
                          <div>
                            <h4 className="font-medium mb-2">Avantages</h4>
                            <ul className="list-disc pl-5 space-y-2">
                              <li><strong>Accessibilité :</strong> Les lecteurs d'écran peuvent mieux interpréter la structure de la page.</li>
                              <li><strong>Référencement :</strong> Les moteurs de recherche comprennent mieux le contenu de votre page.</li>
                              <li><strong>Maintenance :</strong> Le code est plus lisible et plus facile à maintenir.</li>
                              <li><strong>Compatibilité :</strong> Meilleure interopérabilité avec les futures technologies web.</li>
                            </ul>
                            
                            <h4 className="font-medium mb-2 mt-4">Bonnes pratiques</h4>
                            <ul className="list-disc pl-5 space-y-2">
                              <li>Utilisez une seule balise <code className="bg-gray-100 px-1 py-0.5 rounded">&lt;h1&gt;</code> par page</li>
                              <li>Respectez la hiérarchie des titres (h1 &gt; h2 &gt; h3, etc.)</li>
                              <li>Utilisez <code className="bg-gray-100 px-1 py-0.5 rounded">&lt;nav&gt;</code> pour les menus de navigation principaux</li>
                              <li>Évitez les balises obsolètes comme <code className="bg-gray-100 px-1 py-0.5 rounded">&lt;center&gt;</code> ou <code className="bg-gray-100 px-1 py-0.5 rounded">&lt;font&gt;</code></li>
                            </ul>
                          </div>
                        </div>
                      </section>
                    </div>
                  )}

                  {selectedLesson.id === 'html-practice' && (
                    <div className="space-y-6">
                      <section>
                        <h3 className="text-xl font-semibold mb-3">Projet pratique : Créer un CV en ligne</h3>
                        <p>Pour mettre en pratique tout ce que vous avez appris, vous allez créer un CV en ligne en utilisant uniquement du HTML sémantique.</p>
                        
                        <div className="mt-6 bg-blue-50 p-4 rounded-md border-l-4 border-blue-400">
                          <h4 className="font-medium text-blue-800 mb-2">Instructions</h4>
                          <ol className="list-decimal pl-5 space-y-2">
                            <li>Créez un nouveau fichier nommé <code className="bg-blue-100 px-1.5 py-0.5 rounded">cv.html</code></li>
                            <li>Utilisez la structure de base d'un document HTML5</li>
                            <li>Structurez votre CV avec des balises sémantiques appropriées</li>
                            <li>Incluez les sections suivantes :
                              <ul className="list-disc pl-5 mt-2 space-y-1">
                                <li>En-tête avec votre nom et titre professionnel</li>
                                <li>Section de présentation personnelle</li>
                                <li>Expérience professionnelle (utilisez des listes)</li>
                                <li>Formation et diplômes</li>
                                <li>Compétences techniques (utilisez des listes à puces)</li>
                                <li>Coordonnées de contact</li>
                              </ul>
                            </li>
                            <li>Ajoutez des liens vers vos profils en ligne (LinkedIn, GitHub, etc.)</li>
                            <li>Utilisez des balises sémantiques comme <code className="bg-blue-100 px-1 py-0.5 rounded">&lt;address&gt;</code> pour les coordonnées</li>
                          </ol>
                        </div>

                        <div className="mt-6">
                          <h4 className="font-medium mb-2">Exemple de structure</h4>
                          <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
{`<header>
  <h1>Prénom Nom</h1>
  <p>Développeur Web Junior</p>
</header>

<section>
  <h2>À propos de moi</h2>
  <p>Un paragraphe qui vous présente brièvement.</p>
</section>

<section>
  <h2>Expérience professionnelle</h2>
  <article>
    <h3>Poste occupé</h3>
    <p><strong>Entreprise</strong> - <time>2020-2023</time></p>
    <p>Description des responsabilités et réalisations.</p>
  </article>
  <!-- Plus d'expériences... -->
</section>

<section>
  <h2>Formation</h2>
  <article>
    <h3>Diplôme obtenu</h3>
    <p><strong>Établissement</strong> - <time>2018-2020</time></p>
  </article>
  <!-- Plus de formations... -->
</section>

<aside>
  <h2>Compétences techniques</h2>
  <ul>
    <li>HTML5 et CSS3</li>
    <li>JavaScript</li>
    <li>Git et GitHub</li>
    <!-- Plus de compétences... -->
  </ul>
</aside>

<footer>
  <h2>Contact</h2>
  <address>
    Email: <a href="mailto:votre@email.com">votre@email.com</a><br>
    Téléphone: <a href="tel:+33123456789">+33 1 23 45 67 89</a><br>
    LinkedIn: <a href="https://linkedin.com/in/votreprofil" target="_blank" rel="noopener noreferrer">linkedin.com/in/votreprofil</a>
  </address>
</footer>`}
                          </pre>
                        </div>

                        <div className="mt-6 p-4 bg-green-50 border-l-4 border-green-400 rounded">
                          <h4 className="text-lg font-semibold text-green-800 mb-2">Conseils pour réussir</h4>
                          <ul className="list-disc pl-5 space-y-1 text-green-700">
                            <li>Validez votre code avec le <a href="https://validator.w3.org/" target="_blank" rel="noopener noreferrer" className="text-green-600 underline">validateur HTML du W3C</a></li>
                            <li>Vérifiez l'accessibilité avec des outils comme <a href="https://wave.webaim.org/" target="_blank" rel="noopener noreferrer" className="text-green-600 underline">WAVE</a></li>
                            <li>Testez sur différents navigateurs (Chrome, Firefox, Edge)</li>
                            <li>Demandez des retours à vos pairs ou à la communauté</li>
                            <li>Pensez à versionner votre code avec Git</li>
                          </ul>
                        </div>
                      </section>
                    </div>
                  )}

                  {!['html-intro', 'html-structure', 'html-text', 'html-links', 'html-tables', 'html-forms', 'html-semantic', 'html-practice'].includes(selectedLesson.id) && (
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm text-yellow-700">
                            Le contenu détaillé de cette leçon sera bientôt disponible. Commencez par créer la structure de base de votre projet.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200 flex justify-between">
                <button
                  onClick={closeLesson}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Retour aux cours
                </button>
                <div className="flex space-x-3">
                  <button
                    onClick={handleLessonComplete}
                    className={`inline-flex items-center px-4 py-2 border ${selectedLesson?.completed ? 'border-green-500 text-green-700 bg-green-100 hover:bg-green-200' : 'border-transparent text-white bg-blue-600 hover:bg-blue-700'} text-sm font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                  >
                    {selectedLesson?.completed ? (
                      <>
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Terminé
                      </>
                    ) : (
                      'Marquer comme terminé'
                    )}
                  </button>
                  <button
                    onClick={handleDownloadResources}
                    className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Télécharger les ressources
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {courses.map((course: Course) => (
              <div key={course.id} className="bg-white overflow-hidden shadow rounded-lg">
                <div 
                  className="px-6 py-5 border-b border-gray-200 flex justify-between items-center cursor-pointer hover:bg-gray-50"
                  onClick={(e) => toggleCourse(e, course.id)}
                >
                  <div className="flex items-center">
                    <div className={`p-3 rounded-lg ${course.color} mr-4`}>
                      {course.icon}
                    </div>
                    <div>
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        {course.title}
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {course.description}
                      </p>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    {expandedCourse === course.id ? (
                      <ChevronUp className="h-5 w-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    )}
                  </div>
                </div>

                {expandedCourse === course.id && (
                  <div className="px-6 py-5">
                    <div className="space-y-4">
                      {course.modules.map((module) => (
                        <div key={module.id} className="border border-gray-200 rounded-lg overflow-hidden">
                          <div 
                            className="px-4 py-3 bg-gray-50 flex justify-between items-center cursor-pointer"
                            onClick={(e) => toggleModule(e, module.id)}
                          >
                            <div className="flex items-center">
                              <div className="text-blue-500 mr-3">
                                {module.icon}
                              </div>
                              <h4 className="text-md font-medium text-gray-900">
                                {module.title}
                              </h4>
                              <span className="ml-2 px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                                {module.lessons.length} leçons
                              </span>
                            </div>
                            <div className="ml-4 flex-shrink-0">
                              {expandedModule === module.id ? (
                                <ChevronUp className="h-5 w-5 text-gray-400" />
                              ) : (
                                <ChevronDown className="h-5 w-5 text-gray-400" />
                              )}
                            </div>
                          </div>

                          {expandedModule === module.id && (
                            <div className="bg-white">
                              <div className="px-4 py-3 text-sm text-gray-500">
                                {module.description}
                              </div>
                              <ul className="divide-y divide-gray-200">
                                {module.lessons.map((lesson) => (
                                  <li 
                                    key={lesson.id} 
                                    className="px-4 py-3 flex items-center justify-between hover:bg-gray-50 cursor-pointer"
                                    onClick={(e) => handleLessonClick(e, lesson)}
                                  >
                                    <div className="flex items-center">
                                      {lesson.completed ? (
                                        <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                                      ) : (
                                        <div className="h-5 w-5 rounded-full border-2 border-gray-300 mr-3" />
                                      )}
                                      <span className={`${lesson.completed ? 'text-gray-900' : 'text-gray-700'}`}>
                                        {lesson.title}
                                      </span>
                                    </div>
                                    <div className="flex items-center text-sm text-gray-500">
                                      <Clock className="h-4 w-4 mr-1" />
                                      <span>{lesson.duration}</span>
                                    </div>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;