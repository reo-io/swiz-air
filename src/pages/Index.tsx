
import React from "react";
import AirSuspensionController from "../components/AirSuspensionController";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 p-4">
      <div className="flex items-center justify-center mb-4">
        <img 
          src="/assets/images/react-logo.png" 
          alt="React Logo" 
          className="h-12 mr-2" 
        />
        <h1 className="text-2xl font-bold text-suspension-yellow">Air Suspension Controller</h1>
      </div>
      <div className="max-w-md w-full bg-black rounded-2xl overflow-hidden shadow-xl">
        <AirSuspensionController />
      </div>
      <div className="mt-8 text-gray-400 text-sm max-w-md text-center">
        <p>This is a simulation of an air suspension controller interface. Use the presets or manual controls to adjust your vehicle's suspension height.</p>
      </div>
    </div>
  );
};

export default Index;
