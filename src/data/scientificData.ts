export interface NavSection {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
}

export const NAV_SECTIONS: NavSection[] = [
  { id: 'inicio', number: '00', title: 'Inicio', shortTitle: 'Inicio' },
  { id: 'el-problema', number: '01', title: 'El Problema', shortTitle: 'Problema' },
  { id: 'dos-tecnologias', number: '02', title: 'Dos Tecnologías', shortTitle: 'Tecnologías' },
  { id: 'impacto-directo', number: '03', title: 'Impacto Directo', shortTitle: 'Directo' },
  { id: 'impacto-indirecto', number: '04', title: 'Impacto Indirecto', shortTitle: 'Indirecto' },
  { id: 'ciclo-de-vida', number: '05', title: 'Ciclo de Vida', shortTitle: 'Ciclo de Vida' },
  { id: 'los-datos', number: '06', title: 'Los Datos', shortTitle: 'Datos' },
  { id: 'factores', number: '07', title: 'Factores Clave', shortTitle: 'Factores' },
  { id: 'escenarios', number: '08', title: 'Escenarios Energéticos', shortTitle: 'Escenarios' },
  { id: 'argentina', number: '09', title: 'Contexto Argentina', shortTitle: 'Argentina' },
  { id: 'preguntas', number: '10', title: 'Preguntas Frecuentes', shortTitle: 'Preguntas' },
  { id: 'reflexion', number: '11', title: 'Reflexión Final', shortTitle: 'Reflexión' },
  { id: 'fuentes', number: '12', title: 'Fuentes y Metodología', shortTitle: 'Fuentes' },
];

export interface LifecycleStep {
  id: string;
  name: string;
  shortDesc: string;
  electricDetails: string;
  combustionDetails: string;
}

export const LIFECYCLE_STAGES: LifecycleStep[] = [
  {
    id: 'materias-primas',
    name: 'Materias Primas',
    shortDesc: 'Extracción minera, síntesis petroquímica y procesamiento de metales.',
    electricDetails: 'Extracción de litio, níquel, cobalto, grafito, cobre y aluminio. Requiere minería especializada y procesamiento electroquímico de alta pureza.',
    combustionDetails: 'Extracción y procesamiento de hierro, acero, aluminio y fluidos petroquímicos para el motor de combustión y caja de cambios mecánica.',
  },
  {
    id: 'fabricacion',
    name: 'Fabricación',
    shortDesc: 'Construir un vehículo requiere materias primas, energía y diferentes procesos industriales.',
    electricDetails: 'Producción de celdas de batería en salas secas con alto consumo eléctrico térmico, inversor electrónico y bobinado de motor de cobre.',
    combustionDetails: 'Fundición de bloque de cilindros, mecanizado de alta precisión de pistones, cigüeñal, inyectores de combustible y convertidor catalítico.',
  },
  {
    id: 'transporte',
    name: 'Transporte',
    shortDesc: 'Logística de componentes globales y distribución del vehículo terminado.',
    electricDetails: 'Transporte marítimo y terrestre de celdas y módulos pesados desde centros de fabricación de baterías hasta plantas de montaje.',
    combustionDetails: 'Distribución de autopartes desde fábricas de motores y transmisiones, y traslado del vehículo terminado a concesionarios.',
  },
  {
    id: 'uso',
    name: 'Uso y Circulación',
    shortDesc: 'Consumo de energía necesario para recorrer cada kilómetro durante su vida útil.',
    electricDetails: 'Sin emisiones por caño de escape. La huella de carbono depende de cómo se generó la electricidad en la red que carga la batería.',
    combustionDetails: 'Emisiones directas continuas de CO₂, NOₓ y material particulado por la combustión de nafta o gasoil en cada viaje.',
  },
  {
    id: 'mantenimiento',
    name: 'Mantenimiento',
    shortDesc: 'Piezas de recambio, lubricantes, desgaste de neumáticos y fluidos.',
    electricDetails: 'Menor cantidad de piezas móviles (sin aceite de motor, bujías ni correas). Menor desgaste de pastillas de freno por frenado regenerativo.',
    combustionDetails: 'Cambios periódicos de aceite mineral/sintético, filtros de combustible/aire, bujías, refrigerante y pastillas de freno convencionales.',
  },
  {
    id: 'fin-de-vida',
    name: 'Fin de Vida',
    shortDesc: 'Desmontaje, reutilización en segunda vida, reciclaje y disposición final.',
    electricDetails: 'Potencial de segunda vida para almacenamiento estacionario y reciclaje hidrometalúrgico de litio, cobalto y níquel.',
    combustionDetails: 'Desguace y fundición de metales ferrosos (acero/hierro), neutralización de fluidos tóxicos y recuperación de platino del catalizador.',
  },
];

