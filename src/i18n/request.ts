import {getRequestConfig} from 'next-intl/server';
import {hasLocale} from 'next-intl';
import {routing} from './routing';
import { footer } from 'framer-motion/client';
 
export default getRequestConfig(async ({requestLocale}) => {
  // Typically corresponds to the `[locale]` segment
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;
  const messages = {
    adminProperties: (await import(`../../messages/${locale}/adminProperties.json`)).default,
    canvaVideo: (await import(`../../messages/${locale}/canvaVideo.json`)).default,
    financialCard: (await import(`../../messages/${locale}/financialCard.json`)).default,
    financialManagement: (await import(`../../messages/${locale}/financialManagement.json`)).default,
    footer: (await import(`../../messages/${locale}/footer.json`)).default,
    header: (await import(`../../messages/${locale}/header.json`)).default,
    homeForm: (await import(`../../messages/${locale}/homeForm.json`)).default,
    infoAdminProperties: (await import(`../../messages/${locale}/infoAdminProperties.json`)).default,
    main: (await import(`../../messages/${locale}/main.json`)).default,
    politicas: (await import(`../../messages/${locale}/politicas.json`)).default,
    searchApartament: (await import(`../../messages/${locale}/searchApartament.json`)).default,
    services: (await import(`../../messages/${locale}/services.json`)).default,
    technicalManagement: (await import(`../../messages/${locale}/technicalManagement.json`)).default,
    why: (await import(`../../messages/${locale}/why.json`)).default,
    reportError: (await import(`../../messages/${locale}/reportError.json`)).default,
    // Aquí puedes añadir más namespaces
  };
  return {
    locale,
    messages,
  };
});