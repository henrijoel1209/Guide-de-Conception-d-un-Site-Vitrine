import React from 'react';
import { User, BookOpen, Code, Award } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { id: 1, name: 'Étudiants actifs', value: '500+', icon: User },
    { id: 2, name: 'Cours disponibles', value: '10+', icon: BookOpen },
    { id: 3, name: 'Heures de contenu', value: '50+', icon: Code },
    { id: 4, name: 'Taux de réussite', value: '98%', icon: Award },
  ];

  return (
    <div className="bg-white">
      {/* En-tête */}
      <div className="relative bg-blue-700">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-blue-700 mix-blend-multiply" aria-hidden="true" />
        </div>
        <div className="relative max-w-5xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            À propos de GUIDE
          </h1>
          <p className="mt-6 text-xl text-blue-100 max-w-3xl">
            Notre mission est de rendre l'apprentissage du développement web accessible à tous, partout dans le monde.
          </p>
        </div>
      </div>

      {/* Notre histoire */}
      <div className="relative py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full mb-4">
              Notre histoire
            </span>
            <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
              Comment tout a commencé
            </h2>
            <div className="mt-6 max-w-2xl mx-auto">
              <div className="relative">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="w-full border-t border-blue-100"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="px-4 bg-white text-blue-500">
                    <Code className="h-8 w-8" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 max-w-3xl mx-auto">
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="relative px-6 py-8 sm:p-10">
                <div className="text-lg text-gray-600 leading-relaxed space-y-6">
                  <p className="text-xl text-gray-700 font-medium">
                    GUIDE a été fondé en 2025 par <span className="text-blue-600 font-semibold">ANE HENRI JOEL</span>, un passionné de code et d'innovation.
                  </p>
                  <p>
                    Face aux défis rencontrés par de nombreux étudiants pour maîtriser la programmation, il a imaginé une approche pédagogique unique qui rend l'apprentissage du développement web <span className="text-blue-600 font-medium">accessible, pratique et stimulant</span>.
                  </p>
                  <p>
                    Aujourd'hui, GUIDE incarne cette vision en offrant des ressources éducatives de qualité, conçues pour transformer les débutants en développeurs compétents, capables de relever les défis technologiques de demain.
                  </p>
                </div>
              </div>
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                <div className="flex items-center">
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900">ANE HENRI JOEL</p>
                    <p className="text-sm text-blue-600">Fondateur & Développeur Principal</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Équipe */}
      <div className="bg-white py-10 sm:py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Notre équipe
            </h2>
            <p className="mt-2 text-lg text-gray-500">
              Rencontrez l'équipe derrière GUIDE
            </p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div className="text-center">
              <img
                className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56 object-cover border-4 border-blue-100 shadow-lg"
                src="/images/2.jpg"
                alt="ANE HENRI JOEL - Fondateur"
              />
              <h3 className="mt-4 text-lg font-medium text-gray-900">ANE HENRI JOEL</h3>
              <p className="text-blue-600">Fondateur & Développeur Principal</p>
              <p className="mt-1 text-gray-500">
                Passionné par l'éducation et la technologie, Henri a créé GUIDE pour rendre l'apprentissage du code accessible à tous.
              </p>
            </div>
            {/* Ajoutez d'autres membres de l'équipe ici */}
          </div>
        </div>
      </div>

      {/* Valeurs */}
      <div className="bg-gray-50 py-10 sm:py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Nos valeurs
            </h2>
            <p className="mt-2 text-lg text-gray-500">
              Ce qui nous guide au quotidien
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <svg
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Excellence</h3>
              <p className="mt-1 text-gray-500">
                Nous nous engageons à fournir un contenu de la plus haute qualité, constamment mis à jour avec les dernières technologies.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <svg
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Confiance</h3>
              <p className="mt-1 text-gray-500">
                Nous construisons des relations de confiance avec nos étudiants en étant transparents sur nos méthodes et nos objectifs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <svg
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Communauté</h3>
              <p className="mt-1 text-gray-500">
                Nous croyons en la force de l'apprentissage collectif et encourageons l'entraide entre nos étudiants.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
