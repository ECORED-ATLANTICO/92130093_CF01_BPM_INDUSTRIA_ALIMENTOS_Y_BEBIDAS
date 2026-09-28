<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Generalidades de las Buenas Prácticas de Manufactura (BPM)

    

    .bg-full-width.bg-fondo-3.px-5.py-4
      img(src="@/assets/curso/tema1/img01.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-11(data-aos="fade-right")
        p.banner-text Para comprender los fundamentos de la calidad y la inocuidad alimentaria, es necesario conocer qué son las Buenas Prácticas de Manufactura (BPM) y por qué representan la base fundamental para cualquier empresa que produzca alimentos seguros. Las BPM constituyen el conjunto de principios y procedimientos que se aplican en el procesamiento de alimentos para garantizar que estos se elaboren en condiciones sanitarias adecuadas, disminuyendo así los riesgos inherentes a la producción.


    .row.mb-4.justify-content-center.align-items-center
      .col-lg-6.col-md-12.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/img02.png", data-aos="zoom-in")
      .col-lg-6
        p.mb-0 Las BPM abarcan todos los aspectos de la producción, desde el diseño y las condiciones de la planta, pasando por la recepción de materias primas, el almacenamiento, la preparación, el envasado, hasta llegar al personal que manipula los alimentos. No son una opción, sino una obligación para garantizar la salud pública.


    separador
    
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Definición y objetivos de las BPM en la industria alimentaria

    .bloque-texto-g.bg-color-2.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema1/img03.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las Buenas Prácticas de Manufactura (BPM) son una herramienta básica para la obtención de productos seguros para el consumo humano, que se centralizan en el manejo higiénico de los alimentos. Son un conjunto de principios y recomendaciones de carácter obligatorio que aseguran la inocuidad y la calidad de los alimentos en todas las etapas de la cadena productiva.


    .row.mb-5.justify-content-center.align-items-center
      .col-lg-12
        .bg-color-3.p-4.br-15
          p.mb-0.text-center Los objetivos principales de la implementación de las BPM en una empresa de alimentos y bebidas son:
    

    .bg-full-width.bg-fondo-7.px-5.py-5
      SlyderA(tipo="b").bg-color-white.p-4.tarjeta
        .tarjeta.p-4.h-100
          .row.align-items-center.mb-0
            .col-12.col-lg-6.mb-4.mb-lg-0
              h4 Garantizar la inocuidad
              p.mb-0 Es el principal objetivo de las Buenas Prácticas de Manufactura. Consiste en prevenir la contaminación de los alimentos durante todas las etapas del proceso productivo, garantizando que sean aptos para el consumo humano y no representen un riesgo para la salud.
            .col-12.col-lg-6
              figure
                img(src="@/assets/curso/tema1/img05.png", alt="Garantizar la inocuidad").img-fluid

        .tarjeta.p-4.h-100
          .row.align-items-center.mb-0
            .col-12.col-lg-6.mb-4.mb-lg-0
              h4 Asegurar la calidad
              p.mb-0 Las BPM permiten obtener productos con características uniformes y acordes con los estándares de calidad establecidos por la organización, favoreciendo la satisfacción del cliente y el mejoramiento continuo de los procesos.
            .col-12.col-lg-6
              figure
                img(src="@/assets/curso/tema1/img06.png", alt="Asegurar la calidad").img-fluid

        .tarjeta.p-4.h-100
          .row.align-items-center.mb-0
            .col-12.col-lg-6.mb-4.mb-lg-0
              h4 Cumplir con la normativa sanitaria
              p.mb-0 La implementación de las BPM garantiza el cumplimiento de la legislación sanitaria vigente, asegurando que los procesos de producción se desarrollen conforme a los requisitos establecidos por las autoridades competentes.
            .col-12.col-lg-6
              figure
                img(src="@/assets/curso/tema1/img07.png", alt="Cumplir con la normativa sanitaria").img-fluid

        .tarjeta.p-4.h-100
          .row.align-items-center.mb-0
            .col-12.col-lg-6.mb-4.mb-lg-0
              h4 Fortalecer la cultura de calidad
              p.mb-0 Las BPM promueven hábitos de trabajo responsables y fortalecen el compromiso del personal con la higiene, la inocuidad y la mejora continua, favoreciendo una cultura organizacional orientada a la calidad.
            .col-12.col-lg-6
              figure
                img(src="@/assets/curso/tema1/img08.png", alt="Fortalecer la cultura de calidad").img-fluid

        .tarjeta.p-4.h-100
          .row.align-items-center.mb-0
            .col-12.col-lg-6.mb-4.mb-lg-0
              h4 Generar confianza en el consumidor
              p.mb-0 La producción de alimentos inocuos y de calidad fortalece la confianza de los consumidores, mejora la reputación de la organización y contribuye a la permanencia de sus productos en el mercado.
            .col-12.col-lg-6
              figure
                img(src="@/assets/curso/tema1/img09.png", alt="Generar confianza en el consumidor").img-fluid

    separador
    
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Importancia de la inocuidad como pilar fundamental

    .bloque-texto-g.bg-color-2.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema1/img10.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La inocuidad de los alimentos es la garantía de que un alimento no causará daño al consumidor cuando se prepare o ingiera de acuerdo con el uso al que se destina. Es, por tanto, un derecho fundamental de los consumidores y una responsabilidad ineludible de todos los actores de la cadena alimentaria, desde el productor primario hasta el consumidor final.



    p.mb-4 La falta de inocuidad tiene graves consecuencias:

    .row.justify-content-center.mb-5
      .col-lg-6.col-xl-4.mb-4.mb-lg-4.mb-xl-0
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/img11.svg' alt='')
          .tarjeta.bg-color-6.h-100
            .p-4
              p <strong>Para la salud pública:</strong> las Enfermedades Transmitidas por Alimentos (ETA) son una causa importante de morbilidad y mortalidad en todo el mundo. Pueden variar desde leves malestares estomacales hasta enfermedades crónicas graves e incluso la muerte.

      .col-lg-6.col-xl-4.mb-4.mb-lg-4.mb-xl-0
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/img12.svg' alt='')
          .tarjeta.bg-color-6.h-100
            .p-4
              p <strong>Para la economía:</strong> los brotes de ETA pueden generar costos enormes en atención médica, pérdida de productividad, demandas legales, retiro de productos del mercado y el cierre de empresas.

      .col-lg-6.col-xl-4.mb-0.mb-lg-0.mb-xl-0
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/img13.svg' alt='')
          .tarjeta.bg-color-6.h-100
            .p-4
              p <strong>Para la sociedad:</strong> generan desconfianza en el sistema alimentario y pueden afectar el comercio nacional e internacional.

    separador
    
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Relación de las BPM con otros prerrequisitos

    .row.align-items-center.mb-5
      .col-lg-auto.d-none.d-lg-flex
        img(src="@/assets/curso/tema1/img14.svg").mx-auto
      .col-lg
        p.mb-0 Las Buenas Prácticas de Manufactura (BPM) constituyen el cimiento de un sistema integral de gestión de la inocuidad y no un sistema aislado. Representan el primer eslabón y el más importante, sobre el cual se construyen otros programas prerrequisitos y sistemas de calidad.


    .row.justify-content-center.mb-5
      .col-lg-6.col-md-12.mb-4.mb-lg-0
        .bg-color-2.p-4.h-100.br-15
          .row.align-items-center.mb-0.h-100
            .col-12.col-lg-auto.mb-3.mb-lg-0
              img(src="@/assets/curso/tema1/img15.svg", style="max-width: 150px;").mx-auto
            .col-lg
              h4 POES (Procedimientos Operativos Estandarizados de Saneamiento): 
              p.mb-0 Mientras que las BPM son un conjunto amplio de principios, los POES son procedimientos específicos y detallados que describen cómo llevar a cabo las tareas de limpieza y desinfección. Unas buenas BPM exigen que existan POES bien definidos y que se apliquen correctamente.

      .col-lg-6.col-md-12.mb-4.mb-lg-0
        .bg-color-2.p-4.h-100.br-15
          .row.align-items-center.mb-0.h-100
            .col-12.col-lg-auto.mb-3.mb-lg-0
              img(src="@/assets/curso/tema1/img16.svg", style="max-width: 150px;").mx-auto
            .col-lg
              h4 HACCP (Análisis de Peligros y Puntos Críticos de Control):
              p.mb-0 Este es un sistema preventivo de mayor complejidad que identifica peligros específicos y establece controles en puntos críticos para garantizar la inocuidad. Para que un sistema HACCP funcione, es absolutamente necesario que los prerrequisitos, como las BPM y los POES, estén sólidamente implementados. Sin una base sólida de BPM, el sistema HACCP se vuelve inestable e ineficaz.

    h4.text-bold.mb-3 Jerarquía de los sistemas de calidad e inocuidad alimentaria.
    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-6.col-md-12.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/img17.png", alt="HACCP")
          .crd_hover_txt--body
            h4.mb-3.text-center Nivel superior
            h4 Sistema de Análisis de Peligros y Puntos Críticos de Control (HACCP)
            p.mb-0 Sistema preventivo orientado al control de peligros específicos en los puntos críticos del proceso, con el fin de garantizar la inocuidad de los alimentos.

      .col-xl-4.col-lg-6.col-md-12.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/img18.png", alt="POES")
          .crd_hover_txt--body
            h4.mb-3.text-center Nivel intermedio
            h4 Procedimientos Operativos Estandarizados de Saneamiento (POES)
            p.mb-0 Comprenden los procedimientos específicos y documentados de limpieza y desinfección que permiten mantener las condiciones higiénico-sanitarias durante el proceso de producción de alimentos.

      .col-xl-4.col-lg-6.col-md-12.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/img19.png", alt="BPM")
          .crd_hover_txt--body
            h4.mb-3.text-center Nivel base
            h4 Buenas Prácticas de Manufactura (BPM)
            p.mb-0 Establecen las condiciones higiénicas generales que deben cumplir la planta, el personal y los procesos de producción. Constituyen el fundamento obligatorio para la implementación de los sistemas de calidad e inocuidad alimentaria.


    .row.mb-5.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-0.mb-lg-0.order-2.order-lg-1
        figure
          img(src="@/assets/curso/tema1/img20.png", data-aos="zoom-in")
      .col-lg-9.order-1.order-lg-2.mb-4.mb-lg-0
        p.mb-4(data-aos="fade-right") Las Buenas Prácticas de Manufactura (BPM) constituyen la base sobre la cual se implementan los Procedimientos Operativos Estandarizados de Saneamiento (POES) y el sistema de Análisis de Peligros y Puntos Críticos de Control (HACCP). Esta relación permite fortalecer la gestión de la calidad e inocuidad alimentaria mediante la implementación progresiva de medidas preventivas y de control.

        .cajon.bg-color-c1.p-4.mb-0
          p.mb-0 Dentro de este sistema, las Buenas Prácticas de Manufactura se sustentan en cinco pilares fundamentales, los cuales representan las áreas críticas que toda empresa de alimentos debe gestionar para garantizar la inocuidad de sus productos. Estos pilares abarcan la infraestructura de la planta, los equipos y utensilios, el personal manipulador, las condiciones de saneamiento y el control de las materias primas. El cumplimiento de cada uno de estos pilares contribuye al funcionamiento integral del sistema y a la producción de alimentos seguros. A continuación, se presentan los cinco pilares de las Buenas Prácticas de Manufactura.


    .row.mb-5.justify-content-center.align-items-center
      .col-lg-12
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg-color-c1")
          div(titulo="Instalaciones físicas")
            .row.align-items-center.justify-content-center
              .col-lg-5.col-md-10.order-2.mb-0.mb-lg-0
                figure
                  img(src="@/assets/curso/tema1/img21.png", data-aos="zoom-in").mx-auto
              .col-lg-7.order-1.mb-3.mb-lg-0
                p.mb-3 Las instalaciones físicas deben diseñarse y mantenerse en condiciones que faciliten la limpieza, la desinfección y la prevención de la contaminación durante la producción de alimentos.
                p.mb-2 <b>Aspectos clave:</b>
                ul.lista-ul
                  li 
                    i.lista-ul__vineta(style="color: #8AB064")
                    | Pisos, paredes y techos lisos e impermeables. 
                  li 
                    i.lista-ul__vineta(style="color: #8AB064")
                    | Iluminación y ventilación adecuadas. 
                  li 
                    i.lista-ul__vineta(style="color: #8AB064")
                    | Flujo del proceso sin contaminación cruzada. 

          div(titulo="Equipos y utensilios")
            .row.align-items-center.justify-content-center
              .col-lg-5.col-md-10.order-2.mb-0.mb-lg-0
                figure
                  img(src="@/assets/curso/tema1/img22.png", data-aos="zoom-in").mx-auto
              .col-lg-7.order-1.mb-3.mb-lg-0
                p.mb-3 Los equipos y utensilios deben estar fabricados con materiales apropiados y mantenerse en condiciones que garanticen la inocuidad de los alimentos y faciliten las operaciones de limpieza y desinfección.
                p.mb-2 <b>Aspectos clave:</b>
                ul.lista-ul
                  li 
                    i.lista-ul__vineta(style="color: #8AB064")
                    | Materiales lisos, resistentes y no tóxicos. 
                  li 
                    i.lista-ul__vineta(style="color: #8AB064")
                    | Fácil limpieza y desinfección. 
                  li 
                    i.lista-ul__vineta(style="color: #8AB064")
                    | Mantenimiento preventivo programado. 

          div(titulo="Higiene del personal")
            .row.align-items-center.justify-content-center
              .col-lg-5.col-md-10.order-2.mb-0.mb-lg-0
                figure
                  img(src="@/assets/curso/tema1/img23.png", data-aos="zoom-in").mx-auto
              .col-lg-7.order-1.mb-3.mb-lg-0
                p.mb-3 El personal manipulador debe adoptar hábitos de higiene que prevengan la contaminación de los alimentos durante todas las etapas del proceso productivo.
                p.mb-2 <b>Aspectos clave:</b>
                ul.lista-ul
                  li 
                    i.lista-ul__vineta(style="color: #8AB064")
                    | Uniforme completo y limpio. 
                  li 
                    i.lista-ul__vineta(style="color: #8AB064")
                    | Uñas cortas, sin esmalte ni joyas. 
                  li 
                    i.lista-ul__vineta(style="color: #8AB064")
                    | Lavado frecuente y correcto de manos. 

          div(titulo="Saneamiento básico")
            .row.align-items-center.justify-content-center
              .col-lg-5.col-md-10.order-2.mb-0.mb-lg-0
                figure
                  img(src="@/assets/curso/tema1/img24.png", data-aos="zoom-in").mx-auto
              .col-lg-7.order-1.mb-3.mb-lg-0
                p.mb-3 El saneamiento básico comprende las actividades orientadas a mantener condiciones sanitarias adecuadas en las instalaciones y procesos de producción.
                p.mb-2 <b>Aspectos clave:</b>
                ul.lista-ul
                  li 
                    i.lista-ul__vineta(style="color: #8AB064")
                    | POES documentados. 
                  li 
                    i.lista-ul__vineta(style="color: #8AB064")
                    | Control integrado de plagas. 
                  li 
                    i.lista-ul__vineta(style="color: #8AB064")
                    | Manejo de residuos y agua potable. 

          div(titulo="Materias primas")
            .row.align-items-center.justify-content-center
              .col-lg-5.col-md-10.order-2.mb-0.mb-lg-0
                figure
                  img(src="@/assets/curso/tema1/img25.png", data-aos="zoom-in").mx-auto
              .col-lg-7.order-1.mb-3.mb-lg-0
                p.mb-3 Las materias primas deben recibirse, almacenarse y controlarse adecuadamente para garantizar su calidad e inocuidad antes de incorporarlas al proceso productivo.
                p.mb-2 <b>Aspectos clave:</b>
                ul.lista-ul
                  li 
                    i.lista-ul__vineta(style="color: #8AB064")
                    | Recepción con inspección. 
                  li 
                    i.lista-ul__vineta(style="color: #8AB064")
                    | Almacenamiento por tipo (secos y fríos). 
                  li 
                    i.lista-ul__vineta(style="color: #8AB064")
                    | Rotación PEPS obligatoria. 


</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
}
</script>

<style lang="sass"></style>
