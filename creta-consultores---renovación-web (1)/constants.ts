
import { ServiceItem, TeamMember, BlogPost, NavLink, LegalPage, LocalLandingPage } from './types';

export const NAVIGATION_LINKS: NavLink[] = [
  { path: '/', label: 'Inicio' },
  { path: '/nosotros', label: 'La Firma' },
  { path: '/servicios', label: 'Servicios' },
  { path: '/noticias', label: 'Actualidad' },
  { path: '/contacto', label: 'Contacto' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'fiscal',
    title: 'Asesoría Fiscal y Tributaria',
    shortDescription: 'Asesoría Fiscal experta en Sant Cugat. Planificación tributaria avanzada para empresas, ahorro en Impuesto de Sociedades y defensa ante inspecciones de Hacienda.',
    longDescription: `
      <p class="mb-4 text-lg text-slate-700">En un entorno normativo complejo y cambiante, la <strong>planificación fiscal</strong> es clave para la sostenibilidad y rentabilidad de cualquier negocio. En Creta Consultores no nos limitamos a la presentación de modelos tributarios; analizamos la estructura de su empresa junto con nuestro departamento <a href="#/servicios/contable" class="text-secondary font-semibold hover:underline">Contable</a> para optimizar su carga fiscal.</p>
      
      <h3 class="font-serif text-2xl font-bold text-primary mt-8 mb-4">Nuestra Metodología Fiscal</h3>
      <p class="mb-4">Nuestro departamento fiscal, formado por economistas y abogados tributaristas, ofrece un servicio proactivo. Anticipamos los impactos fiscales de sus decisiones empresariales antes de que se tomen.</p>
      
      <h4 class="font-serif text-lg font-bold mt-6 mb-2 text-primary">Servicios destacados:</h4>
      <ul class="list-disc list-inside space-y-2 mb-6 text-slate-700">
        <li><strong>Planificación Fiscal Internacional:</strong> Convenios de doble imposición y fiscalidad de no residentes.</li>
        <li><strong>Impuesto de Sociedades (IS):</strong> Deducciones por I+D+i, reserva de capitalización y optimización de la base imponible.</li>
        <li><strong>IVA e Impuestos Indirectos:</strong> Gestión de operaciones intracomunitarias y regímenes especiales.</li>
        <li><strong>Inspecciones de Hacienda:</strong> Asistencia letrada y representación ante la AEAT en procedimientos de inspección y comprobación.</li>
        <li><strong>Precios de Transferencia:</strong> Elaboración de la documentación obligatoria para operaciones vinculadas.</li>
      </ul>
      <p class="mt-4 text-slate-700">Si su empresa se encuentra en fase de expansión, le recomendamos consultar nuestros servicios de <a href="#/servicios/mercantil" class="text-secondary font-semibold hover:underline">Derecho Mercantil</a> para estructurar correctamente sus operaciones.</p>
    `,
    iconName: 'Calculator',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    features: [
      'Planificación fiscal estratégica',
      'Impuesto de Sociedades e IVA',
      'Defensa ante Inspecciones Tributarias',
      'Fiscalidad Internacional',
      'Operaciones Vinculadas',
      'Empresa Familiar y Sucesión'
    ]
  },
  {
    id: 'laboral',
    title: 'Asesoría Laboral y RRHH',
    shortDescription: 'Asesoría Laboral y gestión de nóminas en Sant Cugat. Expertos en contratación, despidos y conciliaciones. Externalice sus RRHH con total seguridad jurídica.',
    longDescription: `
      <p class="mb-4 text-lg text-slate-700">El equipo humano es el activo más valioso, pero también el área de mayor riesgo normativo. Nuestro departamento laboral gestiona el ciclo completo del empleado, desde la contratación hasta la extinción, garantizando el cumplimiento de la normativa laboral vigente.</p>
      
      <h3 class="font-serif text-2xl font-bold text-primary mt-8 mb-4">Consultoría Estratégica de RRHH</h3>
      <p class="mb-4">Más allá de la nómina, asesoramos en la estructuración de plantillas, políticas retributivas y planes de igualdad. Trabajamos en coordinación con el área <a href="#/servicios/fiscal" class="text-secondary font-semibold hover:underline">Fiscal</a> para optimizar las retribuciones en especie y planes de retribución flexible.</p>
      
      <h4 class="font-serif text-lg font-bold mt-6 mb-2 text-primary">Áreas de actuación:</h4>
      <p class="mb-4 text-slate-700">En caso de conflicto, nuestro equipo <a href="#/servicios/juridico" class="text-secondary font-semibold hover:underline">Jurídico</a> le defenderá en actos de conciliación y juzgados de lo social.</p>
    `,
    iconName: 'Users',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    features: [
      'Gestión de Nóminas y Seguros Sociales',
      'Contratación y Subvenciones',
      'Despidos y EREs',
      'Auditoría Laboral (Compliance)',
      'Inspecciones de Trabajo',
      'Planes de Igualdad y Retribución Flexible'
    ]
  },
  {
    id: 'concursal',
    title: 'Derecho Concursal y Reestructuraciones',
    shortDescription: 'Abogados Concursales: Ley de Segunda Oportunidad y Concurso de Acreedores. Reestructuración de deuda empresarial y cancelación de deudas para particulares.',
    longDescription: `
      <p class="mb-4 text-lg text-slate-700">Cuando una empresa enfrenta dificultades financieras, el tiempo es un factor crítico. Nuestro área de <strong>Derecho Concursal</strong> está especializada en buscar vías de viabilidad para empresas en crisis o, en su caso, gestionar una liquidación ordenada.</p>
      
      <h3 class="font-serif text-2xl font-bold text-primary mt-8 mb-4">Ley de Segunda Oportunidad</h3>
      <p class="mb-4">Para personas físicas y autónomos, gestionamos el procedimiento de la Ley de Segunda Oportunidad, permitiendo la <strong>exoneración del pasivo insatisfecho (EPI)</strong> y el inicio de una nueva etapa libre de deudas.</p>

      <h3 class="font-serif text-2xl font-bold text-primary mt-8 mb-4">Servicios para Empresas</h3>
      <ul class="list-disc list-inside space-y-2 mb-6 text-slate-700">
        <li><strong>Planes de Reestructuración:</strong> Negociación con acreedores previa al concurso.</li>
        <li><strong>Solicitud de Concurso de Acreedores:</strong> Voluntario o necesario.</li>
        <li><strong>Defensa de Créditos:</strong> Representación de acreedores para recuperar deudas.</li>
        <li><strong>Pieza de Calificación:</strong> Defensa de los administradores.</li>
        <li><strong>Venta de Unidades Productivas:</strong> Gestión de la transmisión de activos libres de cargas.</li>
      </ul>
      <p class="text-slate-700">Es fundamental revisar las responsabilidades de los administradores, un servicio que prestamos junto a nuestros expertos en <a href="#/servicios/mercantil" class="text-secondary font-semibold hover:underline">Derecho Mercantil</a>.</p>
    `,
    iconName: 'TrendingUp',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    features: [
      'Solicitud de Concurso de Acreedores',
      'Ley de Segunda Oportunidad',
      'Planes de Reestructuración Pre-concursal',
      'Defensa de Administradores',
      'Adquisición de Unidades Productivas',
      'Mediación Concursal'
    ]
  },
  {
    id: 'mercantil',
    title: 'Derecho Mercantil y Societario',
    shortDescription: 'Abogados Mercantiles expertos en constitución de sociedades, pactos de socios y operaciones M&A. Asesoramiento societario integral en Barcelona y Sant Cugat.',
    longDescription: `
      <p class="mb-4 text-lg text-slate-700">Acompañamos a la empresa en todas las fases de su vida jurídica. Desde el nacimiento del proyecto hasta operaciones complejas de fusión o adquisición (M&A).</p>
      <p class="mb-4">Somos expertos en la redacción de <strong>Pactos de Socios</strong>, una herramienta fundamental para prevenir conflictos futuros en <a href="#/servicios/emprendedores" class="text-secondary font-semibold hover:underline">Startups y Emprendedores</a>.</p>
      <p class="mb-4 text-slate-700">Además, coordinamos cualquier operación societaria con nuestro departamento <a href="#/servicios/fiscal" class="text-secondary font-semibold hover:underline">Fiscal</a> para asegurar la neutralidad o el ahorro impositivo en reestructuraciones empresariales.</p>
    `,
    iconName: 'Scale',
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    features: [
      'Constitución de Sociedades',
      'Pactos de Socios y Protocolos Familiares',
      'Operaciones de M&A (Fusiones y Adquisiciones)',
      'Secretaría de Consejos de Administración',
      'Contratación Mercantil Nacional e Internacional',
      'Disolución y Liquidación de Sociedades'
    ]
  },
  {
    id: 'herencias',
    title: 'Herencias y Sucesiones',
    shortDescription: 'Abogados especialistas en Herencias y Sucesiones. Tramitamos testamentos y liquidamos impuestos minimizando el coste fiscal. Gestión integral y sensible.',
    longDescription: `
      <p class="mb-4 text-lg text-slate-700">Gestionar una herencia conlleva una carga burocrática y emocional importante. En Creta Consultores nos ocupamos de todos los trámites legales y fiscales para que usted no tenga que preocuparse por nada.</p>
      
      <h3 class="font-serif text-2xl font-bold text-primary mt-8 mb-4">Optimización Fiscal de la Herencia</h3>
      <p class="mb-4">El Impuesto de Sucesiones varía enormemente según la Comunidad Autónoma. Analizamos su situación para aplicar todas las bonificaciones y reducciones posibles, apoyándonos en nuestro equipo de <a href="#/servicios/fiscal" class="text-secondary font-semibold hover:underline">Asesoría Fiscal</a>.</p>

      <h4 class="font-serif text-lg font-bold mt-6 mb-2 text-primary">Nuestros servicios incluyen:</h4>
      <ul class="list-disc list-inside space-y-2 mb-6 text-slate-700">
        <li><strong>Planificación Sucesoria:</strong> Redacción de testamentos para evitar conflictos futuros.</li>
        <li><strong>Declaración de Herederos:</strong> Trámites notariales y judiciales.</li>
        <li><strong>Cuadernos Particionales:</strong> Reparto de bienes entre herederos.</li>
        <li><strong>Liquidación de Impuestos:</strong> Sucesiones y Plusvalía Municipal.</li>
      </ul>
    `,
    iconName: 'Gavel',
    image: 'https://images.unsplash.com/photo-1520453806769-3d0fd2777a38?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    features: [
      'Testamentos y Últimas Voluntades',
      'Liquidación Impuesto de Sucesiones',
      'Declaración de Herederos',
      'Partición de Herencias',
      'Planificación Sucesoria Patrimonial',
      'Donaciones en Vida'
    ]
  },
  {
    id: 'contable',
    title: 'Gestión Contable y Financiera',
    shortDescription: 'Gestoría Contable en Sant Cugat. Contabilidad analítica, presentación de libros oficiales y cuentas anuales. Información financiera precisa para su negocio.',
    longDescription: `
      <p class="mb-4 text-lg text-slate-700">La contabilidad es el termómetro de su empresa. No nos limitamos a mecanizar facturas; transformamos los datos en información útil mediante <strong>informes de gestión y reporting</strong> periódico.</p>
      <p class="mb-4">Garantizamos el cumplimiento estricto del Plan General Contable y defendemos sus cuentas ante terceros. Una contabilidad saneada es la base para una correcta <a href="#/servicios/fiscal" class="text-secondary font-semibold hover:underline">Gestión Fiscal</a> y para evitar contingencias futuras.</p>
    `,
    iconName: 'BarChart3',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    features: [
      'Contabilidad Financiera y Analítica',
      'Presentación de Libros Oficiales',
      'Depósito de Cuentas Anuales',
      'Informes de Gestión para Dirección',
      'Consolidación Contable',
      'Puesta al día de contabilidades atrasadas'
    ]
  },
  {
    id: 'juridico',
    title: 'Servicios Jurídicos y Procesal',
    shortDescription: 'Servicios Jurídicos integrales. Abogados procesalistas para defensa civil, penal económica y administrativa. Protección legal robusta para su empresa.',
    longDescription: `
      <p class="mb-4 text-lg text-slate-700">Nuestro equipo jurídico actúa tanto en la prevención de conflictos (asesoramiento contractual) como en la defensa ante los tribunales en todas las instancias.</p>
      <p class="mb-4 text-slate-700">Trabajamos estrechamente con el área <a href="#/servicios/laboral" class="text-secondary font-semibold hover:underline">Laboral</a> para litigios con empleados y con el área <a href="#/servicios/mercantil" class="text-secondary font-semibold hover:underline">Mercantil</a> para conflictos societarios.</p>
    `,
    iconName: 'Gavel',
    image: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    features: [
      'Derecho Civil y Contractual',
      'Reclamación de Impagados',
      'Derecho Penal Económico',
      'Responsabilidad Civil',
      'Derecho Administrativo',
      'Recursos y Apelaciones'
    ]
  },
  {
    id: 'emprendedores',
    title: 'Emprendedores y Startups',
    shortDescription: 'Punto PAE en Sant Cugat: Alta de autónomos y creación de empresas exprés. Asesoramiento para emprendedores y startups en financiación y pactos de socios.',
    longDescription: `
      <p class="mb-4 text-lg text-slate-700">Convertir una idea en un negocio viable requiere una base legal sólida. En Creta Consultores somos especialistas en el ecosistema emprendedor, actuando como Punto de Atención al Emprendedor (PAE).</p>
      
      <h3 class="font-serif text-2xl font-bold text-primary mt-8 mb-4">Lanzamiento y Financiación</h3>
      <p class="mb-4">Ayudamos a elegir la forma jurídica adecuada, tramitamos el alta en 24-48 horas y asesoramos en la búsqueda de financiación. Es vital contar con un buen <a href="#/servicios/mercantil" class="text-secondary font-semibold hover:underline">Pacto de Socios</a> desde el inicio para asegurar la escalabilidad del proyecto.</p>
    `,
    iconName: 'TrendingUp',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    features: [
      'Alta de Autónomos y Sociedades Express',
      'Punto PAE (Punto de Atención al Emprendedor)',
      'Pactos de Socios para Startups',
      'Asesoramiento en rondas de financiación',
      'Protección de Marca y Patentes',
      'Tarifa Plana para Emprendedores'
    ]
  },
  {
    id: 'bancario',
    title: 'Derecho Bancario',
    shortDescription: 'Abogados Derecho Bancario: Reclamación de gastos hipotecarios, cláusulas suelo y tarjetas revolving. Recuperamos su dinero frente a malas prácticas bancarias.',
    longDescription: `
      <p class="mb-4 text-lg text-slate-700">Defendemos los derechos de consumidores y empresas frente a las entidades financieras. Analizamos sus contratos para detectar cláusulas abusivas o falta de transparencia.</p>
      
      <h4 class="font-serif text-lg font-bold mt-6 mb-2 text-primary">Especialidades:</h4>
      <ul class="list-disc list-inside space-y-2 mb-6 text-slate-700">
        <li><strong>Cláusulas Suelo y Gastos Hipotecarios:</strong> Recuperación de cantidades pagadas indebidamente.</li>
        <li><strong>Tarjetas Revolving:</strong> Reclamación por intereses usurarios.</li>
        <li><strong>Ejecuciones Hipotecarias:</strong> Defensa ante procedimientos de desahucio o embargo, apoyándonos en la <a href="#/servicios/concursal" class="text-secondary font-semibold hover:underline">Ley de Segunda Oportunidad</a> si fuera necesario.</li>
      </ul>
    `,
    iconName: 'Scale',
    image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    features: [
      'Reclamación Gastos Hipotecarios',
      'Nulidad Cláusula Suelo',
      'Tarjetas Revolving (Usura)',
      'Ley de Segunda Oportunidad',
      'Defensa en Ejecuciones Hipotecarias',
      'Reestructuración de Deuda'
    ]
  }
];

