import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulation d'un envoi de formulaire
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setStatus({
        type: 'success',
        message: 'Votre message a été envoyé avec succès ! Nous vous répondrons dès que possible.'
      });
      
      // Réinitialisation du formulaire
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Effacer le message de succès après 5 secondes
      setTimeout(() => {
        setStatus({ type: null, message: '' });
      }, 5000);
      
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Une erreur s\'est produite lors de l\'envoi du message. Veuillez réessayer plus tard.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white">
      {/* En-tête */}
      <div className="relative">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="/images/3.png"
            alt="Contactez-nous"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Contactez-nous
          </h1>
          <p className="mt-6 text-xl text-blue-100 max-w-3xl">
            Nous sommes là pour répondre à vos questions. Envoyez-nous un message et nous vous répondrons dès que possible.
          </p>
        </div>
      </div>

      {/* Formulaire de contact */}
      <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
        <div className="relative max-w-xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Envoyez-nous un message
            </h2>
            <p className="mt-4 text-lg leading-6 text-gray-500">
              Avez-vous des questions ou des commentaires ? Remplissez le formulaire ci-dessous.
            </p>
          </div>
          
          {/* Message de statut */}
          {status.type && (
            <div className={`mt-8 p-4 rounded-md ${status.type === 'success' ? 'bg-green-50' : 'bg-red-50'}`}>
              <div className="flex">
                <div className="flex-shrink-0">
                  {status.type === 'success' ? (
                    <CheckCircle className="h-5 w-5 text-green-400" aria-hidden="true" />
                  ) : (
                    <AlertCircle className="h-5 w-5 text-red-400" aria-hidden="true" />
                  )}
                </div>
                <div className="ml-3">
                  <p className={`text-sm font-medium ${status.type === 'success' ? 'text-green-800' : 'text-red-800'}`}>
                    {status.message}
                  </p>
                </div>
              </div>
            </div>
          )}
          
          <div className="mt-12">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Nom complet <span className="text-red-500">*</span>
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email <span className="text-red-500">*</span>
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Sujet
                </label>
                <div className="mt-1">
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="question">Question sur un cours</option>
                    <option value="technical">Problème technique</option>
                    <option value="partnership">Partenariat</option>
                    <option value="other">Autre</option>
                  </select>
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message <span className="text-red-500">*</span>
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                    defaultValue={''}
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send className="-ml-1 mr-2 h-5 w-5" />
                      Envoyer le message
                    </>
                  )}
                </button>
              </div>
              <p className="text-xs text-gray-500 sm:col-span-2">
                En soumettant ce formulaire, vous acceptez notre politique de confidentialité.
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Informations de contact */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Autres moyens de nous contacter
          </h2>
        </div>
        <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:pb-16 lg:px-8">
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="divide-y divide-gray-200 lg:grid lg:grid-cols-3 lg:divide-y-0 lg:divide-x">
              <div className="py-8 px-6 text-center">
                <div className="flex items-center justify-center w-12 h-12 mx-auto rounded-md bg-blue-50 text-blue-600">
                  <Mail className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-sm font-medium text-gray-900">Email</h3>
                <p className="mt-2 text-base text-gray-500">
                  <a href="mailto:anehenrijoel2@gmail.com" className="text-blue-600 hover:text-blue-500">
                    anehenrijoel2@gmail.com
                  </a>
                </p>
                <p className="mt-1 text-sm text-gray-500">Réponse sous 24-48h</p>
              </div>
              <div className="py-8 px-6 text-center">
                <div className="flex items-center justify-center w-12 h-12 mx-auto rounded-md bg-blue-50 text-blue-600">
                  <MapPin className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-sm font-medium text-gray-900">Adresse</h3>
                <p className="mt-2 text-base text-gray-500">
                  Grand Carrefour de Koumassi
                  <br />
                  Abidjan, Côte d'Ivoire
                </p>
                <p className="mt-1 text-sm text-blue-600">
                  <a href="#" className="hover:text-blue-500">Voir sur la carte</a>
                </p>
              </div>
              <div className="py-8 px-6 text-center">
                <div className="flex items-center justify-center w-12 h-12 mx-auto rounded-md bg-blue-50 text-blue-600">
                  <Phone className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-sm font-medium text-gray-900">Téléphone</h3>
                <p className="mt-2 text-base text-gray-500">
                  +225 07 77 79 19 45
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  Lundi - Vendredi, 9h - 18h
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Carte */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
          <div className="rounded-lg overflow-hidden">
            <div className="h-96 w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.107227071162!2d-4.013177724381375!3d5.311388994820085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1eb5f4f9c9c8d%3A0x8b5f5e5e5e5e5e5e!2sGrand%20Carrefour%20de%20Koumassi%2C%20Abidjan%2C%20C%C3%B4te%20d'Ivoire!5e0!3m2!1sfr!2sfr!4v1620000000000!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Carte de localisation - Grand Carrefour de Koumassi, Abidjan"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
