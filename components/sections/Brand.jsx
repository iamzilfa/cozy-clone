import Image from "next/image";
import light from "../../public/assets/vectors/light.svg";
import full from "../../public/assets/vectors/full.svg";
import lightstream from "../../public/assets/vectors/lightstream-logo.svg";
import Sapient from "../../public/assets/vectors/Sapient.svg";
import thermofisher from "../../public/assets/vectors/thermofisher-logo-full.svg";
import sdge from "../../public/assets/vectors/sdge-logo.svg";
import sony from "../../public/assets/vectors/sony-logo-full.svg";

export default function Brand() {
  return (
    <div className="bg-anothergray py-[6.5rem] ">
      <div className="px-6 w-full max-w-[1200px] flex flex-col items-center">
        <h4 className="text-[1.875rem] font-frauncesItalic text-cameo tracking-wide leading-[2.0625rem] mb-16">More than 150 happy clients</h4>
        <div className="flex items-center space-x-20">
            <div className="w-full">
              <Image src={light} alt="light" className="w-[3.75rem] h-[2rem]" />
            </div>
            <div className="w-full">
              <Image
                src={full}
                alt="light"
                className="w-[4.2363rem] h-[2rem]"
              />
            </div>
            <div className="w-full">
              <Image
                src={lightstream}
                alt="light"
                className="w-[6.0369rem] h-[2rem]"
              />
            </div>
            <div className="w-full">
              <Image
                src={Sapient}
                alt="light"
                className="w-[3.4944rem] h-[2rem]"
              />
            </div>
            <div className="w-full">
              <Image
                src={thermofisher}
                alt="light"
                className="w-[4.8294rem] h-[2rem]"
              />
            </div>
            <div className="w-full">
              <Image src={sony} alt="light" className="w-[4.025rem] h-[2rem]" />
            </div>
            <div className="w-full">
              <Image src={sdge} alt="light" className="w-[2.125rem] h-[2rem]" />
            </div>
          </div>
        </div>
      </div>
  );
}
