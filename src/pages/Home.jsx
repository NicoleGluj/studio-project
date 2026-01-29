import { Layout } from "../components/Layout"
import heroimage from "../assets/heroimage.webp"
import card1 from "../assets/card1.webp"
import card2 from "../assets/card2.webp"
import card3 from "../assets/card3.webp"
import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger)

export const Home = () => {
  const heroSectionRef = useRef(null)
  const heroRoot = useRef(null)
  const nosotrosRef = useRef(null)
  const nosotrosRoot = useRef(null)
  const metricaRef = useRef(null)
  const metricaRoot = useRef(null)
  const catalogoRef = useRef(null)
  const catalogoRoot = useRef(null)
  const imagesRef = useRef(null)
  const imagesRoot = useRef(null)
  const trabajamosRef = useRef(null)
  const trabajamosRoot = useRef(null)
  const pasosRoot = useRef(null)

  useLayoutEffect(() => {
    const heroCtx = gsap.context(() => {
      const heroTl = gsap.timeline({
        defaults: {
          ease: "power3.out", duration: 0.7
        }
      })

      heroTl.from(".hero-title", {
        y: 1000,
        opacity: 0,
        filter: "blur(10px)",
        duration: 4
      })
      heroTl.from(".hero-subtitle", {
        y: 1000,
        opacity: 0,
        filter: "blur(10px)",
        duration: 4
      }, "-=3")
      heroTl.from(".hero-button", {
        opacity: 0
      }, "-=0.7")

      gsap.to(heroRoot.current, {
        y: 80,
        ease: "none",
        scrollTrigger: {
          trigger: heroSectionRef.current,
          start: "top top",
          end: "+=120",
          scrub: 0.8,
          pin: true,
          // pinSpacing: true
        }
      })

    }, heroRoot)

    const nosotrosCtx = gsap.context(() => {
      const nosotrosTl = gsap.timeline({
        scrollTrigger: {
          trigger: nosotrosRef.current,
          start: "top 80%",
        },
      })

      nosotrosTl.from(".nosotros-title", {
        y: 80,
        opacity: 0
      })
      nosotrosTl.from(".nosotros-text", {
        autoAlpha: 0,
        duration: 2
      })
    }, nosotrosRoot)

    const metricaCtx = gsap.context(() => {
      const metricaTl = gsap.timeline({
        scrollTrigger: {
          trigger: metricaRef.current,
          start: "top 80%",
        }
      })

      metricaTl.from(".metrica-number", {
        y: 100,
        autoAlpha: 0,
        filter: "blur(10px)",
      })

    }, metricaRoot)

    const catalogoCtx = gsap.context(() => {
      const catalogoTl = gsap.timeline({
        scrollTrigger: {
          trigger: catalogoRef.current,
          start: "top 80%",
        },
      })

      catalogoTl.from(".catalogo-title", {
        y: 80,
        opacity: 0
      })
      catalogoTl.from(".catalogo-text", {
        autoAlpha: 0,
        duration: 2
      })
    }, catalogoRoot)

    const imagesCtx = gsap.context(() => {
      const imagesTl = gsap.timeline({
        scrollTrigger: {
          trigger: imagesRef.current,
          start: "top 80%",
        },
      })

      imagesTl.from(".images-card", {
        y: 80,
        opacity: 0,
        duration: 2,
      })
    }, imagesRoot)

    const trabajamosCtx = gsap.context(() => {
      const trabajamosTl = gsap.timeline({
        scrollTrigger: {
          trigger: trabajamosRef.current,
          start: "top 80%",
        },
      })

      trabajamosTl.from(".trabajamos-title", {
        y: 80,
        opacity: 0
      })
      trabajamosTl.from(".trabajamos-text", {
        autoAlpha: 0,
        duration: 2
      })
    }, trabajamosRoot)

    const pasosCtx = gsap.context(() => {
      const pasosTl = gsap.timeline({
        scrollTrigger: {
          trigger: trabajamosRef.current,
          start: "top 80%",
        },
      })

      pasosTl.from(".pasos-title", {
        x: 80,
        opacity: 0,
        duration: 2
      })
      pasosTl.from(".pasos-text", {
        autoAlpha: 0,
        duration: 2
      })
    }, pasosRoot)

    ScrollTrigger.refresh()

    return () => {
      heroCtx.revert()
      nosotrosCtx.revert()
      metricaCtx.revert()
      catalogoCtx.revert()
      imagesCtx.revert()
      trabajamosCtx.revert()
      pasosCtx.revert()
    }

  }, [])

  return (
    <Layout>
      <section ref={heroSectionRef}>
        <div
          className="mx-6 mt-4 h-[85vh] overflow-hidden rounded-2xl relative ">
          <img
            src={heroimage}
            alt="Hero"
            className="h-full w-full object-cover object-[50%] m:object-top-left"
          />
          <div
            className="absolute inset-0 flex items-center justify-end m-6 lg:m-10">
            <div ref={heroRoot}
              className="hero-copy flex flex-col items-start text-left sm:max-w-112.5 lg:max-w-2xl 2xl:max-w-4xl">
              <h1 className="hero-title text-5xl sm:text-6xl 2xl:text-7xl uppercase font-semibold text-white mb-4 ">
                Inmuebles para potenciar tu negocio
              </h1>
              <h2 className="hero-subtitle text-white text-lg lg:text-xl 2xl:text-2xl font-normal">
                Alquiler, venta y asesoramiento integral en propiedades comerciales, oficinas y depositos.
              </h2>
              <button className="hero-button mt-10 py-3 px-10 bg-white rounded-4xl font-medium text-[#535353] shadow text-lg">
                Iniciar contacto
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-30 mx-6 grid lg:grid-cols-2 mb-12 items-start ">
        <div
          ref={nosotrosRef}
          className="flex flex-col justify-start mb-15">
          <div ref={nosotrosRoot}>
            <h2 className="nosotros-title text-4xl sm:text-5xl 2xl:text-7xl font-bold uppercase text-[#535353] mb-4">
              Nosotros
            </h2>
            <p className="nosotros-text text-gray-400 font-medium leading-relaxed text-justify lg:text-xl">
              Somos un estudio especializado en inmobiliaria comercial, enfocado en acompañar a empresas, emprendedores e inversores en la búsqueda del espacio ideal para desarrollar su actividad. <br />
              Trabajamos con una mirada estratégica, combinando análisis de mercado, conocimiento urbano y asesoramiento legal, para garantizar operaciones claras, seguras y eficientes.
            </p>
          </div>
        </div>
        <div
          ref={metricaRef}
          className="flex justify-center lg:justify-end">
          <div
            ref={metricaRoot}
            className="grid w-full max-w-lg grid-cols-2 gap-x-16 gap-y-10 justify-items-start ">
            <div div className="flex flex-col items-start text-left w-full lg:-translate-x-20">
              <h2 className="metrica-number text-5xl sm:text-6xl 2xl:text-7xl font-bold text-[#535353] leading-none ">
                10+
              </h2>
              <p className="font-medium text-gray-500 text-sm sm:text-lg mt-2">
                Años de experiencia
              </p>
            </div>
            <div div className="flex flex-col items-start text-left w-full">
              <h2 className="metrica-number text-5xl sm:text-6xl 2xl:text-7xl font-bold text-[#535353] leading-none">
                1000+
              </h2>
              <p className="font-medium text-gray-500 text-sm sm:text-lg mt-2">
                Operaciones realizadas
              </p>
            </div>
            <div div className="flex flex-col items-start text-left w-full lg:-translate-x-20">
              <h2 className="metrica-number text-5xl sm:text-6xl 2xl:text-7xl font-bold text-[#535353] leading-none ">
                4000+
              </h2>
              <p className="font-medium text-gray-500 text-sm sm:text-lg mt-2">
                Propiedades analizadas
              </p>
            </div>
            <div div className="flex flex-col items-start text-left w-full">
              <h2 className="metrica-number text-5xl sm:text-6xl 2xl:text-7xl font-bold text-[#535353] leading-none">
                95%
              </h2>
              <p className="font-medium text-gray-500 text-sm sm:text-lg mt-2">
                Clientes satisfechos
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={catalogoRef}
        className="mt-30 mx-6 grid lg:grid-cols-[30%_70%]">
        <div
          ref={catalogoRoot}
          className="lg:max-w-62.5">
          <h2 className="catalogo-title text-4xl sm:text-5xl 2xl:text-6xl font-bold uppercase text-[#535353] mb-4">
            Catálogo de propiedades
          </h2>
          <p className="catalogo-text text-gray-400 font-medium leading-relaxed text-justify lg:text-xl mb-10">
            Una selección de espacios pensados para diferentes tipos de negocios.
          </p>
        </div>

        <div
          ref={imagesRef}
          className="min-w-0">
          <div
            ref={imagesRoot}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 min-w-0">
            <div className="min-w-0 overflow-hidden">
              <img
                className="images-card block w-full aspect-4/6 rounded-2xl object-cover shadow"
                src={card1}
                alt="Oficinas corporativas"
              />
              <h2 className="mt-6 text-lg font-semibold text-center text-[#535353]">
                Oficinas corporativas
              </h2>
            </div>

            <div className="min-w-0 overflow-hidden">
              <img
                className="images-card block w-full aspect-4/6 rounded-2xl object-cover shadow"
                src={card2}
                alt="Depósitos y naves industriales"
              />
              <h2 className="mt-6 text-lg font-semibold text-center text-[#535353]">
                Depósitos y naves industriales
              </h2>
            </div>

            <div className="min-w-0 overflow-hidden">
              <img
                className="images-card block w-full aspect-4/6 rounded-2xl object-cover shadow"
                src={card3}
                alt="Viviendas familiares"
              />
              <h2 className="mt-6 text-lg font-semibold text-center text-[#535353]">
                Viviendas familiares
              </h2>
            </div>
          </div>
        </div>
      </section>


      <section
        ref={trabajamosRef}
        className="mx-6 mt-30" >
        <div
          ref={trabajamosRoot}
          className="flex flex-col">
          <h2 className="trabajamos-title text-4xl sm:text-5xl 2xl:text-6xl font-bold uppercase text-[#535353] mb-4">
            Como trabajamos
          </h2>
          <p className="trabajamos-text text-gray-400 font-medium leading-relaxed text-justify lg:text-xl mb-10">
            Diseñamos un proceso simple, claro y enfocado en tus objetivos para que cada paso sea seguro y eficiente.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-10 lg:gap-40 mb-10 items-stretch">
          <div className="min-w-0 overflow-hidden">
            <img
              className="w-full h-full rounded-2xl object-cover"
              src={card2}
              alt="Oficinas corporativas"
            />
          </div>

          <div
            ref={pasosRoot}
            className="flex h-full justify-between flex-col gap-10 lg:mr-30">
            <div className="flex flex-col border-b border-[#535353]/70 ">
              <h3 className="pasos-title text-lg lg:text-2xl 2xl:text-4xl font-bold mb-2 lg:mb-6 text-[#535353]">
                Asesoramiento inicial
              </h3>
              <p className="pasos-text text-m lg:text-xl 2xl:text-2xl mb-2 lg:mb-8">
                Analizamos tus necesidades, tipo de actividad, presupuesto y proyeccion de crecimiento.
              </p>
            </div>
            <div className="flex flex-col border-b border-[#535353]/70 ">
              <h3 className="pasos-title text-lg lg:text-2xl 2xl:text-4xl font-bold mb-2 lg:mb-6 text-[#535353]">
                Búsqueda y selección de propiedades
              </h3>
              <p className="pasos-text text-m lg:text-xl 2xl:text-2xl mb-2 lg:mb-8">
                Evaluamos opciones que se ajusten a tus requerimientos técnicos, comerciales y legales.
              </p>
            </div>
            <div className="flex flex-col border-b border-[#535353]/70 ">
              <h3 className="pasos-title text-lg lg:text-2xl 2xl:text-4xl font-bold mb-2 lg:mb-6 text-[#535353]">
                Visita y evaluación
              </h3>
              <p className="pasos-text text-m lg:text-xl 2xl:text-2xl mb-2 lg:mb-8">
                Verificamos el estado legal y administrativo de la propiedad antes de avanzar.
              </p>
            </div>
            <div className="flex flex-col border-b border-[#535353]/70 ">
              <h3 className="pasos-title text-lg lg:text-2xl 2xl:text-4xl font-bold mb-2 lg:mb-6 text-[#535353]">
                Cierre y acompañamiento
              </h3>
              <p className="pasos-text text-m lg:text-xl 2xl:text-2xl mb-2 lg:mb-8">
                Te acompañamos durante toda la operación hasta la firma final.
              </p>
            </div>
          </div>
        </div>
      </section>


    </Layout >
  )
}