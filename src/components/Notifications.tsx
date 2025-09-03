import whatsapp from '../assets/headerzap.png'
import wlogo from '../assets/headerLogo.png'

export default function Notifications(){
    return (
      <>
        <div className="hidden md:flex md:flex-col absolute right-[-7.3%] top-[45%] ">
          <div className="flex items-center mb-[11px] bg-white/10 border border-white/20 rounded-lg p-3 pr-4 backdrop-blur-sm min-w-[260px]">
            <div className="gap-4 ">
              <img src={whatsapp} alt="wa" />
            </div>
            <div className="flex-1 text-left ml-[16px]">
              <div className="text-white font-bold text-[27px]">
                Mensagem enviada com sucesso!
              </div>
              <div className="text-white/80 text-[23px]">
                Cliente abordado com sucesso
              </div>
            </div>
          </div>

          <div className="flex items-center  bg-white/10 border border-white/20 rounded-lg p-3 pr-4 backdrop-blur-sm min-w-[260px]">
            <div className="">
              <img src={wlogo} alt="w" className="gap-4" />
            </div>
            <div className="flex-1 text-left ml-[16px]">
              <div className="text-white font-bold text-[27px]">
                Venda recuperada!
              </div>
              <div className="text-white/80 text-[23px]">
                Sua Comissão: R$347,00
              </div>
            </div>
          </div>
          <div className="flex w-full items-center gap-4 bg-white border absolute right-[-18.3%] top-[95%] border-white/20 rounded-2xl p-3 py-6 backdrop-blur-sm min-w-[260px]"></div>
        </div>

        {/*left size */}
        <div className="hidden md:flex md:flex-col gap-4 absolute left-[-3px] top-[34%] ">
          <div className="flex items-center gap-4 bg-white/10 border border-white/20 rounded-lg p-3 pr-4 backdrop-blur-sm min-w-[260px]">
            <div className="">
              <img src={whatsapp} alt="wa" />
            </div>
            <div className="flex-1 text-left">
              <div className="text-white font-bold text-[27px]">
                Mensagem enviada com sucesso!
              </div>
              <div className="text-white/80 text-[23px]">
                Cliente abordado com sucesso
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white/10 border border-white/20 rounded-lg p-3 pr-4 backdrop-blur-sm min-w-[260px]">
            <div className="">
              <img src={wlogo} alt="w" />
            </div>
            <div className="flex-1 text-left">
              <div className="text-white font-bold text-[27px]">
                Venda recuperada!
              </div>
              <div className="text-white/80 text-[23px]">
                Sua Comissão: R$347,00
              </div>
            </div>
            <div className="flex w-full items-center gap-4 bg-white border absolute left-[-86.3%] top-[-217%] border-white/20 rounded-2xl p-3 py-6 h-[140px] backdrop-blur-sm min-w-[260px]"></div>
          </div>
        </div>
      </>
    );
}