export const TEAM: TeamMember[] = [
  {
    id: '1',
    name: 'Equipo Directivo',
    role: 'Socio Fundador',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    bio: 'Licenciado en Ciencias Económicas y Empresariales y Auditor de Cuentas. Con una dilatada experiencia en el asesoramiento fiscal y contable de empresas nacionales e internacionales.'
  },
  {
    id: '2',
    name: 'Dirección Área Laboral',
    role: 'Socia - Graduada Social',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    bio: 'Especialista en Derecho del Trabajo y Seguridad Social. Experta en negociación colectiva, reestructuración de plantillas y gestión de personal.'
  },
  {
    id: '3',
    name: 'Área Contable',
    role: 'Responsable Departamento',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    bio: 'Economista con amplia experiencia en análisis de balances, costes y control de gestión. Supervisión de contabilidades y reporting financiero.'
  },
  {
    id: '4',
    name: 'Área Jurídica',
    role: 'Abogado Senior',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    bio: 'Letrado especialista en Derecho Mercantil y Procesal. Asesoramiento en materia societaria, contractual y defensa en tribunales.'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Novedades fiscales para el cierre del ejercicio 2024',
    excerpt: 'Repasamos los puntos clave que las empresas deben tener en cuenta antes de finalizar el año para optimizar su factura fiscal en el Impuesto de Sociedades.',
    content: '<p>El cierre fiscal del ejercicio es un momento crítico...</p>',
    date: '15 Mar 2024',
    category: 'Fiscal',
    image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    author: 'Dpto. Fiscal'
  },
  {
    id: '2',
    title: 'Ley Concursal: Cambios clave en la Segunda Oportunidad',
    excerpt: 'La reforma de la Ley Concursal introduce mejoras significativas para la exoneración de deudas en personas físicas. Analizamos los nuevos requisitos.',
    content: '<p>La reciente reforma concursal ha agilizado los trámites para la obtención del beneficio de exoneración del pasivo insatisfecho...</p>',
    date: '10 Mar 2024',
    category: 'Concursal',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    author: 'Dpto. Jurídico'
  },
  {
    id: '3',
    title: 'El nuevo sistema de cotización de autónomos por ingresos reales',
    excerpt: 'Análisis detallado de los tramos de cotización vigentes y cómo realizar la regularización de cuotas con la Seguridad Social.',
    content: '<p>Desde la entrada en vigor del nuevo sistema...</p>',
    date: '02 Mar 2024',
    category: 'Laboral',
    image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    author: 'Dpto. Laboral'
  },
  {
    id: '4',
    title: 'Protocolo familiar: clave para la sucesión de la empresa',
    excerpt: 'Cómo planificar el relevo generacional en la empresa familiar para garantizar su supervivencia y evitar conflictos entre herederos.',
    content: '<p>La empresa familiar representa un alto porcentaje...</p>',
    date: '10 Feb 2024',
    category: 'Mercantil',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    author: 'Dpto. Mercantil'
  },
  {
    id: '5',
    title: 'Deducciones I+D+i: una oportunidad de ahorro',
    excerpt: 'Descubra cómo su empresa puede beneficiarse de las deducciones fiscales por actividades de Investigación, Desarrollo e Innovación Tecnológica.',
    content: '<p>La innovación tiene premio fiscal...</p>',
    date: '01 Feb 2024',
    category: 'Fiscal',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    author: 'Dpto. Fiscal'
  }
];

