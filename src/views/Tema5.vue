<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Verificación y acciones correctivas


    .bloque-texto-g.bg-color-1.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema5/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El ciclo de la calidad no termina con la ejecución. Es necesario verificar que todo se hizo correctamente y, si no fue así, tomar medidas para corregirlo y prevenir que vuelva a ocurrir.

    separador
    
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.1 Inspección del proceso y del producto


    .row.align-items-center.mb-5
      .col-lg-auto.d-none.d-lg-flex
        img(src="@/assets/curso/tema5/img02.svg").mx-auto
      .col-lg
        p.mb-0 El ciclo de la calidad no termina con la ejecución. Es necesario verificar que todo se realizó correctamente y, si no fue así, tomar medidas para corregirlo y prevenir que vuelva a ocurrir.


    .row.justify-content-center.mb-5
      .col-lg-6.col-xl-5.mb-4.mb-lg-0
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema5/img03.svg' alt='Inspección del proceso')
          .tarjeta.bg-color-3.h-100
            .p-4
              h4 Inspección del proceso
              p.mb-2 Se verifica que las BPM se están aplicando en tiempo real. Por ejemplo, un supervisor recorre la planta y observa:
              p.mb-2 ¿Los operarios se lavan las manos correctamente?
              p.mb-2 ¿Las temperaturas de los equipos son las correctas?
              p.mb-2 ¿Las superficies están limpias?
              p.mb-0 ¿Se están siguiendo los POES?

      .col-lg-6.col-xl-5.mb-0.mb-lg-0
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema5/img04.svg' alt='Inspección del producto')
          .tarjeta.bg-color-3.h-100
            .p-4
              h4 Inspección del producto
              p.mb-0 Se toman muestras del producto terminado para verificar que cumple con sus especificaciones de calidad (peso, color, textura, sabor, empaque y etiquetado). Esta inspección puede ser visual o requerir análisis de laboratorio.

    p.mb-3 Los resultados de todas estas inspecciones deben quedar registrados.

    separador
    
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.2 Identificación y manejo de no conformidades

    .row.align-items-center.mb-5
      .col-lg-auto.d-none.d-lg-flex
        img(src="@/assets/curso/tema5/img05.svg").mx-auto
      .col-lg
        p.mb-2 Una no conformidad es el incumplimiento de un requisito especificado. Puede ser un producto que no cumple con su peso, una temperatura de refrigeración fuera de rango, un formato de registro mal diligenciado, o un operario que no usa su gorro.

        p.mb-0 Cuando se identifica una no conformidad, se debe:


    .row.mb-4.justify-content-center.align-items-center
      .col-lg-5.col-md-10.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema5/img06.png", data-aos="zoom-in")
      .col-lg-7.order-2.order-lg-2
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Identificarla y registrarla")
            p.mb-0 Se anota en el formato correspondiente (por ejemplo, en el formato de verificación de variables, o en un "formato de reporte de no conformidades").

          .row(numero="2" titulo="Aislar el producto no conforme")
            p.mb-0 Si se trata de un producto que no cumple, se debe identificar claramente (con una tarjeta roja, por ejemplo) y separar del resto para evitar su uso o despacho accidental.

          .row(numero="3" titulo="Decidir sobre el producto no conforme")
            p.mb-0 ¿Se puede reprocesar? ¿Se puede reclasificar para otro uso? ¿Debe ser desechado? Esta decisión la toma una persona autorizada.

          .row(numero="4" titulo="Analizar la causa")
            p.mb-0 ¿Por qué ocurrió la no conformidad? (Ej., falta de capacitación, un equipo descalibrado, una materia prima defectuosa).



    separador
    
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.3 Acciones preventivas, correctivas y de mejora continua

    p.mb-5 Una vez identificada la causa de la no conformidad, se deben tomar acciones para que no vuelva a ocurrir.



    .row.justify-content-center.mb-5
      .col-lg-6.col-xl-4.col-md-12.mb-4.mb-lg-4.mb-xl-0
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema5/img07.svg' alt='Acción correctiva')
          .tarjeta.bg-color-3.h-100
            .p-4
              p.mb-0 <b>Acción correctiva:</b> es la acción que se toma para eliminar la causa de una no conformidad detectada y prevenir que vuelva a ocurrir. Por ejemplo, si se detecta que la causa de una temperatura incorrecta fue un termostato averiado, la acción correctiva es reparar o cambiar el termostato.

      .col-lg-6.col-xl-4.col-md-12.mb-4.mb-lg-4.mb-xl-0
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema5/img08.svg' alt='Acción preventiva')
          .tarjeta.bg-color-3.h-100
            .p-4
              p.mb-0 <b>Acción preventiva:</b> es la acción que se toma para eliminar la causa de una posible no conformidad (antes de que ocurra). Por ejemplo, si se observa que un termostato empieza a fallar de manera intermitente, se programa su cambio antes de que falle por completo, evitando así un lote de producto mal horneado.

      .col-lg-6.col-xl-4.col-md-12.mb-0.mb-lg-0
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema5/img09.svg' alt='Mejora continua')
          .tarjeta.bg-color-3.h-100
            .p-4
              p.mb-0 <b>Mejora continua:</b> es un esfuerzo constante por mejorar los procesos, productos o servicios. Se basa en el ciclo PHVA (Planificar-Hacer-Verificar-Actuar). Las acciones correctivas y preventivas alimentan este ciclo. El objetivo no es solo corregir errores, sino ser cada vez mejores.





</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
