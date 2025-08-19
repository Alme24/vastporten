"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function InfoAdminProperties() {
  return (
    <section className="w-3/4 mx-auto px-4 py-12 flex flex-col md:flex-row gap-8 font-family-noto-telugu">
      <motion.div 
        className="relative w-full md:w-[40%] flex-shrink-0"
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

      <div className="flex flex-col justify-between w-full md:w-[60%] gap-6">
        <div>
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-textoscuro leading-snug mb-4"
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            ¿Cómo ofrecemos una gestión de propiedades de calidad?
          </motion.h2>

          <motion.div
            className="space-y-4 text-[16px] text-textoscuro leading-relaxed"
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <p>
              En Västsporten, nos esforzamos por mantenernos modernos e
              innovadores para brindarle, como propietario, las herramientas
              necesarias para simplificar aún más su día a día. Llámenos en
              cuanto tenga alguna pregunta relacionada con su propiedad y le
              ayudaremos a resolverla.
            </p>
            <p>
              En la fase inicial de la colaboración, siempre realizamos una
              revisión exhaustiva de su propiedad y registramos hasta el más
              mínimo detalle del mantenimiento que debemos tener en cuenta. A
              continuación, presentamos nuestras sugerencias sobre las
              necesidades y la mejor manera de realizarlas. Usted elige entre
              soluciones integrales, donde asumimos toda la responsabilidad, o
              dejarnos encargarnos de partes seleccionadas. Sea cual sea la
              solución que elija, le guiaremos a usted y a su propiedad hacia
              sus objetivos, donde le esperan beneficios para el usuario,
              aumento del valor y rentabilidad.
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
          <div className="relative col-span-2 aspect-[15/8]">
            <Image
              src="/images/adminProperties/adminProperties2.jpg"
              alt="Entrega de llaves"
              fill
              className="object-cover grayscale-50"
            />
          </div>
          <div className="relative w-full aspect-[214/240]">
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