export interface SupplyChainNode {
  id: string;
  name: string;
  category: 'combustion' | 'electric';
  icon: string;
  description: string;
  impactFactor: string;
}

export const SUPPLY_CHAIN_COMBUSTION: SupplyChainNode[] = [
  {
    id: 'c-oil',
    name: 'Extracción de Petróleo',
    category: 'combustion',
    icon: '🛢️',
    description: 'Perforación en yacimientos convencionales o no convencionales (fracking/offshore). Conlleva riesgos de venteo de gas metano y consumo energético de bombeo.',
    impactFactor: '~15-20% de las emisiones totales del combustible se originan antes de llegar al surtidor.',
  },
  {
    id: 'c-refining',
    name: 'Refinamiento',
    category: 'combustion',
    icon: '🏭',
    description: 'Destilación fraccionada y craqueo catalítico térmico a más de 350°C para convertir crudo en naftas y gasoil comercial.',
    impactFactor: 'Proceso industrial electro-intensivo con emisiones directas de CO₂ en refinerías.',
  },
  {
    id: 'c-transport',
    name: 'Transporte y Logística',
    category: 'combustion',
    icon: '🚛',
    description: 'Oleoductos, buques petroleros de ultramar y camiones cisterna que distribuyen el combustible a las estaciones de servicio.',
    impactFactor: 'Pérdidas fugitivas por evaporación y consumo de gasoil en flotas de distribución pesada.',
  },
  {
    id: 'c-fuel',
    name: 'Dispensado de Combustible',
    category: 'combustion',
    icon: '⛽',
    description: 'Almacenamiento subterráneo y bombeo en estaciones de servicio para el suministro al usuario final.',
    impactFactor: 'Venteos de compuestos orgánicos volátiles (COVs) durante la carga en tanques.',
  },
  {
    id: 'c-usage',
    name: 'Uso en Motor Térmico',
    category: 'combustion',
    icon: '🚗',
    description: 'Reacción termoquímica interna aire-combustible que libera energía mecánica, gases de efecto invernadero y calor residual (~70%).',
    impactFactor: 'Representa el ~75-80% del impacto total de ciclo de vida del vehículo.',
  },
];

export const SUPPLY_CHAIN_ELECTRIC: SupplyChainNode[] = [
  {
    id: 'e-raw',
    name: 'Materias Primas',
    category: 'electric',
    icon: '⛏️',
    description: 'Minería de litio (salares o roca dura), cobalto, níquel de alta pureza y extracción de grafito para los ánodos.',
    impactFactor: 'Uso hídrico en salares y emisiones asociadas a la maquinaria de trituración minera.',
  },
  {
    id: 'e-manuf',
    name: 'Fabricación de Componentes',
    category: 'electric',
    icon: '🏭',
    description: 'Purificación química de materiales activos, cátodos NMC/LFP y manufactura de semiconductores de potencia (inversores SiC).',
    impactFactor: 'Requiere calor industrial y electricidad constante en salas con atmósfera controlada.',
  },
  {
    id: 'e-battery',
    name: 'Batería (Giga-factoría)',
    category: 'electric',
    icon: '🔋',
    description: 'La fabricación de baterías requiere materiales, energía y procesos industriales. Su impacto depende de cómo se produce la energía empleada en la planta.',
    impactFactor: 'Una celda producida con energía a carbón emite hasta el doble que una producida con energía hidroeléctrica o renovable.',
  },
  {
    id: 'e-grid',
    name: 'Electricidad de la Red',
    category: 'electric',
    icon: '⚡',
    description: 'La electricidad utilizada para cargar un vehículo proviene de diferentes fuentes. La composición de la matriz energética modifica sustancialmente el impacto.',
    impactFactor: 'Oscila entre ~15 g CO₂/kWh en matrices limpias y más de 800 g CO₂/kWh en matrices a base de carbón mineral.',
  },
  {
    id: 'e-usage',
    name: 'Uso y Circulación',
    category: 'electric',
    icon: '🚗',
    description: 'Eficiencia motriz del 88% al 94%. Sin emisiones de escape. Freno regenerativo que reduce el desgaste de discos.',
    impactFactor: 'Impacto directo local nulo en calidad de aire urbano respecto a gases de escape.',
  },
];

