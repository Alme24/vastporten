import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function FinancialCards() {
  const t = useTranslations('financialManagement');
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-9/10 lg:w-3/4 mx-auto">
      
      {/* Primera tarjeta para todos los dispositivos */}
      <motion.div
        className="relative flex h-[400px] lg:h-[500px]"
        initial={{ opacity: 0, x: -150 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Image
          src="/images/cards/finCard1.jpg"
          alt="Interior de cocina"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-lg p-4 lg:p-8 max-w-lg lg:text-center text-justify">
            <h3 className="text-lg font-bold mb-4 text-center">
              {t("card1-component-title")}
            </h3>
            <p className="text-gray-700 text-sm lg:text-base leading-relaxed">
              {t("card1-component-description")}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Segunda tarjeta para todos los dispositivos */}
      <motion.div
        className="relative flex h-[400px] lg:h-[500px]"
        initial={{ opacity: 0, x: 150 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3}}
      >
        <Image
          src="/images/cards/finCard2.jpg"
          alt="Interior con escaleras"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-lg p-4 lg:p-8 max-w-lg lg:text-center text-justify">
            <h3 className="text-lg font-bold mb-4 text-center">
              {t("card2-component-title")}
            </h3>
            <p className="text-textoscuro text-sm lg:text-base leading-relaxed">
              {t("card2-component-description")}
            </p>
          </div>
        </div>
      </motion.div>
      
    </section>
  );
}
