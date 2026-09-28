<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.col-md-8.mb-0.mb-lg-0.order-2.order-lg-1
        figure
          img(src="@/assets/curso/intro/img01.png", data-aos="zoom-in")
      .col-lg-8.order-1.order-lg-2.mb-4.mb-lg-0
        p.mb-0(data-aos="fade-right") En la actualidad, la industria de alimentos y bebidas enfrenta el desafío constante de ofrecer productos que no solo sean apetecibles, sino, sobre todo, seguros para el consumo humano. La confianza del consumidor y la sostenibilidad de las empresas en el mercado dependen, en gran medida, de su capacidad para garantizar la inocuidad de sus productos. En este contexto, las Buenas Prácticas de Manufactura (BPM) se consolidan como el sistema básico y fundamental para el aseguramiento de la calidad, constituyendo el pilar sobre el cual se desarrollan sistemas más avanzados, como el Análisis de Peligros y Puntos Críticos de Control (HACCP).

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-0.mb-lg-0.order-2.order-lg-2
        figure
          img(src="@/assets/curso/intro/img02.png", data-aos="zoom-in")
      .col-lg-9.order-1.order-lg-1.mb-4.mb-lg-0
        .bg-color-1.p-4.br-15.mb-3
          p.mb-0 Este componente formativo, titulado "Fundamentación normativa y ejecución de BPM", está diseñado para que el aprendiz desarrolle las competencias necesarias que le permitan aplicar y verificar las Buenas Prácticas de Manufactura en entornos productivos reales. A lo largo de este componente se abordarán los fundamentos conceptuales de las buenas prácticas de manufactura, su importancia como base de la inocuidad alimentaria y su relación con otros programas prerrequisito. Asimismo, se estudiará el marco normativo colombiano que regula la producción de alimentos, junto con los aspectos prácticos relacionados con la planeación de registros en los programas de saneamiento y la ejecución de procedimientos de higiene, limpieza, desinfección, control de plagas, manejo de materias primas y verificación de procesos.

        p.mb-0(data-aos="fade-right") El contenido se desarrolla de manera progresiva. Inicialmente, se presentan las generalidades de las buenas prácticas de manufactura y el contexto normativo que sustenta su aplicación; posteriormente, se profundiza en la planeación de los registros asociados a los programas de saneamiento y, finalmente, se abordan la ejecución de las buenas prácticas de manufactura, la verificación de los procesos y las acciones de mejora continua. Al finalizar este componente, el aprendiz estará en capacidad de contribuir activamente a la producción de alimentos inocuos, fortaleciendo la cultura de la calidad en su entorno laboral y favoreciendo la protección de la salud de los consumidores.

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
                texto="Fundamentación normativa y ejecución de BPM en la industria de alimentos y bebidas."
                tiempo
                :audio="require_src('@/assets/curso/audio/1.mp3')"
              )
        .col-lg-5.col-md-8.order-lg-1.order-1.mb-4.mb-lg-0
          figure
            img(src="@/assets/curso/tema4/img19.png", data-aos="zoom-in")

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
