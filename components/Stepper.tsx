
import React from 'react';
import type { Step } from '../types';

interface StepperProps {
  steps: Step[];
  activeStepId: number;
  onStepClick: (id: number) => void;
}

const Stepper: React.FC<StepperProps> = ({ steps, activeStepId, onStepClick }) => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6 text-indigo-300">Pasos del Tutorial</h2>
      <div className="space-y-4 perspective-1000">
        {steps.map((step, index) => (
          <button
            key={step.id}
            onClick={() => onStepClick(step.id)}
            className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-300 ease-in-out transform-style-preserve-3d transform hover:-translate-y-1 hover:rotate-x-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-900 focus:ring-cyan-400 ${
              activeStepId === step.id
                ? 'bg-cyan-500 border-cyan-400 text-white shadow-lg shadow-cyan-500/30'
                : 'bg-indigo-800 border-indigo-700 hover:bg-indigo-700 hover:border-indigo-600'
            }`}
          >
            <div className="flex items-center space-x-4">
              <div
                className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg ${
                  activeStepId === step.id
                    ? 'bg-white text-cyan-600'
                    : 'bg-indigo-700 text-indigo-200'
                }`}
              >
                {index + 1}
              </div>
              <span className="font-semibold">{step.title}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Stepper;
