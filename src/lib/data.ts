// Zdieľané dáta pre celý web

export const companyInfo = {
  name: "RUBBER 24, s.r.o.",
  shortName: "RUBBER 24",
  ico: "50157370",
  dic: "2120211533",
  icDph: "SK2120211533",
  foundingYear: 2016,
  address: {
    street: "Remenárska 1220",
    city: "Bošany",
    zip: "956 18",
    country: "Slovensko",
  },
  contact: {
    email: "info@rubber24.sk",
    phone: "+421 917 588 737",
    phoneFormatted: "+421-917-588-737",
  },
  workingHours: "Po - Pi: 8:00 - 16:00",
  geo: {
    latitude: 48.6167,
    longitude: 18.2333,
  },
};

export const contactInfo = [
  {
    title: "Adresa",
    content: [companyInfo.address.street, `${companyInfo.address.zip} ${companyInfo.address.city}`, companyInfo.address.country],
  },
  {
    title: "Email",
    content: [companyInfo.contact.email],
    href: `mailto:${companyInfo.contact.email}`,
  },
  {
    title: "Telefón",
    content: [companyInfo.contact.phone],
    href: `tel:${companyInfo.contact.phone.replace(/\s/g, '')}`,
  },
  {
    title: "Pracovná doba",
    content: [companyInfo.workingHours],
  },
];

export const productTypes = [
  { value: "zmesi-namorne", label: "Zmesi pre námorné aplikácie" },
  { value: "zmesi-automotive", label: "Zmesi pre automotive" },
  { value: "zmesi-nakladna", label: "Zmesi pre nákladnú dopravu" },
  { value: "zmesi-priemysel", label: "Zmesi pre priemyselné komponenty" },
  { value: "konzultacia", label: "Konzultácia materiálu" },
  { value: "ine", label: "Iné" },
];

export const materials = [
  { name: "Prírodná guma (NR)", description: "Vysoká elasticita a pevnosť v ťahu" },
  { name: "NBR", description: "Odolná voči olejom a palivám" },
  { name: "EPDM", description: "Odolná voči poveternostným vplyvom a UV" },
  { name: "Silikón", description: "Tepelná odolnosť a flexibilita" },
  { name: "CR (Neoprén)", description: "Odolnosť voči ozónu a poveternosti" },
  { name: "FKM (Viton)", description: "Chemická a tepelná odolnosť" },
];
