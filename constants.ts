
import type { Step } from './types';
import Step1 from './components/steps/Step1';
import Step2 from './components/steps/Step2';
import Step3 from './components/steps/Step3';
import Step4 from './components/steps/Step4';

export const STEPS: Step[] = [
  {
    id: 1,
    title: 'Paso 1: Configuración Inicial',
    component: Step1,
    imageUrl: 'https://picsum.photos/id/10/800/600',
  },
  {
    id: 2,
    title: 'Paso 2: Importación de Datos',
    component: Step2,
    imageUrl: 'https://picsum.photos/id/24/800/600',
  },
  {
    id: 3,
    title: 'Paso 3: Procesamiento',
    component: Step3,
    imageUrl: 'https://picsum.photos/id/42/800/600',
  },
  {
    id: 4,
    title: 'Paso 4: Visualización',
    component: Step4,
    imageUrl: 'https://picsum.photos/id/53/800/600',
  },
];
