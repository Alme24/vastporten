"use client"

export default function ReportError() {
    return (
        <div className="flex flex-col justify-center items-center bg-base-de-botoones m-10 rounded-xl p-12 w-9/10 h-[810px]">
            <h2 className="text-5xl text-center font-family-noto-telugu text-textoscuro font-[600]">
                ¿Quieres reportar un error?
            </h2>
            <p className=" text-textoscuro text-[16px]">Describa su caso y nos pondremos en contacto con usted lo antes posible.</p>
            <form action="" className="grid grid-cols-6 gap-4 w-full my-6" >
                <input
                    type="text"
                    name="nombre"
                    value=""
                    placeholder="Nombre*"
                    className="col-span-3 h-10 font-family-noto-telugu text-[16px] font-[500] custom-input"
                />
                <input
                    type="text"
                    name="apellido"
                    value=""
                    placeholder="Apellido*"
                    className="col-span-3 h-10 font-family-noto-telugu text-[16px] font-[500] custom-input"
                />
                <input
                    type="text"
                    name="telefono"
                    value=""
                    placeholder="Teléfono*"
                    className="col-span-3 h-10 font-family-noto-telugu text-[16px] font-[500] custom-input"
                />
                <input
                    type="text"
                    name="email"
                    value=""
                    placeholder="Correo electrónico*"
                    className="col-span-3 h-10 font-family-noto-telugu text-[16px] font-[500] custom-input"
                />
                <input
                    type="text"
                    name="asociacionVivienda"
                    value=""
                    placeholder="Asiciación de vivienda-Propiedad en alquiler*"
                    className="col-span-6 h-10 font-family-noto-telugu text-[16px] font-[500] custom-input"
                />
                <input
                    type="text"
                    name="numApartamento"
                    value=""
                    placeholder="Número de apartamento*"
                    className="col-span-3 h-10 font-family-noto-telugu text-[16px] font-[500] custom-input"
                />
                <input
                    type="text"
                    name="llaveMaestra"
                    value=""
                    placeholder="Se puede entrar con llave maestra*"
                    className="col-span-3 h-10 font-family-noto-telugu text-[16px] font-[500] custom-input"
                />
                <input
                    type="text"
                    name="direccion"
                    value=""
                    placeholder="Dirección*"
                    className="col-span-2 h-10 font-family-noto-telugu text-[16px] font-[500] custom-input"
                />
                <input
                    type="text"
                    name="dirPosal"
                    value=""
                    placeholder="Dirección postal*"
                    className="col-span-2 h-10 font-family-noto-telugu text-[16px] font-[500] custom-input"
                />
                <input
                    type="text"
                    name="piso"
                    value=""
                    placeholder="Piso*"
                    className="col-span-2 h-10 font-family-noto-telugu text-[16px] font-[500] custom-input"
                />
                <input
                    type="text"
                    name="asociacionVivienda"
                    value=""
                    placeholder="Asiciación de vivienda-Propiedad en alquiler*"
                    className="col-span-6 h-10 font-family-noto-telugu text-[16px] font-[500] custom-input"
                />
                <textarea
                    name="mensaje"
                    value=""
                    placeholder="Mensaje (Describa su caso)*"
                    className="col-span-6 font-family-noto-telugu text-[16px] font-[500] custom-input"
                    rows={5}
                />
                <div className=" col-span-6 flex gap-4 w-[45%]">
                    <input type="checkbox"
                            name="privacy"
                            className="accent-teal-600 h-6 w-6"
                    />
                    <label htmlFor="privacy" className="text-4 font-family-noto-telugu text-textoscuro">
                        Al realizar su solicitud de contacto, usted acepta que compartiremos los datos personales que ha elegido.
                    </label>
                </div>
                <div className="col-span-6 flex justify-center items-center">
                    <button
                        type="submit"
                        className="h-13 w-71 bg-[#E1EAEF] font-family-noto-telugu text-textoscuro font-[700] rounded-lg shadow-lg/20"
                    >
                        Enviar
                    </button>
                </div>
            </form>
        </div>
    );
}