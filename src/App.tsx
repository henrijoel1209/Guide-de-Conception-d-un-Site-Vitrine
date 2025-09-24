import React, { useState } from 'react';
import { 
  BookOpen, 
  Target, 
  FileText, 
  Palette, 
  Users, 
  Download,
  ChevronRight,
  CheckCircle,
  AlertCircle,
  Home,
  User,
  Briefcase,
  Award,
  Mail,
  Phone,
  Menu,
  X
} from 'lucide-react';

interface SectionProps {
  id: string;
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, icon, children }) => (
  <section id={id} className="py-16 px-4">
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-blue-100 rounded-lg text-blue-700">
          {icon}
        </div>
        <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
      </div>
      {children}
    </div>
  </section>
);

const PageCard: React.FC<{ page: any }> = ({ page }) => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 bg-green-100 rounded-lg text-green-700">
        {page.icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900">{page.title}</h3>
    </div>
    <p className="text-gray-600 mb-4">{page.description}</p>
    <div className="space-y-2">
      <h4 className="font-medium text-gray-900">Éléments clés :</h4>
      <ul className="space-y-1">
        {page.elements.map((element: string, idx: number) => (
          <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
            {element}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('introduction');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleDownloadTemplate = () => {
    // Créer le contenu HTML du document
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>Guide de Conception - Template</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; margin: 40px; }
          h1 { color: #1e40af; border-bottom: 2px solid #3b82f6; padding-bottom: 10px; }
          h2 { color: #1e40af; margin-top: 30px; }
          h3 { color: #3b82f6; margin-top: 20px; }
          .page { page-break-after: always; }
          .page:last-child { page-break-after: avoid; }
          ul { padding-left: 20px; }
          li { margin-bottom: 8px; }
          .header { text-align: center; margin-bottom: 30px; }
          .section { margin-bottom: 20px; }
        </style>
      </head>
      <body>
        <div class="page">
          <div class="header">
            <h1>GUIDE DE CONCEPTION D'UN SITE VITRINE</h1>
            <p><strong>Par : Votre Nom</strong></p>
            <p>Date : ${new Date().toLocaleDateString('fr-FR')}</p>
          </div>

          <div class="section">
            <h2>1. Page d'accueil</h2>
            <ul>
              <li>Titre accrocheur et slogan professionnel</li>
              <li>Présentation succincte de votre spécialité</li>
              <li>Éléments visuels représentatifs</li>
              <li>Navigation claire vers les autres sections</li>
              <li>Call-to-action pour encourager l'exploration</li>
            </ul>
          </div>

          <div class="section">
            <h2>2. Page À propos</h2>
            <ul>
              <li>Photo professionnelle (description)</li>
              <li>Parcours personnel et motivations</li>
              <li>Objectifs professionnels et vision</li>
              <li>Valeurs et approche de travail</li>
              <li>Éléments distinctifs de votre profil</li>
            </ul>
          </div>
        </div>

        <div class="page">
          <div class="section">
            <h2>3. Page Services</h2>
            <ul>
              <li>Liste détaillée des services proposés</li>
              <li>Méthodologie de travail</li>
              <li>Domaines d'expertise spécifiques</li>
              <li>Types de clients ciblés</li>
              <li>Processus de collaboration</li>
            </ul>
          </div>

          <div class="section">
            <h2>4. Travaux et résultats</h2>
            <ul>
              <li>Portfolio de projets réalisés</li>
              <li>Résultats et achievements significatifs</li>
              <li>Publications ou communications</li>
              <li>Collaborations et partenariats</li>
              <li>Impact et retombées des travaux</li>
            </ul>
          </div>
        </div>

        <div class="page">
          <div class="section">
            <h2>5. Demande de service</h2>
            <ul>
              <li>Formulaire de contact structuré</li>
              <li>Types de demandes acceptées</li>
              <li>Informations requises du client</li>
              <li>Processus de traitement des demandes</li>
              <li>Délais de réponse indicatifs</li>
            </ul>
          </div>

          <div class="section">
            <h2>6. CV</h2>
            <ul>
              <li>Formation académique détaillée</li>
              <li>Expériences professionnelles</li>
              <li>Compétences techniques et transversales</li>
              <li>Langues et certifications</li>
              <li>Centres d'intérêt professionnels</li>
            </ul>
          </div>
        </div>

        <div class="page">
          <div class="section">
            <h2>7. Contact</h2>
            <ul>
              <li>Coordonnées professionnelles complètes</li>
              <li>Horaires de disponibilité</li>
              <li>Réseaux sociaux professionnels</li>
              <li>Localisation géographique</li>
              <li>Préférences de communication</li>
            </ul>
          </div>

          <div class="section">
            <h2>Conseils pour la mise en page</h2>
            <ul>
              <li>Utilisez une police professionnelle (Arial, Calibri, Times New Roman)</li>
              <li>Gardez une mise en page aérée</li>
              <li>Utilisez des couleurs cohérentes avec votre identité visuelle</li>
              <li>Ajoutez des images ou captures d'écran pour illustrer vos points</li>
              <li>Numérotez les pages</li>
            </ul>
          </div>
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
    link.download = 'template-guide-conception.doc';
    
    // Déclencher le téléchargement
    document.body.appendChild(link);
    link.click();
    
    // Nettoyer
    setTimeout(() => {
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }, 100);
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const pages = [
    {
      title: "Page d'accueil",
      icon: <Home className="w-5 h-5" />,
      description: "Présentation générale et mise en valeur de votre spécialité",
      elements: [
        "Titre accrocheur et slogan professionnel",
        "Présentation succincte de votre spécialité",
        "Éléments visuels représentatifs",
        "Navigation claire vers les autres sections",
        "Call-to-action pour encourager l'exploration"
      ]
    },
    {
      title: "Page À propos",
      icon: <User className="w-5 h-5" />,
      description: "Informations clés sur vous, vos objectifs et votre identité professionnelle",
      elements: [
        "Photo professionnelle (description)",
        "Parcours personnel et motivations",
        "Objectifs professionnels et vision",
        "Valeurs et approche de travail",
        "Éléments distinctifs de votre profil"
      ]
    },
    {
      title: "Page Services",
      icon: <Briefcase className="w-5 h-5" />,
      description: "Description des services que vous pourriez offrir aux usagers",
      elements: [
        "Liste détaillée des services proposés",
        "Méthodologie de travail",
        "Domaines d'expertise spécifiques",
        "Types de clients ciblés",
        "Processus de collaboration"
      ]
    },
    {
      title: "Page Travaux et résultats",
      icon: <Award className="w-5 h-5" />,
      description: "Présentation synthétique de vos recherches, projets ou productions",
      elements: [
        "Portfolio de projets réalisés",
        "Résultats et achievements significatifs",
        "Publications ou communications",
        "Collaborations et partenariats",
        "Impact et retombées des travaux"
      ]
    },
    {
      title: "Page Demande de service",
      icon: <FileText className="w-5 h-5" />,
      description: "Espace permettant aux usagers de formuler une demande ou un besoin",
      elements: [
        "Formulaire de contact structuré",
        "Types de demandes acceptées",
        "Informations requises du client",
        "Processus de traitement des demandes",
        "Délais de réponse indicatifs"
      ]
    },
    {
      title: "Page CV",
      icon: <FileText className="w-5 h-5" />,
      description: "Résumé de votre parcours académique, vos compétences et expériences",
      elements: [
        "Formation académique détaillée",
        "Expériences professionnelles",
        "Compétences techniques et transversales",
        "Langues et certifications",
        "Centres d'intérêt professionnels"
      ]
    },
    {
      title: "Page Contact",
      icon: <Phone className="w-5 h-5" />,
      description: "Moyens de communication pour vous joindre",
      elements: [
        "Coordonnées professionnelles complètes",
        "Horaires de disponibilité",
        "Réseaux sociaux professionnels",
        "Localisation géographique",
        "Préférences de communication"
      ]
    }
  ];

  const colorPalettes = [
    {
      name: "Palette Professionnelle",
      colors: ["#1e40af", "#3b82f6", "#60a5fa", "#93c5fd", "#dbeafe"],
      usage: "Idéale pour consulting, finance, juridique"
    },
    {
      name: "Palette Créative",
      colors: ["#7c3aed", "#a855f7", "#c084fc", "#d8b4fe", "#ede9fe"],
      usage: "Parfaite pour design, arts, marketing"
    },
    {
      name: "Palette Naturelle",
      colors: ["#059669", "#10b981", "#34d399", "#6ee7b7", "#d1fae5"],
      usage: "Environnement, santé, bien-être"
    },
    {
      name: "Palette Dynamique",
      colors: ["#ea580c", "#f97316", "#fb923c", "#fdba74", "#fed7aa"],
      usage: "Technologie, innovation, startup"
    }
  ];

  const navigationItems = [
    { id: 'introduction', label: 'Introduction' },
    { id: 'objectifs', label: 'Objectifs' },
    { id: 'structure', label: 'Structure' },
    { id: 'conception', label: 'Conception' },
    { id: 'conseils', label: 'Conseils' },
    { id: 'exemples', label: 'Exemples' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-600 rounded-lg">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Guide de Conception</h1>
                <p className="text-sm text-gray-600">par ANE HENRI JOEL - ÉTUDIANT AU CURAT M1</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-lg transition-colors ${
                    activeSection === item.id
                      ? 'bg-blue-100 text-blue-700 font-medium'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <nav className="p-4 space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                    activeSection === item.id
                      ? 'bg-blue-100 text-blue-700 font-medium'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Guide de Conception d'un Site Vitrine
          </h1>
          <div className="text-center mb-8">
            <p className="text-xl md:text-2xl mb-4 text-blue-100">
              Activité 2 : Conception conceptuelle d'une application web professionnelle
            </p>
            <p className="text-lg text-blue-200">
              Guide réalisé par <strong>ANE HENRI JOEL</strong> - Étudiant au CURAT M1
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('objectifs')}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
            >
              Commencer le guide
              <ChevronRight className="w-5 h-5" />
            </button>
            <button 
              onClick={handleDownloadTemplate}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Template Word disponible
            </button>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <Section 
        id="introduction" 
        title="Introduction à l'Activité"
        icon={<BookOpen className="w-6 h-6" />}
      >
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <AlertCircle className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Contexte de l'exercice</h3>
              <p className="text-gray-600 leading-relaxed">
                Cette activité vous invite à concevoir <strong>conceptuellement</strong> un projet d'application web vitrine 
                lié à votre spécialité et axe de recherche. L'objectif est de réfléchir à la manière de vous présenter 
                et de valoriser vos travaux dans un cadre professionnel et scientifique.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-lg p-6">
              <h4 className="font-semibold text-green-800 mb-3">✅ Ce que vous devez faire</h4>
              <ul className="space-y-2 text-green-700 text-sm">
                <li>• Concevoir la structure et le contenu</li>
                <li>• Définir l'identité visuelle</li>
                <li>• Réaliser l'exercice sur Word</li>
                <li>• Préparer pour le cours de mercredi</li>
              </ul>
            </div>
            
            <div className="bg-orange-50 rounded-lg p-6">
              <h4 className="font-semibold text-orange-800 mb-3">❌ Ce que vous ne faites PAS</h4>
              <ul className="space-y-2 text-orange-700 text-sm">
                <li>• Développer du code</li>
                <li>• Créer un site web fonctionnel</li>
                <li>• Utiliser des outils de développement</li>
                <li>• Programmer des fonctionnalités</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Objectifs */}
      <Section 
        id="objectifs" 
        title="Objectifs Pédagogiques"
        icon={<Target className="w-6 h-6" />}
      >
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Objectifs principaux</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Apprendre à structurer une présentation professionnelle</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Développer une identité visuelle cohérente</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Valoriser ses compétences et réalisations</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Compétences développées</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Conception UX/UI conceptuelle</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Communication professionnelle</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Pensée stratégique marketing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Structure */}
      <Section 
        id="structure" 
        title="Structure des 7 Pages Obligatoires"
        icon={<FileText className="w-6 h-6" />}
      >
        <div className="mb-8 p-6 bg-blue-50 rounded-xl border border-blue-200">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Important à retenir</h3>
          <p className="text-blue-800">
            Chaque page doit contenir des informations pertinentes et professionnelles, 
            adaptées à votre domaine de spécialité. Pensez à votre public cible !
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-6">
          {pages.map((page, index) => (
            <PageCard key={index} page={page} />
          ))}
        </div>
      </Section>

      {/* Conception */}
      <Section 
        id="conception" 
        title="Consignes de Conception"
        icon={<Palette className="w-6 h-6" />}
      >
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center gap-3 mb-4">
              <Palette className="w-6 h-6 text-purple-600" />
              <h3 className="text-lg font-semibold text-gray-900">Palette de couleurs</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Choisissez 3-5 couleurs cohérentes qui reflètent votre domaine professionnel.
            </p>
            <div className="space-y-2 text-sm text-gray-600">
              <p>• Couleur principale (branding)</p>
              <p>• Couleur secondaire (accents)</p>
              <p>• Couleurs neutres (textes)</p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-6 h-6 text-green-600" />
              <h3 className="text-lg font-semibold text-gray-900">Typographie</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Définissez une hiérarchie claire pour vos textes.
            </p>
            <div className="space-y-2 text-sm text-gray-600">
              <p>• Police pour les titres</p>
              <p>• Police pour les sous-titres</p>
              <p>• Police pour le corps de texte</p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-6 h-6 text-orange-600" />
              <h3 className="text-lg font-semibold text-gray-900">Visuels et Logo</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Sélectionnez des éléments visuels représentatifs.
            </p>
            <div className="space-y-2 text-sm text-gray-600">
              <p>• Logo simple et mémorable</p>
              <p>• Images liées à votre domaine</p>
              <p>• Icônes cohérentes</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
          <div className="mb-8 p-6 bg-blue-50 rounded-xl border border-blue-200">
            <h3 className="text-lg font-semibold text-blue-900 mb-4 flex items-center gap-2">
              <Download className="w-5 h-5" />
              Template Word pour votre projet
            </h3>
            <p className="text-blue-800 mb-4">
              Pour vous aider dans la réalisation de votre projet, voici la structure recommandée à utiliser dans Word :
            </p>
            <div className="bg-white rounded-lg p-4 border border-blue-200">
              <h4 className="font-semibold text-gray-900 mb-3">Structure du document Word :</h4>
              <ol className="space-y-2 text-sm text-gray-700">
                <li>1. Page de garde avec titre et vos informations</li>
                <li>2. Table des matières automatique</li>
                <li>3. Introduction du projet</li>
                <li>4. Palette de couleurs (avec échantillons colorés)</li>
                <li>5. Choix typographiques</li>
                <li>6. Logo et éléments visuels (descriptions)</li>
                <li>7. Contenu détaillé de chaque page (7 sections)</li>
                <li>8. Conclusion et réflexions</li>
              </ol>
            </div>
            <div className="mt-4 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <p className="text-yellow-800 text-sm">
                <strong>Conseil :</strong> Utilisez les styles de titres de Word (Titre 1, Titre 2, etc.) pour créer automatiquement votre table des matières.
              </p>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Exemples de palettes de couleurs</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {colorPalettes.map((palette, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">{palette.name}</h4>
                <div className="flex gap-2 mb-3">
                  {palette.colors.map((color, colorIndex) => (
                    <div
                      key={colorIndex}
                      className="w-12 h-12 rounded-lg shadow-sm border border-gray-200"
                      style={{ backgroundColor: color }}
                      title={color}
                    ></div>
                  ))}
                </div>
                <p className="text-sm text-gray-600">{palette.usage}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Conseils */}
      <Section 
        id="conseils" 
        title="Conseils Pratiques pour Word"
        icon={<CheckCircle className="w-6 h-6" />}
      >
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Organisation du document</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Utilisez une page par section du site</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Créez une table des matières</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Numérotez vos pages clairement</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Utilisez les styles de titres</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Mise en forme</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Créez des encadrés pour vos palettes</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Utilisez des puces et listes à numéros</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Insérez des tableaux pour organiser</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Respectez la hiérarchie visuelle</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-yellow-50 rounded-xl border border-yellow-200 p-6">
              <h3 className="text-lg font-semibold text-yellow-800 mb-4">⚠️ Points d'attention</h3>
              <ul className="space-y-3 text-yellow-800">
                <li>• Restez professionnel dans le ton</li>
                <li>• Adaptez le contenu à votre spécialité</li>
                <li>• Pensez à votre public cible</li>
                <li>• Gardez une cohérence visuelle</li>
                <li>• Relisez et corrigez les fautes</li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded-xl border border-green-200 p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-4">💡 Astuces Word</h3>
              <ul className="space-y-3 text-green-800">
                <li>• Utilisez SmartArt pour les organigrammes</li>
                <li>• Insérez des formes pour les logos</li>
                <li>• Exploitez les thèmes de couleurs</li>
                <li>• Créez des sections pour naviguer</li>
                <li>• Sauvegardez régulièrement</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Exemples */}
      <Section 
        id="exemples" 
        title="Exemples Concrets"
        icon={<Award className="w-6 h-6" />}
      >
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Exemple : Spécialité en Développement Web</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Page d'accueil - Contenu</h4>
              <div className="bg-gray-50 rounded-lg p-4 text-sm">
                <p className="font-medium mb-2">"Développeur Web Full-Stack"</p>
                <p className="text-gray-600 mb-2">
                  "Création d'applications web modernes et performantes pour entreprises innovantes"
                </p>
                <ul className="text-gray-600 space-y-1">
                  <li>• React, Node.js, PostgreSQL</li>
                  <li>• 3+ années d'expérience</li>
                  <li>• Spécialisé e-commerce</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Services proposés</h4>
              <div className="bg-gray-50 rounded-lg p-4 text-sm">
                <ul className="text-gray-600 space-y-2">
                  <li>• Développement d'applications web</li>
                  <li>• Audit et optimisation de sites</li>
                  <li>• Formation équipes techniques</li>
                  <li>• Consulting architecture logicielle</li>
                  <li>• Maintenance et support technique</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>


      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen className="w-6 h-6 text-blue-400" />
            <h3 className="text-xl font-semibold">Guide de Conception</h3>
          </div>
          <p className="text-gray-400 mb-4">
            Guide réalisé par ANE HENRI JOEL - Étudiant au CURAT M1
          </p>
          <p className="text-gray-500 mb-6 text-sm">
            Site d'aide pour la réalisation de votre projet de site vitrine conceptuel
          </p>
          <div className="text-sm text-gray-500">
            Bonne chance pour votre projet ! 🚀
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;