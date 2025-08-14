import Image from "next/image";

export default function FinancialCards() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4 w-3/4 mx-auto">
      <div className="relative h-[400px] md:h-[500px]">
        <Image
          src="/images/cards/finCard1.jpg"
          alt="Interior de cocina"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 max-w-md text-center">
            <h3 className="text-lg font-bold mb-4">
              Westgate – Para sus necesidades financieras
            </h3>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              Al contratarnos para la administración de su propiedad, puede
              estar seguro de que revisaremos su propiedad regularmente para
              garantizar que todo se mantenga en buen estado. Si surge algún
              problema, nos desplazamos rápidamente al lugar y le brindamos la
              asistencia que necesita.
            </p>
          </div>
        </div>
      </div>
      <div className="relative h-[400px] md:h-[500px]">
        <Image
          src="/images/cards/finCard2.jpg" 
          alt="Interior con escaleras"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 max-w-md text-center">
            <h3 className="text-lg font-bold mb-4">
              Seguridad a través de total transparencia
            </h3>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
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
      </div>
    </section>
  );
}
