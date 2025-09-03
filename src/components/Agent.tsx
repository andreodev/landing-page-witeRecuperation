import { Clock, Filter, Settings, ChatsAgent, ClockNoCheck } from "./Icons";
import phoneAgent from "../assets/phoneAgent.png";

export default function Agent() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-t to-[#50D2CC] from-[#038F87] my-10 sm:py-[70px]">
      {/* Grid background */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-90"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.12) 3px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.12) 3px, transparent 1px)
          `,
          backgroundSize: "95px 90px",
        }}
      />

      <div className="relative max-w-6xl mx-auto ">
        <div className="text-center flex flex-col justify-center items-center rounded-2xl">
          <p className="mt-20 sm:mt-0">
            <Clock />
          </p>
          <h2 className="text-white text-3xl lg:text-[52px] font-semibold my-[40px] leading-tight">
            Crie seu agente de IA em <br />
            menos de 2 minutos
          </h2>
        </div>

        {/* Layout em 3 colunas com o telefone sobrepondo os painéis */}
        <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-[1fr_auto_1fr] items-center bg-[#053633]/90 sm:rounded-2xl  sm:my-[40px]">
          {/* Painel esquerdo */}
          <div className="w-full order-2 lg:order-1">
            <div className="rounded-2xl p-6 md:p-8 text-[#FFFFFF] flex">
              <div className="flex flex-col gap-8 my-auto">
                <div className="flex flex-col items-center gap-6 ">
                  <div className="flex flex-col items-center gap-6  text-center">
                    <div className="p-4 flex items-center justify-center rounded-xl bg-[#01AEA40D] ">
                      <Filter />
                    </div>
                    <div>
                      <p className="text-[20px]">
                        Nossa IA cria áudios automaticamente
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-6 ">
                  <div className="flex flex-col items-center gap-6  text-center">
                    <div className="p-4 flex items-center justify-center rounded-xl bg-[#01AEA40D] ">
                      <Settings />
                    </div>
                    <div>
                      <p className="text-[20px]">Personalização de perfil</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Telefone central — inclinado, com glow e sombra profunda */}
          <div className="relative z-10 -mt-3 lg:-mb-12 lg:-mt-9 flex justify-center order-1 lg:order-2">
            {/* Glow difuso atrás do telefone */}
            <div className="absolute -inset-6 rounded-[40px]  opacity-60 pointer-events-none" />
            <div className="relative transform -rotate-6 w-[300px] sm:w-[360px] md:w-[420px]">
              <img
                src={phoneAgent}
                alt="mockup celular"
                className="w-full h-auto "
                loading="lazy"
              />
            </div>
          </div>

          {/* Painel direito */}
          <div className="w-full max-w-md order-3 lg:order-3">
            <div className="rounded-2xl p-6 md:p-8 text-white lg:min-h-[360px] flex">
              <div className="flex flex-col gap-8 my-auto">
                <div className="flex flex-col items-center gap-6 ">
                  <div className="flex flex-col items-center gap-6 text-center">
                    <div className="p-4 flex items-center justify-center rounded-xl bg-[#01AEA40D] ">
                      <ChatsAgent />
                    </div>
                    <div>
                      <p className="text-[20px]">Mensagens automáticas</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-6 ">
                  <div className="flex flex-col items-center gap-6  text-center">
                    <div className="p-4 flex items-center justify-center rounded-xl bg-[#01AEA40D] ">
                      <ClockNoCheck />
                    </div>
                    <div>
                      <p className="text-[20px]">
                        Acompanhamento em tempo real
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Linha “fantasma” para forçar os painéis a ficarem por baixo do telefone no overlap */}
          <div className="absolute left-0 right-0 mx-auto top-1/2 -translate-y-1/2 h-[260px] sm:h-[320px] lg:h-[380px] pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