export interface ScenarioData {
  id: 'A' | 'B' | 'C';
  name: string;
  tagline: string;
  matrixDescription: string;
  carbonIntensityKwh: number; // g CO2/kWh
  evUsePerKm: number; // g CO2e/km (assuming ~17 kWh/100km + charging losses)
  iceUsePerKm: number; // g CO2e/km (direct + indirect fuel)
  breakEvenKm: number; // km where EV LCA surpasses ICE LCA
  manufacturingDeltaEvVsIceTonnes: number; // +3.8 tonnes
}

export const SCENARIOS: Record<'A' | 'B' | 'C', ScenarioData> = {
  A: {
    id: 'A',
    name: 'Escenario A: Alta participación renovable',
    tagline: 'Matriz limpia descarbonizada (hidroeléctrica, solar, eólica, nuclear)',
    matrixDescription: 'Intensidad de carbono de la red eléctrica inferior a 90 g CO₂/kWh (ejemplo: países nórdicos, Uruguay o generación solar/eólica dedicada).',
    carbonIntensityKwh: 75,
    evUsePerKm: 14.5, // g CO2e/km
    iceUsePerKm: 203, // g CO2e/km
    breakEvenKm: 20150, // km
    manufacturingDeltaEvVsIceTonnes: 3.8,
  },
  B: {
    id: 'B',
    name: 'Escenario B: Matriz energética mixta',
    tagline: 'Balance térmico-renovable (gas natural, hidroeléctrica y renovables)',
    matrixDescription: 'Intensidad media global entre 320 y 420 g CO₂/kWh (representativa de Argentina y el promedio mundial actual de transición).',
    carbonIntensityKwh: 360,
    evUsePerKm: 69.5, // g CO2e/km
    iceUsePerKm: 203, // g CO2e/km
    breakEvenKm: 28450, // km
    manufacturingDeltaEvVsIceTonnes: 3.8,
  },
  C: {
    id: 'C',
    name: 'Escenario C: Alta participación fósil',
    tagline: 'Generación con carbón mineral y fuel oil predominante',
    matrixDescription: 'Intensidad de carbono de la red superior a 750 g CO₂/kWh (ejemplo: redes termoeléctricas con alto porcentaje de carbón sin captura de carbono).',
    carbonIntensityKwh: 820,
    evUsePerKm: 158.0, // g CO2e/km
    iceUsePerKm: 203, // g CO2e/km
    breakEvenKm: 84400, // km
    manufacturingDeltaEvVsIceTonnes: 3.8,
  },
};

export const ARGENTINA_FACTS = [
  {
    id: 'ar-matrix',
    title: '⚡ Matriz Eléctrica Nacional',
    summary: 'Aproximadamente 55% térmica a gas natural, 20% hidroeléctrica, 15% renovables (eólica/solar) y 7% nuclear.',
    details: 'Argentina cuenta con un factor de emisión medio de red de aproximadamente 330-360 g CO₂/kWh, más limpio que matrices dependientes de carbón pero con margen de descarbonización mediante los vientos de la Patagonia y la radiación solar del NOA.',
  },
  {
    id: 'ar-transport',
    title: '🚗 Parque Automotor y Combustibles',
    summary: 'Antigüedad promedio superior a 13 años y amplia difusión histórica del GNC (Gas Natural Comprimido).',
    details: 'El parque automotor argentino posee una de las flotas a GNC más grandes del mundo (~1.7 millones de vehículos), lo que ya introdujo una transición parcial con menor emisión de material particulado respecto al diésel, aunque con dependencia fósil.',
  },
  {
    id: 'ar-infra',
    title: '🔌 Infraestructura de Carga',
    summary: 'Red en fase inicial, concentrada en el Área Metropolitana de Buenos Aires y corredores troncales.',
    details: 'La disponibilidad de cargadores rápidos en rutas de larga distancia es aún limitada. La adopción masiva planteará desafíos en las redes de distribución urbana y la adecuación de acometidas eléctricas domiciliarias.',
  },
];

