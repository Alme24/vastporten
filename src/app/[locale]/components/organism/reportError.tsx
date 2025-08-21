"use client"
import React, { FormEvent, MouseEvent, useState } from "react";
import '/styles/fonts.css';

interface ReportErrorProps {
    onClose: () => void;
}

export default function ReportError({ onClose }: ReportErrorProps) {

    const [form, setForm] = useState({
        nombre: "",
        apellido: "",
        telefono: "",
        email: "",
        asociacionVivienda: "",
        numApartamento: "",
        llaveMaestra: "",
        direccion: "",
        dirPosal: "",
        piso: "",
        mensaje: "",
        privacy: false,
    });

    const [errors, setErrors] = useState({
        nombre: "",
        apellido: "",
        telefono: "",
        email: "",
        asociacionVivienda: "",
        numApartamento: "",
        llaveMaestra: "",
        direccion: "",
        dirPosal: "",
        piso: "",
        mensaje: "",
        privacy: "",
    });

    const validateField = (name: string, value: string | boolean) => {
        let error = "";
        const regexSoloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
        const regexTelefono = /^\d{7,15}$/;
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        switch (name) {
            case "nombre":
            case "apellido":
                if (!value || (value as string).trim().length < 3) {
                    error = "Este campo debe tener al menos 3 caracteres.";
                } else if (!regexSoloLetras.test(value as string)) {
                    error = "Este campo solo puede contener letras.";
                }
                break;
            case "telefono":
                if (!value || !regexTelefono.test(value as string)) {
                    error = "Número de teléfono no válido (7-15 dígitos).";
                }
                break;
            case "email":
                if (!value || !regexEmail.test(value as string)) {
                    error = "Correo electrónico no válido.";
                }
                break;
            case "asociacionVivienda":
            case "numApartamento":
            case "llaveMaestra":
            case "direccion":
            case "dirPosal":
            case "piso":
                if (!value || (value as string).trim().length === 0) {
                    error = "Este campo es obligatorio.";
                }
                break;
            case "mensaje":
                if (!value || (value as string).trim().length < 10) {
                    error = "El mensaje debe tener al menos 10 caracteres.";
                }
                break;
            case "privacy":
                if (!value) {
                    error = "Debe aceptar los términos de privacidad.";
                }
                break;
            default:
                break;
        }
        setErrors((prev) => ({ ...prev, [name]: error }));
    };

    const handleContentClick = (e: MouseEvent) => {
        e.stopPropagation();
    };

     const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type, checked } = e.target as HTMLInputElement;
        const newValue = type === "checkbox" ? checked : value;
        setForm((prev) => ({ ...prev, [name]: newValue }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        Object.keys(form).forEach(key => validateField(key, form[key as keyof typeof form]));

        const hasErrors = Object.values(errors).some(err => err !== "");
        if (hasErrors) {
            console.log("Errores en el formulario:", errors);
            return;
        }
        console.log("Formulario válido", form);
    };

    return (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center modal-overlay"
            onClick={onClose}
        >
            <div 
                className="relative flex flex-col justify-start items-center bg-base-de-botoones rounded-xl p-12 w-[90%] max-w-11/12 max-h-[90vh] overflow-y-auto"
                onClick={handleContentClick}
            >
                <h2 className="text-5xl text-center font-family-noto-telugu text-textoscuro font-[600]">
                    ¿Quieres reportar un error?
                </h2>
                <p className=" text-textoscuro text-[16px]">Describa su caso y nos pondremos en contacto con usted lo antes posible.</p>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-6 gap-4 w-full my-6">
                    <div className="flex flex-col col-span-3">
                        <input
                            type="text"
                            name="nombre"
                            value={form.nombre}
                            onChange={handleChange}
                            onBlur={() => validateField("nombre", form.nombre)}
                            placeholder="Nombre*"
                            className="h-10 font-family-noto-telugu text-[16px] font-[500] custom-input"
                        />
                        {errors.nombre && <span className="text-red-500 text-sm mt-1">{errors.nombre}</span>}
                    </div>
                    <div className="flex flex-col col-span-3">
                        <input
                            type="text"
                            name="apellido"
                            value={form.apellido}
                            onChange={handleChange}
                            onBlur={() => validateField("apellido", form.apellido)}
                            placeholder="Apellido*"
                            className="h-10 font-family-noto-telugu text-[16px] font-[500] custom-input"
                        />
                        {errors.apellido && <span className="text-red-500 text-sm mt-1">{errors.apellido}</span>}
                    </div>
                    <div className="flex flex-col col-span-3">
                        <input
                            type="text"
                            name="telefono"
                            value={form.telefono}
                            onChange={handleChange}
                            onBlur={() => validateField("telefono", form.telefono)}
                            placeholder="Teléfono*"
                            className="h-10 font-family-noto-telugu text-[16px] font-[500] custom-input"
                        />
                        {errors.telefono && <span className="text-red-500 text-sm mt-1">{errors.telefono}</span>}
                    </div>
                    <div className="flex flex-col col-span-3">
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            onBlur={() => validateField("email", form.email)}
                            placeholder="Correo electrónico*"
                            className="h-10 font-family-noto-telugu text-[16px] font-[500] custom-input"
                        />
                        {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email}</span>}
                    </div>
                    <div className="flex flex-col col-span-6">
                        <input
                            type="text"
                            name="asociacionVivienda"
                            value={form.asociacionVivienda}
                            onChange={handleChange}
                            onBlur={() => validateField("asociacionVivienda", form.asociacionVivienda)}
                            placeholder="Asociación de vivienda/Propiedad en alquiler*"
                            className="h-10 font-family-noto-telugu text-[16px] font-[500] custom-input"
                        />
                        {errors.asociacionVivienda && <span className="text-red-500 text-sm mt-1">{errors.asociacionVivienda}</span>}
                    </div>
                    <div className="flex flex-col col-span-3">
                        <input
                            type="text"
                            name="numApartamento"
                            value={form.numApartamento}
                            onChange={handleChange}
                            onBlur={() => validateField("numApartamento", form.numApartamento)}
                            placeholder="Número de apartamento*"
                            className="h-10 font-family-noto-telugu text-[16px] font-[500] custom-input"
                        />
                        {errors.numApartamento && <span className="text-red-500 text-sm mt-1">{errors.numApartamento}</span>}
                    </div>
                    <div className="flex flex-col col-span-3">
                        <input
                            type="text"
                            name="llaveMaestra"
                            value={form.llaveMaestra}
                            onChange={handleChange}
                            onBlur={() => validateField("llaveMaestra", form.llaveMaestra)}
                            placeholder="Se puede entrar con llave maestra*"
                            className="h-10 font-family-noto-telugu text-[16px] font-[500] custom-input"
                        />
                        {errors.llaveMaestra && <span className="text-red-500 text-sm mt-1">{errors.llaveMaestra}</span>}
                    </div>
                    <div className="flex flex-col col-span-2">
                        <input
                            type="text"
                            name="direccion"
                            value={form.direccion}
                            onChange={handleChange}
                            onBlur={() => validateField("direccion", form.direccion)}
                            placeholder="Dirección*"
                            className="h-10 font-family-noto-telugu text-[16px] font-[500] custom-input"
                        />
                        {errors.direccion && <span className="text-red-500 text-sm mt-1">{errors.direccion}</span>}
                    </div>
                    <div className="flex flex-col col-span-2">
                        <input
                            type="text"
                            name="dirPosal"
                            value={form.dirPosal}
                            onChange={handleChange}
                            onBlur={() => validateField("dirPosal", form.dirPosal)}
                            placeholder="Dirección postal*"
                            className="h-10 font-family-noto-telugu text-[16px] font-[500] custom-input"
                        />
                        {errors.dirPosal && <span className="text-red-500 text-sm mt-1">{errors.dirPosal}</span>}
                    </div>
                    <div className="flex flex-col col-span-2">
                        <input
                            type="text"
                            name="piso"
                            value={form.piso}
                            onChange={handleChange}
                            onBlur={() => validateField("piso", form.piso)}
                            placeholder="Piso*"
                            className="h-10 font-family-noto-telugu text-[16px] font-[500] custom-input"
                        />
                        {errors.piso && <span className="text-red-500 text-sm mt-1">{errors.piso}</span>}
                    </div>
                    <div className="flex flex-col col-span-6">
                        <textarea
                            name="mensaje"
                            value={form.mensaje}
                            onChange={handleChange}
                            onBlur={() => validateField("mensaje", form.mensaje)}
                            placeholder="Mensaje (Describa su caso)*"
                            className="font-family-noto-telugu text-[16px] font-[500] custom-input p-4 resize-none"
                            rows={5}
                        />
                        {errors.mensaje && <span className="text-red-500 text-sm mt-1">{errors.mensaje}</span>}
                    </div>
                    <div className="col-span-6 flex gap-4 w-[45%]">
                        <input
                            type="checkbox"
                            name="privacy"
                            checked={form.privacy}
                            onChange={handleChange}
                            onBlur={() => validateField("privacy", form.privacy)}
                            className="accent-teal-600 h-6 w-6"
                        />
                        <label htmlFor="privacy" className="text-4 font-family-noto-telugu text-textoscuro">
                            Al realizar su solicitud de contacto, usted acepta que compartiremos los datos personales que ha elegido.
                        </label>
                    </div>
                    {errors.privacy && <span className="text-red-500 text-sm mt-1 col-span-6">{errors.privacy}</span>}

                    <div className="col-span-6 flex justify-center items-center">
                        <button
                            type="submit"
                            className="h-12 w-71 bg-[#E1EAEF] font-family-noto-telugu text-[20px] text-textoscuro font-[700] rounded-lg shadow-lg/20"
                        >
                            Enviar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}