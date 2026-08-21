import Image from "next/image";
import { GoCheckCircle } from "react-icons/go";

type ServiceType = {
  service: {
    img: {
      src: string;
      alt: string;
    };
    heading: string;
    text: string;
    points: string[];
  };

  reverse: boolean;
};

export default function ServiceCard({ service, reverse }: ServiceType) {
  return (
    <div className="w-full helper-bg p-6 xl:p-10 rounded-2xl">
      <div
        className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} lg:items-center lg:justify-between gap-8 xl:gap-16`}
      >
        <div className="relative w-full lg:w-1/2 h-80 lg:h-120 xl:h-160 rounded-2xl overflow-hidden">
          <Image
            src={service.img.src}
            alt={service.img.alt}
            fill
            sizes="(max-width:768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div className="w-full flex-1 space-y-5">
          <h3 className="heading text-2xl lg:text-3xl xl:text-4xl font-bold">{service.heading}</h3>
          <p className="base-para w-full xl:max-w-110">{service.text}</p>
          <div>
            {
              service.points.map((point,idx)=>(
                <div key={idx} className="flex items-center gap-4">
                  <GoCheckCircle className="black-text" size={18}/>
                  <span className="base-para">{point}</span>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}
