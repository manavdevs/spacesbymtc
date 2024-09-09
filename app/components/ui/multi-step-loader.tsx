"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx'; // Assuming you're using `clsx` for classNames utility

// Define LoadingState type
type LoadingState = {
  text: string;
};

// Check Icon Component
const CheckIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={clsx("w-6 h-6", className)}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2.25 2.25L15 9" />
    <circle cx="12" cy="12" r="9" />
  </svg>
);

// Check Filled Icon Component
const CheckFilled = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={clsx("w-6 h-6", className)}
  >
    <path
      fillRule="evenodd"
      d="M2.25 12a9.75 9.75 0 1119.5 0 9.75 9.75 0 01-19.5 0zm13.36-1.814a.75.75 0 00-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
      clipRule="evenodd"
    />
  </svg>
);

// Loader Core Component
const LoaderCore = ({
  loadingStates,
  value = 0,
}: {
  loadingStates: LoadingState[];
  value?: number;
}) => (
  <div className="flex relative justify-start flex-col max-w-full mx-auto mt-6">
    {loadingStates.map((loadingState, index) => {
      const distance = Math.abs(index - value);
      const opacity = Math.max(1 - distance * 0.2, 0); // Reduce opacity as the distance increases

      return (
        <motion.div
          key={index}
          className="text-left flex gap-2 mb-4"
          initial={{ opacity: 0, y: -(value * 40) }}
          animate={{ opacity: opacity, y: -(value * 40) }}
          transition={{ duration: 0.5 }}
        >
          <div>
            {index > value && <CheckIcon className="text-black dark:text-white" />}
            {index <= value && (
              <CheckFilled
                className={clsx(
                  "text-black dark:text-white",
                  value === index && "opacity-100"
                )}
              />
            )}
          </div>
          <span className={clsx("text-black dark:text-white", value === index && "opacity-100")}>
            {loadingState.text}
          </span>
        </motion.div>
      );
    })}
  </div>
);

// MultiStepLoader Component
export const MultiStepLoader = ({
  loadingStates,
  loading,
  duration = 2000,
  loop = true,
}: {
  loadingStates: LoadingState[];
  loading?: boolean;
  duration?: number;
  loop?: boolean;
}) => {
  const [currentState, setCurrentState] = useState(0);

  useEffect(() => {
    if (!loading) {
      setCurrentState(0);
      return;
    }
    const timeout = setTimeout(() => {
      setCurrentState((prevState) =>
        loop
          ? prevState === loadingStates.length - 1
            ? 0
            : prevState + 1
          : Math.min(prevState + 1, loadingStates.length - 1)
      );
    }, duration);

    return () => clearTimeout(timeout);
  }, [currentState, loading, loop, loadingStates.length, duration]);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="w-full h-full flex items-center justify-center"
        >
          <div className="relative w-full h-auto">
            <LoaderCore value={currentState} loadingStates={loadingStates} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
