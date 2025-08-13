import Image from "next/image";
import Header from "@/components/organism/header";
import Footer from "@/components/organism/footer";
import { Title } from "@/components/molecules/Title";
import '/styles/fonts.css'; 

export default function Politica() {
    return (
        <div className="bg-white">
            <Header />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 items-end justify-items-end -mt-28">
                <div className="px-8 pt-8 lg:px-16 lg:pt-16">
                    <Title
                        title="Política de privacidad y manejo de datos personales"
                    />
                    <p className="font-['Noto_Sans_Telugu'] text-[16px] text-[#4C4C4C] font-normal text-left leading-relaxed mt-4 whitespace-pre-line">
                        En esta política de privacidad, explicamos cómo y con qué finalidad procesamos sus datos personales y qué derechos tiene usted como sujeto de datos bajo el Reglamento General de Protección de Datos, normalmente abreviado como GDPR.{"\n"}
                        Fastighetshetsförvaltning i Väst AB (Västporten) protege su privacidad y es importante para nosotros que esté informado sobre cómo procesamos sus datos personales. Queremos que tenga la seguridad de que procesamos sus datos personales de forma segura y correcta. 
                    </p>
                    <h2 className="font-['Noto_Sans_Telugu'] text-[20px] text-[#4C4C4C] font-bold text-left leading-relaxed mt-4 py-8">
                        Qué son los datos personales y qué significa el tratamiento de datos personales?
                    </h2>
                    <p className="font-['Noto_Sans_Telugu'] text-[16px] text-[#4C4C4C] font-normal text-left leading-relaxed whitespace-pre-line">
                        Los datos personales son cualquier tipo de información que se le pueda atribuir como persona física. No solo la información que normalmente considera su nombre y número de la Seguridad Social, sino también sus fotografías, grabaciones de audio y la dirección IP de su ordenador son ejemplos de datos personales.{"\n"} 
                        Ciertos datos personales gozan de mayor protección conforme al Reglamento General de Protección de Datos. Esto se refiere a los llamados datos personales sensibles, como por ejemplo los datos de salud y la afiliación sindical. Tratamos estos datos con especial cuidado.{"\n"} 
                        El tratamiento se refiere a todo lo que se hace con datos personales. Por ejemplo, la recopilación, el registro, la organización, la estructuración, el almacenamiento, el procesamiento o la modificación, la lectura, el uso, la divulgación y la eliminación.
                    </p>
                </div>
                
                <div>
                    <Image
                        src="/images/Rectangle-21.webp"
                        alt="Imagen de oficina"
                        width={692}
                        height={984}
                        className="flex-shrink-0 mask-bottom-gradient z-0"
                    />
                </div>
            </div>
            <div className="text-left w-full px-8 pt-1 lg:px-16">
                <h2 className="font-['Noto_Sans_Telugu'] text-[20px] text-[#4C4C4C] font-bold text-left leading-relaxed mt-4 py-8">
                    ¿Quién es responsable de los datos personales que tratamos?
                </h2>
                <p className="font-['Noto_Sans_Telugu'] text-[16px] text-[#4C4C4C] font-normal text-left leading-relaxed whitespace-pre-line">
                    Fastighetsförvaltning i Väst AB (Västporten) es el responsable del tratamiento de datos descritas en esta Política de Privacidad. Es quien determina los fines y medios del tratamiento. {"\n"}
                    {"\n"}
                    Fastighetsförvaltning i Väst AB también podría tratar información sobre usted en nombre de otra persona. En este caso, actuamos como encargados del tratamiento de datos personales de la persona física o jurídica, 
                    quien a su vez es el responsable del tratamiento de datos personales. Este podría ser el caso si usted reside en un apartamento de alquiler y la asociación nos contrata servicios de gestión. Lo mismo aplica si reside en un apartamento de alquiler que Fastighetsförvaltning i Väst AB (Västporten) gestiona, pero no es de su propiedad. Si tiene alguna pregunta sobre dicho tratamiento, le recomendamos que se ponga en contacto con la asociación de apartamentos de alquiler o con el propietario. {"\n"}
                    Fastighetsförvaltning i Väst AB (Västporten) puede compartir sus datos personales con otras organizaciones, empresas o autoridades en el marco de los servicios que brindamos.{"\n"}
                    {"\n"}
                    Fastighetsförvaltning i Väst AB nunca revende su información personal.
                </p>
            
                <div className="p-8 justify-items-center">
                    <h2 className="font-['Noto_Sans_Telugu'] text-[20px] text-[#4C4C4C] font-bold text-left leading-relaxed mt-4 pb-8">
                        Sus datos personales podrán ser compartidos con las siguientes categorías de destinatarios:
                    </h2>
                    <ul className="font-['Noto_Sans_Telugu'] text-[16px] text-[#4C4C4C] font-normal text-left leading-relaxed list-disc pl-6">
                        <li>Proveedores de servicios de TI y proveedores de servicios de escaneo</li>
                        <li>Contratistas para la renovación o nueva construcción de apartamentos y para servicios de administración de propiedades</li>
                        <li>Compañías eléctricas, compañías de banda ancha, compañías de televisión por cable, compañías de alarmas</li>
                        <li>Servicios de emergencia y agencias de cobro de deudas</li>
                        <li>Nuestros clientes (por ejemplo, su asociación de propietarios e inquilinos o su propietario)</li>
                        <li>Agencia de informes crediticios</li>
                        <li>Organizadores de actividades y conferencias.</li>
                        <li>Agencias de marketing e investigación de clientes.</li>
                        <li>Bancos (para gestionar depósitos y retiros).</li>
                        <li>Empresas que brindan soluciones de pago.</li>
                        <li>Agenteres postales y proveedores de servicios de comunicación digital.</li>
                    </ul>
                </div>

                <p className="font-['Noto_Sans_Telugu'] text-[16px] text-[#4C4C4C] font-normal text-left leading-relaxed whitespace-pre-line">
                    En ciertos casos, Fastighetsförvaltning i Väst AB también podría compartir sus datos personales con otros destinatarios. Esto puede ocurrir, por ejemplo, si estamos obligados a divulgar los datos por ley o por decisión de una autoridad, para investigar, supervisar o salvaguardar nuestras reclamaciones legales, o si tenemos la intención de vender una propiedad o parte de nuestro negocio. La divulgación podría entonces realizarse a tribunales, la policía u otras autoridades, representantes legales y otros asesores externos, así como a posibles compradores. {"\n"}
                    Fastighetsförvaltning i Väst AB (Västporten) se esfuerza por garantizar que sus datos personales solo se procesen dentro de la UE/EEE. En casos excepcionales, sus datos personales podrían procesarse fuera de la UE/EEE, por ejemplo, si compartimos sus datos personales con un encargado del tratamiento que, por sí mismo o a través de un subcontratista, esté establecido o almacene información en un país fuera de la UE/EEE. {"\n"}
                    Los destinatarios que traten datos personales en nombre de Fastighetsförvaltning i Väst AB (Västporten) como encargados del tratamiento de datos deben suscribir siempre un contrato de encargado del tratamiento de datos con nosotros. Este contrato tiene como objetivo garantizar que sus datos personales se traten de forma correcta y segura. Los encargados del tratamiento de datos solo podrán tratar sus datos conforme a nuestras instrucciones y no podrán hacerlo para sus propios fines. Además, están obligados por ley y por contrato a proteger sus datos. Si un encargado del tratamiento trata datos personales fuera de la UE/EEE, tomaremos las medidas adecuadas para proteger sus datos. {"\n"}
                    Si compartimos sus datos personales con un destinatario que sea responsable del tratamiento de sus datos, como una autoridad o un banco, dicho destinatario será responsable de la legalidad del tratamiento. Fastighetsförvaltning i Väst AB (Västporten) solo divulga datos personales a destinatarios de nuestra confianza.
                </p>
                <h2 className="font-['Noto_Sans_Telugu'] text-[20px] text-[#4C4C4C] font-bold text-left leading-relaxed mt-4 py-8">
                    ¿Por qué tratamos sus datos?
                </h2>
                <p className="font-['Noto_Sans_Telugu'] text-[16px] text-[#4C4C4C] font-normal text-left leading-relaxed whitespace-pre-line">
                    Cuando compra un servicio de administración de propiedades en Väst AB, procesamos su información para poder brindar y administrar su servicio. {"\n"}
                    Posteriormente, procesamos información como nombre, número de la seguridad social, información de contacto e información necesaria para la prestación y administración del servicio, así como el historial de pagos. También procesamos información sobre facturas emitidas, pagos y cualquier retraso en los pagos. El procesamiento de datos personales también puede realizarse para envíos de correo y boletines informativos.
                </p>
                <h2 className="font-['Noto_Sans_Telugu'] text-[20px] text-[#4C4C4C] font-bold text-left leading-relaxed mt-4 py-8">
                    Contáctenos sobre nuestro procesamiento de datos personales
                </h2>
                <p className="font-['Noto_Sans_Telugu'] text-[16px] text-[#4C4C4C] font-normal text-left leading-relaxed whitespace-pre-line">
                    Si tiene preguntas sobre cómo manejamos sus datos personales o si desea ejercer alguno de sus derechos como sujeto de datos, puede contactarnos. {"\n"}
                    Administración de propiedades en el oeste de AB (Västporten) {"\n"}
                    Servicio de atención al cliente: 033-480196 {"\n"}
                    Correo electrónico: <a href="mailto:info@vastporten.se" className="text-[#4E6D9A]">info@vastporten.se</a> {"\n"}
                    Dirección postal: Fastighetsförvaltning i Väst AB, Ålandsgatan 2, 504 41 Borås. {"\n"}
                    Para nosotros es importante que usted, que tiene contacto con nosotros de cualquier manera, tenga confianza en cómo manejamos sus datos personales
                </p>
                <h2 className="font-['Noto_Sans_Telugu'] text-[20px] text-[#4C4C4C] font-bold text-left leading-relaxed mt-4 py-8">
                    Cambios a esa Política de Privacidad
                </h2>
                <p className="font-['Noto_Sans_Telugu'] text-[16px] text-[#4C4C4C] font-normal text-left leading-relaxed mb-8">
                    Esta Política de Privacidad sustituye a las versiones anteriores. Fastighetsförvaltning i Väst AB podrá modificarla ocasionalmente. La última versión siempre está disponible en nuestro sitio web.
                </p>
            </div>
            <Footer />
        </div>

    );
}