
import { Student, Teacher, Subject } from './types';

export const STUDENTS_DATA: Student[] = [
  { id: '#ST-8821', name: 'Alice Johnson', grade: '1º Ano EM', educationLevel: 'Ensino Médio', status: 'Ativo', avatar: 'https://picsum.photos/seed/alice/200' },
  { id: '#ST-8942', name: 'Marcus Chen', grade: '2º Ano EM', educationLevel: 'Ensino Médio', status: 'Licença', avatar: 'https://picsum.photos/seed/marcus/200' },
  { id: '#ST-8210', name: 'Elena Rodriguez', grade: '1º Ano EM', educationLevel: 'Ensino Médio', status: 'Ativo', avatar: 'https://picsum.photos/seed/elena/200' },
  { id: '#ST-9005', name: 'David Kim', grade: '3º Ano EM', educationLevel: 'Ensino Médio', status: 'Suspenso', avatar: 'https://picsum.photos/seed/david/200' },
  { id: '#ST-9128', name: 'Sarah Miller', grade: '9º Ano EF', educationLevel: 'Ensino Fundamental', status: 'Ativo', avatar: 'https://picsum.photos/seed/sarah/200' },
  { id: '#ST-8553', name: 'James Wilson', grade: '2º Ano EM', educationLevel: 'Ensino Médio', status: 'Formado', avatar: 'https://picsum.photos/seed/james/200' },
];

export const TEACHERS_DATA: Teacher[] = [
  { 
    id: 'T1', 
    name: 'Sarah Jenkins', 
    subjects: ['Matemática', 'Física'], 
    degree: 'Mestrado',
    email: 'sarah.jenkins@edu.com',
    shifts: ['Matutino', 'Vespertino'],
    status: 'Ativo', 
    avatar: 'https://picsum.photos/seed/sarahj/200' 
  },
  { 
    id: 'T2', 
    name: 'Robert Chen', 
    subjects: ['Física', 'Computação'], 
    degree: 'Doutorado',
    email: 'robert.chen@edu.com',
    shifts: ['Noturno'],
    status: 'Afastado', 
    avatar: 'https://picsum.photos/seed/robert/200' 
  },
  { 
    id: 'T3', 
    name: 'Elena Rodriguez', 
    subjects: ['Literatura', 'História'], 
    degree: 'Especialização',
    email: 'elena.rod@edu.com',
    shifts: ['Matutino'],
    status: 'Ativo', 
    avatar: 'https://picsum.photos/seed/elenar/200' 
  },
];

export const SUBJECTS_DATA: Subject[] = [
  { 
    id: 'S1', 
    name: 'Matemática', 
    description: 'Estudo de álgebra, geometria e lógica matemática avançada.',
    hours: 120, 
    weeklyLessons: 5,
    icon: 'calculate', 
    gradient: 'linear-gradient(135deg, #0f0fbd 0%, #4facfe 100%)', 
    category: 'Core',
    educationLevel: 'Ensino Médio',
    grade: '1º Ano EM'
  },
  { 
    id: 'S2', 
    name: 'Física', 
    description: 'Cinemática, dinâmica e termodinâmica aplicada ao cotidiano.',
    hours: 100, 
    weeklyLessons: 4,
    icon: 'biotech', 
    gradient: 'linear-gradient(135deg, #7e22ce 0%, #a855f7 100%)', 
    category: 'Core',
    educationLevel: 'Ensino Médio',
    grade: '2º Ano EM'
  },
  { 
    id: 'S3', 
    name: 'História', 
    description: 'Processos históricos mundiais e do Brasil, do colonialismo à atualidade.',
    hours: 80, 
    weeklyLessons: 3,
    icon: 'history_edu', 
    gradient: 'linear-gradient(135deg, #d97706 0%, #f59e0b 100%)', 
    category: 'Core',
    educationLevel: 'Ensino Fundamental',
    grade: '9º Ano EF'
  },
  { 
    id: 'S4', 
    name: 'Biologia', 
    description: 'Genética, evolução e ecologia dos sistemas biológicos.',
    hours: 110, 
    weeklyLessons: 4,
    icon: 'eco', 
    gradient: 'linear-gradient(135deg, #15803d 0%, #22c55e 100%)', 
    category: 'Core',
    educationLevel: 'Ensino Médio',
    grade: '3º Ano EM'
  },
  { 
    id: 'S5', 
    name: 'Literatura', 
    description: 'Movimentos literários, análise de obras clássicas e produção textual.',
    hours: 90, 
    weeklyLessons: 3,
    icon: 'menu_book', 
    gradient: 'linear-gradient(135deg, #b91c1c 0%, #ef4444 100%)', 
    category: 'Core',
    educationLevel: 'Ensino Médio',
    grade: '1º Ano EM'
  },
  { 
    id: 'S6', 
    name: 'Computação', 
    description: 'Introdução à lógica de programação e pensamento computacional.',
    hours: 150, 
    weeklyLessons: 6,
    icon: 'terminal', 
    gradient: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)', 
    category: 'Eletiva',
    educationLevel: 'Ambos',
    grade: 'Eletiva Livre'
  },
];
