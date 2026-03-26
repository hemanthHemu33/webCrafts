import dummyTech from '../assets/dummy-tech.svg';
import dummyOffice from '../assets/dummy-office.svg';
import dummyGridPurple from '../assets/dummy-grid-purple.svg';
import dummyDataFlow from '../assets/dummy-data-flow.svg';
import dummyCityNight from '../assets/dummy-city-night.svg';
import dummySustainability from '../assets/dummy-sustainability.svg';

export const heroMedia = {
  services: dummyDataFlow,
  industries: dummyCityNight,
  insights: dummyGridPurple,
  whatWeThink: dummyDataFlow,
  caseStudies: dummyOffice,
  careers: dummyCityNight,
  about: dummyGridPurple,
  contact: dummyOffice,
  newsroom: dummyTech,
  locations: dummyCityNight,
  sustainability: dummySustainability,
  awards: dummyGridPurple,
  search: dummyDataFlow,
};

export const cardMedia = {
  services: [dummyDataFlow, dummyTech, dummyGridPurple, dummyOffice],
  industries: [dummyCityNight, dummyOffice, dummyGridPurple],
  insights: [dummyGridPurple, dummyDataFlow, dummyTech, dummyOffice],
  newsroom: [dummyOffice, dummyCityNight, dummyTech],
  awards: [dummyGridPurple, dummyDataFlow, dummyTech],
  locations: [dummyCityNight, dummyOffice],
  caseStudies: [dummyDataFlow, dummyOffice, dummyGridPurple],
  sustainability: [dummySustainability, dummyDataFlow, dummyOffice],
};
