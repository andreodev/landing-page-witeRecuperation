import whatsappImage from '../assets/whatsapp.png'
import { Arrow, BigData } from './Icons'

export default function WhatsappSection() {
  return (
    <section className="w-full py-12">
      <div className="mx-auto max-w-6xl px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {/* painel esquerdo: grande fundo teal com logo grande */}
        <div className="bg-[#01AEA4] rounded-2xl p-6 flex items-center justify-center">
          <img
            src={whatsappImage}
            alt="WhatsApp"
            className="w-full h-full object-contain max-h-[560px]"
          />
        </div>

        {/* painel direito: branco com conteúdo centralizado */}
        <div className="bg-white rounded-2xl p-12 flex items-center justify-center">
          <div className="text-center max-w-lg">
            <div className="mb-6 inline-flex items-center justify-center rounded-full bg-white">
              <BigData />
            </div>

            <h2 className="text-[52px] font-extrabold text-[#52667E] mb-4">
              Integração oficial WhatsApp
            </h2>
            <p className="text-base text-[#52667E] mb-8">
              Controle sua contingência com facilidade e nunca deixe sua
              operação inativa
            </p>

            <a
              href="https://painel.witerecuperation.com/login"
              className="inline-flex items-center justify-between bg-[#01AEA4] text-white py-3 px-6 rounded-full  w-full max-w-[320px]"
            >
              <span className="pl-1 font-semibold text-base">
                Começar Agora
              </span>
              <span className="inline-flex items-center justify-center bg-white text-[#01AEA4] rounded-full w-[62px] h-[32px]">
                <Arrow color="#01AEA4" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}