import React, { useState } from 'react';
import { BookOpen, ChevronDown, ChevronUp, Download } from 'lucide-react';

const GeodesieMath: React.FC = () => {
  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setExpandedQuestion(expandedQuestion === index ? null : index);
  };

  const questions = [
    {
      question: "Qu'est-ce que la Géodésie ?",
      answer: "La géodésie est la science qui mesure et représente la Terre, en déterminant sa forme, ses dimensions, son champ de gravité ainsi que la position précise des points à sa surface et dans l'espace."
    },
    {
      question: "Quels sont les deux buts de la Géodésie ?",
      answer: "1. Déterminer les dimensions et la forme géométrique de la Terre.\n2. Fournir un cadre de référence pour la cartographie, la navigation, les SIG et la télédétection."
    },
    {
      question: "Quelles sont les branches de la Géodésie ?",
      answer: "• Géodésie mathématique\n• Géodésie physique\n• Géodésie spatiale"
    },
    {
      question: "Que faut-il comprendre par la Géodésie physique ?",
      answer: "C'est la branche qui étudie la forme réelle de la Terre, son champ de pesanteur et le géoïde, en utilisant la gravimétrie, le nivellement et les lois de la physique."
    },
    {
      question: "Que faut-il comprendre par la Géodésie mathématique ?",
      answer: "C'est la branche qui modélise la Terre sous forme idéale (sphère, ellipsoïde de révolution) et développe les systèmes de coordonnées et les formules pour calculer des positions avec des longueurs et des angles."
    },
    {
      question: "Que faut-il comprendre par la Géodésie spatiale ?",
      answer: "C'est la branche qui utilise les techniques spatiales (satellites, GNSS, télémétrie laser, interférométrie radio) pour mesurer avec grande précision la forme de la Terre, ses dimensions, son champ de gravité et le déplacement des points."
    },
    {
      question: "Définir la triangulation.",
      answer: "C'est une méthode géodésique qui détermine des distances ou positions en connaissant des longueurs et des angles."
    },
    {
      question: "Définir la trilatération.",
      answer: "C'est une technique de mesure qui détermine des positions en mesurant uniquement des distances, en utilisant la géométrie des triangles."
    },
    {
      question: "Quelle est l'importance de faire la Géodésie en télédétection et SIG ?",
      answer: "• Elle permet le géoréférencement des images satellitaires.\n• Elle assure l'intégration multisource (cartes, images, relevés terrain).\n• Elle fournit un support aux projections cartographiques.\n• Elle sert de référence pour la navigation et le positionnement GNSS.\n• Elle garantit la précision et la cohérence spatiale dans les analyses SIG."
    }
  ];

  const handleDownloadTemplate = () => {
    // Créer le contenu HTML du document
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>Réponses Géodésie Mathématique</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; margin: 40px; }
          h1 { color: #1e40af; border-bottom: 2px solid #3b82f6; padding-bottom: 10px; }
          h2 { color: #1e40af; margin-top: 30px; }
          .question { font-weight: bold; margin-top: 20px; }
          .answer { margin-bottom: 15px; margin-left: 20px; }
          .page { page-break-after: always; }
          .page:last-child { page-break-after: avoid; }
        </style>
      </head>
      <body>
        <div class="page">
          <h1>RÉPONSES - GÉODÉSIE MATHÉMATIQUE</h1>
          <h2>Leçon 1 – INTRODUCTION À LA GÉODÉSIE</h2>
          <p>Réalisé par : [Votre nom]</p>
          <p>Date : ${new Date().toLocaleDateString('fr-FR')}</p>
          
          ${questions.map((item, index) => `
            <div class="question">Question ${index + 1} : ${item.question}</div>
            <div class="answer">${item.answer.replace(/\n/g, '<br>')}</div>
          `).join('')}
        </div>
      </body>
      </html>
    `;

    // Créer un blob avec le contenu HTML
    const blob = new Blob([htmlContent], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);
    
    // Créer un lien de téléchargement
    const link = document.createElement('a');
    link.href = url;
    link.download = 'reponses-geodesie-math.doc';
    
    // Déclencher le téléchargement
    document.body.appendChild(link);
    link.click();
    
    // Nettoyer
    setTimeout(() => {
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }, 100);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">GÉODÉSIE MATHÉMATIQUE</h1>
        <div className="w-24 h-1 bg-blue-600 mx-auto my-4"></div>
          <h2 className="text-xl md:text-2xl text-gray-700">Leçon 1 – INTRODUCTION À LA GÉODÉSIE</h2>
        </div>
        <button
          onClick={handleDownloadTemplate}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
        >
          <Download className="w-5 h-5" />
          <span className="hidden sm:inline">Télécharger les réponses</span>
          <span className="sm:hidden">Télécharger</span>
        </button>
      </div>

      <div className="space-y-4">
        {questions.map((item, index) => (
          <div 
            key={index} 
            className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md"
          >
            <button
              className={`w-full px-6 py-4 text-left flex justify-between items-center ${expandedQuestion === index ? 'bg-blue-50' : 'hover:bg-gray-50'}`}
              onClick={() => toggleQuestion(index)}
            >
              <span className="font-medium text-gray-900 text-lg">
                {index + 1}. {item.question}
              </span>
              {expandedQuestion === index ? (
                <ChevronUp className="w-5 h-5 text-blue-600" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </button>
            
            {expandedQuestion === index && (
              <div className="px-6 pb-4 pt-2 text-gray-700 border-t border-gray-100 bg-white">
                {item.answer.split('\n').map((paragraph, i) => (
                  <p key={i} className="mb-3 last:mb-0">
                    {paragraph.startsWith('• ') ? (
                      <span className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>{paragraph.substring(2)}</span>
                      </span>
                    ) : (
                      paragraph
                    )}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GeodesieMath;
