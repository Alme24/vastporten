import { motion } from "framer-motion";
import Image from "next/image";

export default function FinancialCards() {
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
              Westgate – Para sus necesidades financieras
            </h3>
            <p className="text-gray-700 text-sm lg:text-base leading-relaxed">
              Al contratarnos para la administración de su propiedad, puede
              estar seguro de que revisaremos su propiedad regularmente para
              garantizar que todo se mantenga en buen estado. Si surge algún
              problema, nos desplazamos rápidamente al lugar y le brindamos la
              asistencia que necesita.
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
              Seguridad a través de total transparencia
            </h3>
            <p className="text-textoscuro text-sm lg:text-base leading-relaxed">
              Por supuesto, en Västsporten trabajamos con total transparencia
              para que usted, como cliente, pueda seguir nuestro trabajo y
              participar en la documentación y demás material. También nos
              encargamos del seguimiento continuo. Si necesita adaptar el
              trabajo, el contrato o está considerando realizar trabajos
              adicionales durante la vigencia del mismo, simplemente contacte
              con uno de nuestros gestores y nos encargaremos de solucionarlo.
            </p>
          </div>
        </div>
      </motion.div>
      
    </section>
  );
}
