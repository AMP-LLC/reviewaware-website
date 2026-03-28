import type { IndustryLandingDefinition } from "./types";

export const INDUSTRY_LANDING_REGISTRY: Record<string, IndustryLandingDefinition> = {
  "hvac-review-software": {
    slug: "hvac-review-software",
    tokens: {
      en: {
        industry: "HVAC",
        industryService: "HVAC service call",
        industryJob: "HVAC service call",
      },
      es: {
        industry: "HVAC",
        industryService: "servicio de HVAC",
        industryJob: "servicio de HVAC",
      },
    },
    useCases: {
      en: ["AC installation", "Furnace repair", "Seasonal maintenance", "Emergency HVAC service"],
      es: [
        "Instalación de aire acondicionado",
        "Reparación de horno",
        "Mantenimiento estacional",
        "Servicio de emergencia HVAC",
      ],
    },
  },
  "plumber-review-software": {
    slug: "plumber-review-software",
    tokens: {
      en: {
        industry: "Plumbing",
        industryService: "plumbing job",
        industryJob: "plumbing job",
      },
      es: {
        industry: "Fontanería",
        industryService: "trabajo de fontanería",
        industryJob: "trabajo de fontanería",
      },
    },
    useCases: {
      en: ["Drain cleaning", "Water heater installation", "Pipe repair", "Emergency plumbing"],
      es: [
        "Desatascos",
        "Instalación de termo eléctrico",
        "Reparación de tuberías",
        "Fontanería de urgencia",
      ],
    },
  },
  "roofing-review-software": {
    slug: "roofing-review-software",
    tokens: {
      en: {
        industry: "Roofing",
        industryService: "roofing job",
        industryJob: "roofing job",
      },
      es: {
        industry: "Techado",
        industryService: "trabajo de techado",
        industryJob: "trabajo de techado",
      },
    },
    useCases: {
      en: ["Roof replacement", "Storm damage repair", "Gutter installation", "Roof inspection"],
      es: [
        "Sustitución de tejado",
        "Reparación por tormenta",
        "Instalación de canalones",
        "Inspección de tejado",
      ],
    },
  },
  "landscaping-review-software": {
    slug: "landscaping-review-software",
    tokens: {
      en: {
        industry: "Landscaping",
        industryService: "landscaping job",
        industryJob: "landscaping job",
      },
      es: {
        industry: "Paisajismo",
        industryService: "trabajo de paisajismo",
        industryJob: "trabajo de paisajismo",
      },
    },
    useCases: {
      en: ["Lawn maintenance", "Landscape design", "Seasonal cleanup", "Irrigation install"],
      es: [
        "Mantenimiento del césped",
        "Diseño de jardín",
        "Limpieza estacional",
        "Instalación de riego",
      ],
    },
  },
  "cleaning-service-review-software": {
    slug: "cleaning-service-review-software",
    tokens: {
      en: {
        industry: "Cleaning",
        industryService: "cleaning job",
        industryJob: "cleaning job",
      },
      es: {
        industry: "Limpieza",
        industryService: "servicio de limpieza",
        industryJob: "servicio de limpieza",
      },
    },
    useCases: {
      en: ["Deep cleaning", "Move-out cleaning", "Office cleaning", "Recurring maid service"],
      es: [
        "Limpieza profunda",
        "Limpieza de mudanza",
        "Limpieza de oficinas",
        "Servicio de limpieza recurrente",
      ],
    },
  },
};

export const INDUSTRY_LANDING_SLUGS = Object.keys(INDUSTRY_LANDING_REGISTRY);

export function getIndustryLandingDefinition(
  slug: string,
): IndustryLandingDefinition | undefined {
  return INDUSTRY_LANDING_REGISTRY[slug];
}
