import React, { useState } from 'react';
import Client from './Client';
import Installer from './Installer';
import System from './System';

const steps = [
  { label: '', component: <Client /> },
  { label: '', component: <Installer /> },
  { label: '', component: <System /> }
];

const Mainform = () => {

  
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">{steps[currentStep].label}</h2>

        {/* Render the current step's component */}
        {steps[currentStep].component}

        {/* Navigation buttons */}
        <div className="mt-6 flex justify-between">
          <button
            onClick={handlePrevious}
            disabled={currentStep === 0}
            className={`w- bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-md ${currentStep === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className="w- bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-md"
          >
            {currentStep === steps.length - 1 ? 'Submit' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mainform;
