import React from 'react';
import { motion } from 'framer-motion';

type PBTIInfoCardProps = {
  info: string;
  direction?: 'left' | 'right';
  delay?: number;
  position?: 'left' | 'right';
};

const PBTIInfoCard = ({
  info,
  direction = 'left',
  delay = 100,
  position = 'left'
}: PBTIInfoCardProps) => {
  return (
    <div className="relative w-full h-17">
      <motion.div
        initial={{ opacity: 0, x: direction === 'left' ? -19 : 19 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.7,
          delay: delay / 1000,
          ease: "easeOut"
        }}
        className={`
          absolute
          ${position === 'left' ? 'left-0' : 'right-0'}
          max-w-70 rounded-2xl px-5 py-3 bg-[#FBFBFB66] shadow-sm 
          text-center text-body3 text-grayscale-900 whitespace-pre-line
        `}
      >
        {info}
      </motion.div>
    </div>
  );
};

export default PBTIInfoCard;