export const LEGAL_PAGES: LegalPage[] = [
  {
    id: 'aviso-legal',
    title: 'Aviso Legal',
    content: `
      <h3 class="text-xl font-bold mb-4">1. Datos Identificativos</h3>
      <p class="mb-4">En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico, a continuación se reflejan los siguientes datos:</p>
      <ul class="list-disc list-inside mb-4 pl-4">
        <li><strong>Titular del dominio web:</strong> CRETA CONSULTORES S.L.</li>
        <li><strong>Domicilio:</strong> Crta. Rubí, 40, Edificio Fórum 4ª planta, 08173 Sant Cugat del Vallès, Barcelona.</li>
        <li><strong>Correo electrónico de contacto:</strong> administracion@cretaconsultores.com</li>
      </ul>
      
      <h3 class="text-xl font-bold mb-4">2. Usuarios</h3>
      <p class="mb-4">El acceso y/o uso de este portal de Creta Consultores atribuye la condición de USUARIO, que acepta, desde dicho acceso y/o uso, las Condiciones Generales de Uso aquí reflejadas.</p>
      
      <h3 class="text-xl font-bold mb-4">3. Uso del Portal</h3>
      <p class="mb-4">cretaconsultores.com proporciona el acceso a multitud de informaciones, servicios, programas o datos (en adelante, "los contenidos") en Internet pertenecientes a Creta Consultores o a sus licenciantes a los que el USUARIO pueda tener acceso.</p>
      
      <h3 class="text-xl font-bold mb-4">4. Propiedad Intelectual e Industrial</h3>
      <p class="mb-4">Creta Consultores por sí o como cesionaria, es titular de todos los derechos de propiedad intelectual e industrial de su página web, así como de los elementos contenidos en la misma (a título enunciativo, imágenes, sonido, audio, vídeo, software o textos; marcas o logotipos, combinaciones de colores, estructura y diseño, selección de materiales usados, programas de ordenador necesarios para su funcionamiento, acceso y uso, etc.), titularidad de Creta Consultores o bien de sus licenciantes.</p>
    `
  },
  {
    id: 'privacidad',
    title: 'Política de Privacidad',
    content: `
      <h3 class="text-xl font-bold mb-4">Protección de Datos</h3>
      <p class="mb-4">Creta Consultores cumple con las directrices del Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo (RGPD) y la Ley Orgánica 3/2018 de Protección de Datos Personales y garantía de los derechos digitales.</p>
      <p class="mb-4">Creta Consultores informa que da cumplimiento a la Ley 34/2002 de 11 de julio, de Servicios de la Sociedad de la Información y el Comercio Electrónico y le solicitará su consentimiento al tratamiento de su correo electrónico con fines comerciales en cada momento.</p>
      
      <h3 class="text-xl font-bold mb-4">Finalidad del tratamiento</h3>
      <p class="mb-4">Los datos personales proporcionados se conservarán mientras se mantenga la relación comercial o durante los años necesarios para cumplir con las obligaciones legales.</p>
    `
  },
  {
    id: 'cookies',
    title: 'Política de Cookies',
    content: `
      <h3 class="text-xl font-bold mb-4">¿Qué son las cookies?</h3>
      <p class="mb-4">Una cookie es un fichero que se descarga en su ordenador al acceder a determinadas páginas web. Las cookies permiten a una página web, entre otras cosas, almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo y, dependiendo de la información que contengan y de la forma en que utilice su equipo, pueden utilizarse para reconocer al usuario.</p>
    `
  }
];

