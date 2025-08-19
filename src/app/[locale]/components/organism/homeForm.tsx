"use client";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
export default function HomeForm() {
    const t = useTranslations("homeForm");
    const [form, setForm] = useState({
        nombre: "",
        telefono: "",
        email: "",
        mensaje: "",
        privacy: false,
    });

    const [errors, setErrors] = useState({
        nombre: "",
        telefono: "",
        email: "",
        mensaje: "",
        privacy: "",
    });

    const validateField = (name: string, value: string | boolean) => {
        let error = "";

        switch (name) {
            case "nombre":
                const regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

                if (!value || (value as string).trim().length < 3) {
                    error = t("error.nombreCaracteres");
                } else if (!regexNombre.test(value as string)) {
                    error = t("error.nombreContenido");
                }
                break;

            case "telefono":
                if (!/^\d{7,15}$/.test(value as string)) {
                    error = t("error.telefonoDigitos");
                }
                break;
            case "email":
                if (
                    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value as string)
                ) {
                    error = t("error.emailValido");
                }
                break;
            case "mensaje":
                if (!value || (value as string).trim().length < 10) {
                    error = t("error.mensajeCaracteres");
                }
                break;
            case "privacy":
                if (!value) {
                    error = t("error.privacyAccept");
                }
                break;
        }
        setErrors((prev) => ({ ...prev, [name]: error }));
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type, checked } = e.target as HTMLInputElement;
        const newValue = type === "checkbox" ? checked : value;

        setForm((prev) => ({ ...prev, [name]: newValue }));
        validateField(name, newValue);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        Object.entries(form).forEach(([key, value]) => validateField(key, value));

        if (Object.values(errors).some((err) => err !== "")) {
            console.log("Errores en el formulario:", errors);
            return;
        }

        console.log("Formulario válido ✅", form);
    };

    return (
        <div className="flex flex-col justify-center items-center bg-base-de-botoones h-[578px] w-[760px] rounded-xl p-14">
            <h2 className="font-family-noto-telugu font-[600] text-5xl text-center text-textoscuro">
                {t("contactanos")}
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full m-4">
                <div className="flex flex-col">
                    <input
                        type="text"
                        name="nombre"
                        value={form.nombre}
                        onChange={handleChange}
                        placeholder={t("placeholder.nombre")}
                        className="h-10 font-family-noto-telugu text-[16px] font-[500] custom-input"
                    />
                    {errors.nombre && <span className="text-red-500 text-sm">{errors.nombre}</span>}
                </div>

                <div className="flex gap-4">
                    <div className="flex flex-col flex-1">
                        <input
                            type="text"
                            name="telefono"
                            value={form.telefono}
                            onChange={handleChange}
                            placeholder={t("placeholder.telefono")}
                            className="h-10 font-family-noto-telugu text-[16px] font-[500] custom-input"
                        />
                        {errors.telefono && <span className="text-red-500 text-sm">{errors.telefono}</span>}
                    </div>
                    <div className="flex flex-col flex-1">
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder={t("placeholder.email")}
                            className="h-10 font-family-noto-telugu text-[16px] font-[500] custom-input"
                        />
                        {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
                    </div>
                </div>

                <div className="flex flex-col">
                    <textarea
                        name="mensaje"
                        value={form.mensaje}
                        onChange={handleChange}
                        placeholder={t("placeholder.mensaje")}
                        className="font-family-noto-telugu p-4 text-[16px] font-[500] custom-input resize-none h-31"
                    />
                    {errors.mensaje && <span className="text-red-500 text-sm">{errors.mensaje}</span>}
                </div>

                <div className="flex gap-2">
                    <input
                        type="checkbox"
                        name="privacy"
                        checked={form.privacy}
                        onChange={handleChange}
                        className="accent-teal-600 h-6 w-6"
                    />
                    <label
                        htmlFor="privacy"
                        className="text-4 font-family-noto-telugu text-textoscuro"
                    >
                        {t("descripcion")}
                    </label>
                </div>
                {errors.privacy && <span className="text-red-500 text-sm">{errors.privacy}</span>}

                <div className="flex justify-center items-center mt-4">
                    <button
                        type="submit"
                        className="h-13 w-71 bg-[#E1EAEF] font-family-noto-telugu text-textoscuro font-[700] rounded-lg shadow-lg"
                    >
                        {t("enviar")}
                    </button>
                </div>
            </form>
        </div>
    );
}
