import Image from "next/image";
import susie from "../../public/assets/images/susie.webp";
import catMessage from "../../public/assets/vectors/chat-icon-black.svg";

// import the library
import { library } from "@fortawesome/fontawesome-svg-core";

import { faMessage } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Client() {
  return (
    <div className="bg-sandash relative py-[8.75rem] px-[1.5rem]">
      <div className="relative mx-auto container w-full max-w-[75rem]">
        <div className="mb-[5.125rem] pr-[0.9375rem] pl-[0.9375rem]">
          <h2 className="font-sans font-semibold text-anothergray text-[3.8125rem] text-center leading-[4.0625rem] mt-[3.75rem] mb-[1.875rem]">
            ❤️ from our clients
          </h2>
        </div>
        <div className="relative w-[83.33%] -mt-[0.9375rem]">
          <div className="absolute -bottom-11 z-[0.125rem] flex w-[5.5rem] h-[5.5rem] mr-auto ml-auto justify-center items-center border border-sandash rounded bg-sandash shadow-xll">
            <Image
              src={catMessage}
              alt=""
              className="border-0 align-middle inline-block max-w-full"
            />
          </div>
          <div className="">
            <div className="w-[50%] self-end flex">
              <div className="pr-[2.5rem] pl-[3.75rem] rounded-tl-[80%] rounded-tr-[80%] rounded-bl-[100%] bg-clip-padding bg-anothergray bg-noisebg w-[29.375rem] h-[32.75rem] p-[5rem] m-[0.9375rem] text-center text-white ">
                <Image
                  src={susie}
                  alt="women smiling"
                  className="align-middle inline-block w-[5rem] h-[5rem] mb-6  border-[0.1875rem] border-white rounded-[32%] max-w-full items-center"
                />
                <div className="text-theborder flex flex-col  text-end">
                  <h5 className=" text-xl font-sans font-semibold leading-[1.875rem]mt-6 mb-3">
                    “One of the top design professionals…”
                  </h5>
                  <p className="text-sandash font-sans text-lg leading-[1.6rem] mb-[0.9375rem] ml-[0.9375rem]">
                    I connect with hundreds of talented folks on a regular
                    basis, and I can say with complete confidence that Lee is
                    one of the best UX designers in Aquent/Vitamin T&apos;s
                    global network.
                  </p>
                  <div className="font-geomanistBold text-sandash text-xs leading-[1rem] font-bold tracking-[4px] uppercase">
                    <p>SUSIE POLLASKY</p>
                  </div>
                  <div className="mt-[0.3125rem] opacity-70 font-geomanist text-sandash text-xs leading-4 font-semibold">
                    Now: Leadership Recruiting @ Product Design
                    <br />
                    at Facebook
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex pr-[0.625rem]">
            <div className="ag pr-[2.5rem] pl-[3.75rem]  py-[5rem] rounded-tl-[100%] flex flex-col items-center rounded-tr-[100%] rounded-br-[50%] bg-clip-padding bg-seaworthy bg-noisebg w-[370px] h-[45.5625rem] p-[5rem] m-[0.9375rem] text-center text-white ">
              <Image
                src={susie}
                alt="women smiling"
                className="w-[5rem] h-[5rem] mb-6  border-[0.1875rem] border-white rounded-[32%] max-w-full items-center"
              />
              <div className="text-theborder flex flex-col">
                <h5 className="text-xl font-sans font-semibold leading-[1.875rem]mt-6 mb-3 text-left">
                  “They&apos;re a very well-rounded organization…”
                </h5>
                <p className="text-sandash font-sans text-lg leading-[1.6rem] mb-[0.9375rem] text-left">
                  Cost per conversion and all of those metrics have dropped
                  significantly. We used to pay an average of $100 per lead that
                  converts… now we have that down to about $20. Sessions and
                  contacts have also gone up astronomically, at least threefold.
                  Organic search and social media referrals have all continued
                  to skyrocket. We&apos;re really pleased.
                </p>
                <div className="text-left font-geomanistBold text-sandash text-xs leading-[1rem] font-bold tracking-[4px] uppercase">
                  <p>MARTIN SPRITZER</p>
                </div>
                <div className="text-left mt-[0.3125rem] opacity-70 font-geomanist text-sandash text-xs leading-4 font-semibold">
                  General Manager @ iQuoteXpress
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
