import type { IndustryLandingDefinition } from "./types";

export const INDUSTRY_LANDING_REGISTRY: Record<string, IndustryLandingDefinition> = {
  "contractor-review-software": {
    slug: "contractor-review-software",
    tokens: {
      en: {
        industry: "Contractor",
        industryPlural: "contractors",
        industryService: "contractor service",
        industryJob: "contractor job",
        job: "contractor job",
        service: "contractor service",
        jobs: "contractor jobs",
        services: "contractor services",
      },
      es: {
        industry: "Contratista",
        industryPlural: "contratistas",
        industryService: "servicio de contratista",
        industryJob: "trabajo de contratista",
        job: "trabajo de contratista",
        service: "servicio de contratista",
        jobs: "trabajos de contratista",
        services: "servicios de contratista",
      },
    },
    useCases: {
      en: [
        "Home renovation project",
        "Roof replacement",
        "Electrical installation",
        "Plumbing repair",
      ],
      es: [
        "Proyecto de reforma del hogar",
        "Sustitución de tejado",
        "Instalación eléctrica",
        "Reparación de fontanería",
      ],
    },
    copyOverrides: {
      en: {
        metadata: {
          title:
            "Contractor Review Software | Get More Google Reviews for Contractors",
          description:
            "Turn every completed job into a new Google review with QR jobsite cards and automated follow-ups designed for contractors.",
        },
        hero: {
          headlineLine1: "Get More Google Reviews for Your Contracting Business",
          headlineLine2: "",
          subtitleLine1:
            "Turn every completed job into a review opportunity with QR jobsite cards, automated follow-ups, and a review funnel designed for contractors.",
          subtitleLine2: "",
          ctaPrimary: "Start Getting More Reviews",
          ctaSecondary: "See How It Works",
          credibilityLine:
            "Built for general contractors, remodelers, and residential construction teams.",
        },
      },
      es: {
        metadata: {
          title:
            "Software de reseñas para contratistas | Más reseñas en Google",
          description:
            "Convierte cada trabajo en una nueva reseña de Google con tarjetas QR en obra y seguimientos automáticos pensados para contratistas.",
        },
        hero: {
          headlineLine1: "Consigue más reseñas en Google para tu negocio de contratación",
          headlineLine2: "",
          subtitleLine1:
            "Convierte cada trabajo completado en una oportunidad de reseña con tarjetas QR en obra, seguimientos automáticos y un embudo de reseñas pensado para contratistas.",
          subtitleLine2: "",
          ctaPrimary: "Empieza a conseguir más reseñas",
          ctaSecondary: "Ver cómo funciona",
          credibilityLine:
            "Pensado para contratistas generales, reformadores y equipos de construcción residencial.",
        },
      },
    },
  },
  "home-service-review-software": {
    slug: "home-service-review-software",
    tokens: {
      en: {
        industry: "Home Service",
        industryPlural: "home service businesses",
        industryService: "home service",
        industryJob: "service job",
        job: "service job",
        service: "home service",
        jobs: "service jobs",
        services: "home services",
      },
      es: {
        industry: "Servicios del hogar",
        industryPlural: "empresas de servicios del hogar",
        industryService: "servicio para el hogar",
        industryJob: "visita de servicio",
        job: "visita de servicio",
        service: "servicio para el hogar",
        jobs: "visitas de servicio",
        services: "servicios para el hogar",
      },
    },
    useCases: {
      en: ["HVAC repair", "Plumbing service", "Electrical installation", "Landscaping project"],
      es: [
        "Reparación HVAC",
        "Servicio de fontanería",
        "Instalación eléctrica",
        "Proyecto de paisajismo",
      ],
    },
    copyOverrides: {
      en: {
        metadata: {
          title:
            "Home Service Review Software | Get More Google Reviews for Service Businesses",
          description:
            "Generate more Google reviews after every service call with QR jobsite cards and automated review requests built for home service businesses.",
        },
        hero: {
          headlineLine1: "Review Software Built for Home Service Businesses",
          headlineLine2: "",
          subtitleLine1:
            "Turn every completed service call into a new Google review with QR cards, automated follow-ups, and a repeatable review rhythm built for service companies.",
          subtitleLine2: "",
          ctaPrimary: "Start Getting More Reviews",
          ctaSecondary: "See How It Works",
          credibilityLine:
            "Built for HVAC, plumbing, electrical, cleaning, and other home service pros.",
        },
      },
      es: {
        metadata: {
          title:
            "Software de reseñas para servicios del hogar | Más reseñas en Google",
          description:
            "Genera más reseñas en Google tras cada visita con tarjetas QR en obra y solicitudes automáticas pensadas para empresas de servicios del hogar.",
        },
        hero: {
          headlineLine1:
            "Software de reseñas pensado para empresas de servicios del hogar",
          headlineLine2: "",
          subtitleLine1:
            "Convierte cada visita de servicio completada en una nueva reseña de Google con tarjetas QR, seguimientos automáticos y un ritmo repetible de reseñas pensado para empresas de servicios.",
          subtitleLine2: "",
          ctaPrimary: "Empieza a conseguir más reseñas",
          ctaSecondary: "Ver cómo funciona",
          credibilityLine:
            "Pensado para HVAC, fontanería, electricidad, limpieza y otros profesionales del hogar.",
        },
      },
    },
  },
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
  "electrical-review-software": {
    slug: "electrical-review-software",
    tokens: {
      en: {
        industry: "Electrical",
        industryService: "electrical job",
        industryJob: "electrical job",
      },
      es: {
        industry: "Electricidad",
        industryService: "trabajo eléctrico",
        industryJob: "trabajo eléctrico",
      },
    },
    useCases: {
      en: ["Panel upgrade", "Outlet installation", "Lighting retrofit", "Emergency electrical"],
      es: [
        "Actualización de cuadro",
        "Instalación de enchufes",
        "Renovación de iluminación",
        "Urgencias eléctricas",
      ],
    },
  },
  "garage-door-review-software": {
    slug: "garage-door-review-software",
    tokens: {
      en: {
        industry: "Garage Door",
        industryService: "garage door job",
        industryJob: "garage door job",
      },
      es: {
        industry: "Puertas de garaje",
        industryService: "trabajo de puerta de garaje",
        industryJob: "trabajo de puerta de garaje",
      },
    },
    useCases: {
      en: ["Opener install", "Spring replacement", "Track alignment", "Emergency door repair"],
      es: [
        "Instalación de motor",
        "Cambio de muelles",
        "Alineación de raíles",
        "Reparación urgente de puerta",
      ],
    },
  },
  "pest-control-review-software": {
    slug: "pest-control-review-software",
    tokens: {
      en: {
        industry: "Pest Control",
        industryService: "pest control visit",
        industryJob: "pest control visit",
      },
      es: {
        industry: "Control de plagas",
        industryService: "visita de control de plagas",
        industryJob: "visita de control de plagas",
      },
    },
    useCases: {
      en: ["Termite treatment", "Rodent exclusion", "Mosquito barrier", "Seasonal inspection"],
      es: [
        "Tratamiento anti termitas",
        "Exclusión de roedores",
        "Barrera antimosquitos",
        "Inspección estacional",
      ],
    },
  },
  "tree-service-review-software": {
    slug: "tree-service-review-software",
    tokens: {
      en: {
        industry: "Tree Service",
        industryService: "tree service job",
        industryJob: "tree service job",
      },
      es: {
        industry: "Servicio de arboricultura",
        industryService: "trabajo de poda o tala",
        industryJob: "trabajo de poda o tala",
      },
    },
    useCases: {
      en: ["Tree removal", "Pruning", "Stump grinding", "Storm cleanup"],
      es: ["Tala", "Poda", "Eliminación de tocón", "Limpieza por tormenta"],
    },
  },
  "pool-service-review-software": {
    slug: "pool-service-review-software",
    tokens: {
      en: {
        industry: "Pool Service",
        industryService: "pool service visit",
        industryJob: "pool service visit",
      },
      es: {
        industry: "Mantenimiento de piscinas",
        industryService: "visita de mantenimiento de piscina",
        industryJob: "visita de mantenimiento de piscina",
      },
    },
    useCases: {
      en: ["Weekly maintenance", "Equipment repair", "Opening / closing", "Leak detection"],
      es: [
        "Mantenimiento semanal",
        "Reparación de equipo",
        "Apertura / cierre de temporada",
        "Detección de fugas",
      ],
    },
  },
  "pressure-washing-review-software": {
    slug: "pressure-washing-review-software",
    tokens: {
      en: {
        industry: "Pressure Washing",
        industryService: "pressure washing job",
        industryJob: "pressure washing job",
      },
      es: {
        industry: "Hidrolimpieza",
        industryService: "servicio de hidrolimpieza",
        industryJob: "trabajo de hidrolimpieza",
      },
    },
    useCases: {
      en: ["Driveway cleaning", "House wash", "Deck brightening", "Commercial storefront"],
      es: [
        "Limpieza de acceso",
        "Lavado de fachada",
        "Rehabilitación de terraza",
        "Escaparate comercial",
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