export const CONTACT_INFO = {
  address: 'Crta. Rubí, 40, Edificio Fórum 4ª planta, 08173 Sant Cugat del Vallès, Barcelona',
  phone: '933 284 663',
  email: 'administracion@cretaconsultores.com',
  schedule: 'Lunes a Jueves: 9:00 - 18:30 | Viernes: 9:00 - 14:30',
  linkedin: 'https://linkedin.com',
  twitter: 'https://twitter.com'
};

export const LOCAL_LANDING_PAGES: LocalLandingPage[] = [
  {
    slug: 'asesoria-sant-cugat',
    city: 'Sant Cugat del Vallès',
    seoTitle: 'Asesoría en Sant Cugat del Vallès | Fiscal, Laboral y Contable',
    seoDescription: 'Asesoría en Sant Cugat del Vallès (Edificio Fórum). Expertos en fiscalidad, laboral y contabilidad para PYMES. Ahorro fiscal y gestión integral cerca de ti.',
    heroTitle: 'Asesoría Integral para Empresas en <span class="text-secondary">Sant Cugat</span>',
    introText: 'Ubicados en el corazón empresarial de Sant Cugat (Edificio Fórum), ofrecemos un servicio de consultoría de proximidad, combinando la excelencia técnica con el conocimiento profundo del tejido empresarial local.',
    localContent: `
      <p>Sant Cugat del Vallès se ha consolidado como uno de los polos económicos más importantes de la provincia de Barcelona. Desde Creta Consultores, entendemos las necesidades específicas de las empresas ubicadas en el <strong>Parc Empresarial de Can Sant Joan</strong>, el <strong>Polígono de Can Magí</strong> y el centro urbano.</p>
      <h3 class="text-xl font-bold text-primary mt-4 mb-2">¿Por qué elegir una asesoría local en Sant Cugat?</h3>
      <ul class="list-disc pl-5 space-y-2 mb-4">
        <li><strong>Proximidad:</strong> Estamos a minutos de su negocio. Facilitamos reuniones presenciales para tratar temas delicados.</li>
        <li><strong>Conocimiento local:</strong> Gestión ágil con la administración local y autonómica.</li>
        <li><strong>Networking:</strong> Conexión con otras empresas y oportunidades de negocio en el Vallès.</li>
      </ul>
      <p>Ya sea una Startup tecnológica en busca de financiación o una empresa familiar consolidada, nuestro equipo multidisciplinar le ofrece la seguridad jurídica que necesita sin salir de Sant Cugat. Puede consultar nuestros servicios de <a href="#/servicios/fiscal" class="text-secondary font-semibold hover:underline">Asesoría Fiscal</a> y <a href="#/servicios/laboral" class="text-secondary font-semibold hover:underline">Laboral</a> para más detalles.</p>
    `
  },
  {
    slug: 'consultores-rubi',
    city: 'Rubí',
    seoTitle: 'Consultores de Empresa en Rubí | Gestoría y Abogados',
    seoDescription: 'Consultoría y Gestoría en Rubí para empresas e industrias. Asesoramiento fiscal, laboral y jurídico especializado en polígonos industriales del Vallès.',
    heroTitle: 'Consultoría Estratégica y Gestoría en <span class="text-secondary">Rubí</span>',
    introText: 'Damos soporte a la fuerte actividad industrial y comercial de Rubí. Soluciones fiscales, laborales y legales adaptadas a las necesidades de las empresas del Vallès.',
    localContent: `
      <p>Rubí cuenta con una de las mayores concentraciones de polígonos industriales de Cataluña. En Creta Consultores tenemos una amplia experiencia asesorando a empresas del sector industrial, logístico y manufacturero de la zona.</p>
      <h3 class="text-xl font-bold text-primary mt-4 mb-2">Servicios especializados para la industria en Rubí</h3>
      <p class="mb-4">Comprendemos las particularidades de la gestión industrial: control de costes, gestión de turnos de plantilla, subvenciones a la inversión y normativa medioambiental.</p>
      <ul class="list-disc pl-5 space-y-2 mb-4">
        <li><strong>Asesoramiento Laboral:</strong> Gestión de convenios colectivos industriales y prevención de riesgos. Ver <a href="#/servicios/laboral" class="text-secondary font-semibold hover:underline">Gestión Laboral</a>.</li>
        <li><strong>Fiscalidad Industrial:</strong> Deducciones por inversión en activos fijos e innovación. Ver <a href="#/servicios/fiscal" class="text-secondary font-semibold hover:underline">Asesoría Fiscal</a>.</li>
        <li><strong>Derecho Mercantil:</strong> Contratación con proveedores y clientes internacionales.</li>
      </ul>
      <p>Nuestra oficina en la Crta. de Rubí nos sitúa en un punto estratégico para atenderle con rapidez y eficacia.</p>
    `
  },
  {
    slug: 'gestoria-cerdanyola',
    city: 'Cerdanyola del Vallès',
    seoTitle: 'Gestoría en Cerdanyola del Vallès | Asesoramiento Pymes y Autónomos',
    seoDescription: 'Gestoría para autónomos y empresas en Cerdanyola del Vallès. Gestión eficiente de impuestos, nóminas y trámites. Asesoramiento fiscal cercano y digital.',
    heroTitle: 'Su Gestoría de Confianza cerca de <span class="text-secondary">Cerdanyola</span>',
    introText: 'Facilitamos el día a día de autónomos y PYMES de Cerdanyola. Olvídese del papeleo y céntrese en hacer crecer su negocio con nuestro apoyo experto.',
    localContent: `
      <p>Cerdanyola del Vallès, con su cercanía al Parque Tecnológico del Vallès (PTV) y a la UAB, es un hervidero de innovación y comercio. En Creta Consultores ofrecemos un servicio ágil y digitalizado para emprendedores y comercios locales.</p>
      <h3 class="text-xl font-bold text-primary mt-4 mb-2">Gestión integral para su tranquilidad</h3>
      <p>Cubrimos todas las obligaciones formales de su actividad económica a través de nuestro servicio de <a href="#/servicios/contable" class="text-secondary font-semibold hover:underline">Gestión Contable</a>:</p>
      <ul class="list-disc pl-5 space-y-2 mb-4">
        <li>Presentación de impuestos trimestrales y anuales.</li>
        <li>Confección de nóminas y seguros sociales.</li>
        <li>Legalización de libros contables.</li>
      </ul>
      <p>A tan solo unos minutos de Cerdanyola, nuestras oficinas ofrecen parking y fácil acceso para cuando necesite asesoramiento presencial.</p>
    `
  },
  {
    slug: 'asesoria-barcelona',
    city: 'Barcelona',
    seoTitle: 'Asesoría de Empresas en Barcelona | Abogados Mercantiles y Fiscales',
    seoDescription: 'Asesoría de empresas y abogados en Barcelona. Consultoría estratégica, Derecho Mercantil y Concursal para negocios que buscan crecimiento y seguridad legal.',
    heroTitle: 'Consultoría de Negocio en el Área de <span class="text-secondary">Barcelona</span>',
    introText: 'Desde nuestra sede central en Sant Cugat, prestamos servicio a empresas de toda el área metropolitana de Barcelona, ofreciendo una visión global y estratégica.',
    localContent: `
      <p>Aunque nuestras oficinas físicas se encuentran en Sant Cugat, gran parte de nuestra cartera de clientes opera en Barcelona capital. Gracias a nuestra tecnología en la nube y sistemas de videollamada, actuamos como su departamento financiero y legal externo sin necesidad de desplazamientos constantes.</p>
      <h3 class="text-xl font-bold text-primary mt-4 mb-2">Expertos en Derecho Mercantil y Concursal</h3>
      <p class="mb-4">Atendemos procedimientos en los Juzgados Mercantiles de Barcelona con total solvencia. Somos especialistas en reestructuraciones empresariales, <a href="#/servicios/concursal" class="text-secondary font-semibold hover:underline">Concursos de Acreedores</a> y operaciones societarias complejas.</p>
      <p>Confíe en una firma con más de 25 años de trayectoria en el mercado catalán.</p>
    `
  },
  {
    slug: 'asesoria-terrassa',
    city: 'Terrassa',
    seoTitle: 'Asesoría en Terrassa | Gestoría Industrial y Fiscal',
    seoDescription: 'Gestoría y Asesoría en Terrassa. Expertos en tributación industrial, subvenciones y gestión laboral. Soluciones integrales para empresas egarenses.',
    heroTitle: 'Gestión Empresarial Avanzada para <span class="text-secondary">Terrassa</span>',
    introText: 'Apoyamos el tejido industrial y comercial de Terrassa con soluciones de consultoría de alto nivel. Optimice la fiscalidad de su industria con expertos.',
    localContent: `
      <p>Terrassa, como co-capital del Vallès Occidental, posee un fuerte carácter industrial y textil. Entendemos los retos a los que se enfrentan las empresas de los polígonos de <strong>Santa Margarida</strong>, <strong>Els Bellots</strong> o <strong>Can Parellada</strong>.</p>
      <h3 class="text-xl font-bold text-primary mt-4 mb-2">Asesoramiento para la Industria Egarense</h3>
      <p>Ofrecemos un servicio integral que va más allá de la simple gestión de papeles:</p>
      <ul class="list-disc pl-5 space-y-2 mb-4">
        <li><strong>Optimización de costes laborales:</strong> Análisis de convenios y bonificaciones. Consulte nuestra área <a href="#/servicios/laboral" class="text-secondary font-semibold hover:underline">Laboral</a>.</li>
        <li><strong>Incentivos Fiscales:</strong> Gestión de deducciones por inversión tecnológica y medioambiental.</li>
        <li><strong>Consultoría Financiera:</strong> Ayudamos a estructurar su balance para la obtención de crédito.</li>
      </ul>
      <p>Gracias a nuestra proximidad y fácil conexión por la C-16 y AP-7, somos el socio ideal para las empresas de Terrassa que buscan un plus de calidad.</p>
    `
  },
  {
    slug: 'gestoria-sabadell',
    city: 'Sabadell',
    seoTitle: 'Gestoría y Abogados en Sabadell | Asesoría Pymes',
    seoDescription: 'Asesoría jurídica y económica en Sabadell. Servicios de gestoría administrativa, contable y laboral. Abogados mercantiles cerca de ti.',
    heroTitle: 'Servicios Jurídicos y Económicos en <span class="text-secondary">Sabadell</span>',
    introText: 'Brindamos seguridad jurídica y eficiencia administrativa a los negocios de Sabadell. Un equipo de abogados y economistas a su servicio a pocos minutos del centro.',
    localContent: `
      <p>Sabadell es un motor económico y de servicios vital en Cataluña. En Creta Consultores damos servicio a comercios, profesionales liberales y empresas de la zona, ofreciendo una alternativa de calidad a la gestoría tradicional.</p>
      <h3 class="text-xl font-bold text-primary mt-4 mb-2">Abogados y Economistas bajo un mismo techo</h3>
      <p>La ventaja de contar con nosotros es la integración de servicios:</p>
      <ul class="list-disc pl-5 space-y-2 mb-4">
        <li><strong>Defensa Jurídica:</strong> <a href="#/servicios/juridico" class="text-secondary font-semibold hover:underline">Abogados</a> expertos en reclamaciones de cantidad y contratos.</li>
        <li><strong>Gestión Fiscal:</strong> Presentación de impuestos sin errores y con la máxima optimización.</li>
        <li><strong>Emprendedores:</strong> Asesoramiento especial para nuevas iniciativas en el hub empresarial de Sabadell.</li>
      </ul>
      <p>Nuestra ubicación en el Edificio Fórum de Sant Cugat nos permite atenderle rápidamente, ofreciendo unas instalaciones modernas y privadas para sus consultas estratégicas.</p>
    `
  },
  {
    slug: 'consultoria-sant-quirze',
    city: 'Sant Quirze del Vallès',
    seoTitle: 'Asesoría en Sant Quirze del Vallès | Pymes y Autónomos',
    seoDescription: 'Asesoría fiscal y laboral en Sant Quirze del Vallès. Servicio especializado para empresas de polígonos y autónomos. Gestión contable eficaz.',
    heroTitle: 'Asesoramiento para Pymes en <span class="text-secondary">Sant Quirze</span>',
    introText: 'Damos respuesta a las necesidades de las empresas ubicadas en los parques empresariales de Sant Quirze con agilidad y rigor técnico.',
    localContent: `
      <p>La ubicación estratégica de Sant Quirze del Vallès atrae a numerosas empresas de servicios y logística. Conocemos las dinámicas de los polígonos de <strong>Can Casablanques</strong> y su entorno.</p>
      <h3 class="text-xl font-bold text-primary mt-4 mb-2">Gestión ágil para empresas dinámicas</h3>
      <p>Sabemos que su tiempo es dinero. Por eso ofrecemos:</p>
      <ul class="list-disc pl-5 space-y-2 mb-4">
        <li><strong>Digitalización:</strong> Portal del empleado y envío de facturas digitalizado.</li>
        <li><strong>Asesoramiento Proactivo:</strong> No espere a que le llamemos; nosotros le informamos de las novedades que le afectan.</li>
        <li><strong>Soporte Mercantil:</strong> Constitución de sociedades y pactos de socios.</li>
      </ul>
      <p>Estamos a un paso de su negocio. Confíe la gestión de sus obligaciones fiscales y laborales a expertos consultores.</p>
    `
  },
  {
    slug: 'asesoria-molins-de-rei',
    city: 'Molins de Rei',
    seoTitle: 'Asesoría en Molins de Rei | Gestoría Logística e Industrial',
    seoDescription: 'Asesoría fiscal y laboral en Molins de Rei y el Baix Llobregat. Especialistas en sector logístico y transporte. Gestión contable y nóminas.',
    heroTitle: 'Expertos en Gestión Empresarial en <span class="text-secondary">Molins de Rei</span>',
    introText: 'Conectamos el Vallès con el Baix Llobregat ofreciendo servicios de consultoría de alto valor añadido para empresas de Molins de Rei y alrededores.',
    localContent: `
      <p>Molins de Rei es un punto clave en la logística y distribución de Barcelona. En Creta Consultores tenemos experiencia asesorando a empresas de transporte y logística, entendiendo sus problemáticas específicas.</p>
      <h3 class="text-xl font-bold text-primary mt-4 mb-2">Especialistas en Sector Logístico y Servicios</h3>
      <p>Ayudamos a su empresa a ser más competitiva mediante:</p>
      <ul class="list-disc pl-5 space-y-2 mb-4">
        <li><strong>Gestión Laboral de Conductores:</strong> Dietas, desplazamientos y control horario. Ver <a href="#/servicios/laboral" class="text-secondary font-semibold hover:underline">Gestión de Nóminas</a>.</li>
        <li><strong>Control de Costes:</strong> Contabilidad analítica para conocer la rentabilidad por ruta o servicio. Ver <a href="#/servicios/contable" class="text-secondary font-semibold hover:underline">Contabilidad</a>.</li>
        <li><strong>Recuperación de IVA:</strong> Gestión eficiente de impuestos indirectos.</li>
      </ul>
      <p>Aunque estamos en Sant Cugat, la excelente conexión por la AP-7 nos convierte en sus vecinos de confianza para asuntos legales y fiscales complejos.</p>
    `
  },
  {
    slug: 'asesoria-granollers',
    city: 'Granollers',
    seoTitle: 'Asesoría en Granollers | Gestoría para Empresas del Vallès Oriental',
    seoDescription: 'Asesoría fiscal y laboral para empresas en Granollers y Vallès Oriental. Expertos en gestión de PYMES, impuestos y normativa laboral. Servicio profesional y cercano.',
    heroTitle: 'Gestoría y Consultoría Empresarial para <span class="text-secondary">Granollers</span>',
    introText: 'Expandimos nuestra excelencia técnica al Vallès Oriental. Ofrecemos a las empresas de Granollers un servicio de asesoría premium, combinando tecnología y trato personal.',
    localContent: `
      <p>Granollers y su área de influencia representan un pulmón comercial e industrial vital para Cataluña. Creta Consultores acerca a las empresas de la zona un modelo de asesoramiento integral que ha triunfado en el Vallès Occidental.</p>
      <h3 class="text-xl font-bold text-primary mt-4 mb-2">Conectando los dos Vallès</h3>
      <p>Nuestra infraestructura digital nos permite operar como su departamento de administración externo, sin importar la distancia física:</p>
      <ul class="list-disc pl-5 space-y-2 mb-4">
        <li><strong>Gestión Tributaria:</strong> Presentación de impuestos telemática y defensa ante la administración.</li>
        <li><strong>Asesoría Jurídica:</strong> Abogados expertos en contratación mercantil y reclamación de impagados.</li>
        <li><strong>Consultoría de Negocio:</strong> Análisis de rentabilidad y viabilidad para comercios y franquicias.</li>
      </ul>
      <p>Si busca dar un salto de calidad en la gestión de su negocio en Granollers, somos su partner ideal.</p>
    `
  },
  {
    slug: 'asesoria-barbera-del-valles',
    city: 'Barberà del Vallès',
    seoTitle: 'Asesoría en Barberà del Vallès | Fiscalidad Industrial y Laboral',
    seoDescription: 'Gestoría en Barberà del Vallès. Especialistas en empresas del Polígono Santiga y sector industrial. Asesoramiento fiscal, contable y laboral.',
    heroTitle: 'Soluciones Fiscales para la Industria de <span class="text-secondary">Barberà del Vallès</span>',
    introText: 'Conocemos a fondo las necesidades del tejido industrial de Barberà. Gestión eficaz para empresas del Polígono Santiga y Can Salvatella.',
    localContent: `
      <p>Barberà del Vallès es sinónimo de industria y logística. En Creta Consultores trabajamos codo con codo con empresas ubicadas en el <strong>Polígono Santiga</strong>, optimizando sus procesos administrativos.</p>
      <h3 class="text-xl font-bold text-primary mt-4 mb-2">Especialistas en Pymes Industriales</h3>
      <p>Aportamos valor donde la industria más lo necesita:</p>
      <ul class="list-disc pl-5 space-y-2 mb-4">
        <li><strong>Gestión Laboral Compleja:</strong> Turnos, horas extras, convenios del metal y química. Ver <a href="#/servicios/laboral" class="text-secondary font-semibold hover:underline">Asesoría Laboral</a>.</li>
        <li><strong>Fiscalidad del I+D:</strong> Aprovechamiento de deducciones por innovación en procesos productivos.</li>
        <li><strong>Import/Export:</strong> Asesoramiento en IVA intracomunitario y operaciones triangulares.</li>
      </ul>
      <p>Estamos a escasos minutos por la AP-7, ofreciendo la rapidez de respuesta que una industria en funcionamiento requiere.</p>
    `
  },
  {
    slug: 'abogados-herencias-sant-cugat',
    city: 'Herencias Sant Cugat',
    seoTitle: 'Abogados Herencias Sant Cugat | Testamentos y Sucesiones',
    seoDescription: 'Abogados especialistas en Herencias en Sant Cugat. Gestión integral de sucesiones, testamentos y liquidación de impuestos. Trato cercano y profesional.',
    heroTitle: 'Abogados Especialistas en <span class="text-secondary">Herencias</span> en Sant Cugat',
    introText: 'Gestionamos el proceso sucesorio con la máxima sensibilidad y rigor jurídico. Protegemos su patrimonio y garantizamos el cumplimiento fiscal más favorable.',
    localContent: `
      <p>La gestión de una herencia requiere no solo conocimientos jurídicos, sino también una alta capacidad de mediación familiar y planificación fiscal. En Creta Consultores somos referentes en derecho sucesorio en Sant Cugat del Vallès.</p>
      <h3 class="text-xl font-bold text-primary mt-4 mb-2">Gestión Integral de Sucesiones</h3>
      <p>Nos ocupamos de todo el proceso para su tranquilidad:</p>
      <ul class="list-disc pl-5 space-y-2 mb-4">
        <li><strong>Planificación en Vida:</strong> Redacción de testamentos y pactos sucesorios para evitar conflictos futuros.</li>
        <li><strong>Liquidación de Impuestos:</strong> Optimizamos el Impuesto de Sucesiones y la Plusvalía Municipal para minimizar el coste.</li>
        <li><strong>Adjudicación de Bienes:</strong> Tramitación notarial y registral de la herencia.</li>
      </ul>
      <p>Consulte con nuestros expertos en <a href="#/servicios/herencias" class="text-secondary font-semibold hover:underline">Herencias y Sucesiones</a> para una primera valoración de su caso.</p>
    `
  },
  {
    slug: 'ley-segunda-oportunidad-valles',
    city: 'Segunda Oportunidad',
    seoTitle: 'Ley Segunda Oportunidad Vallès | Cancelación de Deudas',
    seoDescription: 'Abogados Ley Segunda Oportunidad en Sant Cugat y Vallès. Cancele sus deudas legalmente y empiece de cero. Asesoramiento experto para particulares y autónomos.',
    heroTitle: 'Empiece de cero con la <span class="text-secondary">Ley de Segunda Oportunidad</span>',
    introText: 'Si las deudas le asfixian, la Ley de Segunda Oportunidad es la solución legal para cancelar sus obligaciones y recuperar su vida financiera.',
    localContent: `
      <p>La Ley de Segunda Oportunidad permite a particulares y autónomos de buena fe exonerar sus deudas pendientes (EPI) cuando no pueden hacer frente a ellas. En Creta Consultores analizamos su viabilidad de forma gratuita.</p>
      <h3 class="text-xl font-bold text-primary mt-4 mb-2">Recupere su tranquilidad financiera</h3>
      <p>Nuestro equipo de abogados concursalistas le acompañará en todo el proceso:</p>
      <ul class="list-disc pl-5 space-y-2 mb-4">
        <li><strong>Paralización de Embargos:</strong> Frenamos las ejecuciones desde el inicio del trámite.</li>
        <li><strong>Negociación con Acreedores:</strong> Intentamos acuerdos extrajudiciales favorables.</li>
        <li><strong>Exoneración del Pasivo (EPI):</strong> Solicitud judicial del perdón de las deudas.</li>
      </ul>
      <p>No deje pasar más tiempo. Visite nuestra área de <a href="#/servicios/concursal" class="text-secondary font-semibold hover:underline">Derecho Concursal</a> y recupere el control de su vida.</p>
    `
  },
  {
    slug: 'gestoria-startups-sant-cugat',
    city: 'Startups Sant Cugat',
    seoTitle: 'Gestoría para Startups en Sant Cugat | Asesoría Emprendedores',
    seoDescription: 'Asesoría para Startups y Emprendedores en Sant Cugat. Pactos de socios, rondas de financiación y fiscalidad tecnológica. Impulsamos tu proyecto.',
    heroTitle: 'El Partner Legal para tu <span class="text-secondary">Startup</span>',
    introText: 'Sant Cugat es un hub de innovación. En Creta Consultores hablamos tu idioma: métricas, rondas, phantom shares y escalabilidad.',
    localContent: `
      <p>Lanzar una startup requiere una base legal sólida desde el día uno. Evita errores costosos en la constitución o en la relación con los socios fundadores contando con asesoramiento especializado.</p>
      <h3 class="text-xl font-bold text-primary mt-4 mb-2">Servicios para Ecosistema Emprendedor</h3>
      <p>Acompañamos a tu proyecto desde la fase seed hasta el exit:</p>
      <ul class="list-disc pl-5 space-y-2 mb-4">
        <li><strong>Pactos de Socios:</strong> Regulamos la entrada y salida de socios, vesting y cláusulas de arrastre.</li>
        <li><strong>Fiscalidad Tech:</strong> Deducciones por I+D+i y Patent Box.</li>
        <li><strong>Financiación:</strong> Soporte legal en rondas de inversión (Term Sheets, Notas Convertibles).</li>
      </ul>
      <p>Somos Punto PAE y expertos en <a href="#/servicios/emprendedores" class="text-secondary font-semibold hover:underline">Emprendedores</a>. Ven a vernos al Edificio Fórum.</p>
    `
  }
];
