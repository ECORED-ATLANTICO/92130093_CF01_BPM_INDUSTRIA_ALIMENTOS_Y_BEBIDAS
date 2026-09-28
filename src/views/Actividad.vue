<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Fundamentos y ejecución de Buenas Prácticas de Manufactura (BPM) en la industria de alimentos y bebidas',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> evaluar la comprensión de los conceptos fundamentales sobre la normativa sanitaria, los programas de saneamiento y la ejecución de las Buenas Prácticas de Manufactura en la industria de alimentos y bebidas.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      mensaje_aprobado:
        '¡Excelente! ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
      preguntas: [
        {
          id: 1,
          texto: 'Las Buenas Prácticas de Manufactura (BPM) son:',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un sistema de calidad de implementación voluntaria.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Un conjunto de principios de carácter obligatorio para garantizar la inocuidad de los alimentos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Una normativa que aplica solo para empresas exportadoras.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un manual exclusivo para la limpieza de cocinas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Las BPM son un conjunto de principios y procedimientos de obligatorio cumplimiento, establecidos por la normativa sanitaria, para asegurar que los alimentos se produzcan en condiciones higiénicas y sean seguros para el consumo.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto: '¿Cuál es el objetivo principal de la inocuidad alimentaria?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mejorar el sabor y la apariencia del producto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Aumentar la vida útil del producto en el estante.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Garantizar que el alimento no cause daño al consumidor.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Reducir los costos de producción.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Muy bien. La inocuidad es la garantía de que un alimento no causará daño al consumidor cuando se ingiera, enfocándose en la ausencia de peligros biológicos, químicos y físicos.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            '¿Qué son los POES (Procedimientos Operativos Estandarizados de Saneamiento)?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Son los horarios de trabajo del personal de limpieza.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Son los manuales de recetas de cocina.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Son los contratos con las empresas de control de plagas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Son procedimientos que describen paso a paso las tareas de limpieza y desinfección.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Excelente. Los POES son documentos detallados que especifican cómo, cuándo y quién debe realizar las actividades de limpieza y desinfección en las áreas de producción.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            'Para garantizar la inocuidad de los alimentos, ¿cuál es la relación correcta entre las BPM y el sistema HACCP?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Las BPM son la base fundamental sobre la que se construye un sistema HACCP.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Las BPM se implementan solo después de tener un sistema HACCP.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El HACCP reemplaza a las BPM.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'No tienen ninguna relación, son sistemas independientes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Así es! Las BPM son el cimiento (prerrequisito) para que el sistema HACCP pueda funcionar correctamente. Sin un buen programa de BPM, el HACCP no es efectivo.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            'En Colombia, la norma sanitaria vigente que establece los requisitos para la fabricación de alimentos es:',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Decreto 3075 de 1997.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ley 9 de 1979.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Resolución 2674 de 2013.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'NTC-ISO 22000.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La Resolución 2674 de 2013 es la norma vigente que derogó el Capítulo I del Título II del Decreto 3075 de 1997 y establece los requisitos sanitarios para la elaboración, distribución y comercialización de alimentos en el país.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            'Un registro es un formato diligenciado que sirve como evidencia de una actividad. ¿Cuál es la forma correcta de corregir un error en un registro?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Tachar con una línea horizontal el error y escribir el dato correcto al lado, firmando la corrección.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Usar corrector líquido para borrar el error.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Romper el formato y diligenciar uno nuevo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Dejar el error sin corregir.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La forma adecuada es tachar el dato incorrecto (dejándolo legible), anotar el nuevo dato y firmar para mantener la trazabilidad y transparencia del proceso.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            'El Programa de Saneamiento en una empresa de alimentos debe incluir, como mínimo, los siguientes subprogramas:',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Abastecimiento de agua potable y manejo de residuos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Control de plagas y manejo de residuos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Limpieza y desinfección, control de plagas, abastecimiento de agua potable y manejo de residuos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Limpieza y desinfección, y control de plagas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Exacto. Un programa de saneamiento completo e integral debe contemplar estos cuatro pilares para garantizar un entorno seguro e higiénico en la producción de alimentos.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            'Un manipulador de alimentos, ¿en qué momentos debe realizar el lavado de manos de manera obligatoria?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo al iniciar su jornada laboral.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Después de manipular basura y al tocar alimentos crudos antes de cocidos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Cada vez que cambie de actividad y después de ir al baño.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Todas las anteriores son momentos en los que debe lavarse las manos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Muy bien. El lavado de manos es la medida más efectiva para prevenir la contaminación cruzada, por lo que debe realizarse en todos esos momentos clave.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            '¿Cuál es la forma correcta de aplicar el método de rotación de inventarios PEPS (Primero en Entrar, Primero en Salir)?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Colocar los productos nuevos al frente y los antiguos detrás.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Usar el producto que esté más cerca de la puerta.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Colocar los productos nuevos detrás de los antiguos para usar primero los que tienen fecha de vencimiento más cercana.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Acomodar los productos por orden alfabético.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Esta práctica asegura que los productos con vencimiento más próximo se utilicen antes, evitando pérdidas y garantizando la calidad de los insumos.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            'Si durante una inspección se detecta que un lote de producto tiene una temperatura de cocción por debajo de la establecida, ¿qué tipo de acción debe tomar la empresa?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'No hacer nada, solo registrar el dato.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Aplicar una acción correctiva para analizar la causa y corregir el problema.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Realizar una acción preventiva.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Esperar a la próxima auditoría para reportarlo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Así es. Una acción correctiva se toma para eliminar la causa de una no conformidad ya detectada, asegurando que el proceso vuelva a los parámetros establecidos.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            'Los alimentos cocinados deben enfriarse rápidamente para evitar la proliferación bacteriana. Esto se conoce como:',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Pasteurización.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Abatimiento de temperatura.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Esterilización.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cocción a baja temperatura.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El abatimiento de temperatura es el proceso de reducción rápida de la temperatura de un alimento cocinado, para pasar de la zona de peligro (5 °C – 60 °C) a una temperatura de refrigeración segura en menos de 2 horas.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            '¿Cuál de los siguientes es un ejemplo de una buena práctica para el control de plagas?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Realizar fumigaciones diarias como medida principal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Dejar las puertas abiertas para ventilar las áreas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Mantener el orden y la limpieza, y sellar grietas en paredes y pisos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Almacenar los residuos cerca de la cocina para facilitar su retiro.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente. La prevención es el pilar más importante del Manejo Integrado de Plagas (MIP). Mantener la limpieza y sellar las vías de entrada es más efectivo y seguro que depender únicamente de fumigaciones.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            'La Ley 9 de 1979, conocida como el Código Sanitario Nacional, tiene como propósito fundamental:',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Establecer los requisitos para la exportación de alimentos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Proteger la salud humana estableciendo disposiciones sanitarias generales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Regular únicamente el control de plagas en las empresas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Definir los colores de los uniformes del personal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Así es. La Ley 9 de 1979 es la norma marco en materia sanitaria en Colombia y sienta las bases para la protección de la salud en lo relativo a la producción, procesamiento y comercialización de alimentos.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            'El Programa de Abastecimiento de Agua Potable exige medir y registrar diariamente el nivel de cloro residual libre en el agua. ¿Cuál es el rango establecido por la norma?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '0.0 - 0.2 ppm (partes por millón).',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '0.3 - 2.0 ppm.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: '5.0 - 10.0 ppm.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'No se requiere medir cloro, solo la temperatura.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La normativa establece que el cloro residual libre en el agua potable debe mantenerse entre 0.3 y 2.0 ppm para garantizar su potabilidad y poder desinfectante.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            '¿Cuál de las siguientes prácticas NO es correcta en la higiene del personal manipulador de alimentos?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Usar uniforme completo, limpio y de color claro.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Llevar el cabello recogido y cubierto por completo con un gorro.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Mantener las uñas cortas, limpias y sin esmalte.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Usar anillos, aretes y relojes durante la jornada laboral.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'El uso de joyas y accesorios está prohibido en las áreas de producción, ya que son focos de acumulación de suciedad y pueden caer en los alimentos, además de dificultar una correcta limpieza de manos.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            'Durante la limpieza y desinfección, ¿cuál es el orden correcto de las etapas?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Desinfección , Enjuague, Prelavado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Lavado, Desinfección, Prelavado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Prelavado, Lavado, Enjuague, Desinfección.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Enjuague, Desinfección, Lavado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente. Este es el flujo correcto: primero se retiran los residuos sólidos (prelavado), luego se aplica detergente (lavado), se enjuaga para eliminar los restos de detergente y finalmente se aplica el desinfectante.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            '¿Cuál es la concentración típica de cloro (hipoclorito de sodio) recomendada para la desinfección de superficies en contacto con alimentos?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '10 - 20 ppm.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '50 - 70 ppm.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '100 - 200 ppm.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: '500 - 1000 ppm.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Así es. La concentración recomendada para desinfectar superficies limpias en contacto directo con alimentos es de 100 a 200 ppm de cloro disponible.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            'Los productos secos como harinas y azúcares deben almacenarse sobre estibas. ¿A qué distancia mínima del piso y la pared deben estar?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '5 cm del piso y 10 cm de la pared.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '15 cm del piso y 50 cm de la pared.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: '30 cm del piso y 20 cm de la pared.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Directamente sobre el piso y pegados a la pared.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Así es! Estas distancias permiten una correcta limpieza, facilitan la inspección en busca de plagas y evitan la absorción de humedad del piso.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            '¿En qué parte del alimento se debe realizar la medición de la temperatura interna durante la cocción de una pieza de gran tamaño (por ejemplo, un pollo entero)?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'En la parte más gruesa del producto (pechuga o muslo).',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'En la superficie del pollo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'En el horno donde se está cocinando.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'No es necesario medir la temperatura interna.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La medición debe realizarse en la parte más gruesa del producto, asegurando que el calor haya penetrado y eliminado los patógenos en todo el alimento.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            '¿Cuál de las siguientes afirmaciones describe mejor el concepto de mejora continua?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Es realizar cambios solo cuando ocurre un accidente grave.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Es un proceso que se hace una sola vez al año.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Es responsabilidad exclusiva del área de calidad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Es un esfuerzo constante por mejorar los procesos y se basa en el ciclo PHVA.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Perfecto! La mejora continua es un esfuerzo constante y sistemático, basado en el ciclo Planificar-Hacer-Verificar-Actuar (PHVA), que involucra a toda la organización para ser cada vez mejores.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
      ],
    },
  }),
}
</script>

<style lang="sass"></style>
