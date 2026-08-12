<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Ejecución de las Buenas Prácticas de Manufactura


    .bg-full-width.bg-fondo-3.px-5.py-4
      img(src="@/assets/curso/tema4/img01.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-11(data-aos="fade-right")
        p.banner-text Una vez que se ha planeado qué y cómo se va a registrar, el siguiente paso, y el más importante, es la ejecución. La teoría y los formatos no sirven de nada si en el día a día no se aplican las BPM. Este capítulo se enfoca en la práctica: en las acciones concretas que debe realizar el personal en la planta de producción.

    separador
    
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 Higiene y salud del personal manipulador

    .bloque-texto-g.bg-color-1.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema4/img02.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El personal es la principal fuente de contaminación de los alimentos, pero también es la primera barrera de control. Por eso, su higiene y salud son aspectos críticos. Para ejecutar correctamente las BPM, el personal debe cumplir con las siguientes prácticas:


    .row.mb-5.justify-content-center.align-items-center
      .col-lg-12
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg-color-c1")
          div(titulo="Estado de salud")
            .row.align-items-center.justify-content-center
              .col-lg-7.col-md-12.order-2.mb-0.mb-lg-0
                figure
                  img(src="@/assets/curso/tema4/img03.png", data-aos="zoom-in").mx-auto
              .col-lg-5.order-1.mb-4.mb-lg-0
                p.mb-0 Ninguna persona que padezca una enfermedad transmisible, tenga heridas infectadas, infecciones cutáneas o diarrea puede trabajar en la manipulación de alimentos. Debe reportar su condición a su supervisor.

          div(titulo="Baño diario")
            .row.align-items-center.justify-content-center
              .col-lg-7.col-md-12.order-2.mb-0.mb-lg-0
                figure
                  img(src="@/assets/curso/tema4/img04.png", data-aos="zoom-in").mx-auto
              .col-lg-5.order-1.mb-4.mb-lg-0
                p.mb-0 Es indispensable que el manipulador de alimentos llegue limpio al trabajo. La higiene corporal diaria es la base para evitar la contaminación de los alimentos por microorganismos presentes en la piel.

          div(titulo="Uniforme completo y limpio")
            .row.align-items-center.justify-content-center
              .col-lg-7.col-md-12.order-2.mb-0.mb-lg-0
                figure
                  img(src="@/assets/curso/tema4/img05.png", data-aos="zoom-in").mx-auto
              .col-lg-5.order-1.mb-4.mb-lg-0
                p.mb-0 El uniforme debe incluir: chaqueta o delantal (claro para detectar suciedad), pantalón, gorro que cubra totalmente el cabello, calzado antideslizante y de seguridad. Si se usa barba o bigote, se debe usar tapabocas.

          div(titulo="Uñas")
            .row.align-items-center.justify-content-center
              .col-lg-7.col-md-12.order-2.mb-0.mb-lg-0
                figure
                  img(src="@/assets/curso/tema4/img06.png", data-aos="zoom-in").mx-auto
              .col-lg-5.order-1.mb-4.mb-lg-0
                p.mb-0 Las uñas deben estar cortas, limpias y sin esmalte. Las uñas largas o con esmalte pueden retener suciedad, bacterias y fragmentos que contaminen los alimentos.

          div(titulo="Joyas y accesorios")
            .row.align-items-center.justify-content-center
              .col-lg-7.col-md-12.order-2.mb-0.mb-lg-0
                figure
                  img(src="@/assets/curso/tema4/img07.png", data-aos="zoom-in").mx-auto
              .col-lg-5.order-1.mb-4.mb-lg-0
                p.mb-0 Está prohibido el uso de anillos, aretes, relojes, cadenas o cualquier otro adorno, ya que son focos de acumulación de suciedad y pueden caer en los alimentos, convirtiéndose en un peligro físico.



    .bloque-texto-g.bg-color-2.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema4/img08.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las prácticas de higiene personal constituyen el primer paso para prevenir la contaminación de los alimentos; sin embargo, no son la única medida de control. El lavado frecuente y correcto de las manos es una de las principales acciones para prevenir la contaminación cruzada, ya que, durante la manipulación de alimentos, utensilios, productos de limpieza o residuos, las manos pueden convertirse en un vehículo de contaminación. Por esta razón, el lavado de manos debe realizarse siempre que se presenten las siguientes situaciones:


    .row.justify-content-center.mb-5
      .col-lg-6.col-xl-5.mb-4.mb-lg-4.mb-xl-4
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema4/img09.svg' alt='Al ingresar al área de producción')
          .tarjeta.bg-color-3
            .p-4
              h4 Al ingresar al área de producción
              p.mb-0 Es el primer filtro sanitario. Antes de tocar cualquier superficie, equipo o alimento, debe realizarse el lavado de manos.

      .col-lg-6.col-xl-5.mb-4.mb-lg-4.mb-xl-4
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema4/img10.svg' alt='Después de ir al baño')
          .tarjeta.bg-color-3
            .p-4
              h4 Después de ir al baño
              p.mb-0 Este es un momento obligatorio e innegociable. Es la principal vía de contaminación fecal-oral.

      .col-lg-6.col-xl-5.mb-4.mb-lg-4.mb-xl-4
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema4/img11.svg' alt='Después de manipular basura')
          .tarjeta.bg-color-3
            .p-4
              h4 Después de manipular basura
              p.mb-0 Los residuos son focos de contaminación. Tocarlos requiere un lavado inmediato al regresar a las áreas limpias.

      .col-lg-6.col-xl-5.mb-4.mb-lg-4.mb-xl-4
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema4/img12.svg' alt='Después de estornudar o toser')
          .tarjeta.bg-color-3
            .p-4
              h4 Después de estornudar o toser
              p.mb-0 Aunque sea en el codo, la mucosidad puede transferirse. El lavado de manos es necesario para evitar cualquier riesgo de contaminación.

      .col-lg-6.col-xl-5.mb-4.mb-lg-4.mb-xl-4
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema4/img13.svg' alt='Después de manipular alimentos crudos')
          .tarjeta.bg-color-3
            .p-4
              h4 Después de manipular alimentos crudos
              p.mb-0 Antes de tocar alimentos cocidos. Para evitar la contaminación cruzada, este lavado es crítico e ineludible.

      .col-lg-6.col-xl-5.mb-4.mb-lg-4.mb-xl-0
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema4/img14.svg' alt='Cada vez que se cambie de actividad')
          .tarjeta.bg-color-3.h-100
            .p-4
              h4 Cada vez que se cambie de actividad
              p.mb-0 Esta es la regla de oro del manipulador. Siempre que se interrumpa una tarea y se inicie otra, el lavado de manos es obligatorio.

    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/img-subtitulo.svg")
          h3.titulo-con-imagen__texto Comportamiento en la planta:

    .row.mb-4.justify-content-center.align-items-center
      .col-lg-5.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema4/img15.png", data-aos="zoom-in")
      .col-lg-5.order-2.order-lg-2
        .row.justify-content-center.mb-5
          .col-lg-12.col-xl-12.mb-4.mb-lg-4.mb-xl-4
            .tarjeta-avatar-b.h-100
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema4/img16.svg' alt='Prohibido comer o beber')
              .tarjeta.bg-color-2.h-100
                .p-4
                  p.mb-0 No está permitido comer, beber, fumar o masticar chicle en las áreas de producción.

          .col-lg-12.col-xl-12.mb-4.mb-lg-4.mb-xl-4
            .tarjeta-avatar-b.h-100
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema4/img17.svg' alt='No estornudar sobre alimentos')
              .tarjeta.bg-color-2.h-100
                .p-4
                  p.mb-0 No se debe estornudar o toser sobre los alimentos.

          .col-lg-12.col-xl-12.mb-0
            .tarjeta-avatar-b.h-100
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema4/img18.svg' alt='Mantener el área limpia')
              .tarjeta.bg-color-2.h-100
                .p-4
                  p.mb-0 Se debe mantener el área de trabajo ordenada y limpia durante la producción.

  
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-12
        .bg-color-7.p-4.br-15
          p.mb-0 A continuación, escuche el siguiente podcast, en el que se amplían los contenidos relacionados con la higiene del personal manipulador y la importancia del lavado de manos como una de las principales medidas para prevenir la contaminación de los alimentos.



    .container
      .row.justify-content-center.align-items-center.mb-3
        .col-lg-7.order-lg-2.order-2
          .row.bg-color-3.align-items-center.justify-content-center.br-15.p-0
            .col-md-8.col-lg-5.mb-3.mb-lg-0.order-2.order-md-2.order-lg-1.p-0
              figure
                img(src="@/assets/curso/tema4/img39.png", data-aos="fade-right")
            .col-lg-7.order-1.order-md-1.order-lg-2.p-4.p-lg-3
              p(data-aos="fade-left").mb-4 A continuación, se invita a ir al siguiente podcast: 
              TarjetaAudio.color-acento-contenido.bg-color-white.mb-3(
                texto="Operaciones seguras de cargue, descargue y manejo de equipos en la logística"
                tiempo
                :audio="require_src('@/assets/curso/audio/2.mp3')"
              )
        .col-lg-5.col-md-8.order-lg-1.order-1.mb-4.mb-lg-0
          figure
            img(src="@/assets/curso/tema4/img19.png", data-aos="zoom-in")


    separador
    
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Procedimientos de limpieza y desinfección



    .bloque-texto-g.bg-color-1.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema4/img20.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los POES son los Procedimientos Operativos Estandarizados de Saneamiento. Corresponden a documentos que describen, paso a paso, cómo realizar la limpieza y desinfección de una superficie, un equipo o un área específica. La correcta ejecución de estos procedimientos es vital.

    p.mb-4 Un POES bien redactado debe incluir:

    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.col-md-12.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema4/img21.svg", data-aos="zoom-in")
      .col-lg-8.order-2.order-lg-2
        p.mb-2.mb-lg-0 <b>Objetivo:</b> ¿Qué se va a limpiar y desinfectar?
        p.mb-2.mb-lg-0 <b>Responsable:</b> ¿Quién lo hace?
        p.mb-2.mb-lg-0 <b>Frecuencia:</b> ¿Cada cuánto se hace? (ej. diario, cada 4 horas, al finalizar la producción).
        p.mb-2.mb-lg-0 <b>Elementos de protección personal (EPP):</b> ¿Qué debe usar el operario? (guantes de nitrilo, delantal impermeable, gafas).
        p.mb-2.mb-lg-0 <b>Insumos y materiales:</b> ¿Qué productos y utensilios se necesitan? (detergente, desinfectante, esponjas, cepillos, baldes, paños de un solo uso).
        p.mb-0 <b>Procedimiento paso a paso:</b> descripción detallada y secuencial de las actividades.


    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/img-subtitulo.svg")
          h3.titulo-con-imagen__texto A. Técnicas de limpieza: prelavado, lavado, enjuague.
    
    p.mb-4 La limpieza es el proceso que elimina la suciedad visible (restos de comida, grasa, polvo). Es un paso fundamental antes de la desinfección.

    
    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-6.col-md-12.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema4/img22.png", alt="Prelavado")
          .crd_hover_txt--body
            h4.mb-3.text-center Prelavado
            p.mb-0 Consiste en retirar los residuos sólidos más grandes. Se puede hacer raspando con una espátula, cepillando en seco o con un chorro suave de agua. El objetivo es reducir la carga de suciedad para que el lavado sea más efectivo.

      .col-xl-4.col-lg-6.col-md-12.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema4/img23.png", alt="Lavado")
          .crd_hover_txt--body
            h4.mb-3.text-center Lavado
            p.mb-0 Se aplica una solución de agua caliente (45 °C - 50 °C) con un detergente desengrasante. La acción mecánica (frotar con cepillo o esponja) es crucial para desprender la grasa y la suciedad adherida.

      .col-xl-4.col-lg-6.col-md-12.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema4/img24.png", alt="Enjuague")
          .crd_hover_txt--body
            h4.mb-3.text-center Enjuague
            p.mb-0 Se elimina completamente la suciedad y los residuos de detergente con abundante agua potable. Este paso es esencial, ya que los residuos de detergente pueden interferir con la acción del desinfectante.



    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/img-subtitulo.svg")
          h3.titulo-con-imagen__texto B. Técnicas de desinfección: física y química.
    
    p.mb-5 La desinfección es el proceso que elimina los microorganismos (bacterias, virus, hongos) que no se pudieron eliminar con la limpieza. Solo se aplica sobre superficies previamente limpias.


    .row.mb-5.justify-content-center.align-items-center
      .col-lg-12
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg-color-c1")
          div(titulo="Desinfección física")
            .row.align-items-center.justify-content-center
              .col-lg-5.col-md-12.order-2.mb-0.mb-lg-0
                figure
                  img(src="@/assets/curso/tema4/img25.png", data-aos="zoom-in").mx-auto
              .col-lg-7.order-1.mb-4.mb-lg-0
                p.mb-0 Calor (agua caliente o vapor): es el método más efectivo y seguro. Se pueden sumergir utensilios pequeños en agua a 80 °C durante 2 minutos. También se usan lavavajillas industriales que alcanzan altas temperaturas.

          div(titulo="Desinfección química")
            .row.align-items-center.justify-content-center
              .col-lg-5.col-md-12.order-2.mb-0.mb-lg-0
                figure
                  img(src="@/assets/curso/tema4/img26.png", data-aos="zoom-in").mx-auto
              .col-lg-7.order-1.mb-3.mb-lg-0
                p.mb-1 Se utiliza una solución de un desinfectante químico aprobado para uso en alimentos. Los principales son: 
                p.mb-1 Cloro (Hipoclorito de sodio): el más común y económico. Se usa a 100-200 ppm en superficies en contacto con alimentos. Se aplica y deja actuar 5-10 minutos. Puede requerir enjuague posterior.
                p.mb-1 Amonios cuaternarios: dejan una película residual y no requieren enjuague en superficies no críticas. Efectivos contra un amplio espectro de microorganismos.
                p.mb-0 Yodóforos: soluciones de yodo, efectivas, pero pueden manchar algunas superficies.


    .row.align-items-center.mb-5
      .col-lg-auto.d-none.d-lg-flex
        img(src="@/assets/curso/tema4/img27.svg").mx-auto
      .col-lg
        p.mb-0 La elección del desinfectante y su concentración depende del tipo de superficie y del uso que se le dará. Siempre se deben seguir las instrucciones del fabricante.


    .row.mb-5.justify-content-center.align-items-center
      .col-lg-12.col-xl-10.col-md-12.mb-0.mb-lg-0
        .titulo-sexto.color-acento-contenido.mb-3
          h5 
            b Tabla 4.
          span Concentraciones comunes de desinfectantes
        .tabla-a.color-acento-contenido.tb-custom.mb-0
          table
            caption <span style="font-weight: normal">Nota. SENA, (2026).</span>
            thead
              tr
                th Desinfectante
                th Uso en superficies en contacto con alimentos
                th Tiempo de contacto
            tbody
              tr
                td Hipoclorito de sodio (Cloro)
                td 100 - 200 ppm
                td 5 - 10 minutos
              tr
                td Amonios cuaternarios
                td 200 - 400 ppm (seguir etiqueta)
                td 10 minutos
              tr
                td Yodóforos
                td 12,5 - 25 ppm
                td 2 - 5 minutos


    separador
    
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.3 Manejo integrado de plagas y vectores: prevención, control y erradicación


    .row.align-items-center.mb-4
      .col-lg-auto.d-none.d-lg-flex
        img(src="@/assets/curso/tema4/img28.svg").mx-auto
      .col-lg
        p.mb-0 El Manejo Integrado de Plagas (MIP) es una estrategia que utiliza diferentes métodos para prevenir y controlar plagas de manera efectiva y con el menor riesgo posible para las personas y el ambiente. No se basa solo en fumigar; se enfoca en la prevención.


    p.mb-5 Principios del MIP:

    .row.mb-4.justify-content-center.align-items-center
      .col-lg-4.col-md-10.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema4/img29.png", data-aos="zoom-in")
      .col-lg-8.order-2.order-lg-2
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Inspección y monitoreo")
            p.mb-0 Es el punto de partida. Se deben realizar inspecciones periódicas para identificar qué plagas hay, en qué cantidad y dónde se esconden. El monitoreo se hace con trampas (pegajosas para insectos, de cebo para roedores) que se revisan regularmente.

          .row(numero="2" titulo="Identificación")
            p.mb-0 Es crucial identificar correctamente la plaga para saber cómo combatirla de la mejor manera.

          .row(numero="3" titulo="Prevención (Medidas pasivas)")
            p.mb-3 Es el pilar más importante y sostenible. Consiste en eliminar las condiciones que atraen y permiten la supervivencia de las plagas. Esto incluye:
            ul.lista-ul.mb-0
              li
                i.lista-ul__vineta(style="color: #8AB064")
                | Sellamiento de grietas y huecos en paredes, pisos y techos.
              li
                i.lista-ul__vineta(style="color: #8AB064")
                | Colocación de mallas en ventanas y sistemas de ventilación.
              li
                i.lista-ul__vineta(style="color: #8AB064")
                | Mantenimiento del orden y la limpieza: no dejar residuos de alimentos expuestos, limpiar derrames inmediatamente.
              li
                i.lista-ul__vineta(style="color: #8AB064")
                | Manejo adecuado de residuos: tapas bien cerradas, retiro frecuente de basuras.
              li
                i.lista-ul__vineta(style="color: #8AB064")
                | Mantenimiento de las áreas externas: poda de césped y jardines, eliminación de agua estancada.

          .row(numero="4" titulo="Control (Medidas activas)")
            p.mb-3 Cuando, a pesar de la prevención, aparece una plaga, se deben aplicar medidas de control:
            ul.lista-ul.mb-0
              li
                i.lista-ul__vineta(style="color: #8AB064")
                | Control físico: uso de trampas de luz, trampas pegajosas, trampas de golpe para roedores.
              li
                i.lista-ul__vineta(style="color: #8AB064")
                | Control químico: aplicación de plaguicidas (insecticidas, raticidas). Esta medida debe ser ejecutada únicamente por personal capacitado y autorizado (empresas de control de plagas certificadas). El personal de la planta nunca debe manipular estos productos.

          .row(numero="5" titulo="Evaluación")
            p.mb-0 Después de aplicar las medidas de control, se debe evaluar su efectividad a través del monitoreo continuo.

    separador
    
    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.4 Condiciones de la infraestructura y el entorno


    .row.align-items-center.mb-4
      .col-lg-auto.d-none.d-lg-flex
        img(src="@/assets/curso/tema4/img30.svg").mx-auto
      .col-lg
        p.mb-0 La ejecución de las BPM también implica velar por que el entorno físico de trabajo se mantenga en condiciones óptimas. Esto incluye:


    .row.justify-content-center.mb-4
      .col-lg-6.col-xl-5.mb-4.mb-lg-4.mb-xl-4
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema4/img31.svg' alt='Pisos, paredes y techos')
          .tarjeta.bg-color-3
            .p-4
              h4 Pisos, paredes y techos
              p.mb-0 Deben estar construidos con materiales lisos, impermeables, no porosos y de fácil limpieza. Se deben revisar periódicamente para detectar y reportar grietas, desprendimientos de pintura o acumulación de humedad.

      .col-lg-6.col-xl-5.mb-4.mb-lg-4.mb-xl-4
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema4/img32.svg' alt='Iluminación y ventilación')
          .tarjeta.bg-color-3
            .p-4
              h4 Iluminación y ventilación
              p.mb-0 Las áreas deben tener buena iluminación para facilitar la limpieza y la detección de suciedad. La ventilación debe ser adecuada para evitar la condensación, el calor excesivo y la acumulación de olores.

      .col-lg-6.col-xl-5.mb-4.mb-lg-4.mb-xl-4
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema4/img33.svg' alt='Puertas y ventanas')
          .tarjeta.bg-color-3
            .p-4
              h4 Puertas y ventanas
              p.mb-0 Deben tener superficies lisas y de fácil limpieza. Las ventanas que se abren al exterior deben tener malla antipájaros e insectos.

      .col-lg-6.col-xl-5.mb-4.mb-lg-4.mb-xl-0
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema4/img34.svg' alt='Drenajes y rejillas')
          .tarjeta.bg-color-3.h-100
            .p-4
              h4 Drenajes y rejillas
              p.mb-0 Deben mantenerse limpios y en buen estado, con sus tapas bien colocadas para evitar el ingreso de plagas desde el alcantarillado.

    separador
    
    #t_4_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.5 Recepción, almacenamiento y rotación de materias primas e insumos
  

    .row.align-items-center.mb-5
      .col-lg-auto.d-none.d-lg-flex
        img(src="@/assets/curso/tema4/img35.svg").mx-auto
      .col-lg
        p.mb-0 La calidad del producto final depende directamente de la calidad de las materias primas que se utilizan. Por eso, su manejo es un punto crítico.


    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-4
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg-color-3 bg-color-nuevo")
          div(titulo="Recepción")
            p.mb-3 Al llegar un proveedor, se debe inspeccionar la materia prima. Se verifica:
            ul.lista-ul.mb-0
              li
                i.lista-ul__vineta(style="color: #B37900")
                | Condiciones del vehículo de transporte: limpieza y temperatura.
              li
                i.lista-ul__vineta(style="color: #B37900")
                | Empaques: que estén íntegros, sin roturas, humedad o signos de contaminación.
              li
                i.lista-ul__vineta(style="color: #B37900")
                | Fecha de vencimiento: el producto debe tener una vida útil suficiente.
              li
                i.lista-ul__vineta(style="color: #B37900")
                | Características organolépticas: olor, color y textura acordes a lo esperado.
              li
                i.lista-ul__vineta(style="color: #B37900")
                | Temperatura: si es un producto perecedero (lácteos, carnes), se mide la temperatura interior para verificar que la cadena de frío no se haya roto.
              li
                i.lista-ul__vineta(style="color: #B37900")
                | Toda esta información se registra en un formato de "recepción de materias primas".

          div(titulo="Almacenamiento")
            p.mb-3 Cada tipo de materia prima tiene requisitos específicos:
            ul.lista-ul.mb-0
              li
                i.lista-ul__vineta(style="color: #B37900")
                | Productos secos (harinas, azúcares, granos): se almacenan en un lugar fresco, seco y ventilado, sobre estibas separadas del piso (mínimo 15 cm) y de la pared (mínimo 50 cm) para permitir la limpieza e inspección.
              li
                i.lista-ul__vineta(style="color: #B37900")
                | Productos refrigerados (lácteos, huevos, algunas frutas): se almacenan en cámaras de refrigeración entre 2 °C y 5 °C.
              li
                i.lista-ul__vineta(style="color: #B37900")
                | Productos congelados (carnes, verduras congeladas): se almacenan en congeladores a -18 °C o menos.

          div(titulo="Rotación de inventarios (PEPS - Primero en Entrar, Primero en Salir)")
            p.mb-0 El método PEPS (Primero en Entrar, Primero en Salir) es fundamental para evitar el vencimiento de productos. Consiste en colocar los productos nuevos (con fecha de vencimiento más lejana) detrás de los más antiguos (con fecha de vencimiento más cercana), para que estos últimos sean los primeros en usarse.

      .col-lg-4.col-md-8
        img(src="@/assets/curso/tema4/img36.png", data-aos="zoom-in")


    separador
    
    #t_4_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.6 Verificación de variables técnicas del proceso (temperaturas, tiempos, concentraciones)

    .row.align-items-center.mb-5
      .col-lg-auto.d-none.d-lg-flex
        img(src="@/assets/curso/tema4/img37.svg").mx-auto
      .col-lg
        p.mb-0 Durante la producción, es necesario verificar que las variables críticas del proceso se están cumpliendo. Estas variables están definidas en las recetas estándar y en los manuales de calidad.


    .row.mb-5.mb-lg-4.justify-content-center.align-items-center
      .col-lg-5.col-md-10.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema4/img38.png", data-aos="zoom-in")
      .col-lg-7.order-2.order-lg-2
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Temperaturas")
            p.mb-0 Se deben medir y registrar las temperaturas de cocción (por ejemplo, "el centro del pollo asado debe alcanzar 74 °C"), las temperaturas de los equipos de refrigeración y congelación, y las temperaturas de mantenimiento en caliente (por ejemplo, "las salsas calientes deben mantenerse por encima de 65 °C").

          .row(numero="2" titulo="Tiempos")
            p.mb-0 Se deben controlar los tiempos de procesos como batido, cocción, enfriamiento y desinfección (tiempo de contacto del desinfectante).

          .row(numero="3" titulo="Concentraciones")
            p.mb-0 En la preparación de soluciones desinfectantes o en la estandarización de productos (ej. jarabes, salmueras), se deben verificar las concentraciones con los instrumentos adecuados (ej. refractómetro, clorímetro).

    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-12
        .bg-color-3.p-4.br-15
          p.mb-0.text-center La verificación de estas variables debe realizarse durante la operación y los resultados deben registrarse en los formatos correspondientes.

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-12.col-md-12.mb-0.mb-lg-0
        .titulo-sexto.color-acento-contenido.mb-3
          h5 
            b Tabla 5.
          span Ejemplo de verificación de variables técnicas en un proceso de horneado
        .tabla-a.color-acento-contenido.tb-custom.mb-0
          table
            caption <span style="font-weight: normal">Nota. SENA, (2026).</span>
            thead
              tr
                th Variable
                th Estándar
                th Hora
                th Medición
                th Cumple (Sí/No)
                th Observación / Acción
            tbody
              tr
                td Temperatura del horno
                td 180 °C
                td 10:00 AM
                td 182 °C
                td Sí
                td -
              tr
                td Tiempo de horneado
                td 25 min
                td 10:25 AM
                td -
                td Sí
                td Se retiró a los 25 min
              tr
                td Temperatura interna del producto
                td 95 °C
                td 10:30 AM
                td 94 °C
                td Sí
                td Dentro del rango aceptable
              tr
                td Temperatura del horno
                td 180 °C
                td 11:00 AM
                td 170 °C
                td No
                td Se llamó a mantenimiento para revisión del termostato


</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
