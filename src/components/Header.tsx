import celular from "../assets/celular.png"
import Notifications from "./Notifications";

export default function Header() {
  return (
    <>
      <div className="relative flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-t to-[#50D2CC] from-[#038F87] pt-12 sm:pt-0 ">
        {/* Fundo com quadrados */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
            linear-gradient(to right, #fff 3px, transparent 1px),
            linear-gradient(to bottom, #fff 3px, transparent 1px)
          `,
            backgroundSize: "180px 120px",
          }}
        />

        {/* Conteúdo */}
        <div className="max-w-2xl mt-12 sm:mt-[180px] px-4 sm:px-0">
          <h1 className="text-3xl sm:text-[64px] font-extrabold bg-clip-text text-transparent bg-white">
            Transforme carrinhos abandonados em faturamento!
          </h1>

          <p className="mt-4 text-white text-base sm:text-[20px] font-normal">
            Aumente +40% de conversão no automático com a nossa IA focada em
            recuperação de vendas!
          </p>
        </div>

        <img
          src={celular}
          alt="celular"
          className="w-52 sm:w-auto mt-8 sm:mt-10"
        />
        <div>
          <Notifications />
       
        </div>
      </div>
    </>
  );
}
