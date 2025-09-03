import React from "react";
import { Flash, Link, ShoppingCard } from "./Icons";

type Feature = {
  title: string;
  description: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

const FEATURES: Feature[] = [
  {
    title: "Recuperação Automática com IA",
    description:
      "Transforme abandonos em vendas com nossa inteligência artificial que atua 24/7.",
    Icon: Flash,
  },
  {
    title: "Mais Conversão, Menos Perda",
    description:
      "Estratégias inteligentes que reduzem o abandono de checkout e aumentam seu faturamento.",
    Icon: ShoppingCard,
  },
  {
    title: "Fácil Integração e Suporte Dedicado",
    description:
      "Plug-and-play com as principais plataformas, acompanhado de suporte especializado.",
    Icon: Link,
  },
];

export default function Integration() {
  return (
    <section className="w-full  ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-3 md:gap-x-12 ">
          {FEATURES.map(({ title, description, Icon }) => (
            <article key={title} className="flex items-center gap-5 md:gap-6">
              <div className="shrink-0">
                <div className="grid     ">
                  <Icon className=" text-[#01AEA4]" aria-hidden="true" />
                </div>
              </div>
              <div>
                <h3 className="text-[18px] font-medium text-[#52667E]">
                  {title}
                </h3>
                <p className="mt-2 max-w-10/12 text-[16px] leading-relaxed text-[#52667E]">
                  {description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
