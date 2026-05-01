import { defaultLocale, type Locale } from "./config";

export const dictionaries = {
  en: {
    metadata: {
      title: "DroneOps — Visual Navigation Systems for GPS-Denied UAVs",
      description:
        "DroneOps develops optical-inertial navigation modules for UAVs operating in GPS-denied, jammed or spoofed environments.",
      ogTitle: "DroneOps — Visual Navigation Systems for GPS-Denied UAVs",
      ogDescription:
        "Optical-inertial navigation modules for UAVs operating where GPS is unavailable, jammed or spoofed.",
    },
    common: {
      siteName: "DroneOps",
      markName: "DRONEOPS",
      tagline: "Visual Navigation Systems",
      contactEmail: "sales@droneoperations.ai",
      classifiedNotice:
        "For sensitive programs, share only non-classified information through this public form.",
    },
    language: {
      label: "Language",
      en: "EN",
      uk: "UKR",
    },
    nav: {
      items: [
        { label: "NORA", href: "#nora" },
        { label: "Modes", href: "#modes" },
        { label: "Integration", href: "#integration" },
        { label: "Deployment", href: "#deployment" },
        { label: "Contact", href: "#contact" },
      ],
      cta: "Request guide",
      mobileSummary: "Menu",
    },
    hero: {
      eyebrow: "VISUAL NAVIGATION SYSTEMS",
      title: "GPS-denied navigation\nfor UAVs",
      body:
        "DroneOps develops optical-inertial navigation modules that help UAVs operate when GPS is unavailable, jammed or spoofed.",
      primaryCta: "Request Integration Guide",
      secondaryCta: "View NORA",
      proof: ["Optical-inertial", "MAVLink 2", "ArduPilot", "TRL 7"],
      visual: {
        title: "NORA / GPS-denied profile",
        status: "Navigation view",
        route: "Route confidence",
        signal: "GNSS unavailable",
        optical: "Optical-inertial estimate",
        estimate: "Position estimate stable",
        package: "Mission data ready",
        telemetry: "Telemetry",
        altitude: "Altitude",
        altitudeValue: "420 m",
        battery: "Power",
        batteryValue: "78%",
        link: "Link",
        linkValue: "MAVLink",
        live: "Live",
        navEstimate: "Nav estimate",
        corridorHold: "corridor hold",
      },
    },
    company: {
      eyebrow: "Company",
      title: "Science, industrial systems and defense technology",
      body:
        "DroneOps is a science and technology startup working at the intersection of industrial systems and defense technology.",
      locations: ["United Kingdom registration", "R&D and production in Kyiv", "Engineering presence in Poland"],
    },
    beyond: {
      eyebrow: "Navigation Beyond GPS",
      title: "Navigation Beyond GPS",
      body:
        "DroneOps develops optical-inertial and satellite-assisted navigation for loitering, safe return and autonomous UAV missions in environments where GPS is unavailable, jammed or spoofed.",
    },
    products: {
      eyebrow: "Product architecture",
      title: "Two navigation tracks, one clear commercial focus",
      body:
        "NORA is the main commercial onboard module. SONA is a satellite relocalization R&D direction that supports drift correction through imagery comparison.",
      items: [
        {
          name: "NORA",
          status: "Main product",
          summary:
            "Onboard optical-inertial navigation module for UAVs that provides GNSS-like coordinates without satellite signal.",
          details: ["MAVLink 2 over UART", "ArduPilot 4.5.5+", "Loiter, RTL, SmartRTL and AUTO support"],
        },
        {
          name: "SONA",
          status: "R&D direction",
          summary:
            "Satellite relocalization support that helps correct accumulated drift by comparing drone imagery with satellite imagery.",
          details: ["Pre-commercial", "Map-aided correction", "Not positioned as a production product"],
        },
      ],
    },
    nora: {
      eyebrow: "Main product",
      title: "NORA",
      body:
        "NORA (Navigation Optical Resilient Architecture) connects to a flight controller through MAVLink 2 and acts as a GPS replacement or backup when satellite positioning is unavailable. It uses a nadir-facing camera and IMU to estimate position and orientation in real time, then outputs GNSS-compatible data into ArduPilot without changing mission planning or adding a pilot UI.",
      boundary:
        "Performance depends on visibility and surface texture. Heavy rain, snow, dense fog, large homogeneous water surfaces and uniform snow cover can reduce navigation quality.",
      stats: [
        { label: "Dimensions", value: "65 x 50 x 30 mm" },
        { label: "Interface", value: "MAVLink 2 / UART" },
        { label: "Power", value: "8-45 V / 15 W" },
        { label: "Operating height", value: "50-400 m" },
      ],
      modes: [
        {
          title: "Loiter",
          body:
            "Position holding without GPS. Designed for UAV teams that need stable operation in EW-contested environments or controlled holding over an area.",
        },
        {
          title: "Safe Return / RTL & SmartRTL",
          body:
            "Return scenarios for platforms operating at short and medium ranges. When GPS is unavailable or jammed, the UAV can return using NORA navigation data without continuous manual control.",
        },
        {
          title: "Autonomous Missions / AUTO",
          body:
            "Route-based autonomous missions for UAVs of different types in GPS-denied conditions.",
        },
      ],
    },
    schematic: {
      eyebrow: "Hardware",
      title: "NORA Module Schematic",
      body:
        "Exploded view of the module structure: protective housing, processing board, mounting stack and thermal base.",
      alt: "Exploded view schematic of the NORA navigation module",
      labels: {
        stack: "NORA / DEVICE STACK",
        status: "GNSS-DENIED READY",
        replay: "Replay",
        reduced: "Static schematic",
        protectiveHousing: "Protective housing",
        processingBoard: "Embedded processing board",
        thermalBase: "Thermal dissipation base",
        mountingStack: "Mounting stack",
      },
      specs: [
        { label: "Module", value: "Optical-inertial navigation" },
        { label: "Size", value: "65 x 50 x 30 mm" },
        { label: "Interface", value: "MAVLink 2 / UART" },
        { label: "Power", value: "8-45 V / 15 W" },
      ],
    },
    integration: {
      eyebrow: "Integration process",
      title: "From Requirements to Operational Deployment",
      body:
        "The integration path is built for UAV manufacturers, system integrators and defense customers that need a practical route from platform requirements to flight evidence.",
      steps: [
        {
          title: "Planning",
          body:
            "Define platform requirements: use case, range, altitude, operational limits, integration plan and joint test plan.",
        },
        {
          title: "Navigation Integration",
          body:
            "Physical and software integration of the module, power and UART connection, autopilot configuration.",
        },
        {
          title: "Calibration",
          body:
            "Calculate the transformation matrix between the navigation module coordinate system and the UAV coordinate system.",
        },
        {
          title: "Mission Testing",
          body: "Validate NORA operation through a controlled flight profile.",
        },
        {
          title: "Operational Review",
          body:
            "Analyze logs, refine limitations, update mission configuration and prepare the next task with a clear evidence trail.",
        },
      ],
    },
    deployment: {
      eyebrow: "Deployment options",
      title: "Flexible integration",
      body:
        "DroneOps can support different procurement, integration and deployment models depending on platform maturity and operational context.",
      standalone:
        "Standalone hardware kit — a deployable navigation and mission package for teams that need an integrated field configuration.",
      options: [
        {
          title: "Custom Integration",
          body:
            "Engineering support for platform-specific wiring, autopilot settings, calibration and joint flight testing.",
        },
        {
          title: "Software License",
          body:
            "Licensed navigation software for approved UAV programs and technical partners with their own integration path.",
        },
        {
          title: "Enterprise Deployment",
          body:
            "Program-level deployment support for manufacturers, integrators, defense primes and multi-team environments.",
        },
        {
          title: "Standalone Use",
          body:
            "A field-ready hardware package for teams that need navigation capability without rebuilding their full workflow.",
        },
      ],
    },
    setup: {
      eyebrow: "Operator workflow",
      title: "Simple Setup Without Changing the Operator Workflow",
      body:
        "NORA is designed to fit into familiar autopilot and integrator practices rather than adding another operational interface.",
      items: [
        {
          title: "Ready for Integrators",
          body:
            "The connection model is familiar to teams already working with ArduPilot, MAVLink 2 and flight controllers.",
        },
        {
          title: "Familiar Operator Interface",
          body:
            "Navigation state is delivered through standard autopilot indicators. Operators do not need an additional interface.",
        },
        {
          title: "Secure Deployment",
          body:
            "The navigation module is built with several protection layers and avoids exposing navigation data unnecessarily.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Discuss NORA integration",
      body:
        "Share your platform requirements and our team will help define the integration path, test profile and deployment model.",
      direct: "Prefer direct contact?",
      directLink: "Email DroneOps",
      cta: "Contact DroneOps",
      fields: {
        name: "Full name",
        organization: "Organization",
        email: "Work email",
        context: "Platform requirements",
      },
      placeholders: {
        name: "Name and surname",
        organization: "Company, unit, or program",
        email: "name@organization.com",
        context: "Platform type, ArduPilot version, range, altitude, operating environment, integration goals",
      },
      submit: "Contact DroneOps",
      sending: "Sending request",
      success: "Request received. We will follow up through the provided work email.",
      error: "The request could not be sent. Please email the team directly.",
    },
    preview: {
      mapTitle: "Route planner",
      panels: [
        { label: "Navigation confidence", value: "Stable" },
        { label: "Mission corridor", value: "Validated" },
        { label: "Offline package", value: "Ready" },
      ],
      checklistTitle: "Pre-flight logic",
      checklist: ["Route corridor reviewed", "Fallback behavior assigned", "Map package loaded", "Operator handoff complete"],
    },
    footer: {
      sections: [
        {
          title: "Product",
          links: ["NORA", "Modes", "Integration", "Deployment"],
        },
        {
          title: "Engage",
          links: ["Integration guide", "Technical discussion", "Contact"],
        },
      ],
      note:
        "Optical-inertial navigation modules for UAV manufacturers, integrators and defense customers operating in GNSS-denied conditions.",
      legal: "Public requests must avoid classified or restricted program details.",
      copyright: "DroneOps. All rights reserved.",
    },
  },
  uk: {
    metadata: {
      title: "DroneOps — системи візуальної навігації для БПЛА без GPS",
      description:
        "DroneOps розробляє оптично-інерційні навігаційні модулі для БПЛА, що працюють в умовах глушіння, спуфінгу або відсутності GPS.",
      ogTitle: "DroneOps — системи візуальної навігації для БПЛА без GPS",
      ogDescription:
        "Оптично-інерційні навігаційні модулі для БПЛА, що працюють в умовах глушіння, спуфінгу або відсутності GPS.",
    },
    common: {
      siteName: "DroneOps",
      markName: "DRONEOPS",
      tagline: "Системи візуальної навігації",
      contactEmail: "sales@droneoperations.ai",
      classifiedNotice:
        "Для чутливих програм передавайте через цю публічну форму лише несекретну інформацію.",
    },
    language: {
      label: "Мова",
      en: "EN",
      uk: "УКР",
    },
    nav: {
      items: [
        { label: "NORA", href: "#nora" },
        { label: "Режими", href: "#modes" },
        { label: "Інтеграція", href: "#integration" },
        { label: "Розгортання", href: "#deployment" },
        { label: "Контакт", href: "#contact" },
      ],
      cta: "Отримати guide",
      mobileSummary: "Меню",
    },
    hero: {
      eyebrow: "СИСТЕМИ ВІЗУАЛЬНОЇ НАВІГАЦІЇ",
      title: "Навігація БПЛА\nбез GPS",
      body:
        "DroneOps розробляє оптично-інерційні навігаційні модулі, які допомагають БПЛА працювати в умовах глушіння, спуфінгу або відсутності GPS.",
      primaryCta: "Отримати integration guide",
      secondaryCta: "Переглянути NORA",
      proof: ["Оптично-інерційна", "MAVLink 2", "ArduPilot", "TRL 7"],
      visual: {
        title: "NORA / профіль без GPS",
        status: "Навігаційний огляд",
        route: "Впевненість маршруту",
        signal: "GNSS недоступний",
        optical: "Оптично-інерційна оцінка",
        estimate: "Оцінка позиції стабільна",
        package: "Дані місії готові",
        telemetry: "Телеметрія",
        altitude: "Висота",
        altitudeValue: "420 м",
        battery: "Живлення",
        batteryValue: "78%",
        link: "Канал",
        linkValue: "MAVLink",
        live: "Активно",
        navEstimate: "Оцінка навігації",
        corridorHold: "утримання коридору",
      },
    },
    company: {
      eyebrow: "Компанія",
      title: "Наука, промислові системи та оборонні технології",
      body:
        "DroneOps — науково-технологічний стартап у промислово-оборонній галузі.",
      locations: ["Реєстрація у Великобританії", "R&D і виробництво в Києві", "Інженерна присутність у Польщі"],
    },
    beyond: {
      eyebrow: "Навігація поза GPS",
      title: "Навігація поза GPS",
      body:
        "DroneOps розробляє оптично-інерційну та супутникову навігацію для зависання, безпечного повернення та автоматичних місій БПЛА всіх типів в умовах, де GPS недоступний, приглушений або підроблений.",
    },
    products: {
      eyebrow: "Архітектура продуктів",
      title: "Два навігаційні напрями з чітким комерційним фокусом",
      body:
        "NORA — основний комерційний бортовий модуль. SONA — дослідницький напрям супутникової релокалізації, що допомагає коригувати накопичений drift через порівняння зображень.",
      items: [
        {
          name: "NORA",
          status: "Основний продукт",
          summary:
            "Бортовий оптично-інерційний навігаційний модуль для БПЛА, який забезпечує GNSS-подібні координати без супутникового сигналу.",
          details: ["MAVLink 2 по UART", "ArduPilot 4.5.5+", "Підтримка Loiter, RTL, SmartRTL та AUTO"],
        },
        {
          name: "SONA",
          status: "Дослідницький напрям",
          summary:
            "Супутникова релокалізація, що допомагає коригувати накопичений drift через порівняння зображень дрона із супутниковими знімками.",
          details: ["Передкомерційний статус", "Корекція за картою", "Не позиціонується як серійний продукт"],
        },
      ],
    },
    nora: {
      eyebrow: "Основний продукт",
      title: "NORA",
      body:
        "NORA (Navigation Optical Resilient Architecture) підключається до flight controller через MAVLink 2 і працює як заміна або резерв GPS, коли супутникове позиціонування недоступне. Модуль використовує камеру, спрямовану вниз, та IMU для оцінки позиції й орієнтації в реальному часі, а потім передає GNSS-сумісні дані в ArduPilot без зміни планування місій або додаткового інтерфейсу для пілота.",
      boundary:
        "Якість роботи залежить від видимості та текстури поверхні. Сильний дощ, снігопад, густий туман, великі однорідні водні поверхні та рівномірний сніговий покрив можуть знижувати якість навігації.",
      stats: [
        { label: "Габарити", value: "65 x 50 x 30 мм" },
        { label: "Інтерфейс", value: "MAVLink 2 / UART" },
        { label: "Живлення", value: "8-45 В / 15 Вт" },
        { label: "Робоча висота", value: "50-400 м" },
      ],
      modes: [
        {
          title: "Зависання / Loiter",
          body:
            "Режим утримання позиції без GPS. Для команд, яким потрібно стабілізувати БПЛА в зоні РЕБ або утримувати апарат над заданою ділянкою.",
        },
        {
          title: "Безпечне повернення / RTL & SmartRTL",
          body:
            "Сценарій для платформ, які працюють на невеликих і середніх дистанціях. Якщо GPS недоступний або приглушений, дрон може повернутися назад за навігаційними даними NORA без постійного ручного ведення оператором.",
        },
        {
          title: "Автоматичні місії / AUTO",
          body:
            "Польоти за заданими координатами або маршрутом для БПЛА різних типів у GPS-denied умовах.",
        },
      ],
    },
    schematic: {
      eyebrow: "Апаратна частина",
      title: "Схема модуля NORA",
      body:
        "Розбір конструкції модуля: захисний корпус, обчислювальна плата, монтажний стек і теплова основа.",
      alt: "Схема розбору навігаційного модуля NORA",
      labels: {
        stack: "NORA / DEVICE STACK",
        status: "ГОТОВО ДО УМОВ БЕЗ GNSS",
        replay: "Повторити",
        reduced: "Статична схема",
        protectiveHousing: "Захисний корпус",
        processingBoard: "Обчислювальна плата",
        thermalBase: "Теплова основа",
        mountingStack: "Монтажний стек",
      },
      specs: [
        { label: "Модуль", value: "Оптично-інерційна навігація" },
        { label: "Габарити", value: "65 x 50 x 30 мм" },
        { label: "Інтерфейс", value: "MAVLink 2 / UART" },
        { label: "Живлення", value: "8-45 В / 15 Вт" },
      ],
    },
    integration: {
      eyebrow: "Процес інтеграції",
      title: "Від вимог до операційного виконання",
      body:
        "Процес інтеграції створений для виробників БПЛА, системних інтеграторів і оборонних замовників, яким потрібен практичний шлях від вимог платформи до польотних доказів.",
      steps: [
        {
          title: "Планування",
          body:
            "Визначення вимог до платформи: use case, дальність, висота, операційні ліміти, план інтеграції та спільних випробувань.",
        },
        {
          title: "Інтеграція навігації",
          body:
            "Фізична та програмна інтеграція модуля, підключення живлення й UART, налаштування автопілота.",
        },
        {
          title: "Калібрування",
          body:
            "Обчислення матриці переходу між системами координат навігаційного модуля та БПЛА.",
        },
        {
          title: "Тестування місії",
          body: "Перевірка роботи NORA в контрольованому польотному профілі.",
        },
        {
          title: "Операційний перегляд",
          body:
            "Аналіз логів, уточнення обмежень, оновлення конфігурації місії та підготовка наступного завдання з доказовим слідом.",
        },
      ],
    },
    deployment: {
      eyebrow: "Моделі розгортання",
      title: "Гнучка інтеграція",
      body:
        "DroneOps може підтримувати різні моделі закупівлі, інтеграції та розгортання залежно від зрілості платформи й операційного контексту.",
      standalone:
        "Автономний апаратний комплект — розгортуваний навігаційний і місійний пакет для команд, яким потрібна інтегрована польова конфігурація.",
      options: [
        {
          title: "Кастомна інтеграція",
          body:
            "Інженерна підтримка для конкретної платформи: підключення, налаштування автопілота, калібрування та спільні льотні випробування.",
        },
        {
          title: "Ліцензія на програмне забезпечення",
          body:
            "Ліцензоване навігаційне програмне забезпечення для затверджених програм БПЛА та технічних партнерів із власним шляхом інтеграції.",
        },
        {
          title: "Корпоративне розгортання",
          body:
            "Підтримка програмного рівня для виробників, інтеграторів, оборонних компаній та середовищ із кількома командами.",
        },
        {
          title: "Автономне використання",
          body:
            "Польовий апаратний пакет для команд, яким потрібна навігаційна спроможність без перебудови всього робочого процесу.",
        },
      ],
    },
    setup: {
      eyebrow: "Процес оператора",
      title: "Просте налаштування без зміни операторського процесу",
      body:
        "NORA створена так, щоб вписуватися у звичні практики автопілота та інтегратора, а не додавати ще один операційний інтерфейс.",
      items: [
        {
          title: "Готово для інтеграторів",
          body:
            "Структура підключення зрозуміла для команд, які вже працюють з ArduPilot, MAVLink 2 та польотними контролерами.",
        },
        {
          title: "Знайомий операторський інтерфейс",
          body:
            "Стан навігаційної системи передається через звичні індикатори автопілота. Оператор не отримує зайвого інтерфейсу.",
        },
        {
          title: "Безпечне розгортання",
          body:
            "Навігаційний модуль побудований з кількома рівнями захисту і не розкриває навігаційні дані без потреби.",
        },
      ],
    },
    contact: {
      eyebrow: "Контакт",
      title: "Обговорити інтеграцію NORA",
      body:
        "Опишіть вимоги вашої платформи, і наша команда допоможе визначити шлях інтеграції, профіль випробувань та модель розгортання.",
      direct: "Зручніше напряму?",
      directLink: "Написати DroneOps",
      cta: "Зв’язатися з DroneOps",
      fields: {
        name: "Повне ім’я",
        organization: "Організація",
        email: "Робочий email",
        context: "Вимоги платформи",
      },
      placeholders: {
        name: "Ім’я та прізвище",
        organization: "Компанія, підрозділ або програма",
        email: "name@organization.com",
        context: "Тип платформи, версія ArduPilot, дальність, висота, середовище роботи, цілі інтеграції",
      },
      submit: "Зв’язатися з DroneOps",
      sending: "Надсилання запиту",
      success: "Запит отримано. Ми відповімо на вказаний робочий email.",
      error: "Запит не вдалося надіслати. Будь ласка, напишіть команді напряму.",
    },
    preview: {
      mapTitle: "Планувальник маршруту",
      panels: [
        { label: "Впевненість навігації", value: "Стабільна" },
        { label: "Коридор місії", value: "Перевірено" },
        { label: "Польовий пакет", value: "Готовий" },
      ],
      checklistTitle: "Передпольотна логіка",
      checklist: ["Коридор маршруту перевірено", "Резервну поведінку призначено", "Картографічний пакет завантажено", "Передачу оператору завершено"],
    },
    footer: {
      sections: [
        {
          title: "Продукт",
          links: ["NORA", "Режими", "Інтеграція", "Розгортання"],
        },
        {
          title: "Співпраця",
          links: ["Integration guide", "Технічна розмова", "Контакт"],
        },
      ],
      note:
        "Оптично-інерційні навігаційні модулі для виробників БПЛА, інтеграторів та оборонних замовників, що працюють в умовах без GNSS.",
      legal: "Публічні запити не мають містити секретних або обмежених деталей програм.",
      copyright: "DroneOps. Усі права захищено.",
    },
  },
} as const;

export type Dictionary = (typeof dictionaries)[Locale];

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}
