import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useEffect, useRef, useState } from "react";
import logo from "../assets/logohero.png"

export const Header = () => {
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);

  // CERRAR CON ESC
  useEffect(() => {
    const onKeyDown = (e) => e.key === "Escape" && setOpen(false);
    if (open) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // BLOQUEAR SCROLL CON MENU ABIERTO
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  // TECLADO CON FOCO EN EL MENU
  useEffect(() => {
    if (open) panelRef.current?.focus();
  }, [open]);

  return (
    <header className="mx-8 mt-8">
      <div className="relative flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-12">
            <img src={logo} alt="" />
          </div>
          <div className="flex flex-col ">
            <button
              type="button"
              onClick={() => console.log("Home")}
              className="text-m font-bold tracking-wider uppercase text-[#535353]"
            >
              Espacio urbano
            </button>
            <h3 className="text-xs font-medium text-[#535353]">
              Inmobiliaria comercial
            </h3>
          </div>
        </div>

        <div>
          <button
            type="button"
            aria-label="Abrir menú"
            aria-controls="mobile-menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="inline-flex rounded-lg md:hidden "
          >
            <Bars3Icon className="h-7 w-7" />
          </button>

          <nav className="hidden items-center gap-6 md:flex">
            <button
              type="button"
              onClick={() => console.log("Inicio")}
              className="text-sm font-normal"
            >
              Inicio
            </button>

            <button
              type="button"
              onClick={() => console.log("Inicio")}
              className="text-sm font-normal "
            >
              Nosotros
            </button>

            <button
              type="button"
              onClick={() => console.log("Inicio")}
              className="text-sm font-normal "
            >
              Servicios
            </button>
            <button
              type="button"
              onClick={() => console.log("Inicio")}
              className="text-sm font-normal "
            >
              Propiedades
            </button>
            <button
              type="button"
              onClick={() => console.log("Inicio")}
              className="text-sm font-normal"
            >
              Contacto
            </button>
          </nav>
        </div>
      </div>

      {/* MENU MOBIL*/}
      <div
        className={[
          "fixed inset-0 z-50 md:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        ].join(" ")}
        aria-hidden={!open}
      >
        {/* OVERLAY / FILTRO OSCURO POR DETRAS */}
        <div
          onClick={() => setOpen(false)}
          className={[
            "absolute inset-0 bg-black/40 transition-opacity",
            open ? "opacity-100" : "opacity-0",
          ].join(" ")}
        />

        {/* MENU LATERAL */}
        <aside
          id="mobile-menu"
          ref={panelRef}
          tabIndex={-1}
          role="dialog"
          aria-modal="true"
          className={[
            "absolute right-0 top-0 h-screen w-[85%] max-w-sm bg-white shadow-xl outline-none",
            "transition-transform duration-200 ease-out p-4",
            open ? "translate-x-0" : "translate-x-full",
          ].join(" ")}
        >
          <div className="flex items-center justify-between border-b border-gray-400 px-4 py-3">
            <span className="text-sm font-semibold">
              MENÚ
            </span>
            <button
              type="button"
              aria-label="Cerrar menú"
              onClick={() => setOpen(false)}
              className="rounded-lg p-2"
            >
              <XMarkIcon className="h-7 w-7" />
            </button>
          </div>

          <nav className="flex flex-col gap-1 p-4 border-b border-gray-400">
            <button
              type="button"
              onClick={() => {
                console.log("Inicio");
                setOpen(false);
              }}
              className="px-3 py-3 text-left text-sm font-medium "
            >
              Inicio
            </button>

            <button
              type="button"
              onClick={() => {
                console.log("Inicio");
                setOpen(false);
              }}
              className="px-3 py-3 text-left text-sm font-medium "
            >
              Nosotros
            </button>

            <button
              type="button"
              onClick={() => {
                console.log("Inicio");
                setOpen(false);
              }}
              className="px-3 py-3 text-left text-sm font-medium "
            >
              Servicios
            </button>
            <button
              type="button"
              onClick={() => {
                console.log("Inicio");
                setOpen(false);
              }}
              className="px-3 py-3 text-left text-sm font-medium "
            >
              Propiedades
            </button>
            <button
              type="button"
              onClick={() => {
                console.log("Inicio");
                setOpen(false);
              }}
              className="px-3 py-3 text-left text-sm font-medium "
            >
              Contacto
            </button>
          </nav>
        </aside>
      </div>
    </header>
  );
};
