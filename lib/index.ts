const navigationLinks = [
  {
    id: 1,
    type: "simple",
    title: "home_page",
    link: "/#",
  },
  {
    id: 2,
    type: "simple",
    title: "about_us",
    link: "/#about-us",
  },

  {
    id: 3,
    type: "simple",
    title: "featured_clients",
    link: "/#featured-clients",
  },
  {
    id: 4,
    type: "complex",
    title: "our_services",
    link: undefined,
    subItems: [
      {
        id: 5,
        type: "simple",
        title: "fire_insurance",
        link: "/services/fire_insurance",
      },
      {
        id: 6,
        type: "simple",
        title: "health_insurance",
        link: "/services/health_insurance",
      },
      {
        id: 7,
        type: "simple",
        title: "engineering_insurance",
        link: "/services/engineering_insurance",
      },
      {
        id: 8,
        type: "simple",
        title: "car_insurance",
        link: "/services/car_insurance",
      },
      {
        id: 9,
        type: "simple",
        title: "other_insurance_types",
        link: "/services",
      },
    ],
  },
  // {
  //   id: 9,
  //   type: "simple",
  //   title: "contact_us",
  //   link: "/#contact-us",
  // },
];

const insuranceTypesList = [
  {
    id: 1,
    name: "health_insurance",
    description: "health_insurance_desc",
    imageSrc: "health-insurance.jpg",
    link: "/0",
  },
  {
    id: 2,
    name: "fire_insurance",
    description: "fire_insurance_desc",
    imageSrc: "fire-insurance.jpg",
    link: "/1",
  },
  {
    id: 3,
    name: "car_insurance",
    description: "car_insurance_desc",
    imageSrc: "cars-insurance.jpg",
    link: "/2",
  },
  {
    id: 4,
    name: "engineering_insurance",
    description: "engineering_insurance_desc",
    imageSrc: "engineering-insurance.jpg",
    link: "/3",
  },
  {
    id: 5,
    name: "cargo_insurance",
    description: "cargo_insurance_desc",
    imageSrc: "cargo-insurance.png",
    link: "/4",
  },
  {
    id: 6,
    name: "personal_accident_insurance",
    description: "personal_accident_insurance_desc",
    imageSrc: "personal-accident-insurance.jpg",
    link: "/5",
  },
  {
    id: 7,
    name: "cash_in_transit_insurance",
    description: "cash_in_transit_insurance_desc",
    imageSrc: "cash-in-transit-insurance.png",
    link: "/6",
  },
  {
    id: 8,
    name: "cash_in_safe_insurance",
    description: "cash_in_safe_insurance_desc",
    imageSrc: "cash-in-safe-insurance.png",
    link: "/7",
  },
  {
    id: 9,
    name: "legal_liability_insurance",
    description: "legal_liability_insurance_desc",
    imageSrc: "legal-liability-insurance.jpg",
    link: "/8",
  },
  {
    id: 10,
    name: "travel_insurance",
    description: "travel_insurance_desc",
    imageSrc: "travel-insurance.jpg",
    link: "/9",
  },
];

const featuredClients = [
  {
    id: 1,
    name: "tbi",
    description: ["tbi_info_1", "tbi_info_2"],
    imageSrc: "/featured-clients/TBI.jpg",
  },
  {
    id: 2,
    name: "usembassy",
    description: ["us_embassy_info_1"],
    imageSrc: "/featured-clients/Us-embassy.png",
  },
  {
    id: 3,
    name: "moo",
    description: ["moo_info_1"],
    imageSrc: "/featured-clients/MoO.png",
  },
  {
    id: 4,
    name: "sanaAlamar",
    description: ["sana_alamar_info_1"],
    imageSrc: "/featured-clients/Sana-alamar.jpg",
  },
  {
    id: 5,
    name: "halawany",
    description: ["halawany_sweets_info_1"],
    imageSrc: "/featured-clients/Halawany.jpg",
  },
  {
    id: 6,
    name: "wadi",
    description: ["wadi_al_rawashed_info_1"],
    imageSrc: "/featured-clients/Wadi.png",
  },
  {
    id: 7,
    name: "khoshnaw",
    description: ["khoshnaw_company_info_1"],
    imageSrc: "/featured-clients/Khoshnaw.jpg",
  },
  {
    id: 8,
    name: "almaham",
    description: ["almaham_company_info_1"],
    imageSrc: "/featured-clients/Almaham.jpg",
  },
];

export { navigationLinks, insuranceTypesList, featuredClients };
