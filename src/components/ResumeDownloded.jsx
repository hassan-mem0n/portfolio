import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
const ResumeDownloded = () => {
     const [timeValue, setTimeValue] = useState(3);
  const [isDownloading, setIsDownloading] = useState(false);

  const reverseTime = () => {
    if (isDownloading) return;

    setIsDownloading(true);
    setTimeValue(3);
  };

  useEffect(() => {
    if (!isDownloading) return;

    if (timeValue === 0) {
      const link = document.createElement("a");

      link.href = "/resume.pdf";
      link.download = "Hassan-Raza-Resume.pdf";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setIsDownloading(false);
      setTimeValue(3);

      return;
    }

    const timer = setTimeout(() => {
      setTimeValue((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeValue, isDownloading]);
  return (
    <>
        <motion.button
                type="button"
                onClick={reverseTime}
                disabled={isDownloading}
                whileHover={!isDownloading ? { scale: 1.05 } : {}}
                whileTap={!isDownloading ? { scale: 0.95 } : {}}
                className={`rounded-xl px-6 py-3 font-semibold  text-white shadow-lg transition-all duration-300 ${isDownloading
                    ? "cursor-not-allowed bg-gray-500"
                    : "bg-black hover:bg-gray-800 hover:animate-bounce"
                  }`}
              >
                {isDownloading
                  ? `Downloading in ${timeValue}...`
                  : "Download Resume"}
              </motion.button>
    </>
  )
}

export default ResumeDownloded
