import conversion from '../assets/conversion.png'
import { Chats, DynamoDb, Graph } from './Icons';


export default function Conversion() {
  return (
    <section className="bg-[#FAFAFA] flex flex-col items-center justify-start my-24 px-4 sm:px-0">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-7xl items-stretch gap-6 md:gap-10">
        <div className="flex items-center justify-center">
          <img src={conversion} alt="" className="max-w-full h-auto" />
        </div>
        <div className="flex flex-col justify-between mt-5 space-y-6 md:space-y-0">
          {/* Card 1 */}
          <div className="bg-white rounded-xl p-6 md:p-[46px]">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center">
                <DynamoDb />
              </div>
              <div className="flex-1">
                <h3 className="text-[#52667E] font-medium text-xl">
                  Aprendizado rápido
                </h3>
              </div>
            </div>
            <p className="text-base text-[#9AA6B3] mt-[24px]">
              Evolui com cada cliente, ficando mais eficiente a cada conversão.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl p-6 md:p-[46px]">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center">
                <Chats />
              </div>
              <div className="flex-1">
                <h3 className="text-[#52667E] font-medium text-xl">
                  Abordagem personalizada
                </h3>
              </div>
            </div>
            <p className="text-base text-[#9AA6B3] mt-[24px]">
              Ofertas sob medida para quem desistiu, na hora certa.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl p-6 md:p-[46px]">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center">
                <Graph />
              </div>
              <div className="flex-1">
                <h3 className="text-[#52667E] font-medium text-xl">
                  Resultados reais
                </h3>
              </div>
            </div>
            <p className="text-base text-[#9AA6B3] mt-[24px]">
              Até 80% de carrinhos recuperados, comprovado por quem utiliza.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
