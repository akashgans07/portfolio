import {
  FaAws,
  FaGoogle,
  FaIndustry,
  FaUniversity,
} from "react-icons/fa";

import {
  SiMeta,
  SiCoursera,
} from "react-icons/si";

const providers = [
  {
    id: "aws",
    name: "AWS Academy",
    icon: FaAws,
    count: "3 Badges",

    certificates: [
      {
        title: "AWS Educate Cloud 101",
        link: "YOUR_CERTIFICATE_LINK",
      },
      {
        title: "AWS Educate Introduction to Generative AI",
        link: "YOUR_CERTIFICATE_LINK",
      },
      {
        title: "AWS Educate Machine Learning Foundations",
        link: "YOUR_CERTIFICATE_LINK",
      },
    ],
  },

  {
    id: "johns-hopkins",
    name: "Johns Hopkins University",
    icon: FaUniversity,
    count: "5 Certifications",

    certificates: [
      {
        title: "GPU Programming",
        link: "YOUR_CERTIFICATE_LINK",
      },
      {
        title: "CUDA Advanced Libraries",
        link: "YOUR_CERTIFICATE_LINK",
      },
      {
        title: "CUDA at Scale for the Enterprise",
        link: "YOUR_CERTIFICATE_LINK",
      },
      {
        title: "Introduction to Concurrent Programming with GPUs",
        link: "YOUR_CERTIFICATE_LINK",
      },
      {
        title: "Introduction to Parallel Programming with CUDA",
        link: "YOUR_CERTIFICATE_LINK",
      },
    ],
  },

  {
    id: "google",
    name: "Google",
    icon: FaGoogle,
    count: "4 Certifications",

    certificates: [
      {
        title: "Google Cybersecurity",
        link: "YOUR_CERTIFICATE_LINK",
      },
      {
        title: "Foundations: Data, Data, Everywhere",
        link: "YOUR_CERTIFICATE_LINK",
      },
      {
        title: "Ask Questions to Make Data-Driven Decisions",
        link: "YOUR_CERTIFICATE_LINK",
      },
      {
        title: "Prepare Data for Exploration",
        link: "YOUR_CERTIFICATE_LINK",
      },
    ],
  },

  {
    id: "ibm",
    name: "IBM",
    icon: FaIndustry,
    count: "3 Certifications",

    certificates: [
      {
        title: "Introduction to Data Analytics",
        link: "YOUR_CERTIFICATE_LINK",
      },
      {
        title: "Excel Basics for Data Analysis",
        link: "YOUR_CERTIFICATE_LINK",
      },
      {
        title:
          "Data Visualization and Dashboards with Excel and Cognos",
        link: "YOUR_CERTIFICATE_LINK",
      },
    ],
  },

  {
    id: "michigan",
    name: "University of Michigan",
    icon: FaUniversity,
    count: "2 Certifications",

    certificates: [
      {
        title: "Building Web Applications in Django",
        link: "YOUR_CERTIFICATE_LINK",
      },
      {
        title: "Interactivity with JavaScript",
        link: "YOUR_CERTIFICATE_LINK",
      },
    ],
  },

  {
    id: "meta",
    name: "Meta",
    icon: SiMeta,
    count: "1 Certification",

    certificates: [
      {
        title: "HTML and CSS in Depth",
        link: "YOUR_CERTIFICATE_LINK",
      },
    ],
  },

  {
    id: "colorado",
    name: "University of Colorado",
    icon: FaUniversity,
    count: "1 Certification",

    certificates: [
      {
        title: "Database Management Essentials",
        link: "YOUR_CERTIFICATE_LINK",
      },
    ],
  },

  {
    id: "illinois-tech",
    name: "Illinois Tech",
    icon: FaUniversity,
    count: "1 Certification",

    certificates: [
      {
        title:
          "Relational Database Implementation and Applications",
        link: "YOUR_CERTIFICATE_LINK",
      },
    ],
  },

  {
    id: "scrimba",
    name: "Scrimba",
    icon: SiCoursera,
    count: "1 Certification",

    certificates: [
      {
        title: "Learn Bootstrap",
        link: "YOUR_CERTIFICATE_LINK",
      },
    ],
  },
];

export default providers;