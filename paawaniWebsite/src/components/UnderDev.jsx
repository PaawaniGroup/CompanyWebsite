import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Wrench } from "lucide-react";

const UnderDevelopmentPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="flex flex-col items-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-center w-20 h-20 text-yellow-500 bg-yellow-100 dark:bg-yellow-800 dark:text-yellow-200 rounded-full mb-6 animate-pulse">
          <Wrench size={40} />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-charcoal-800 dark:text-charcoal-200 mb-4">
          Oh Oo!
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-lg mb-8">
          This page is currently under development. We&apos;re working hard to bring
          it to you soon.
        </p>
        <Link to="/">
          <Button className="flex items-center gap-2 px-6 py-3 text-lg font-semibold rounded-full shadow-lg transition-all duration-300 hover:bg-primary-dark hover:shadow-xl">
            Go to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default UnderDevelopmentPage;
