import type { Metadata } from "next";
import "./globals.css";
import "../../styles/fonts.css";

export const metadata: Metadata = {
  title: "Västporten",
  description: "Västporten realiza una gestión inmobiliaria integral que incluye la gestión técnica, la gestión financiera y el mantenimiento.Nuestra visión es ofrecer una gestión inmobiliaria de primera clase, adaptada a las necesidades y expectativas de nuestros clientes. Nos consideramos una empresa local, fiable, altamente competente y moderna. Cada cliente se sentirá único gracias a nuestro trato personalizado.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
