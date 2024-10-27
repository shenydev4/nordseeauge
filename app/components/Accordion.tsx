"use client";

import { useState } from "react";
import Cross from "@/app/components/icons/Cross";
import Heart from "@/app/components/icons/Heart";
import ExternalLink from '@/app/components/typo/ExternalLink'

interface Product {
  category: string;
  software?: string;
  notice?: string;
  items: { productName: string; link: string }[];
}

const products: Product[] = [
  {
    category: 'Smartphone',
    items: [
      {
        productName: 'Samsung S918B Galaxy S23 Ultra 5G 512GB/12GB',
        link: 'https://amzn.to/3Xqq5Lc'
      },
      {
        productName: 'ATUMTEK Selfie-Stick 150 cm',
        link: 'https://amzn.to/4cXvhw0'
      },
      {
        productName: 'ULANZI Handy Halterung Stativ m. Kugelkopf',
        link: 'https://amzn.to/47lwjAR'
      },
      {
        productName: 'Andoer Mini Stativ',
        link: 'https://amzn.to/3AZYJ7f'
      },
      {
        productName: 'Boya BY-V10 USB-C kabelloses Mikrofon',
        link: 'https://amzn.to/3XnRq0T'
      },
      {
        productName: 'NEEWER Universal Smartphone Käfig',
        link: 'https://amzn.to/3TqNhrz'
      },
      {
        productName: 'NEEWER Seitengriff mit kabelloser Fernbedienung, Auslöser für Handy Käfig',
        link: 'https://amzn.to/3Zhgqta'
      },
      {
        productName: 'NEEWER 67mm Polarisationsfilter',
        link: 'https://amzn.to/3TrPAea'
      },
      {
        productName: 'SMALLRIG P96 Mini LED Videoleuchte',
        link: 'https://amzn.to/3B4hlTJ'
      },
      {
        productName: 'Handy Stativ Flexibel Goocong',
        link: 'https://amzn.to/3ZrPpmJ'
      },
      {
        productName: 'Handheld Vlogging Einbeinstativ',
        link: 'https://amzn.to/3B73BHM'
      },
      {
        productName: 'Neewer 80mm 3 Zoll Klare Kristallkugel',
        link: 'https://amzn.to/47sv6HP'
      },
      {
        productName: 'NEEWER Kristallkugel Set',
        link: 'https://amzn.to/3Tux98E'
      },
    ]
  },
  {
    category: 'Actioncam',
    software: 'Software GoProQuick',
    items: [
      {
        productName: 'GoPro Hero12',
        link: 'https://amzn.to/3B4hlTJ'
      },
      {
        productName: 'GoPro Hero13',
        link: 'https://amzn.to/3B4hlTJ'
      },
      {
        productName: 'Handheld Teleskop Stick für Action Cam und Stativ',
        link: 'https://amzn.to/47uUdd7'
      },
    ]
  },
  {
    category: 'Kamera',
    software: 'Software Canon',
    items: [
      {
        productName: 'Canon EOS R6 Vollformat Systemkamera',
        link: 'https://amzn.to/47nBpMQ'
      },
      {
        productName: 'Objektive',
        link: 'https://amzn.to/47nBpMQ'
      },
      {
        productName: 'RF 24-105mm',
        link: 'https://amzn.to/47nBpMQ'
      },
      {
        productName: 'RF 85mm F2 Makro is STM Porträtobjektiv',
        link: 'https://amzn.to/4enduzE'
      },
      {
        productName: 'RF 35mm F1.8 Macro',
        link: 'https://amzn.to/4eoey6d'
      },
      {
        productName: 'RF 100-400mm F5.6-8 is USM Supertele-Objektiv',
        link: 'https://amzn.to/3znuyqe'
      },
      {
        productName: 'RF 800mm F11 is STM Supertele-Objektiv',
        link: 'https://amzn.to/47vcMhb'
      },
      {
        productName: 'RF 24-240mm F4-6.3 IS USM (72mm Filtergewinde)',
        link: 'https://amzn.to/3ZkMMDo'
      },
      {
        productName: 'PROfezzion Polfilter 58MM',
        link: 'https://amzn.to/3MLjHJK'
      },
    ]
  },
  {
    category: 'Drone',
    software: 'Lightcut, DJI FlyApp',
    notice: 'Haftpflichtversicherung notwendig, Registrierung im Luftfahrtbundesamt, Drohne ist mit zugeteilter ID zu kennzeichnen',
    items: [
      {
        productName: 'DJI Mini 4 Pro Fly More Combo mit DJI RC 2 Fernsteuerung',
        link: 'https://amzn.to/4ela2oT'
      },
      {
        productName: 'Mini 4 Pro Neuen RC-2 Sonnenblende I Joystick Schutz',
        link: 'https://amzn.to/3zlPa24'
      },
      {
        productName: 'DJI Neo Mini Vlog Drone',
        link: 'https://amzn.to/3Tx5svN'
      },
      {
        productName: 'SKYREAT Neo Tasche',
        link: 'https://amzn.to/3Twp5Eq'
      },
    ]
  },
];


const AccordionBuilder = ({
  title,
  children,
  isOpen,
  setIsOpen,
}: {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) => {
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        className="w-full py-2 text-left font-bold"
        onClick={handleClick}
      >
        <div className={`flex gap-6 items-center hover:text-yellow-200 transition-custom ${isOpen && 'text-yellow-200'}`}>
          <span className={`block w-6 h-6 mt-1 ${isOpen ? 'rotate-0 text-yellow-200':'-rotate-45'}`}>
            <Cross />
          </span>
          <p>
            {title}
          </p>
        </div>
        
      </button>

      <div className={`px-4 transition-custom overflow-hidden ${isOpen ? 'max-h-[2000px] py-2' : 'max-h-0 py-0'}`}>
        {children}
      </div>

    </div>
  );
};

export default function Accordion({
  className
}:{
  className?:string
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleAccordionClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <h2 className="mb-8">Zubehörliste*</h2>

      <div className="flex flex-col gap-4 mb-8">
        <p>
          Die hier aufgeführten Produkte sind bei mir im Einsatz. Für Workshopteilnehmer habe ich diese vor Ort vorgeführt bzw. haben Sie evtl. ihr Wunschprodukt da bereits bei mir getestet.
        </p>
        <p>
          Bei Kauf erhalte ich davon eine kleine Provision. Ich würde mich freuen, wenn Sie darüber bestellen, somit unterstützen Sie meinen Service und meine Arbeit, ersparen sich zudem eine lange Such- und Testphase für sich selbst.
        </p>
        <p className="flex items-center gap-4">
          Vielen Dank, Martina Kornfeld
          <span className="block w-5 h-5 mt-1">
            <Heart />
          </span>
        </p>
        <p className="caption">
          *Alle Links führen zu Amazon
        </p>
      </div>
      
      <div className={`${className}`}>

        {products.map((product, index) => (
          <AccordionBuilder
            key={index}
            title={product.category}
            isOpen={activeIndex === index}
            setIsOpen={() => handleAccordionClick(index)}
          >
            <div className="flex flex-col gap-5 py-4 pl-8">
              {product.software && (
                <p className="caption">Software: {product.software}</p>
              )}
              {product.items.map((item, itemIndex) => (
                <ExternalLink key={itemIndex} href={item.link} className="w-fit after:!w-0">
                  {item.productName}
                </ExternalLink>
              ))}
            </div>
          </AccordionBuilder>
        ))}
      </div>
    </>
  );
}