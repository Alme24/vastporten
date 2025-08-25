"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
export default function InfoAdminProperties() {
  const t = useTranslations("infoAdminProperties");
  return (
    <section className="w-3/4 mx-auto lg:px-4 lg:py-12 flex flex-col lg:flex-row gap-8 font-family-noto-telugu">
      <motion.div 
        className="relative w-full lg:w-[40%] flex-shrink-0"
        initial={{ opacity: 0, x: -150 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="aspect-[11/16] relative w-full">
          <Image
            src="/images/adminProperties/adminProperties1.jpg"
            alt="Casa en mano"
            className="object-cover grayscale-50"
            fill
          />
        </div>
      </motion.div>

      <div className="flex flex-col justify-between w-full lg:w-[60%] gap-6">
        <div>
          <motion.h2
            className="text-3xl lg:text-5xl font-bold text-textoscuro leading-snug mb-4"
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            {t("titulo1")}
          </motion.h2>

          <motion.div
            className="space-y-4 text-[16px] text-textoscuro leading-relaxed text-justify"
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <p>
              {t("descripcion1")}
            </p>
            <p>
              {t("descripcion2")}
            </p>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-3 gap-4 mt-6"
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="hidden sm:relative col-span-2 aspect-[15/8]">
            <Image
              src="/images/adminProperties/adminProperties2.jpg"
              alt="Entrega de llaves"
              fill
              className="object-cover grayscale-50"
            />
          </div>
          <div className=" hidden sm:relative w-full aspect-[214/240]">
            <Image
              src="/images/adminProperties/adminProperties3.jpg"
              alt="Reunión de trabajo"
              fill
              className="object-cover grayscale-50"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
