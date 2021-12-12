import { createClient } from 'microcms-js-sdk';

export const microCmsClient = createClient({
  serviceDomain: 'matu',
  apiKey: process.env.MICRO_CMS_API_KEY || '',
});
