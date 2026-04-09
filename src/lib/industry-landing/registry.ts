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
  "general-contractor-review-software": {
    slug: "general-contractor-review-software",
    tokens: {
      en: {
        industry: "General Contractor",
        industryPlural: "general contractors",
        industryService: "general contracting job",
        industryJob: "general contracting job",
        job: "general contracting job",
        service: "general contracting service",
        jobs: "general contracting jobs",
        services: "general contracting services",
      },
      es: {
        industry: "Contratista general",
        industryPlural: "contratistas generales",
        industryService: "obra de contratista general",
        industryJob: "obra de contratista general",
        job: "obra de contratista general",
        service: "servicio de contratista general",
        jobs: "obras de contratista general",
        services: "servicios de contratista general",
      },
    },
    useCases: {
      en: ["Kitchen remodel", "Bathroom remodel", "Room addition", "Whole-home renovation"],
      es: [
        "Reforma de cocina",
        "Reforma de baño",
        "Ampliación de estancia",
        "Renovación integral de vivienda",
      ],
    },
    copyOverrides: {
      en: {
        metadata: {
          title:
            "General Contractor Review Software | Get More Google Reviews | ReviewAware",
          description:
            "Turn finished remodels and additions into Google reviews with QR handoffs and automated follow-ups built for general contractors juggling crews and clients.",
        },
        hero: {
          headlineLine1: "Get More Google Reviews for Your General Contracting Business",
          headlineLine2: "",
          subtitleLine1:
            "Every punch list and walkthrough is a moment to capture a review—QR cards for homeowners, timed requests after final sign-off, and reminders that match how GCs actually close jobs.",
          subtitleLine2: "",
          ctaPrimary: "Start Getting More Reviews",
          ctaSecondary: "See How It Works",
          credibilityLine:
            "Built for residential and commercial general contractors running multi-phase projects.",
        },
      },
      es: {
        metadata: {
          title:
            "Software de reseñas para contratistas generales | Más reseñas en Google | ReviewAware",
          description:
            "Convierte reformas y ampliaciones terminadas en reseñas de Google con entregas QR y seguimientos automáticos pensados para contratistas generales.",
        },
        hero: {
          headlineLine1: "Consigue más reseñas en Google para tu negocio de contratación general",
          headlineLine2: "",
          subtitleLine1:
            "Cada lista de repaso y entrega es una oportunidad de reseña: tarjetas QR, solicitudes al cierre y recordatorios alineados con cómo cerráis obra.",
          subtitleLine2: "",
          ctaPrimary: "Empieza a conseguir más reseñas",
          ctaSecondary: "Ver cómo funciona",
          credibilityLine:
            "Pensado para contratistas generales residenciales y comerciales con proyectos por fases.",
        },
      },
    },
  },
  "painting-contractor-review-software": {
    slug: "painting-contractor-review-software",
    tokens: {
      en: {
        industry: "Painting",
        industryPlural: "painting contractors",
        industryService: "painting job",
        industryJob: "painting job",
        job: "painting job",
        service: "painting service",
        jobs: "painting jobs",
        services: "painting services",
      },
      es: {
        industry: "Pintura",
        industryPlural: "empresas de pintura",
        industryService: "trabajo de pintura",
        industryJob: "trabajo de pintura",
        job: "trabajo de pintura",
        service: "servicio de pintura",
        jobs: "trabajos de pintura",
        services: "servicios de pintura",
      },
    },
    useCases: {
      en: ["Interior painting", "Exterior painting", "Cabinet painting", "Commercial painting"],
      es: [
        "Pintura interior",
        "Pintura exterior",
        "Lacado de armarios",
        "Pintura comercial",
      ],
    },
    copyOverrides: {
      en: {
        metadata: {
          title: "Painting Contractor Review Software | Get More Google Reviews | ReviewAware",
          description:
            "Capture reviews right after walkthroughs with QR cards and automated requests tailored for interior, exterior, and commercial painting crews.",
        },
        hero: {
          headlineLine1: "Get More Google Reviews for Your Painting Business",
          headlineLine2: "",
          subtitleLine1:
            "Fresh paint is memorable—strike while the job is vivid with on-site QR handoffs and follow-ups timed to your final inspection.",
          subtitleLine2: "",
          ctaPrimary: "Start Getting More Reviews",
          ctaSecondary: "See How It Works",
          credibilityLine: "Built for residential and commercial painting contractors.",
        },
      },
      es: {
        metadata: {
          title: "Software de reseñas para pintores y empresas de pintura | ReviewAware",
          description:
            "Captura reseñas tras las entregas con tarjetas QR y solicitudes automáticas para equipos de pintura interior, exterior y comercial.",
        },
        hero: {
          headlineLine1: "Consigue más reseñas en Google para tu negocio de pintura",
          headlineLine2: "",
          subtitleLine1:
            "La pintura reciente se recuerda: pide la reseña en obra con QR y seguimientos alineados con la inspección final.",
          subtitleLine2: "",
          ctaPrimary: "Empieza a conseguir más reseñas",
          ctaSecondary: "Ver cómo funciona",
          credibilityLine: "Pensado para pintores residenciales y comerciales.",
        },
      },
    },
  },
  "flooring-contractor-review-software": {
    slug: "flooring-contractor-review-software",
    tokens: {
      en: {
        industry: "Flooring",
        industryPlural: "flooring contractors",
        industryService: "flooring installation",
        industryJob: "flooring job",
        job: "flooring job",
        service: "flooring service",
        jobs: "flooring jobs",
        services: "flooring services",
      },
      es: {
        industry: "Suelos",
        industryPlural: "instaladores de suelos",
        industryService: "instalación de suelo",
        industryJob: "trabajo de suelos",
        job: "trabajo de suelos",
        service: "servicio de suelos",
        jobs: "trabajos de suelos",
        services: "servicios de suelos",
      },
    },
    useCases: {
      en: ["Hardwood installation", "Laminate flooring", "Tile installation", "Floor repair"],
      es: [
        "Instalación de parquet",
        "Suelo laminado",
        "Instalación de baldosa",
        "Reparación de suelo",
      ],
    },
    copyOverrides: {
      en: {
        metadata: {
          title: "Flooring Contractor Review Software | Get More Google Reviews | ReviewAware",
          description:
            "Turn installs and repairs into Google reviews with QR jobsite cards and automated follow-ups for hardwood, tile, and laminate crews.",
        },
        hero: {
          headlineLine1: "Get More Google Reviews for Your Flooring Business",
          headlineLine2: "",
          subtitleLine1:
            "Customers notice a finished floor immediately—hand them a QR review card before you pack up the tools.",
          subtitleLine2: "",
          ctaPrimary: "Start Getting More Reviews",
          ctaSecondary: "See How It Works",
          credibilityLine: "Built for flooring installers and refinishers working in homes and businesses.",
        },
      },
      es: {
        metadata: {
          title: "Software de reseñas para instaladores de suelos | ReviewAware",
          description:
            "Convierte instalaciones y reparaciones en reseñas de Google con QR en obra y seguimientos para parquet, baldosa y laminado.",
        },
        hero: {
          headlineLine1: "Consigue más reseñas en Google para tu negocio de suelos",
          headlineLine2: "",
          subtitleLine1:
            "El cliente ve el suelo nuevo al instante: entrega la tarjeta QR antes de recoger herramientas.",
          subtitleLine2: "",
          ctaPrimary: "Empieza a conseguir más reseñas",
          ctaSecondary: "Ver cómo funciona",
          credibilityLine: "Pensado para instaladores y restauradores de suelos.",
        },
      },
    },
  },
  "fence-contractor-review-software": {
    slug: "fence-contractor-review-software",
    tokens: {
      en: {
        industry: "Fence",
        industryPlural: "fence contractors",
        industryService: "fence installation",
        industryJob: "fence job",
        job: "fence job",
        service: "fence service",
        jobs: "fence jobs",
        services: "fence services",
      },
      es: {
        industry: "Cerramientos",
        industryPlural: "empresas de vallas",
        industryService: "instalación de valla",
        industryJob: "trabajo de valla",
        job: "trabajo de valla",
        service: "servicio de vallas",
        jobs: "trabajos de valla",
        services: "servicios de vallas",
      },
    },
    useCases: {
      en: [
        "Wood fence installation",
        "Vinyl fence installation",
        "Fence repair",
        "Gate installation",
      ],
      es: [
        "Instalación de valla de madera",
        "Instalación de valla de vinilo",
        "Reparación de valla",
        "Instalación de puerta de acceso",
      ],
    },
    copyOverrides: {
      en: {
        metadata: {
          title: "Fence Contractor Review Software | Get More Google Reviews | ReviewAware",
          description:
            "Collect Google reviews after installs and repairs with QR handoffs and automated requests built for fence and gate contractors.",
        },
        hero: {
          headlineLine1: "Get More Google Reviews for Your Fence & Gate Business",
          headlineLine2: "",
          subtitleLine1:
            "Property lines look sharp when you leave—capture the moment with QR cards and timed emails before the next neighbor asks who built it.",
          subtitleLine2: "",
          ctaPrimary: "Start Getting More Reviews",
          ctaSecondary: "See How It Works",
          credibilityLine: "Built for residential and commercial fence installation teams.",
        },
      },
      es: {
        metadata: {
          title: "Software de reseñas para empresas de vallas y cerramientos | ReviewAware",
          description:
            "Consigue reseñas en Google tras instalaciones y reparaciones con QR y solicitudes automáticas para contratistas de vallas y puertas.",
        },
        hero: {
          headlineLine1: "Más reseñas en Google para tu negocio de vallas y puertas",
          headlineLine2: "",
          subtitleLine1:
            "El resultado se ve al irte: captura el momento con QR y correos oportunos antes de que el vecino pregunte quién trabajó.",
          subtitleLine2: "",
          ctaPrimary: "Empieza a conseguir más reseñas",
          ctaSecondary: "Ver cómo funciona",
          credibilityLine: "Pensado para equipos de instalación de vallas residenciales y comerciales.",
        },
      },
    },
  },
  "deck-builder-review-software": {
    slug: "deck-builder-review-software",
    tokens: {
      en: {
        industry: "Deck Building",
        industryPlural: "deck builders",
        industryService: "deck build",
        industryJob: "deck job",
        job: "deck job",
        service: "deck building service",
        jobs: "deck projects",
        services: "deck building services",
      },
      es: {
        industry: "Construcción de terrazas",
        industryPlural: "constructores de terrazas",
        industryService: "construcción de terraza",
        industryJob: "trabajo de terraza",
        job: "trabajo de terraza",
        service: "servicio de terrazas",
        jobs: "proyectos de terraza",
        services: "servicios de terrazas",
      },
    },
    useCases: {
      en: ["Deck installation", "Deck repair", "Composite deck build", "Patio deck replacement"],
      es: [
        "Instalación de terraza",
        "Reparación de terraza",
        "Terraza de composite",
        "Sustitución de terraza de patio",
      ],
    },
    copyOverrides: {
      en: {
        metadata: {
          title: "Deck Builder Review Software | Get More Google Reviews | ReviewAware",
          description:
            "Turn completed deck projects into Google reviews with QR jobsite cards and automated follow-ups for builders and remodelers.",
        },
        hero: {
          headlineLine1: "Get More Google Reviews for Your Deck Building Business",
          headlineLine2: "",
          subtitleLine1:
            "Homeowners celebrate a new deck the same day—put a QR review card in their hands while the sawdust is still fresh.",
          subtitleLine2: "",
          ctaPrimary: "Start Getting More Reviews",
          ctaSecondary: "See How It Works",
          credibilityLine: "Built for custom deck builders and outdoor living contractors.",
        },
      },
      es: {
        metadata: {
          title: "Software de reseñas para constructores de terrazas | ReviewAware",
          description:
            "Convierte proyectos de terraza en reseñas de Google con QR en obra y seguimientos automáticos.",
        },
        hero: {
          headlineLine1: "Más reseñas en Google para tu negocio de terrazas",
          headlineLine2: "",
          subtitleLine1:
            "El cliente celebra la terraza el mismo día: entrega el QR mientras aún huele a obra nueva.",
          subtitleLine2: "",
          ctaPrimary: "Empieza a conseguir más reseñas",
          ctaSecondary: "Ver cómo funciona",
          credibilityLine: "Pensado para constructores de terrazas a medida y exterior.",
        },
      },
    },
  },
  "window-cleaning-review-software": {
    slug: "window-cleaning-review-software",
    tokens: {
      en: {
        industry: "Window Cleaning",
        industryPlural: "window cleaning companies",
        industryService: "window cleaning visit",
        industryJob: "window cleaning job",
        job: "window cleaning job",
        service: "window cleaning service",
        jobs: "window cleaning jobs",
        services: "window cleaning services",
      },
      es: {
        industry: "Limpieza de cristales",
        industryPlural: "empresas de limpieza de ventanas",
        industryService: "visita de limpieza de cristales",
        industryJob: "servicio de limpieza de ventanas",
        job: "servicio de limpieza de ventanas",
        service: "servicio de limpieza de ventanas",
        jobs: "visitas de limpieza",
        services: "servicios de limpieza de cristales",
      },
    },
    useCases: {
      en: [
        "Residential window cleaning",
        "Commercial window cleaning",
        "Screen cleaning",
        "Post-construction window cleaning",
      ],
      es: [
        "Limpieza de ventanas residencial",
        "Limpieza de ventanas comercial",
        "Limpieza de mosquiteras",
        "Limpieza de cristales post-obra",
      ],
    },
    copyOverrides: {
      en: {
        metadata: {
          title: "Window Cleaning Review Software | Get More Google Reviews | ReviewAware",
          description:
            "Turn streak-free finishes into Google reviews with QR handoffs and automated follow-ups for residential, commercial, and post-construction crews.",
        },
        hero: {
          headlineLine1: "Get More Google Reviews for Your Window Cleaning Business",
          headlineLine2: "",
          subtitleLine1:
            "Sparkling glass is your proof—capture reviews while customers still see the shine.",
          subtitleLine2: "",
          ctaPrimary: "Start Getting More Reviews",
          ctaSecondary: "See How It Works",
          credibilityLine: "Built for residential, commercial, and post-construction window cleaners.",
        },
      },
      es: {
        metadata: {
          title: "Software de reseñas para limpieza de cristales | ReviewAware",
          description:
            "Convierte acabados impecables en reseñas de Google con QR y seguimientos para equipos residenciales, comerciales y post-obra.",
        },
        hero: {
          headlineLine1: "Más reseñas en Google para tu negocio de limpieza de cristales",
          headlineLine2: "",
          subtitleLine1:
            "Los cristales brillantes son tu prueba: pide la reseña mientras el cliente aún lo ve.",
          subtitleLine2: "",
          ctaPrimary: "Empieza a conseguir más reseñas",
          ctaSecondary: "Ver cómo funciona",
          credibilityLine: "Pensado para limpieza residencial, comercial y post-obra.",
        },
      },
    },
  },
  "carpet-cleaning-review-software": {
    slug: "carpet-cleaning-review-software",
    tokens: {
      en: {
        industry: "Carpet Cleaning",
        industryPlural: "carpet cleaning companies",
        industryService: "carpet cleaning visit",
        industryJob: "carpet cleaning job",
        job: "carpet cleaning job",
        service: "carpet cleaning service",
        jobs: "carpet cleaning jobs",
        services: "carpet cleaning services",
      },
      es: {
        industry: "Limpieza de alfombras",
        industryPlural: "empresas de limpieza de alfombras",
        industryService: "limpieza de alfombras",
        industryJob: "servicio de alfombras",
        job: "servicio de alfombras",
        service: "servicio de alfombras",
        jobs: "visitas de limpieza",
        services: "servicios de limpieza textil",
      },
    },
    useCases: {
      en: ["Carpet cleaning", "Stain removal", "Upholstery cleaning", "Pet odor treatment"],
      es: [
        "Limpieza de alfombras",
        "Eliminación de manchas",
        "Limpieza de tapicería",
        "Tratamiento de olor por mascotas",
      ],
    },
    copyOverrides: {
      en: {
        metadata: {
          title: "Carpet Cleaning Review Software | Get More Google Reviews | ReviewAware",
          description:
            "Convert fresh carpets and upholstery work into Google reviews with QR cards and automated requests after every visit.",
        },
        hero: {
          headlineLine1: "Get More Google Reviews for Your Carpet Cleaning Business",
          headlineLine2: "",
          subtitleLine1:
            "Customers feel the difference underfoot—hand them a QR review card before you roll up the hoses.",
          subtitleLine2: "",
          ctaPrimary: "Start Getting More Reviews",
          ctaSecondary: "See How It Works",
          credibilityLine: "Built for carpet and upholstery cleaners serving homes and offices.",
        },
      },
      es: {
        metadata: {
          title: "Software de reseñas para limpieza de alfombras | ReviewAware",
          description:
            "Convierte alfombras y tapicería recién limpias en reseñas de Google con QR y solicitudes automáticas tras cada visita.",
        },
        hero: {
          headlineLine1: "Más reseñas en Google para tu negocio de limpieza de alfombras",
          headlineLine2: "",
          subtitleLine1:
            "El cliente nota el cambio: entrega el QR antes de recoger las mangueras.",
          subtitleLine2: "",
          ctaPrimary: "Empieza a conseguir más reseñas",
          ctaSecondary: "Ver cómo funciona",
          credibilityLine: "Pensado para limpieza de alfombras y tapicería en hogares y oficinas.",
        },
      },
    },
  },
  "restoration-review-software": {
    slug: "restoration-review-software",
    tokens: {
      en: {
        industry: "Restoration",
        industryPlural: "restoration contractors",
        industryService: "restoration job",
        industryJob: "restoration job",
        job: "restoration job",
        service: "restoration service",
        jobs: "restoration jobs",
        services: "restoration services",
      },
      es: {
        industry: "Restauración",
        industryPlural: "empresas de restauración",
        industryService: "trabajo de restauración",
        industryJob: "trabajo de restauración",
        job: "trabajo de restauración",
        service: "servicio de restauración",
        jobs: "trabajos de restauración",
        services: "servicios de restauración",
      },
    },
    useCases: {
      en: [
        "Water damage restoration",
        "Fire damage cleanup",
        "Mold remediation",
        "Storm damage restoration",
      ],
      es: [
        "Restauración por daños de agua",
        "Limpieza por incendio",
        "Remediación de moho",
        "Restauración por tormenta",
      ],
    },
    copyOverrides: {
      en: {
        metadata: {
          title: "Restoration Contractor Review Software | Get More Google Reviews | ReviewAware",
          description:
            "Earn Google reviews after mitigation and rebuilds with QR handoffs and automated follow-ups for water, fire, and storm restoration teams.",
        },
        hero: {
          headlineLine1: "Get More Google Reviews for Your Restoration Business",
          headlineLine2: "",
          subtitleLine1:
            "When the job is dry, safe, and documented, customers want to say thank you—make it easy with QR cards and timely requests.",
          subtitleLine2: "",
          ctaPrimary: "Start Getting More Reviews",
          ctaSecondary: "See How It Works",
          credibilityLine: "Built for mitigation and reconstruction crews handling insurance-driven work.",
        },
      },
      es: {
        metadata: {
          title: "Software de reseñas para empresas de restauración | ReviewAware",
          description:
            "Consigue reseñas en Google tras mitigación y reconstrucción con QR y seguimientos para equipos de agua, fuego y tormentas.",
        },
        hero: {
          headlineLine1: "Más reseñas en Google para tu negocio de restauración",
          headlineLine2: "",
          subtitleLine1:
            "Cuando el trabajo está seco y documentado, el cliente quiere agradecer: facilítalo con QR y solicitudes oportunas.",
          subtitleLine2: "",
          ctaPrimary: "Empieza a conseguir más reseñas",
          ctaSecondary: "Ver cómo funciona",
          credibilityLine: "Pensado para mitigación y reconstrucción con trabajos asegurados.",
        },
      },
    },
  },
  "appliance-repair-review-software": {
    slug: "appliance-repair-review-software",
    tokens: {
      en: {
        industry: "Appliance Repair",
        industryPlural: "appliance repair technicians",
        industryService: "appliance repair visit",
        industryJob: "appliance repair job",
        job: "appliance repair job",
        service: "appliance repair service",
        jobs: "appliance repair jobs",
        services: "appliance repair services",
      },
      es: {
        industry: "Reparación de electrodomésticos",
        industryPlural: "técnicos de electrodomésticos",
        industryService: "visita de reparación",
        industryJob: "reparación de electrodoméstico",
        job: "reparación de electrodoméstico",
        service: "servicio de reparación",
        jobs: "reparaciones",
        services: "servicios de electrodomésticos",
      },
    },
    useCases: {
      en: ["Refrigerator repair", "Washer repair", "Dryer repair", "Oven repair"],
      es: [
        "Reparación de frigorífico",
        "Reparación de lavadora",
        "Reparación de secadora",
        "Reparación de horno",
      ],
    },
    copyOverrides: {
      en: {
        metadata: {
          title: "Appliance Repair Review Software | Get More Google Reviews | ReviewAware",
          description:
            "Turn fixed appliances into five-star Google reviews with QR handoffs and automated follow-ups after every service call.",
        },
        hero: {
          headlineLine1: "Get More Google Reviews for Your Appliance Repair Business",
          headlineLine2: "",
          subtitleLine1:
            "A working fridge or washer is instant relief—capture reviews while gratitude is highest.",
          subtitleLine2: "",
          ctaPrimary: "Start Getting More Reviews",
          ctaSecondary: "See How It Works",
          credibilityLine: "Built for in-home appliance repair teams and small service shops.",
        },
      },
      es: {
        metadata: {
          title: "Software de reseñas para reparación de electrodomésticos | ReviewAware",
          description:
            "Convierte reparaciones exitosas en reseñas de Google con QR y seguimientos tras cada visita.",
        },
        hero: {
          headlineLine1: "Más reseñas en Google para tu negocio de reparación de electrodomésticos",
          headlineLine2: "",
          subtitleLine1:
            "Un frigorífico o lavadora que vuelve a funcionar genera alivio al instante: pide la reseña ahí.",
          subtitleLine2: "",
          ctaPrimary: "Empieza a conseguir más reseñas",
          ctaSecondary: "Ver cómo funciona",
          credibilityLine: "Pensado para técnicos a domicilio y talleres de electrodomésticos.",
        },
      },
    },
  },
  "chimney-service-review-software": {
    slug: "chimney-service-review-software",
    tokens: {
      en: {
        industry: "Chimney",
        industryPlural: "chimney service companies",
        industryService: "chimney service visit",
        industryJob: "chimney service job",
        job: "chimney service job",
        service: "chimney service",
        jobs: "chimney jobs",
        services: "chimney services",
      },
      es: {
        industry: "Chimeneas",
        industryPlural: "empresas de servicio de chimeneas",
        industryService: "visita de chimenea",
        industryJob: "trabajo de chimenea",
        job: "trabajo de chimenea",
        service: "servicio de chimeneas",
        jobs: "trabajos de chimenea",
        services: "servicios de chimeneas",
      },
    },
    useCases: {
      en: ["Chimney cleaning", "Chimney repair", "Fireplace inspection", "Cap replacement"],
      es: [
        "Limpieza de chimenea",
        "Reparación de chimenea",
        "Inspección de chimenea",
        "Sustitución de tapa",
      ],
    },
    copyOverrides: {
      en: {
        metadata: {
          title: "Chimney Service Review Software | Get More Google Reviews | ReviewAware",
          description:
            "Collect Google reviews after sweeps, inspections, and repairs with QR cards and automated follow-ups for chimney and fireplace pros.",
        },
        hero: {
          headlineLine1: "Get More Google Reviews for Your Chimney Service Business",
          headlineLine2: "",
          subtitleLine1:
            "Safety paperwork and a clean flue build trust—pair it with a simple QR review ask before you head down the ladder.",
          subtitleLine2: "",
          ctaPrimary: "Start Getting More Reviews",
          ctaSecondary: "See How It Works",
          credibilityLine: "Built for chimney sweeps, inspectors, and repair technicians.",
        },
      },
      es: {
        metadata: {
          title: "Software de reseñas para servicio de chimeneas | ReviewAware",
          description:
            "Consigue reseñas en Google tras deshollinados, inspecciones y reparaciones con QR y seguimientos automáticos.",
        },
        hero: {
          headlineLine1: "Más reseñas en Google para tu negocio de chimeneas",
          headlineLine2: "",
          subtitleLine1:
            "La documentación de seguridad y el tiro limpio generan confianza: añade la petición de reseña con QR antes de bajar.",
          subtitleLine2: "",
          ctaPrimary: "Empieza a conseguir más reseñas",
          ctaSecondary: "Ver cómo funciona",
          credibilityLine: "Pensado para deshollinadores, inspectores y técnicos de reparación.",
        },
      },
    },
  },
  "masonry-contractor-review-software": {
    slug: "masonry-contractor-review-software",
    tokens: {
      en: {
        industry: "Masonry",
        industryPlural: "masonry contractors",
        industryService: "masonry job",
        industryJob: "masonry job",
        job: "masonry job",
        service: "masonry service",
        jobs: "masonry jobs",
        services: "masonry services",
      },
      es: {
        industry: "Albañilería y mampostería",
        industryPlural: "albañiles y mamposteros",
        industryService: "trabajo de mampostería",
        industryJob: "trabajo de mampostería",
        job: "trabajo de mampostería",
        service: "servicio de mampostería",
        jobs: "trabajos de mampostería",
        services: "servicios de mampostería",
      },
    },
    useCases: {
      en: ["Brick repair", "Stone installation", "Retaining wall build", "Chimney masonry repair"],
      es: [
        "Reparación de ladrillo",
        "Instalación de piedra",
        "Construcción de muro de contención",
        "Reparación de mampostería de chimenea",
      ],
    },
    copyOverrides: {
      en: {
        metadata: {
          title: "Masonry Contractor Review Software | Get More Google Reviews | ReviewAware",
          description:
            "Turn finished brick, stone, and block work into Google reviews with QR jobsite handoffs and automated follow-ups.",
        },
        hero: {
          headlineLine1: "Get More Google Reviews for Your Masonry Business",
          headlineLine2: "",
          subtitleLine1:
            "Walls, walks, and repairs speak for themselves—help homeowners say it on Google with a QR card at walkthrough.",
          subtitleLine2: "",
          ctaPrimary: "Start Getting More Reviews",
          ctaSecondary: "See How It Works",
          credibilityLine: "Built for brick, stone, and block contractors on residential work.",
        },
      },
      es: {
        metadata: {
          title: "Software de reseñas para mampostería y albañilería | ReviewAware",
          description:
            "Convierte ladrillo, piedra y bloque terminados en reseñas de Google con QR en obra y seguimientos automáticos.",
        },
        hero: {
          headlineLine1: "Más reseñas en Google para tu negocio de mampostería",
          headlineLine2: "",
          subtitleLine1:
            "Muros y reparaciones hablan solos: ayuda al propietario a decirlo en Google con QR en la entrega.",
          subtitleLine2: "",
          ctaPrimary: "Empieza a conseguir más reseñas",
          ctaSecondary: "Ver cómo funciona",
          credibilityLine: "Pensado para contratistas de ladrillo, piedra y bloque.",
        },
      },
    },
  },
  "concrete-contractor-review-software": {
    slug: "concrete-contractor-review-software",
    tokens: {
      en: {
        industry: "Concrete",
        industryPlural: "concrete contractors",
        industryService: "concrete pour",
        industryJob: "concrete job",
        job: "concrete job",
        service: "concrete service",
        jobs: "concrete jobs",
        services: "concrete services",
      },
      es: {
        industry: "Hormigón",
        industryPlural: "contratistas de hormigón",
        industryService: "vertido de hormigón",
        industryJob: "trabajo de hormigón",
        job: "trabajo de hormigón",
        service: "servicio de hormigón",
        jobs: "trabajos de hormigón",
        services: "servicios de hormigón",
      },
    },
    useCases: {
      en: ["Driveway pour", "Patio installation", "Sidewalk repair", "Foundation work"],
      es: [
        "Hormigonado de acceso",
        "Instalación de patio",
        "Reparación de acera",
        "Trabajos de cimentación",
      ],
    },
    copyOverrides: {
      en: {
        metadata: {
          title: "Concrete Contractor Review Software | Get More Google Reviews | ReviewAware",
          description:
            "Capture Google reviews after pours and repairs with QR handoffs and automated requests for flatwork and foundation crews.",
        },
        hero: {
          headlineLine1: "Get More Google Reviews for Your Concrete Business",
          headlineLine2: "",
          subtitleLine1:
            "Fresh flatwork is visual proof—ask for the review while the forms are still coming off the truck.",
          subtitleLine2: "",
          ctaPrimary: "Start Getting More Reviews",
          ctaSecondary: "See How It Works",
          credibilityLine: "Built for driveways, patios, sidewalks, and small foundation contractors.",
        },
      },
      es: {
        metadata: {
          title: "Software de reseñas para contratistas de hormigón | ReviewAware",
          description:
            "Captura reseñas en Google tras vertidos y reparaciones con QR y solicitudes automáticas para equipos de pavimento y cimentación.",
        },
        hero: {
          headlineLine1: "Más reseñas en Google para tu negocio de hormigón",
          headlineLine2: "",
          subtitleLine1:
            "El hormigón recién echado es prueba visual: pide la reseña mientras aún se ve el trabajo.",
          subtitleLine2: "",
          ctaPrimary: "Empieza a conseguir más reseñas",
          ctaSecondary: "Ver cómo funciona",
          credibilityLine: "Pensado para accesos, patios, aceras y cimentación ligera.",
        },
      },
    },
  },
  "moving-company-review-software": {
    slug: "moving-company-review-software",
    tokens: {
      en: {
        industry: "Moving",
        industryPlural: "moving companies",
        industryService: "move",
        industryJob: "move",
        job: "move",
        service: "moving service",
        jobs: "moves",
        services: "moving services",
      },
      es: {
        industry: "Mudanzas",
        industryPlural: "empresas de mudanzas",
        industryService: "mudanza",
        industryJob: "mudanza",
        job: "mudanza",
        service: "servicio de mudanza",
        jobs: "mudanzas",
        services: "servicios de mudanza",
      },
    },
    useCases: {
      en: ["Local move", "Long-distance move", "Office relocation", "Packing service"],
      es: [
        "Mudanza local",
        "Mudanza de larga distancia",
        "Traslado de oficina",
        "Servicio de embalaje",
      ],
    },
    copyOverrides: {
      en: {
        metadata: {
          title: "Moving Company Review Software | Get More Google Reviews | ReviewAware",
          description:
            "Turn stress-free moves into Google reviews with QR handoffs at delivery and automated follow-ups after the last box is placed.",
        },
        hero: {
          headlineLine1: "Get More Google Reviews for Your Moving Company",
          headlineLine2: "",
          subtitleLine1:
            "The best time to ask is right after the truck is unloaded—QR cards for customers and timed emails for long-distance jobs.",
          subtitleLine2: "",
          ctaPrimary: "Start Getting More Reviews",
          ctaSecondary: "See How It Works",
          credibilityLine: "Built for local movers, long-haul teams, and office relocation crews.",
        },
      },
      es: {
        metadata: {
          title: "Software de reseñas para empresas de mudanzas | ReviewAware",
          description:
            "Convierte mudanzas sin sobresaltos en reseñas de Google con QR al entregar y seguimientos tras el último bulto.",
        },
        hero: {
          headlineLine1: "Más reseñas en Google para tu empresa de mudanzas",
          headlineLine2: "",
          subtitleLine1:
            "El mejor momento es al descargar el camión: QR en la entrega y correos para mudanzas largas.",
          subtitleLine2: "",
          ctaPrimary: "Empieza a conseguir más reseñas",
          ctaSecondary: "Ver cómo funciona",
          credibilityLine: "Pensado para mudanzas locales, larga distancia y oficinas.",
        },
      },
    },
  },
  "insulation-contractor-review-software": {
    slug: "insulation-contractor-review-software",
    tokens: {
      en: {
        industry: "Insulation",
        industryPlural: "insulation contractors",
        industryService: "insulation install",
        industryJob: "insulation job",
        job: "insulation job",
        service: "insulation service",
        jobs: "insulation jobs",
        services: "insulation services",
      },
      es: {
        industry: "Aislamiento",
        industryPlural: "contratistas de aislamiento",
        industryService: "instalación de aislamiento",
        industryJob: "trabajo de aislamiento",
        job: "trabajo de aislamiento",
        service: "servicio de aislamiento",
        jobs: "trabajos de aislamiento",
        services: "servicios de aislamiento",
      },
    },
    useCases: {
      en: [
        "Attic insulation",
        "Crawlspace insulation",
        "Spray foam installation",
        "Insulation removal",
      ],
      es: [
        "Aislamiento de ático",
        "Aislamiento de espacio bajo suelo",
        "Instalación de espuma proyectada",
        "Retirada de aislamiento",
      ],
    },
    copyOverrides: {
      en: {
        metadata: {
          title: "Insulation Contractor Review Software | Get More Google Reviews | ReviewAware",
          description:
            "Earn Google reviews after attic and crawlspace work with QR handoffs and automated follow-ups for insulation crews.",
        },
        hero: {
          headlineLine1: "Get More Google Reviews for Your Insulation Business",
          headlineLine2: "",
          subtitleLine1:
            "Comfort upgrades are easy to feel—capture reviews while homeowners notice the temperature change.",
          subtitleLine2: "",
          ctaPrimary: "Start Getting More Reviews",
          ctaSecondary: "See How It Works",
          credibilityLine: "Built for spray foam, batt, and blown-in insulation contractors.",
        },
      },
      es: {
        metadata: {
          title: "Software de reseñas para contratistas de aislamiento | ReviewAware",
          description:
            "Consigue reseñas en Google tras áticos y espacios bajos con QR y seguimientos automáticos.",
        },
        hero: {
          headlineLine1: "Más reseñas en Google para tu negocio de aislamiento",
          headlineLine2: "",
          subtitleLine1:
            "El confort se nota enseguida: pide la reseña cuando el cliente percibe el cambio.",
          subtitleLine2: "",
          ctaPrimary: "Empieza a conseguir más reseñas",
          ctaSecondary: "Ver cómo funciona",
          credibilityLine: "Pensado para espuma, lana mineral y soplado.",
        },
      },
    },
  },
  "solar-installer-review-software": {
    slug: "solar-installer-review-software",
    tokens: {
      en: {
        industry: "Solar Installation",
        industryPlural: "solar installers",
        industryService: "solar installation",
        industryJob: "solar install job",
        job: "solar install job",
        service: "solar installation service",
        jobs: "solar projects",
        services: "solar installation services",
      },
      es: {
        industry: "Instalación solar",
        industryPlural: "instaladores solares",
        industryService: "instalación solar",
        industryJob: "trabajo de instalación solar",
        job: "trabajo de instalación solar",
        service: "servicio de instalación solar",
        jobs: "proyectos solares",
        services: "servicios de instalación solar",
      },
    },
    useCases: {
      en: [
        "Solar panel installation",
        "Battery backup installation",
        "Inverter replacement",
        "Solar maintenance",
      ],
      es: [
        "Instalación de paneles solares",
        "Instalación de baterías",
        "Sustitución de inversor",
        "Mantenimiento solar",
      ],
    },
    copyOverrides: {
      en: {
        metadata: {
          title: "Solar Installer Review Software | Get More Google Reviews | ReviewAware",
          description:
            "Turn energized installs into Google reviews with QR handoffs at commissioning and automated follow-ups for solar and battery crews.",
        },
        hero: {
          headlineLine1: "Get More Google Reviews for Your Solar Installation Business",
          headlineLine2: "",
          subtitleLine1:
            "Flip the breakers, show the app, then hand over a QR review card—customers are ready to talk about savings while panels are still gleaming.",
          subtitleLine2: "",
          ctaPrimary: "Start Getting More Reviews",
          ctaSecondary: "See How It Works",
          credibilityLine: "Built for residential solar installers and battery backup teams.",
        },
      },
      es: {
        metadata: {
          title: "Software de reseñas para instaladores solares | ReviewAware",
          description:
            "Convierte instalaciones en marcha en reseñas de Google con QR en la puesta en servicio y seguimientos automáticos.",
        },
        hero: {
          headlineLine1: "Más reseñas en Google para tu negocio de instalación solar",
          headlineLine2: "",
          subtitleLine1:
            "Tras encender el sistema y enseñar la app, entrega el QR: el cliente habla de ahorro con los paneles aún nuevos.",
          subtitleLine2: "",
          ctaPrimary: "Empieza a conseguir más reseñas",
          ctaSecondary: "Ver cómo funciona",
          credibilityLine: "Pensado para instaladores residenciales y equipos con baterías.",
        },
      },
    },
  },
};

export const INDUSTRY_LANDING_SLUGS = Object.keys(INDUSTRY_LANDING_REGISTRY);

export function getIndustryLandingDefinition(
  slug: string,
): IndustryLandingDefinition | undefined {
  return INDUSTRY_LANDING_REGISTRY[slug];
}
