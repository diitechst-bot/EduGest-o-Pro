
export enum View {
  LOGIN = 'login',
  REGISTER = 'register',
  DASHBOARD = 'dashboard',
  STUDENTS = 'students',
  TEACHERS = 'teachers',
  SUBJECTS = 'subjects',
  SETTINGS = 'settings'
}

export interface Student {
  id: string;
  name: string;
  grade: string;
  educationLevel: 'Ensino Fundamental' | 'Ensino Médio';
  shift?: 'Matutino' | 'Vespertino' | 'Noturno';
  status: 'Ativo' | 'Inativo' | 'Licença' | 'Suspenso' | 'Formado';
  avatar: string;
  email?: string;
  phone?: string;
  birthDate?: string;
  responsibleName?: string;
  gender?: 'Masculino' | 'Feminino' | 'Outro';
}

export interface Teacher {
  id: string;
  name: string;
  subjects: string[];
  email: string;
  phone?: string;
  degree: 'Graduação' | 'Especialização' | 'Mestrado' | 'Doutorado' | 'Pós-Doutorado';
  shifts: ('Matutino' | 'Vespertino' | 'Noturno')[];
  status: 'Ativo' | 'Afastado' | 'Licença' | 'Desligado';
  avatar: string;
  birthDate?: string;
  hireDate?: string;
  cpf?: string;
}

export interface Subject {
  id: string;
  name: string;
  description?: string;
  hours: number;
  weeklyLessons?: number;
  icon: string;
  gradient: string;
  image?: string;
  category: 'Core' | 'Eletiva';
  educationLevel: 'Ensino Fundamental' | 'Ensino Médio' | 'Ambos';
  grade?: string;
}
