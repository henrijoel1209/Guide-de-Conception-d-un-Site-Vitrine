// Types pour la navigation
export interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

// Types pour les cours
export interface Course {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  title: string;
  content: string;
  duration: string;
  completed: boolean;
}

// Types pour le formulaire de contact
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