export const FAQ_ITEMS = [
  {
    question: '¿Un auto eléctrico no contamina?',
    answer: 'Un vehículo eléctrico no produce emisiones por el escape durante su uso, pero su ciclo de vida incluye extracción de materias primas, fabricación de la batería, producción de la electricidad que consume, mantenimiento y fin de vida.',
  },
  {
    question: '¿Fabricar una batería tiene impacto?',
    answer: 'Sí. La producción de baterías requiere materias primas (litio, níquel, cobalto, grafito) y procesos industriales electrointensivos en giga-factorías, generando una "deuda de carbono" inicial que debe amortizarse con los kilómetros recorridos.',
  },
  {
    question: '¿La electricidad cambia el resultado?',
    answer: 'Sí, de manera determinante. Si un vehículo eléctrico se carga con electricidad generada a partir de carbón mineral, sus emisiones indirectas por kilómetro se acercan a las de un auto de combustión eficiente. Si se carga con fuentes renovables o hidroeléctricas, sus emisiones en uso son mínimas.',
  },
  {
    question: '¿Qué ocurre con una batería al terminar su vida útil?',
    answer: 'Cuando la batería pierde aproximadamente un 20-30% de su capacidad original en el vehículo, no se desecha: puede utilizarse en "segunda vida" para almacenar energía en redes solares residenciales, y posteriormente ingresar a procesos de reciclaje hidrometalúrgico con recuperaciones superiores al 90% de sus metales valiosos.',
  },
];

export const REFLECTION_FACTORS = [
  {
    id: 'fab',
    label: 'Fabricación',
    insight: 'Ponderás el costo ambiental inicial de producir celdas y carrocerías antes del primer kilómetro.',
  },
  {
    id: 'uso',
    label: 'Uso diario',
    insight: 'Priorizás la calidad del aire local en ciudades y la reducción de gases directos donde vive la gente.',
  },
  {
    id: 'elec',
    label: 'Fuente de electricidad',
    insight: 'Comprendés que la descarbonización del auto eléctrico está intrínsecamente unida a la red eléctrica.',
  },
  {
    id: 'comb',
    label: 'Cadena del combustible',
    insight: 'Tenés en cuenta todo el proceso petrolero (perforación, refino y transporte) antes de que la nafta llegue al motor.',
  },
  {
    id: 'bat',
    label: 'Minería y baterías',
    insight: 'Reconocés los desafíos geopolíticos, sociales y ambientales de la extracción de litio, níquel y cobalto.',
  },
  {
    id: 'dist',
    label: 'Kilómetros recorridos',
    insight: 'Entendés que el punto de cruce ecológico depende directamente de la distancia acumulada en la vida útil.',
  },
  {
    id: 'recic',
    label: 'Fin de vida y reciclaje',
    insight: 'Destacás la economía circular y la importancia de no transformar la transición en una crisis de residuos.',
  },
];

export const SOURCES = [
  {
    institution: 'IEA — International Energy Agency',
    title: 'Global EV Outlook: Driving towards cleaner transport',
    year: '2024',
    scope: 'Datos de eficiencia de tren motriz, intensidad de emisiones por segmento y evolución de matrices globales.',
    urlText: 'iea.org/reports/global-ev-outlook',
  },
  {
    institution: 'ICCT — International Council on Clean Transportation',
    title: 'A comprehensive global life-cycle assessment of emissions from passenger cars',
    year: '2021-2023',
    scope: 'Metodología estandarizada de análisis de ciclo de vida (ACV) comparativo para Europa, EEUU, China e India.',
    urlText: 'theicct.org/publications/global-LCA-passenger-cars',
  },
  {
    institution: 'ADEME — Agence de la transition écologique',
    title: 'Analyse du cycle de vie des véhicules légers en France et en Europe',
    year: '2022',
    scope: 'Modelado riguroso del impacto de fabricación de baterías y punto de equilibrio kilométrico en redes europeas.',
    urlText: 'ademe.fr/expertises/mobilite-et-transports',
  },
  {
    institution: 'IPCC — Grupo Intergubernamental de Expertos sobre el Cambio Climático',
    title: 'Sexto Informe de Evaluación (AR6) — Mitigación del Cambio Climático (Capítulo Transporte)',
    year: '2022',
    scope: 'Revisión científica de potenciales de mitigación global, factores de emisión Well-to-Wheel y sinergias energéticas.',
    urlText: 'ipcc.ch/report/ar6/wg3',
  },
  {
    institution: 'CAMMESA & Secretaría de Energía de Argentina',
    title: 'Informe Anual del Mercado Eléctrico Mayorista y Matriz de Generación',
    year: '2024',
    scope: 'Desglose del despacho de energía eléctrica nacional: térmica a gas, hidroeléctrica, nuclear y programas renovables.',
    urlText: 'cammesaweb.cammesa.com',
  },
];
