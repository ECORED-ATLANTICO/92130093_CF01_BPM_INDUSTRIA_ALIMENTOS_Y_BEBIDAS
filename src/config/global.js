export default {
  global: {
    Name: 'Fundamentación normativa y ejecución de BPM',
    Description:
      'Este componente formativo proporciona los fundamentos conceptuales, normativos y prácticos para implementar las Buenas Prácticas de Manufactura (BPM) en la industria de alimentos y bebidas. Se aborda la planeación de registros, la ejecución de procedimientos de saneamiento, el control de plagas, la higiene del personal, el manejo de materias primas y la verificación de procesos, asegurando el cumplimiento de la normativa sanitaria vigente para la obtención de productos inocuos y de calidad.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.png',
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.png',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Generalidades de las Buenas Prácticas De Manufactura (BPM)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'Definición y objetivos de las BPM en la industria alimentaria',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Importancia de la inocuidad como pilar fundamental',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Relación de las BPM con otros prerrequisitos',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Marco normativo y legal en Colombia',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Ley 9 de 1979: Código Sanitario Nacional',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Decreto 3075 de 1997 y Resolución 2674 de 2013: requisitos sanitarios para la fabricación de alimentos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Otras normas técnicas de referencia (NTC, ISO 22000)',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'Planeación del registro de información en programas de saneamiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo:
              'Concepto de programa de saneamiento: objetivos y estructura',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo:
              'Tipos de formatos y registros: características y criterios de diligenciamiento',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo:
              'Elaboración de un plan de muestreo: técnicas, tamaños y conservación de muestras',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Registro en el programa de limpieza y desinfección',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Registro en el programa de control de plagas y vectores',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Registro en el programa de abastecimiento de agua potable',
            hash: 't_3_6',
          },
          {
            numero: '3.7',
            titulo:
              'Registro en el programa de manejo de residuos sólidos y líquidos',
            hash: 't_3_7',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Ejecución de las buenas prácticas de manufactura',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Higiene y salud del personal manipulador',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Procedimientos de limpieza y desinfección',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo:
              'Manejo integrado de plagas y vectores: prevención, control y erradicación',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Condiciones de la infraestructura y el entorno',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo:
              'Recepción, almacenamiento y rotación de materias primas e insumos',
            hash: 't_4_5',
          },
          {
            numero: '4.6',
            titulo:
              'Verificación de variables técnicas del proceso (temperaturas, tiempos, concentraciones)',
            hash: 't_4_6',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Verificación y acciones correctivas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Inspección del proceso y del producto',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Identificación y manejo de no conformidades',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Acciones preventivas, correctivas y de mejora continua',
            hash: 't_5_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/92130093_CF01_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Abatimiento de temperatura',
      significado:
        'Proceso de reducción rápida de la temperatura de un alimento cocinado para evitar la proliferación bacteriana, pasando de 65 °C a 10 °C en menos de 2 horas.',
    },
    {
      termino: 'Acción correctiva',
      significado:
        'Conjunto de acciones tomadas para eliminar la causa de una no conformidad detectada y evitar que vuelva a ocurrir.',
    },
    {
      termino: 'Bactericida',
      significado:
        'Sustancia o agente físico que tiene la propiedad de destruir bacterias.',
    },
    {
      termino: 'BPM (Buenas Prácticas de Manufactura)',
      significado:
        'Conjunto de principios y procedimientos aplicados en el procesamiento de alimentos para garantizar su inocuidad y salubridad.',
    },
    {
      termino: 'Cadena de frío',
      significado:
        'Sistema de mantenimiento de la temperatura controlada (refrigeración o congelación) a lo largo de toda la cadena de distribución de un alimento perecedero, desde su producción hasta su venta al consumidor.',
    },
    {
      termino: 'Contaminación cruzada',
      significado:
        'Transferencia de microorganismos patógenos (bacterias, virus) de un alimento contaminado (generalmente crudo) a otro que no lo está.',
    },
    {
      termino: 'Desinfección',
      significado:
        'Proceso que elimina los microorganismos de las superficies, después de la limpieza, mediante el uso de agentes químicos o físicos.',
    },
    {
      termino: 'ETA (Enfermedades Transmitidas por Alimentos)',
      significado:
        'Enfermedades causadas por la ingestión de alimentos o agua contaminados con agentes infecciosos o toxinas.',
    },
    {
      termino: 'Ficha técnica',
      significado:
        'Documento del proveedor que especifica las características, composición, condiciones de manejo y vida útil de una materia prima o producto.',
    },
    {
      termino: 'Inocuidad',
      significado:
        'La condición de los alimentos que garantiza que no causarán daño al consumidor cuando sean preparados o ingeridos.',
    },
    {
      termino: 'Limpieza',
      significado:
        'Proceso que elimina la suciedad visible (restos de comida, grasa, polvo) de las superficies, mediante acción mecánica, agua y detergente.',
    },
    {
      termino: 'Manipulador de alimentos',
      significado:
        'Toda persona que interviene directamente en la elaboración, envasado, almacenamiento, transporte y expendio de alimentos.',
    },
    {
      termino: 'No conformidad',
      significado:
        'Incumplimiento de un requisito especificado en una norma, procedimiento o especificación técnica.',
    },
    {
      termino: 'PEPS (Primero en Entrar, Primero en Salir)',
      significado:
        'Método de rotación de inventarios que utiliza primero los productos que ingresaron primero (con fecha de vencimiento más cercana).',
    },
    {
      termino: 'Plaga',
      significado:
        'Población de animales (insectos, roedores, aves) que son indeseables para el ser humano por los daños que causan a los alimentos y la salud.',
    },
    {
      termino: 'POES (Procedimientos Operativos Estandarizados de Saneamiento)',
      significado:
        'Protocolos escritos que describen cómo llevar a cabo las tareas de limpieza y desinfección de manera estandarizada.',
    },
    {
      termino: 'Potabilidad',
      significado:
        'Cualidad del agua que la hace apta para el consumo humano, sin riesgo para la salud.',
    },
    {
      termino: 'PPM (Partes por millón)',
      significado:
        'Unidad de medida que indica la concentración de una sustancia en otra. Se utiliza comúnmente para medir la concentración de desinfectantes en el agua.',
    },
    {
      termino: 'Vector',
      significado:
        'Organismo vivo (como insectos o roedores) que puede transmitir enfermedades al transportar agentes infecciosos desde un foco de infección a un individuo susceptible.',
    },
    {
      termino: 'Zona de peligro (temperatura)',
      significado:
        'Rango de temperatura (entre 5 °C y 60 °C) en el que las bacterias patógenas pueden crecer y multiplicarse rápidamente en los alimentos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Congreso de la República de Colombia. (1979). <em>Ley 9 de 1979. Por la cual se dictan medidas sanitarias</em>. Diario Oficial No. 35.308.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=1177',
    },
    {
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación (ICONTEC). (2006). <em>NTC 5466. Sistema de análisis de peligros y puntos críticos de control (HACCP). Directrices para su aplicación</em>.',
    },
    {
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación (ICONTEC). (2009). <em>NTC 5842. Buenas prácticas de higiene para el control de Listeria monocytogenes en alimentos</em>.',
    },
    {
      referencia:
        'International Organization for Standardization. (2018). <em>ISO 22000:2018. Food safety management systems—Requirements for any organization in the food chain</em>.',
    },
    {
      referencia:
        'Ministerio de Salud. (1997). <em>Decreto 3075 de 1997. Por el cual se reglamenta parcialmente la Ley 9 de 1979 y se dictan otras disposiciones</em>. Departamento Administrativo de la Función Pública.',
      link: 'https://www1.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=3337',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2013). <em>Resolución 2674 de 2013. Por la cual se reglamenta el artículo 126 del Decreto-Ley 019 de 2012 y se dictan otras disposiciones</em>.',
      link: 'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/resolucion-2674-de-2013.pdf',
    },
    {
      referencia:
        'Organización de las Naciones Unidas para la Alimentación y la Agricultura. (2002). <em>Sistemas de calidad e inocuidad de los alimentos: Manual de capacitación sobre higiene de los alimentos y sobre el sistema de análisis de peligros y de puntos críticos de control (APPCC)</em>.',
      link: 'https://books.google.com/books?id=Rlrs8mdFTmwC',
    },
    {
      referencia:
        'Organización Mundial de la Salud. (2020). <em>Cinco claves para la inocuidad de los alimentos</em>.',
      link: 'https://www.who.int/es/news-room/fact-sheets/detail/food-safety',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje (SENA). (2026). <em>Manual de buenas prácticas de manufactura</em>.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Miguel De Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Mario Morales Cabrera',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jair Enrique Coll Gallardo',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Álvaro Guillermo Araújo Angarita',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
