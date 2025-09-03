import { Arrow } from "./Icons";

export default function IntegrateBanner() {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="bg-teal-500 rounded-xl p-6 md:p-9 flex flex-col sm:flex-row items-center sm:justify-between gap-6">
        {/* Texto à esquerda */}
        <div className="flex flex-col gap-2 text-white text-center sm:text-left">
          {/* Badge + Texto pequeno */}
          <span className="inline-flex items-center rounded-full  text-white text-sm">
            <span className="bg-[#FFFFFF66] text-white text-xs font-medium px-2.5 py-1 rounded-full ml-1 mr-2">
              Parceria
            </span>
            <span className="pr-4 text-base">
              Integre seu SaaS a Wite Recuperation
            </span>
          </span>

          {/* Título principal */}
          <h3 className="text-2xl md:text-[32px] font-bold">
            Quer integrar a sua empresa a Wite Recuperation?
          </h3>
        </div>

        {/* Botão à direita */}
        <a
          href="https://painel.witerecuperation.com/login"
          className="inline-flex items-center justify-between bg-white text-[#01AEA4] py-3 px-6 rounded-full  w-full max-w-[320px]"
        >
          <span className="pl-1 font-semibold text-base">
            Entrar em contato
          </span>
          <span className="inline-flex items-center justify-center bg-[#01AEA4] text-[#01AEA4] rounded-full w-[62px] h-[32px]">
            <Arrow color="white" />
          </span>
        </a>
      </div>
    </section>
  );
}
