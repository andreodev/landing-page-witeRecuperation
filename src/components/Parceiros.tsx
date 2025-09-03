
import { ShieldGreen } from "./Icons";
import seta from "../assets/seta.png";
import vega from "../assets/vega.png";
import adorei from "../assets/adorei.png";
import kvn from "../assets/kvn.png";
import kiwi from "../assets/kiwi.png";
import witepay from "../assets/witepay.png";
import luna from "../assets/luna.png";
import utmfy from "../assets/utmfy.png";

const PARTNERS = [
  { id: 'vega', src: vega, alt: 'Vega' },
  { id: 'adorei', src: adorei, alt: 'adoorei' },
  { id: 'kvn', src: kvn, alt: 'KVN' },
  { id: 'kiwi', src: kiwi, alt: 'kiwify' },
  { id: 'witepay', src: witepay, alt: 'WITEPAY' },
  { id: 'luna', src: luna, alt: 'Luna' },
  { id: 'utmfy', src: utmfy, alt: 'utmify' },
];


export default function Parceiros() { 

    return (
      <section className="flex flex-col items-center my-[120px] bg-[#FAFAFA]">
        <div className="w-full px-4 sm:px-6 lg:px-0 max-w-6xl">
          <div className="flex items-center justify-center">
            <h1 className="flex items-center text-[#52667E] text-sm sm:text-base">
              <span className="mr-2">
                <ShieldGreen />
              </span>
              Grandes parceiros do Wite Recuperation
            </h1>
            <img src={seta} alt="seta" className="h-6 w-6 opacity-80 sm:ml-10" />
          </div>

          <div className="mt-6 w-full">
            <div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-6 py-3">
              {PARTNERS.map((p) => (
                <div key={p.id} className="flex items-center justify-center px-2">
                  <img src={p.src} alt={p.alt} className="h-8 sm:h-10 md:h-12 lg:h-14 object-contain" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
}