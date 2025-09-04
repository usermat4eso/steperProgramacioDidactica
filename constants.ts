import type { Step } from './types';
import Step1 from './components/steps/Step1';
import Step2 from './components/steps/Step2';
import Step3 from './components/steps/Step3';
import Step4 from './components/steps/Step4';

export const STEPS: Step[] = [
  {
    id: 1,
    title: 'Paso 1: Descarga archivo',
    component: Step1,
    imageUrl: './assets/images/step1.jpeg',
  },
  {
    id: 2,
    title: 'Paso 2: Importación de Datos',
    component: Step2,
    imageUrl: './assets/images/step2.jpeg',
  },
  {
    id: 3,
    title: 'Paso 3: Procesamiento de Datos',
    component: Step3,
    imageUrl: './assets/images/step3.jpeg',
  },
  {
    id: 4,
    title: 'Paso 4: Visualización de Resultados',
    component: Step4,
    imageUrl: './assets/images/step4.jpeg',
  },
];