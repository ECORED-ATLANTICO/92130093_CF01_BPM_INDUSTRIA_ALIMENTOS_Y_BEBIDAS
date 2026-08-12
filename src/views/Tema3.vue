<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Planeación del registro de información en programas de saneamiento


    .bg-full-width.bg-fondo-3.px-5.py-4
      img(src="@/assets/curso/tema3/img01.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-11(data-aos="fade-right")
        p.banner-text "Lo que no se registra, no se hace". Esta frase es un lema fundamental en la industria alimentaria. La planeación del registro de información es tan importante como la ejecución misma de las tareas. Los registros son la evidencia objetiva del cumplimiento y la herramienta principal para verificar, rastrear y mejorar los procesos. 

    separador

    .bg-full-width.bg-fondo-1
    
      #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 3.1 Concepto de programa de saneamiento: objetivos y estructura


    
      .row.mb-5.justify-content-center.align-items-center
        .col-lg-6.col-md-12.mb-4.mb-lg-0.order-1.order-lg-1
          figure
            img(src="@/assets/curso/tema3/img02.png", data-aos="zoom-in")
        .col-lg-6.order-2.order-lg-2
          p.mb-3 Un Programa de Saneamiento es un documento formal, planificado y sistemático que reúne todas las actividades y procedimientos necesarios para mantener las condiciones higiénicas y sanitarias en un establecimiento de alimentos. Su objetivo principal es prevenir la contaminación de los alimentos, protegiendo así la salud del consumidor.
          p.mb-0 Todo programa de saneamiento debe estar documentado y debe incluir, al menos, cuatro subprogramas o componentes esenciales:
      
    .row.justify-content-center.mb-5
      .col-xl-3.col-lg-6.col-md-12.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema3/img03.png", alt="Programa de limpieza y desinfección")
          .crd_hover_txt--body.bg-color-2.pd-1-2
            h4.mb-3.text-center Programa de limpieza y desinfección
            p.mb-0 Establece los procedimientos estandarizados de limpieza y desinfección de instalaciones, equipos y utensilios. Incluye fichas técnicas, concentraciones, frecuencias y responsables de cada actividad. Su eficacia se verifica mediante inspección visual, pruebas de ATP o análisis microbiológicos.

      .col-xl-3.col-lg-6.col-md-12.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema3/img04.png", alt="Programa de control de plagas y vectores")
          .crd_hover_txt--body.bg-color-2.pd-1-2
            h4.mb-3.text-center Programa de control de plagas y vectores
            p.mb-0 Comprende las actividades de manejo integrado de plagas (MIP), incluyendo monitoreo, medidas preventivas, controles físicos y químicos realizados por empresas autorizadas y el registro de las intervenciones.

      .col-xl-3.col-lg-6.col-md-12.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema3/img05.png", alt="Programa de abastecimiento de agua potable")
          .crd_hover_txt--body.bg-color-2.pd-1-2
            h4.mb-3.text-center Programa de abastecimiento de agua potable
            p.mb-0 Garantiza que el agua utilizada durante la producción cumpla con los requisitos de potabilidad mediante controles periódicos, mantenimiento de tanques y análisis fisicoquímicos y microbiológicos.

      .col-xl-3.col-lg-6.col-md-12.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema3/img06.png", alt="Programa de manejo de residuos sólidos y líquidos")
          .crd_hover_txt--body.bg-color-2.pd-1-2
            h4.mb-3.text-center Programa de manejo de residuos sólidos y líquidos
            p.mb-0 Establece los procedimientos para la separación en la fuente, el almacenamiento temporal, la recolección y la disposición final de los residuos generados durante el proceso productivo.



      separador
    
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Tipos de formatos y registros: características y criterios de diligenciamiento

    .container
      .row.align-items-center.bg-color-9.br-15.p-3.mb-5
        .col-lg-auto.d-none.d-lg-flex
          img(src="@/assets/curso/tema3/img07.svg").mx-auto
        .col-lg
          p.mb-0 Para planear el registro, es necesario diseñar los formatos adecuados. Un formato es el documento prediseñado que será diligenciado. Un registro es el formato ya diligenciado, que contiene datos y evidencia de una actividad realizada.


    p.mb-5 Características de un buen formato:
  
    .row.mb-4.justify-content-center.align-items-center
      .col-lg-6.col-md-12.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema3/img09.png", data-aos="zoom-in")
      .col-lg-6.order-2.order-lg-2
        p.mb-3 <b>Claro y sencillo:</b> debe ser fácil de entender para quien lo diligencie.
        p.mb-3 <b>Identificable:</b> debe tener un código, nombre y fecha de versión únicos.
        p.mb-3 <b>Estructurado:</b> debe tener espacios definidos para la información requerida (fecha, hora, actividad, responsable, observaciones, etc.).
        p.mb-0 <b>Con campos para verificación:</b> debe permitir dejar constancia de que se realizó una actividad y que se cumplió con el parámetro esperado (ej. Casillas de verificación, espacios para anotar una medición).

    p.mb-5 Criterios para el correcto diligenciamiento de registros:

    .row.justify-content-center.mb-3
      .col-lg-8.mb-0
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg-color-3 bg-color-nuevo")
          div(titulo="Uso de lápiz")
            p.mb-3 Un registro diligenciado con lápiz, con información borrosa, manchada y poco clara. Con el tiempo, la información puede perderse o alterarse.
            p.mb-0 <b>Acción correcta:</b> utilizar siempre bolígrafo de tinta azul o negra. La tinta es permanente e indeleble, lo que garantiza que la información perdure en el tiempo y no pueda ser alterada.

          div(titulo="Uso de corrector")
            p.mb-3 Un formato en el que se utilizó corrector líquido (blanquero) para tapar un error. Esto genera desconfianza y puede interpretarse como un intento de ocultar información.
            p.mb-0 <b>Acción correcta:</b> tachar el error con una línea horizontal (dejando visible el dato incorrecto), escribir el dato correcto al lado o encima, y firmar o colocar las iniciales de quien realiza la corrección.

          div(titulo="Registro fuera de tiempo")
            p.mb-3 Un formato diligenciado al final del día, con información genérica como "todo bien" o "todo en orden", sin horarios específicos ni detalles de las actividades realizadas.
            p.mb-0 <b>Acción correcta:</b> diligenciar el registro en el momento exacto en que se realiza la actividad. Ejemplo: "10:30 a. m. - Inicio de pasteurización, temperatura: 72 °C; 11:00 a. m. - Verificación, temperatura: 72 °C."

          div(titulo="Información incompleta")
            p.mb-3 Un formato con espacios en blanco para datos fundamentales, como la fecha, la hora, el nombre del responsable o la firma de verificación.
            p.mb-0 <b>Acción correcta:</b> asegurarse de que todo registro incluya y diligencie los campos obligatorios: fecha completa, hora exacta, nombre completo y legible, firma del responsable y, cuando aplique, visto bueno del supervisor.

      .col-lg-4.col-md-8.mb-0
        img(src="@/assets/curso/tema3/img10.png", data-aos="zoom-in")

    separador
    
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Elaboración de un plan de muestreo: técnicas, tamaños y conservación de muestras

    .row.align-items-center.mb-5
      .col-lg-auto.d-none.d-lg-flex
        img(src="@/assets/curso/tema3/img11.svg").mx-auto
      .col-lg
        p.mb-0 El muestreo es una actividad clave para verificar la calidad y la inocuidad de los insumos, los productos en proceso y los productos terminados. Planear el muestreo implica definir un "plan de muestreo", que es un protocolo que establece:

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-6.col-md-10.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema3/img12.png", data-aos="zoom-in")
      .col-lg-6.col-md-12.order-2.order-lg-2
        .bg-fondo-5.p-4
          SlyderA(tipo="b").bg-color-white.p-3.tarjeta
            .tarjeta.p-4.h-100
              h4 Objetivo del muestreo
              p.mb-0 ¿Para qué se toma la muestra? (Ej. análisis microbiológico de rutina, verificación de un lote sospechoso, liberación de un producto terminado).

            .tarjeta.p-4.h-100
              h4 Tipo de muestra
              p.mb-0 ¿Se toman muestras al azar, representativas de un lote, o muestras dirigidas a puntos específicos?

            .tarjeta.p-4.h-100
              h4 Tamaño de la muestra
              p.mb-0 ¿Cuántas unidades o qué cantidad de producto se debe tomar para que la muestra sea representativa del lote? Esto puede basarse en normas técnicas (como las NTC) o en el criterio del experto. Por ejemplo, en un lote de 100 cajas de galletas, se podrían muestrear 5 cajas al azar.

            .tarjeta.p-4.h-100
              h4 Técnica de muestreo
              p.mb-0 ¿Cómo se toma la muestra para evitar contaminarla? Se deben usar utensilios y recipientes estériles, y seguir procedimientos asépticos.

            .tarjeta.p-4.h-100
              h4 Conservación y transporte de la muestra
              p.mb-0 ¿Cómo se preserva la muestra hasta que llegue al laboratorio para que sus condiciones no se alteren? Para análisis microbiológicos, las muestras deben refrigerarse (entre 2 °C y 8 °C) y transportarse en neveras portátiles. Para análisis fisicoquímicos, pueden requerir congelación o simplemente temperatura ambiente, dependiendo del análisis.

            .tarjeta.p-4.h-100
              h4 Rotulado de la muestra
              p.mb-0 Toda muestra debe estar claramente identificada con una etiqueta que incluya, como mínimo: nombre del producto, fecha de muestreo, hora, lote (si aplica), tipo de análisis solicitado y nombre de quien tomó la muestra.

            .tarjeta.p-4.h-100
              h4 Registro de la información
              p.mb-0 Se debe diligenciar un formato de "Acta de Toma de Muestras" donde se consigne toda la información anterior.



    .row.mb-5.justify-content-center.align-items-center
      .col-lg-12.col-xl-8.col-md-12.mb-0.mb-lg-0
        .titulo-sexto.color-acento-contenido.mb-3
          h5 
            b Tabla 2.
          span Ejemplo de plan de muestreo para la recepción de leche cruda
        .tabla-a.color-acento-contenido.tb-custom.mb-0
          table
            caption <span style="font-weight: normal">Nota. SENA, (2026).</span>
            thead
              tr
                th Variable
                th Especificación
            tbody
              tr
                td Objetivo
                td Verificar la calidad microbiológica y fisicoquímica de la leche cruda al ingreso a planta.
              tr
                td Tipo de muestra
                td Muestra compuesta representativa del carro tanque.
              tr
                td Tamaño de la muestra
                td 1 litro de leche, tomado de diferentes puntos del tanque después de la agitación.
              tr
                td Técnica de muestreo
                td Usar un muestreador de acero inoxidable previamente esterilizado. Verter la leche en un frasco de vidrio estéril de boca ancha.
              tr
                td Conservación
                td Refrigerar inmediatamente a 4 °C en una nevera portátil con geles refrigerantes.
              tr
                td Rotulado
                td Etiqueta con: "leche cruda", fecha, hora, proveedor, placa del vehículo, "análisis: recuento de mesófilos, grasa, proteína", "tomado por: [nombre]"

    separador
    
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.4 Registro en el programa de limpieza y desinfección

    .row.align-items-center.mb-5
      .col-lg-auto.d-none.d-lg-flex
        img(src="@/assets/curso/tema3/img14.svg").mx-auto
      .col-lg
        p.mb-0 Este programa debe contar con registros que permitan hacer seguimiento a cada una de las actividades. Planear estos registros implica diseñar formatos para:

    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-6.col-md-12.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema3/img15.png", alt="Registro diario de limpieza")
          .crd_hover_txt--body.pd-1-2
            h4.mb-3.text-center Registro diario de limpieza y desinfección
            p.mb-0 Un formato en el que, por cada área o equipo, el operario anote la fecha, la hora, la actividad realizada (ej. "limpieza de mesón de acero inoxidable"), los productos utilizados (nombre y concentración) y su firma como constancia.

      .col-xl-4.col-lg-6.col-md-12.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema3/img16.png", alt="Preparación de soluciones desinfectantes")
          .crd_hover_txt--body.pd-1-3
            h4.mb-3.text-center Registro de preparación de soluciones desinfectantes
            p.mb-0 Un formato para llevar el control de la preparación de las soluciones, verificando que se respeten las concentraciones indicadas (ej. "para preparar 10 litros de solución de hipoclorito a 200 ppm, se agregaron X ml de hipoclorito al 5 %").

      .col-xl-4.col-lg-6.col-md-12.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema3/img17.png", alt="Verificación de limpieza y desinfección")
          .crd_hover_txt--body.pd-1-3
            h4.mb-3.text-center Registro de verificación de la limpieza y desinfección
            p.mb-0 Un formato que puede ser diligenciado por un supervisor, mediante la toma de muestras con hisopos en superficies para verificar la eficacia de la limpieza (pruebas de ATP o recuento microbiológico) o simplemente mediante inspección visual.

    separador
    
    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.5 Registro en el programa de control de plagas y vectores

    .row.align-items-center.mb-5
      .col-lg-auto.d-none.d-lg-flex
        img(src="@/assets/curso/tema3/img23.svg").mx-auto
      .col-lg
        p.mb-0 La planeación de registros para este programa es vital para demostrar que se está llevando a cabo un control efectivo. Los registros típicos incluyen:

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-8.mb-0
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg-color-3 bg-color-nuevo")
          div(titulo="Registro de inspección interna")
            p.mb-0 Un formato para que el personal de la planta realice inspecciones periódicas (semanales o quincenales) y reporte cualquier evidencia de plagas (roedores, insectos, aves) o condiciones que puedan atraerlas (ej. huecos en paredes, residuos acumulados, agua estancada).

          div(titulo="Registro de las actividades de la empresa externa de control de plagas")
            p.mb-3 La empresa contratada debe dejar un registro detallado de cada visita, que incluya:
            ul.lista-ul
              li 
                i.lista-ul__vineta(style="color: #B37900")
                | Fecha y hora de la visita.
              li 
                i.lista-ul__vineta(style="color: #B37900")
                | Nombre del técnico responsable.
              li 
                i.lista-ul__vineta(style="color: #B37900")
                | Productos utilizados: nombre comercial, ingrediente activo, concentración, dosis aplicada y número de lote.
              li 
                i.lista-ul__vineta(style="color: #B37900")
                | Equipos utilizados durante la intervención.
              li 
                i.lista-ul__vineta(style="color: #B37900")
                | Ubicación de los cebos y trampas inspeccionados y/o reabastecidos.
              li 
                i.lista-ul__vineta(style="color: #B37900")
                | Hallazgos, por ejemplo: "se encontró un roedor muerto en el cebo #5", "se observó actividad baja de moscas".
              li 
                i.lista-ul__vineta(style="color: #B37900")
                | Recomendaciones para la planta, por ejemplo: "sellar grieta en pared del área de almacenamiento".
              li 
                i.lista-ul__vineta(style="color: #B37900")
                | Firma del técnico y del responsable de la planta que recibe y verifica el servicio.

      .col-lg-4.col-md-8.mb-0
        img(src="@/assets/curso/tema3/img24.png", data-aos="zoom-in")


    .row.mb-5.justify-content-center.align-items-center
      .col-lg-12.col-md-12.mb-0.mb-lg-0
        .titulo-sexto.color-acento-contenido.mb-3
          h5 
            b Tabla 3.
          span Ejemplo de formato de inspección interna de plagas
        .tabla-a.color-acento-contenido.tb-custom.mb-0
          table
            caption <span style="font-weight: normal">Nota. SENA, (2026).</span>
            thead
              tr
                th Área
                th Fecha
                th Inspeccionado por
                th Evidencia de plagas (Sí/No)
                th Tipo de plaga / Hallazgo
                th Condiciones de riesgo
                th Acción tomada / Observación
            tbody
              tr
                td Bodega de secos
                td 15/03/2026
                td Juan Pérez
                td Sí
                td Roedores
                td Heces pequeñas en esquina, cerca de estiba de harina.
                td Se reportó a la empresa de control de plagas para revisión de trampas. Se limpió el área.
              tr
                td Área de producción
                td 15/03/2026
                td Juan Pérez
                td No
                td -
                td Rejilla de piso levantada.
                td Se solicitó a mantenimiento su reparación para evitar el ingreso de roedores.

    separador
    
    #t_3_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.6 Registro en el programa de abastecimiento de agua potable

    
    .row.align-items-center.mb-5
      .col-lg-auto.d-none.d-lg-flex
        img(src="@/assets/curso/tema3/img18.svg").mx-auto
      .col-lg
        p.mb-0 El agua es un ingrediente fundamental y un medio de limpieza esencial. Los registros de este programa deben demostrar que el agua utilizada es potable y apta para el uso previsto. Se deben planear formatos para:



    .row.justify-content-center.mb-5
      .col-lg-8
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg-color-3 bg-color-nuevo")
          div(titulo="Registro de cloro residual")
            p.mb-0 En plantas con tanques de almacenamiento propios, se debe medir y registrar diariamente el nivel de cloro residual libre en el agua al inicio de la jornada y, preferiblemente, en varios puntos de la planta. El valor debe estar dentro del rango establecido por la norma (generalmente entre 0,3 y 2,0 ppm).

          div(titulo="Registro de mantenimiento de tanques de agua")
            p.mb-0 Se debe llevar un control de las actividades de limpieza y desinfección periódicas de los tanques de almacenamiento (al menos cada seis meses), registrando la fecha, el procedimiento realizado, los productos utilizados y el responsable.

          div(titulo="Registro de resultados de análisis microbiológicos y fisicoquímicos")
            p.mb-0 La norma exige realizar análisis periódicos del agua para confirmar su potabilidad. Los resultados de estos análisis, realizados por un laboratorio acreditado, deben archivarse y registrarse para su control y seguimiento.

      .col-lg-4.col-md-8
        img(src="@/assets/curso/tema3/img19.png", data-aos="zoom-in")

    separador
    
    #t_3_7.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.7 Registro en el programa de manejo de residuos sólidos y líquidos

    .row.align-items-center.mb-5
      .col-lg-auto.d-none.d-lg-flex
        img(src="@/assets/curso/tema3/img20.svg").mx-auto
      .col-lg
        p.mb-0 Un manejo inadecuado de residuos atrae plagas y contamina el ambiente. Los registros ayudan a controlar este aspecto. Se deben planear formatos para:

    .row.justify-content-center.mb-5
      .col-lg-6.col-md-12.mb-4.mb-lg-0
        .bg-color-2.p-4.h-100.br-15
          .row.align-items-center.mb-0.h-100
            .col-12.col-lg-auto.mb-3.mb-lg-0
              img(src="@/assets/curso/tema3/img21.svg", style="max-width: 150px;").mx-auto
            .col-lg
              h4 Registro de generación y disposición de residuos: 
              p.mb-0 Un formato sencillo donde se lleve un control diario o semanal de la cantidad de residuos generados (orgánicos, reciclables, peligrosos) y se registre su disposición final (ej. "entregado al servicio de recolección municipal", "entregado a gestor externo autorizado para aceite usado").

      .col-lg-6.col-md-12.mb-4.mb-lg-0
        .bg-color-2.p-4.h-100.br-15
          .row.align-items-center.mb-0.h-100
            .col-12.col-lg-auto.mb-3.mb-lg-0
              img(src="@/assets/curso/tema3/img22.svg", style="max-width: 150px;").mx-auto
            .col-lg
              h4 Registro de limpieza de áreas de almacenamiento de residuos:
              p.mb-0 Se debe registrar la limpieza y desinfección periódica de los contenedores y del cuarto de basuras para evitar malos olores y proliferación de plagas.


</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
