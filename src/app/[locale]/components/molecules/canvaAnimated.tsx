"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function CanvaAnimated() {
  const [startAnimation, setStartAnimation] = useState(false);
  const start = true;

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-screen bg-sky-200 overflow-hidden">
      <Image
        src="/images/animated/city.png"
        alt="Ciudad"
        fill
        className="object-cover mask-bottom-gradient"
        priority
      />

      <div className="absolute bottom-0 left-0 w-full h-2/5 overflow-hidden brightness-150">
        <Image
          src="/images/animated/degrade.png"
          alt="Degrade"
          fill
          className="object-cover "
          priority 
        />
      </div>

      <motion.div
        initial={{ scale: 1, x: 0, y: -400 }}
        animate={
          startAnimation
            ? { scale: 1, x: 0, y: 0 }
            : { scale: 1, x: 0, y: -400 }
        }
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
      >
        <Image
          src="/images/vastporten 2.svg"
          alt="vastporten"
          width={300}
          height={200}
        />
      </motion.div>

      <motion.div
        initial={{ scale: 6, x: -580, y: 0 }}
        animate={
          start
            ? { scale: 0.8, x: -580, y: 230 }
            : { scale: 7, x: -580, y: 0 }
        }
        transition={{ duration: 2, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4"
      >
        <Image src="/images/animated/cloud1.png" alt="Nube 1" width={300} height={200} />
      </motion.div>

      <motion.div
        initial={{ scale: 4, x: -680, y: 0 }}
        animate={
          start
            ? { scale: 2.2, x: -680, y: -50 }
            : { scale: 5, x: -680, y: 0 }
        }
        transition={{ duration: 2, ease: "easeInOut"}}
        className="absolute top-1/3 left-1/2"
      >
        <Image src="/images/animated/cloud2.png" alt="Nube 2" width={300} height={200} />
      </motion.div>

      <motion.div
        initial={{ scale: 4, x: 590, y: -150 }}
        animate={
          start
            ? { scale: 2.7, x: 590, y: -200 }
            : { scale: 5, x: 590, y: -150 }
        }
        transition={{ duration: 2, ease: "easeInOut"}}
        className="absolute top-1/2 left-1/3"
      >
        <Image src="/images/animated/cloud3.png" alt="Nube 3" width={300} height={200} />
      </motion.div>
    </div>
  );
}
