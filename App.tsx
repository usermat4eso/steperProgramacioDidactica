import React, { useState } from 'react';
import Stepper from './components/Stepper';
import { STEPS } from './constants';
import type { Step } from './types';

const App: React.FC = () => {
  const [activeStepId, setActiveStepId] = useState<number>(STEPS[0].id);
  
  const activeStep = STEPS.find(step => step.id === activeStepId);

  if (!activeStep) {
    return <div className="text-center p-12">Error: No se pudo encontrar el paso.</div>;
  }

  const ActiveStepComponent = activeStep.component;

  return (
    <div className="min-h-screen p-4 sm:p-8 bg-gradient-to-br from-indigo-900 via-indigo-900 to-slate-900">
      <header className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500">
          Tutorial Interactivo Paso a Paso
        </h1>
        <p className="mt-2 text-indigo-300">Una guía para nuestro equipo</p>
      </header>
      
      <main className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-1 bg-indigo-800/50 backdrop-blur-sm rounded-2xl shadow-2xl border border-indigo-700/50">
            <Stepper steps={STEPS} activeStepId={activeStepId} onStepClick={setActiveStepId} />
          </div>

          <div className="lg:col-span-2 bg-indigo-800/50 backdrop-blur-sm rounded-2xl shadow-2xl border border-indigo-700/50 p-6 sm:p-8">
            <div className="relative mb-6">
              <img 
                src={activeStep.imageUrl} 
                alt={activeStep.title} 
                className="w-full h-auto max-h-[400px] object-cover rounded-xl shadow-lg border-4 border-indigo-700/50" 
              />
              <div className="absolute top-0 right-0 bg-cyan-500 text-white font-bold py-2 px-4 rounded-bl-xl rounded-tr-lg">
                PASO {activeStep.id}
              </div>
            </div>
            <h2 className="text-3xl font-bold text-cyan-300 mb-4">{activeStep.title}</h2>
            <div className="prose prose-invert max-w-none text-indigo-200 leading-relaxed">
              <ActiveStepComponent />
            </div>
          </div>

        </div>
      </main>
      
      <footer className="text-center mt-12 text-indigo-400 text-sm">
        <p>Creado con React, TypeScript y Tailwind CSS.</p>
      </footer>
    </div>
  );
};

export default App;
