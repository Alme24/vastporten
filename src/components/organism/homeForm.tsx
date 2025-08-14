import React from 'react';


export function HomeForm() {
    return (
        <div className="flex flex-col justify-center items-center bg-base-de-botoones h-[578px] w-[760px] rounded-xl p-14">
            <h2 className=' font-family-noto-telugu font-[600] text-5xl text-center text-textoscuro'>Contáctanos</h2>
            <form className="flex flex-col gap-4 w-full m-4">
                <input
                    type="text"
                    placeholder="Nombre*"
                    className="h-10 font-family-noto-telugu text-[16px] font-[500] custom-input"
                />

                {/* Contenedor flex para Teléfono y Email */}
                <div className="flex gap-4">
                    <input
                        type="text"
                        placeholder="Teléfono*"
                        className="h-10 font-family-noto-telugu text-[16px] font-[500] custom-input flex-1"
                    />
                    <input
                        type="email"
                        placeholder="Correo electrónico*"
                        className="h-10 font-family-noto-telugu text-[16px] font-[500] custom-input flex-1"
                    />
                </div>

                <textarea
                    placeholder="Mensaje*"
                    className="font-family-noto-telugu p-4 text-[16px] font-[500] custom-input resize-none h-31"
                />
                <div className="flex  gap-2">
                    <input
                        type="checkbox"
                        id="privacy"
                        className="accent-teal-600 h-6 w-6"
                        required
                    />
                    <label htmlFor="privacy" className="text-4 font-family-noto-telugu text-textoscuro">
                        Al realizar su solicitud de contacto, usted acepta que compartiremos los datos personales que ha elegido.
                    </label>
                </div>
                <div className="flex justify-center items-center mt-4">
                    <button type="submit" className='h-13 w-71 bg-[#E1EAEF] font-family-noto-telugu text-textoscuro font-[700] rounded-lg shadow-lg'>
                        Enviar
                    </button>
                </div>
            </form>
        </div>
    );
}
