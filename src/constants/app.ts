import { EmailAddress } from '@/types';

export const companyId = process.env.VUE_APP_COMPANY_ID;
export const appTitle = process.env.VUE_APP_PROJECT_NAME_SHORT;
export const appTitleTemplate = '%s | ' + appTitle;
export const companySlug = process.env.VUE_APP_COMPANY_SLUG;
export const emailAPIBase = 'https://express-502501.netlify.com/.netlify/functions/server';
export const reservationSuccessEmailTemplateId = 'd-111111111111111111';
export const reservationFailEmailTemplateId = 'd-22222222222222';
export const languageCodes = ['en'];
export const countriesListUrl =
  'https://res.cloudinary.com/die9ji2vn/raw/upload/v1582139305/website-static/API/countries-list.json';
export const appLogo = 'public/img/icons/logo.png';
export const countryDefault = 'Cambodia';

// DEPRECATED
const bccList = process.env.VUE_APP_EMAIL_BCC_LIST || '';
let reservationEmailsBcc: EmailAddress[] = bccList.split(',').map(item => ({
  email: item
}));

// DEPRECATED
if (String(process.env.VUE_APP_DEV_MODE) === '1') {
  const devEmail = process.env.VUE_APP_EMAIL_DEV || '';
  reservationEmailsBcc = [
    {
      email: devEmail
    }
  ];
}
export { reservationEmailsBcc };
