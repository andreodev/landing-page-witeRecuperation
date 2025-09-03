import footer from '../assets/footer.png';
import { InstagramIcon } from './Icons';

export default function Footer() {
  return (
    <footer className="mt-16 bg-gradient-to-r from-teal-500 to-teal-600 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start  md:text-left">
          <div className="space-y-5 flex flex-col  md:items-start">
            <img src={footer} alt="" className="w-80" />
            <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
              <InstagramIcon />
            </div>
          </div>

          <div className="flex  md:justify-end">
            <div className="text-sm opacity-90">
              <div className="space-y-2">
                <div className="font-medium">Agente IA</div>
                <div>Integração WhatsApp</div>
                <div>Perguntas frequentes</div>
              </div>
            </div>
          </div>

          {/* <div className="flex justify-end">
            <div className="bg-white/10 rounded-lg py-6 px-5 min-w-[180px]">
              <div className="text-sm mb-3">Baixe o nosso aplicativo</div>
              <div className="space-y-3">
                <div className="bg-white/20 rounded-md p-3 flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/30 rounded flex items-center justify-center">▶</div>
                  <div className="text-xs">Disponível no<br/><strong>Google Play</strong></div>
                </div>
                <div className="bg-white/20 rounded-md p-3 flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/30 rounded flex items-center justify-center"></div>
                  <div className="text-xs">Disponível na<br/><strong>App Store</strong></div>
                </div>
              </div>
            </div>
          </div> */}
        </div>

        <hr className="my-6 border-white/18" />

        <div className="flex flex-col md:flex-row  justify-between text-sm opacity-90">
          <div className="mb-3 md:mb-0">
            © 2025 WiteGroup. Todos direitos reservados
          </div>
          <div className="flex gap-8 flex-col md:flex-row md:items-start mt-2 md:mt-0">
            <div>Política de privacidade</div>
          </div>
          <div>Termos de uso</div>
        </div>
      </div>
    </footer>
  );
}
