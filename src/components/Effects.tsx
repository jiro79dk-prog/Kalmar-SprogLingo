/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles } from 'lucide-react';

export const SparkleEffect = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {[...Array(12)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute text-yellow-400"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: [0, 1.2, 0],
          opacity: [0, 1, 0],
          x: [Math.random() * 100 + '%', Math.random() * 100 + '%'],
          y: [Math.random() * 100 + '%', Math.random() * 100 + '%'],
        }}
        transition={{
          duration: 2 + Math.random() * 2,
          repeat: Infinity,
          delay: Math.random() * 2,
        }}
      >
        <Sparkles size={16 + Math.random() * 16} />
      </motion.div>
    ))}
  </div>
);

interface FeedbackProps {
  message: string;
  type: 'success' | 'error' | 'info';
}

export const FeedbackBox = ({ message, type }: FeedbackProps) => {
  const colors = {
    success: 'bg-green-100 border-green-500 text-green-700',
    error: 'bg-red-100 border-red-500 text-red-700',
    info: 'bg-blue-100 border-blue-500 text-blue-700',
  };

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`p-4 border-l-4 rounded-r-lg shadow-sm ${colors[type]}`}
    >
      <p className="font-medium">{message}</p>
    </motion.div>
  );
};
