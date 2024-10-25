"use client";
import { Button } from "@/components/ui/button";
import RegisterButton from "@/components/ui/register";
import { ArrowLeft } from "lucide-react";
import React from "react";

export default function CourseMaterial() {
  const chapters = [
    {
      name: "Analyse des clients",
      description: `Ce chapitre t'aide à identifier tes clients idéaux et à comprendre leurs besoins pour mieux cibler tes publicités.`,
    },
    {
      name: "Analyse de marché",
      description: `Tu apprends à analyser la concurrence et le marché pour adapter tes publicités à ton secteur.`,
    },
    {
      name: "Création de compte Facebook Ads",
      description: `Ce chapitre t'accompagne dans la création de ton compte publicitaire et la configuration de base.`,
    },
    {
      name: "Lancer sa 1ère annonce",
      description: `Découvre comment créer et diffuser ta première publicité sur Facebook.`,
    },
    {
      name: "Les audiences Facebook",
      description: `Tu apprends à cibler précisément les bonnes audiences pour maximiser l'impact de tes publicités.`,
    },
    {
      name: "Les techniques de testing",
      description: `Tu maîtrises les tests A/B pour optimiser tes campagnes publicitaires.`,
    },
    {
      name: "Tunnel de vente Messenger",
      description: `Ce chapitre t'enseigne à utiliser Messenger pour convertir tes prospects en clients.`,
    },
    {
      name: "Ad Copy",
      description: `Tu apprends à rédiger des textes publicitaires efficaces qui attirent l'attention et incitent à l'action.`,
    },
    {
      name: "Le Scaling",
      description: `Découvre comment augmenter progressivement tes dépenses publicitaires pour maximiser les résultats.`,
    },
    {
      name: "Tunnel de vente site web",
      description: `Tu mets en place un tunnel de vente optimisé pour convertir les visiteurs de ton site en clients.`,
    },
    {
      name: "Analyse des métriques",
      description: `Tu apprends à analyser les performances de tes campagnes grâce aux données fournies par Facebook.`,
    },
  ];
  return (
    <>
      <section
        id='chapters'
        className='relative min-h-screen flex flex-col justify-center overflow-hidden'
        style={{ marginTop: -100 }}
      >
        <div className='w-full max-w-6xl mx-auto px-4 md:px-6 py-24'>
          <div className='flex w-full items-center justify-center'>
            <h2
              dir='rtl'
              className='text-5xl text-center lg:w-2/4 text-white mb-2 tracking-wider px-3 py-4 border-white rounded border-2 '
              // style={{ maxWidth: 450, position: "relative", left: 650 }}
            >
              {/* Nos Chapitres */}
              محتوى الـformation
            </h2>
          </div>
          <div className='flex flex-col justify-center divide-y divide-slate-200 [&>*]:py-16'>
            <div className='w-full max-w-3xl mx-auto'>
              {/* <!-- Vertical Timeline #1 --> */}
              {chapters.map((chapter, index) => (
                <div className='-my-6' key={index}>
                  {/* <!-- Item #1 --> */}
                  <div className='relative pl-8 sm:pl-32 py-6 group'>
                    {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
                    <div className='flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-primary after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5'>
                      {/* <time className='sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full'></time> */}
                      <div className='text-xl  font-bold text-primary'>
                        {chapter.name}
                      </div>
                    </div>
                    {/* <!-- Content --> */}
                    <div className='text-white-300'>{chapter.description}</div>
                  </div>
                </div>
              ))}
              {/* <!-- End: Vertical Timeline #1 --> */}
            </div>
          </div>
          <h2 className='text-2xl text-center text-white mb-2 tracking-wider'>
            ودروس أخرى قادرة تهز مبيعاتك لمستوى آخر
          </h2>
          <div className='w-full mt-5 flex items-center justify-center'>
            <Button
              className='w-5/6 md:w-1/4 font-bold group/arrow '
              onClick={() => {
                const contactElement = document.getElementById("contact");
                if (contactElement && window) {
                  window.scrollTo({
                    top: contactElement.offsetTop,
                    behavior: "smooth",
                  });
                }
              }}
            >
              <ArrowLeft className='size-5 mr-2 group-hover/arrow:translate-x-1 transition-transform' />
              إنضمّ الآن
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
