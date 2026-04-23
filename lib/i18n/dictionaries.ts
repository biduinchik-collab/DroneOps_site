import { defaultLocale, type Locale } from "./config";

export const dictionaries = {
  en: {
    metadata: {
      title: "Drone Operations | UAV autonomy and navigation software",
      description:
        "Drone Operations develops UAV autonomy, optical navigation, satellite relocalization, and mission planning software for GPS-denied and contested environments.",
      ogTitle: "Drone Operations - Navigation Beyond GPS",
      ogDescription:
        "Mission-ready UAV navigation and operations software for teams working where GPS, connectivity, and field conditions cannot be assumed.",
    },
    common: {
      siteName: "Drone Operations",
      markName: "DRONEOPS",
      tagline: "Navigation Beyond GPS",
      contactEmail: "contact@droneoperations.ai",
      classifiedNotice: "For sensitive programs, share only non-classified information through this public form.",
    },
    language: {
      label: "Language",
      en: "EN",
      uk: "UKR",
    },
    nav: {
      items: [
        { label: "Solutions", href: "#solutions" },
        { label: "Workflow", href: "#workflow" },
        { label: "Deployment", href: "#deployment" },
        { label: "Use cases", href: "#use-cases" },
        { label: "FAQ", href: "#faq" },
      ],
      cta: "Request demo",
      mobileSummary: "Menu",
    },
    hero: {
      eyebrow: "UAV autonomy and navigation systems",
      title: "Navigation\nBeyond\nGPS",
      body:
        "Drone Operations develops optical navigation, satellite relocalization, mission planning, and operations software for UAV teams working where positioning, connectivity, and field conditions cannot be assumed.",
      primaryCta: "Request a technical demo",
      secondaryCta: "Explore solutions",
      proof: ["GPS-denied readiness", "Mission planning", "Autopilot integration", "On-prem options"],
      visual: {
        title: "Mission plan / sector 04",
        status: "Operational view",
        route: "Route integrity",
        signal: "GPS degraded",
        optical: "Optical lock active",
        estimate: "Position estimate stable",
        package: "Mission package ready",
        telemetry: "Telemetry",
        altitude: "Altitude",
        battery: "Power",
        link: "Link",
      },
    },
    solutions: {
      eyebrow: "What we offer",
      title: "Solutions built for resilient UAV operations",
      body:
        "Each capability is designed to reduce mission risk, shorten integration work, and give operators clearer control over the navigation stack.",
      items: [
        {
          name: "Optical Navigation",
          summary:
            "Vision-based positioning support for low-altitude UAV missions when satellite signals are degraded, jammed, spoofed, or unavailable.",
          forLabel: "For",
          forText: "UAV manufacturers, system integrators, and mission teams that need navigation resilience without relying on external positioning.",
          valueLabel: "Value",
          valueText: "Improves route confidence and fallback behavior in GPS-denied environments.",
        },
        {
          name: "Satellite Navigation",
          summary:
            "Satellite relocalization and map-aided correction workflows that help teams preserve positional awareness when onboard estimates drift.",
          forLabel: "For",
          forText: "Longer-range autonomous missions, operator workstations, and technical teams validating navigation quality.",
          valueLabel: "Value",
          valueText: "Supports navigation continuity, mission review, and repeatable planning in low-connectivity conditions.",
        },
        {
          name: "Mission Planner",
          summary:
            "A planning surface for routes, zones, constraints, payload logic, and mission packages before deployment.",
          forLabel: "For",
          forText: "Operators, command centers, procurement teams, and technical partners coordinating UAV missions.",
          valueLabel: "Value",
          valueText: "Reduces planning friction and gives teams a shared operational picture before launch.",
        },
      ],
    },
    workflow: {
      eyebrow: "How it works",
      title: "From route intent to operational execution",
      body:
        "Drone Operations is structured around the full mission loop: planning, navigation setup, deployment, execution, and review.",
      steps: [
        {
          title: "Planning",
          body: "Define mission objectives, route corridors, no-go zones, terrain constraints, payload requirements, and fallback behavior.",
        },
        {
          title: "Navigation setup",
          body: "Prepare optical, satellite, inertial, and autopilot inputs around the operational environment and platform constraints.",
        },
        {
          title: "Deployment",
          body: "Export a mission package to the UAV system, standalone hardware, or offline workstation for field use.",
        },
        {
          title: "Mission execution",
          body: "Monitor route progress, navigation confidence, link state, and deviations from the planned corridor.",
        },
        {
          title: "Operational review",
          body: "Review logs, refine constraints, update mission packages, and prepare the next task with a clearer evidence trail.",
        },
      ],
    },
    deployment: {
      eyebrow: "Deployment options",
      title: "Flexible integration for field and enterprise environments",
      body:
        "The platform can be shaped around procurement, security, and technical realities instead of forcing every team into one operating model.",
      options: [
        {
          title: "Standalone hardware kit",
          body: "A deployable navigation and mission package for teams that need an integrated field-ready configuration.",
        },
        {
          title: "Software license",
          body: "Core planning, navigation, and operational modules licensed for approved UAV programs and partner teams.",
        },
        {
          title: "Custom integration",
          body: "Engineering support for autopilot, payload, sensor, and command-system integration paths.",
        },
        {
          title: "Enterprise deployment",
          body: "Role-aware workflows for technical teams, operators, procurement stakeholders, and multi-site environments.",
        },
        {
          title: "Offline / on-prem capability",
          body: "Deployment models for restricted networks, low-connectivity locations, and controlled infrastructure.",
        },
      ],
    },
    why: {
      eyebrow: "Why Drone Operations",
      title: "Operational clarity without unnecessary theater",
      body:
        "The brand promise is simple: make UAV navigation and mission workflows more dependable when the environment is not.",
      points: [
        {
          title: "Built for contested assumptions",
          body: "The system treats GPS, connectivity, and predictable conditions as variables, not guarantees.",
        },
        {
          title: "Integrator-ready structure",
          body: "Designed around practical platform integration, operator handoff, and evidence that technical teams can evaluate.",
        },
        {
          title: "Calm operator interface",
          body: "The product surface prioritizes route integrity, warnings, constraints, and mission state over decorative dashboards.",
        },
        {
          title: "Security-conscious deployment",
          body: "Supports controlled environments and procurement workflows where cloud dependency may be unacceptable.",
        },
      ],
    },
    preview: {
      eyebrow: "Interface preview",
      title: "A product surface built around route integrity",
      body:
        "The interface direction emphasizes planning confidence, navigation state, and operator handoff. The visual language is technical, restrained, and built for fast assessment.",
      mapTitle: "Route planner",
      panels: [
        { label: "Navigation confidence", value: "Stable" },
        { label: "Mission corridor", value: "Validated" },
        { label: "Offline package", value: "Ready" },
      ],
      checklistTitle: "Pre-flight logic",
      checklist: ["Route corridor reviewed", "Fallback behavior assigned", "Map package loaded", "Operator handoff complete"],
    },
    useCases: {
      eyebrow: "Use cases",
      title: "Operational environments where resilience matters",
      body:
        "The website positions Drone Operations for serious technical evaluation across defense-tech, B2B, B2G, and integration contexts.",
      items: [
        {
          title: "GPS-denied missions",
          body: "Support for missions where satellite positioning is unavailable, degraded, jammed, or intentionally unreliable.",
        },
        {
          title: "Contested environments",
          body: "Planning and navigation workflows for operating conditions with interference, uncertainty, and limited connectivity.",
        },
        {
          title: "Navigation resilience",
          body: "Multi-input workflows designed to keep operators informed when a single source of truth is not enough.",
        },
        {
          title: "Autonomous route execution",
          body: "Route logic, constraints, and mission packaging for UAV teams moving from plan to field execution.",
        },
        {
          title: "Mission planning support",
          body: "A shared planning surface for operators, integrators, and procurement stakeholders evaluating operational fit.",
        },
        {
          title: "Partner integration",
          body: "Technical collaboration with manufacturers, payload teams, command systems, and autonomy partners.",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Direct answers for technical and procurement teams",
      items: [
        {
          question: "What does Drone Operations provide?",
          answer:
            "Drone Operations provides UAV navigation, mission planning, and operations software, with capabilities for optical navigation, satellite relocalization, deployment packaging, and integration support.",
        },
        {
          question: "Is the platform only for defense use?",
          answer:
            "The primary positioning is defense-tech and high-assurance UAV operations, but the architecture can also support enterprise, infrastructure, emergency response, and integrator use cases where resilient navigation matters.",
        },
        {
          question: "Does the system require cloud connectivity?",
          answer:
            "The deployment model can support restricted, offline, and on-prem environments. Final architecture depends on the program requirements, security posture, and integration path.",
        },
        {
          question: "Can Drone Operations integrate with existing UAV platforms?",
          answer:
            "Yes. The recommended path is a technical discovery process covering autopilot, payload, sensor inputs, command workflow, and mission data requirements.",
        },
        {
          question: "How should sensitive project details be shared?",
          answer:
            "Use the public form for non-classified context only. Sensitive materials should move through an approved secure channel after the initial contact.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Request a technical demo",
      body:
        "Tell us about the platform, navigation challenge, and deployment context. We will respond with the right technical path.",
      direct: "Prefer direct contact?",
      directLink: "Email the team",
      fields: {
        name: "Full name",
        organization: "Organization",
        email: "Work email",
        context: "Mission context",
      },
      placeholders: {
        name: "Name and surname",
        organization: "Company, unit, or program",
        email: "name@organization.com",
        context: "Platform type, operating environment, deployment model, or demo goals",
      },
      submit: "Send demo request",
      sending: "Sending request",
      success: "Request received. We will follow up through the provided work email.",
      error: "The request could not be sent. Please email the team directly.",
    },
    footer: {
      sections: [
        {
          title: "Company",
          links: ["Solutions", "Workflow", "Deployment", "Use cases"],
        },
        {
          title: "Engage",
          links: ["Technical demo", "Integration discussion", "Procurement briefing"],
        },
      ],
      note: "Built for UAV autonomy, navigation intelligence, mission planning, and controlled deployment environments.",
      legal: "All public requests must avoid classified or restricted program details.",
      copyright: "Drone Operations. All rights reserved.",
    },
  },
  uk: {
    metadata: {
      title: "Drone Operations | Автономність і навігація для БПЛА",
      description:
        "Drone Operations розробляє програмне забезпечення для автономності БПЛА, оптичної навігації, супутникової релокалізації та планування місій у GPS-недоступних і складних середовищах.",
      ogTitle: "Drone Operations - Навігація поза GPS",
      ogDescription:
        "Готове до місій програмне забезпечення навігації та операцій для команд БПЛА, які працюють там, де GPS, зв'язок і польові умови не можна вважати гарантованими.",
    },
    common: {
      siteName: "Drone Operations",
      markName: "DRONEOPS",
      tagline: "Навігація поза GPS",
      contactEmail: "contact@droneoperations.ai",
      classifiedNotice: "Для чутливих програм передавайте через цю публічну форму лише несекретну інформацію.",
    },
    language: {
      label: "Мова",
      en: "EN",
      uk: "UKR",
    },
    nav: {
      items: [
        { label: "Рішення", href: "#solutions" },
        { label: "Процес", href: "#workflow" },
        { label: "Розгортання", href: "#deployment" },
        { label: "Сценарії", href: "#use-cases" },
        { label: "FAQ", href: "#faq" },
      ],
      cta: "Запросити демо",
      mobileSummary: "Меню",
    },
    hero: {
      eyebrow: "Автономність і навігаційні системи для БПЛА",
      title: "Навігація\nПоза\nGPS",
      body:
        "Drone Operations розробляє оптичну навігацію, супутникову релокалізацію, планування місій та операційне програмне забезпечення для команд БПЛА, які працюють там, де позиціювання, зв'язок і польові умови не є гарантованими.",
      primaryCta: "Запросити технічне демо",
      secondaryCta: "Переглянути рішення",
      proof: ["Готовність до GPS-недоступних умов", "Планування місій", "Інтеграція з автопілотом", "On-prem варіанти"],
      visual: {
        title: "План місії / сектор 04",
        status: "Операційний огляд",
        route: "Цілісність маршруту",
        signal: "GPS погіршено",
        optical: "Оптичне захоплення активне",
        estimate: "Оцінка позиції стабільна",
        package: "Пакет місії готовий",
        telemetry: "Телеметрія",
        altitude: "Висота",
        battery: "Живлення",
        link: "Канал",
      },
    },
    solutions: {
      eyebrow: "Що ми пропонуємо",
      title: "Рішення для стійких операцій БПЛА",
      body:
        "Кожна можливість зменшує ризик місії, скорочує інтеграційну роботу та дає операторам чіткіший контроль над навігаційним стеком.",
      items: [
        {
          name: "Оптична навігація",
          summary:
            "Підтримка позиціювання на основі зору для низьковисотних місій БПЛА, коли супутникові сигнали погіршені, подавлені, підмінені або недоступні.",
          forLabel: "Для кого",
          forText: "Виробники БПЛА, системні інтегратори та місійні команди, яким потрібна навігаційна стійкість без залежності від зовнішнього позиціювання.",
          valueLabel: "Цінність",
          valueText: "Підвищує впевненість у маршруті та якість резервної поведінки в GPS-недоступних середовищах.",
        },
        {
          name: "Супутникова навігація",
          summary:
            "Супутникова релокалізація та корекція за картою, що допомагають командам зберігати розуміння позиції, коли бортова оцінка дрейфує.",
          forLabel: "Для кого",
          forText: "Далекі автономні місії, операторські робочі місця та технічні команди, які перевіряють якість навігації.",
          valueLabel: "Цінність",
          valueText: "Підтримує безперервність навігації, перегляд місій і повторюване планування за умов обмеженого зв'язку.",
        },
        {
          name: "Планувальник місій",
          summary:
            "Робоча поверхня для маршрутів, зон, обмежень, логіки корисного навантаження та пакетів місії перед розгортанням.",
          forLabel: "Для кого",
          forText: "Оператори, командні центри, закупівельні команди та технічні партнери, які координують місії БПЛА.",
          valueLabel: "Цінність",
          valueText: "Зменшує тертя під час планування та дає командам спільну операційну картину до старту.",
        },
      ],
    },
    workflow: {
      eyebrow: "Як це працює",
      title: "Від задуму маршруту до операційного виконання",
      body:
        "Drone Operations побудована навколо повного циклу місії: планування, налаштування навігації, розгортання, виконання та перегляду.",
      steps: [
        {
          title: "Планування",
          body: "Визначення цілей місії, маршрутних коридорів, заборонених зон, обмежень рельєфу, вимог до навантаження та резервної поведінки.",
        },
        {
          title: "Налаштування навігації",
          body: "Підготовка оптичних, супутникових, інерційних та автопілотних входів відповідно до середовища й обмежень платформи.",
        },
        {
          title: "Розгортання",
          body: "Експорт пакета місії до системи БПЛА, автономного апаратного комплекту або офлайн робочої станції для польового використання.",
        },
        {
          title: "Виконання місії",
          body: "Моніторинг прогресу маршруту, навігаційної впевненості, стану каналу та відхилень від запланованого коридору.",
        },
        {
          title: "Операційний перегляд",
          body: "Аналіз журналів, уточнення обмежень, оновлення пакетів місії та підготовка наступного завдання з чіткішим доказовим слідом.",
        },
      ],
    },
    deployment: {
      eyebrow: "Варіанти розгортання",
      title: "Гнучка інтеграція для польових і корпоративних середовищ",
      body:
        "Платформу можна адаптувати до закупівельних, безпекових і технічних реалій, не змушуючи кожну команду працювати за однією моделлю.",
      options: [
        {
          title: "Автономний апаратний комплект",
          body: "Розгортуваний навігаційний і місійний пакет для команд, яким потрібна інтегрована польова конфігурація.",
        },
        {
          title: "Ліцензія на програмне забезпечення",
          body: "Основні модулі планування, навігації та операцій для затверджених програм БПЛА і партнерських команд.",
        },
        {
          title: "Кастомна інтеграція",
          body: "Інженерна підтримка інтеграції з автопілотом, навантаженням, сенсорами та командними системами.",
        },
        {
          title: "Корпоративне розгортання",
          body: "Рольові процеси для технічних команд, операторів, закупівельних стейкхолдерів і середовищ з кількома майданчиками.",
        },
        {
          title: "Офлайн / on-prem можливість",
          body: "Моделі розгортання для закритих мереж, локацій з обмеженим зв'язком і контрольованої інфраструктури.",
        },
      ],
    },
    why: {
      eyebrow: "Чому Drone Operations",
      title: "Операційна ясність без зайвої театральності",
      body:
        "Обіцянка бренду проста: зробити навігацію БПЛА та місійні процеси надійнішими там, де саме середовище не є надійним.",
      points: [
        {
          title: "Створено для спірних припущень",
          body: "Система розглядає GPS, зв'язок і прогнозовані умови як змінні, а не гарантії.",
        },
        {
          title: "Готова структура для інтеграторів",
          body: "Побудована навколо практичної інтеграції платформи, передачі оператору та доказів, які можуть оцінити технічні команди.",
        },
        {
          title: "Спокійний операторський інтерфейс",
          body: "Продуктова поверхня пріоритизує цілісність маршруту, попередження, обмеження та стан місії замість декоративних дашбордів.",
        },
        {
          title: "Розгортання з урахуванням безпеки",
          body: "Підтримує контрольовані середовища та закупівельні процеси, де залежність від хмари може бути неприйнятною.",
        },
      ],
    },
    preview: {
      eyebrow: "Прев'ю інтерфейсу",
      title: "Продуктова поверхня навколо цілісності маршруту",
      body:
        "Напрям інтерфейсу підкреслює впевненість у плануванні, стан навігації та передачу оператору. Візуальна мова технічна, стримана й придатна для швидкої оцінки.",
      mapTitle: "Планувальник маршруту",
      panels: [
        { label: "Навігаційна впевненість", value: "Стабільна" },
        { label: "Коридор місії", value: "Перевірено" },
        { label: "Офлайн пакет", value: "Готовий" },
      ],
      checklistTitle: "Передпольотна логіка",
      checklist: ["Коридор маршруту переглянуто", "Резервну поведінку призначено", "Пакет карт завантажено", "Передачу оператору завершено"],
    },
    useCases: {
      eyebrow: "Сценарії використання",
      title: "Операційні середовища, де стійкість має значення",
      body:
        "Сайт позиціонує Drone Operations для серйозної технічної оцінки в defense-tech, B2B, B2G та інтеграційних контекстах.",
      items: [
        {
          title: "GPS-недоступні місії",
          body: "Підтримка місій, де супутникове позиціювання недоступне, погіршене, подавлене або навмисно ненадійне.",
        },
        {
          title: "Складні середовища",
          body: "Планувальні та навігаційні процеси для умов із перешкодами, невизначеністю та обмеженим зв'язком.",
        },
        {
          title: "Навігаційна стійкість",
          body: "Багатовхідні процеси, що інформують операторів, коли одного джерела істини недостатньо.",
        },
        {
          title: "Автономне виконання маршруту",
          body: "Логіка маршруту, обмеження та пакування місії для команд БПЛА, які переходять від плану до польового виконання.",
        },
        {
          title: "Підтримка планування місій",
          body: "Спільна поверхня планування для операторів, інтеграторів і закупівельних стейкхолдерів, які оцінюють операційну придатність.",
        },
        {
          title: "Партнерська інтеграція",
          body: "Технічна співпраця з виробниками, командами корисного навантаження, командними системами та партнерами з автономності.",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Прямі відповіді для технічних і закупівельних команд",
      items: [
        {
          question: "Що надає Drone Operations?",
          answer:
            "Drone Operations надає програмне забезпечення для навігації БПЛА, планування місій та операцій, включно з оптичною навігацією, супутниковою релокалізацією, пакуванням розгортання та інтеграційною підтримкою.",
        },
        {
          question: "Платформа призначена лише для оборонного використання?",
          answer:
            "Основне позиціювання - defense-tech та високонадійні операції БПЛА, але архітектура може підтримувати корпоративні, інфраструктурні, аварійно-рятувальні та інтеграторські сценарії, де важлива стійка навігація.",
        },
        {
          question: "Чи потрібне хмарне підключення?",
          answer:
            "Модель розгортання може підтримувати закриті, офлайн та on-prem середовища. Фінальна архітектура залежить від вимог програми, безпекової моделі та інтеграційного шляху.",
        },
        {
          question: "Чи можна інтегрувати Drone Operations з наявними платформами БПЛА?",
          answer:
            "Так. Рекомендований шлях - технічне виявлення, що охоплює автопілот, навантаження, сенсорні входи, командний процес і вимоги до місійних даних.",
        },
        {
          question: "Як передавати чутливі деталі проєкту?",
          answer:
            "Використовуйте публічну форму лише для несекретного контексту. Чутливі матеріали мають передаватися через затверджений захищений канал після первинного контакту.",
        },
      ],
    },
    contact: {
      eyebrow: "Контакт",
      title: "Запросити технічне демо",
      body:
        "Опишіть платформу, навігаційний виклик і контекст розгортання. Ми запропонуємо відповідний технічний шлях.",
      direct: "Зручніше напряму?",
      directLink: "Написати команді",
      fields: {
        name: "Повне ім'я",
        organization: "Організація",
        email: "Робочий email",
        context: "Контекст місії",
      },
      placeholders: {
        name: "Ім'я та прізвище",
        organization: "Компанія, підрозділ або програма",
        email: "name@organization.com",
        context: "Тип платформи, середовище роботи, модель розгортання або цілі демо",
      },
      submit: "Надіслати запит",
      sending: "Надсилання запиту",
      success: "Запит отримано. Ми відповімо на вказаний робочий email.",
      error: "Запит не вдалося надіслати. Будь ласка, напишіть команді напряму.",
    },
    footer: {
      sections: [
        {
          title: "Компанія",
          links: ["Рішення", "Процес", "Розгортання", "Сценарії"],
        },
        {
          title: "Співпраця",
          links: ["Технічне демо", "Інтеграційна розмова", "Закупівельний брифінг"],
        },
      ],
      note: "Створено для автономності БПЛА, навігаційної аналітики, планування місій і контрольованих середовищ розгортання.",
      legal: "Усі публічні запити мають не містити секретних або обмежених деталей програм.",
      copyright: "Drone Operations. Усі права захищено.",
    },
  },
} as const;

export type Dictionary = (typeof dictionaries)[Locale];

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}
