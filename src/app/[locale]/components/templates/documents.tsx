"use client";
import React from "react";
import Header from "../organism/header";
import Footer from "../organism/footer";
import { useState } from "react";
import ReportError from "../organism/reportError";
import Image from "next/image";
import { Title } from "../molecules/Title";
import { useTranslations } from "next-intl";

export default function Documents() {
  const t = useTranslations("financialManagement");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  return (
    <div>
      <section className="relative md:mb-40">
        <Image
          src="/images/documents-bg.webp"
          alt=""
          priority
          fill
          className="object-cover mask-bottom-gradient -z-10"
        />
        <div className="absolute inset-0 overflow-hidden">
        <img
          src="/images/animated/cloud1.png"
          alt="Nube izquierda"
          className="absolute bottom-40 left-5 w-1/4 "
        />
        <img
          src="/images/animated/cloud2.png"
          alt="Nube derecha"
          className="absolute top-15 right-5 w-1/3"
        />
      </div>
        <div className="relative z-10">
          <Header />
          <div className="flex justify-center items-center min-h-screen mb-20">
            <div className="lg:w-1/2 w-9/10 lg:mt-50 mt-10 bg-white rounded-2xl py-10 px-5 lg:p-28 shadow-lg/30">
              <Title title={t('tituloDocumentos')} />
              <div className="mt-8 ml-10 lg:ml-20">
                <ul className=" text-left flex flex-col gap-3 text-base">
                  <li className="mb-4 list-disc ml-4">
                    <a
                      href="https://www.bankgirot.se/globalassets/dokument/e-formular/Autogiroanmalan_medgivande_till_bankgironummer.pdf"
                      className="text-blue-500 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t('link1')}
                    </a>    
                  </li>
                  <li className="mb-4 list-disc ml-4">
                    <a
                      href="https://exeprop.se/wp-content/uploads/2022/03/Uppsagningsblankett.pdf"
                      className="text-blue-500 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t('link2')}
                    </a>    
                  </li>
                  <li className="mb-4 list-disc ml-4">
                    <a
                      href="https://www.tinovus.se/wp-content/uploads/2023/05/CHECKLISTA-FLYTTSTA%CC%88DNING-TINOVUS.pdf"
                      className="text-blue-500 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t('link3')}
                    </a>    
                  </li>
                  <li className="mb-4 list-disc ml-4">
                    <a
                      href="https://ekonomifokus.se/wp-content/uploads/2020/10/Andrahandskontrakt-hyresratt-konverterad-1.pdf"
                      className="text-blue-500 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t('link4')}
                    </a>    
                  </li>
                  <li className="mb-4 list-disc ml-4">
                    <a
                      href="https://www.ekonomifokus.se/wp-content/uploads/2025/02/enkelt-gavobrev-ef-2.pdf"
                      className="text-blue-500 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t('link5')}
                    </a>    
                  </li>
                  <li className="mb-4 list-disc ml-4">
                    <a
                      href="https://app.fastdok.se/api/templates/105/versions/276/pdf"
                      className="text-blue-500 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t('link6')}
                    </a>    
                  </li>
                  <li className="mb-4 list-disc ml-4">
                    <a
                      href="https://app.fastdok.se/api/templates/231/versions/431/pdf"
                      className="text-blue-500 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t('link7')}
                    </a>    
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer onOpenModal={handleOpenModal} />
      {isModalOpen && <ReportError onClose={handleCloseModal} />}
    </div>
  );
}
