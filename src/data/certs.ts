import type { Cert, MsCert } from '../types';

const verify = (id: string) => `https://www.coursera.org/account/accomplishments/verify/${id}`;

/** Microsoft data & analytics certificates (authorized by Microsoft, via Coursera). */
export const msCerts: MsCert[] = [
  {
    title: 'Data Analysis and Visualization with Power BI',
    img: '/assets/cert-power-bi-data-analysis.jpg',
    date: 'Dec 2025',
    credentialId: 'HVZ1HQWDBKTU',
    verifyUrl: verify('HVZ1HQWDBKTU'),
  },
  {
    title: 'Data Modeling in Power BI',
    img: '/assets/cert-power-bi-data-modeling.jpg',
    date: 'Dec 2025',
    credentialId: 'VD73TKU8AXJP',
    verifyUrl: verify('VD73TKU8AXJP'),
  },
  {
    title: 'Extract, Transform and Load Data in Power BI',
    img: '/assets/cert-power-bi-etl.jpg',
    date: 'Dec 2025',
    credentialId: 'YDDY94U7MCS1',
    verifyUrl: verify('YDDY94U7MCS1'),
  },
  {
    title: 'Harnessing the Power of Data with Power BI',
    img: '/assets/cert-power-bi-harnessing.jpg',
    date: 'Nov 2025',
    credentialId: 'KF7KYR96XPL3',
    verifyUrl: verify('KF7KYR96XPL3'),
  },
  {
    title: 'Preparing Data for Analysis with Microsoft Excel',
    img: '/assets/cert-excel-preparing-data.jpg',
    date: 'Nov 2025',
    credentialId: 'OQY9P1YG7CFP',
    verifyUrl: verify('OQY9P1YG7CFP'),
  },
  {
    title: 'Data Manipulation and Transactions in SQL Server',
    img: '/assets/cert-sql-data-manipulation.jpg',
    date: 'Nov 2025',
    credentialId: 'AWTMKNS4F04J',
    verifyUrl: verify('AWTMKNS4F04J'),
  },
];

export const certs: Cert[] = [
  { title: 'Content Marketing', img: '/assets/ContentMarketingCertified.png' },
  { title: 'Digital Marketing', img: '/assets/DigitalMarketingCertified.png' },
  { title: 'Social Media', img: '/assets/SocialMediaCertified.png' },
];
