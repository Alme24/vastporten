"use client"
import React, { FormEvent, MouseEvent, useState } from "react";
import '/styles/fonts.css';
import { useTranslations } from "next-intl";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

interface ReportErrorProps {
    onClose: () => void;
}

export default function ReportError({ onClose }: ReportErrorProps) {
    const t = useTranslations("reportError");

    const [form, setForm] = useState({
        nombre: "",
        apellido: "",
        telefono: "",
        email: "",
        asociacionVivienda: "",
        numApartamento: "",
        llaveMaestra: "",
        direccion: "",
        dirPostal: "",
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
        dirPostal: "",
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
                    error = t("error.tresCaracteres");
                } else if (!regexSoloLetras.test(value as string)) {
                    error = t("error.soloLetras");
                }
                break;
            case "telefono":
                if (!value || !regexTelefono.test(value as string)) {
                    error = t("error.telefonoValido");
                }
                break;
            case "email":
                if (!value || !regexEmail.test(value as string)) {
                    error = t("error.emailValido");
                }
                break;
            case "asociacionVivienda":
            case "numApartamento":
            case "llaveMaestra":
            case "direccion":
            case "dirPostal":
            case "piso":
                if (!value || (value as string).trim().length === 0) {
                    error = t("error.campoObligatorio");
                }
                break;
            case "mensaje":
                if (!value || (value as string).trim().length < 10) {
                    error = t("error.minCaracteres");
                }
                break;
            case "privacy":
                if (!value) {
                    error = t("error.privacyAccept");
                }
                break;
            default:
                break;
        }
        setErrors((prev) => ({ ...prev, [name]: error }));
        return error;
    };

    const handleContentClick = (e: MouseEvent) => {
        e.stopPropagation();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type, checked } = e.target as HTMLInputElement;
        const newValue = type === "checkbox" ? checked : value;
        setForm((prev) => ({ ...prev, [name]: newValue }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        Object.keys(form).forEach((key) =>
        validateField(key, form[key as keyof typeof form])
        );

        let newErrors: Record<string, string> = {};
        Object.entries(form).forEach(([key, value]) => {
            const error = validateField(key, value); 
            newErrors[key] = error;
        });

        if (Object.values(newErrors).some((err) => err !== "")) {
            Swal.fire({
            icon: "error",
            title: t("modal.tituloError"),
            text: t("modal.errorValidacion"),
            confirmButtonText: t("modal.btnAceptar"),
            customClass: {
                title: "swal-title-custom",
                htmlContainer: "swal-content-custom",
                confirmButton: "swal-button-custom"
            }
            });
            return;
        }

        Swal.fire({
            title: t("modal.enviando"),
            allowOutsideClick: false,
            didOpen: () => {
            Swal.showLoading();
            },
            customClass: {
                title: "swal-title-custom",
            }
        });

        try {
        await emailjs.send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ERROR!,
            form,
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        );
        Swal.fire({
            icon: "success",
            title: t("modal.enviadoTitulo"),
            text: t("modal.enviadoText"),
            showConfirmButton: false,
            timer: 3500,
            customClass: {
                title: "swal-title-custom",
                htmlContainer: "swal-content-custom"
            }
        });
        setForm({
            nombre: "",
            apellido: "",
            telefono: "",
            email: "",
            asociacionVivienda: "",
            numApartamento: "",
            llaveMaestra: "",
            direccion: "",
            dirPostal: "",
            piso: "",
            mensaje: "",
            privacy: false,
        });
        } catch (error) {
            console.error(error);
            Swal.fire({
                icon: "error",
                title: t("modal.error"),
                text: t("modal.errorText"),
                confirmButtonText: t("modal.btnEntendido"),
                customClass: {
                    title: "swal-title-custom",
                    htmlContainer: "swal-content-custom",
                    confirmButton: "swal-button-custom"
                }
            });
        }
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
                <h2 className="md:text-5xl text-3xl text-center font-family-noto-telugu text-textoscuro font-[600]">
                    {t("titulo")}
                </h2>
                <p className=" text-textoscuro text-[16px]">{t("descripcion")}</p>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-6 gap-4 w-full my-6">
                    <div className="flex flex-col col-span-3">
                        <input
                            type="text"
                            name="nombre"
                            value={form.nombre}
                            onChange={handleChange}
                            onBlur={() => validateField("nombre", form.nombre)}
                            placeholder={t("placeholder.nombre")}
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
                            placeholder={t("placeholder.apellido")}
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
                            placeholder={t("placeholder.telefono")}
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
                            placeholder={t("placeholder.email")}
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
                            placeholder={t("placeholder.vivienda")}
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
                            placeholder={t("placeholder.apartamento")}
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
                            placeholder={t("placeholder.llave")}
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
                            placeholder={t("placeholder.direccion")}
                            className="h-10 font-family-noto-telugu text-[16px] font-[500] custom-input"
                        />
                        {errors.direccion && <span className="text-red-500 text-sm mt-1">{errors.direccion}</span>}
                    </div>
                    <div className="flex flex-col col-span-2">
                        <input
                            type="text"
                            name="dirPostal"
                            value={form.dirPostal}
                            onChange={handleChange}
                            onBlur={() => validateField("dirPostal", form.dirPostal)}
                            placeholder={t("placeholder.dirPostal")}
                            className="h-10 font-family-noto-telugu text-[16px] font-[500] custom-input"
                        />
                        {errors.dirPostal && <span className="text-red-500 text-sm mt-1">{errors.dirPostal}</span>}
                    </div>
                    <div className="flex flex-col col-span-2">
                        <input
                            type="text"
                            name="piso"
                            value={form.piso}
                            onChange={handleChange}
                            onBlur={() => validateField("piso", form.piso)}
                            placeholder={t("placeholder.piso")}
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
                            placeholder={t("placeholder.mensaje")}
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
                            {t("privacidad")}
                        </label>
                    </div>
                    {errors.privacy && <span className="text-red-500 text-sm mt-1 col-span-6">{errors.privacy}</span>}

                    <div className="col-span-6 flex justify-center items-center">
                        <button
                            type="submit"
                            className="h-12 w-71 bg-[#E1EAEF] font-family-noto-telugu text-[20px] text-textoscuro font-[700] rounded-lg shadow-lg/20"
                        >
                            {t("enviar")}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}