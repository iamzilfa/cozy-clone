import Image from "next/image";
import susie from "../../public/assets/images/susie.webp";
import thelock from "../../public/assets/images/thelock.webp";
import mansmiling from "../../public/assets/images/mansmiling.webp";
import rambo from "../../public/assets/images/rambo.webp";
import catMessage from "../../public/assets/vectors/chat-icon-black.svg";

// import the library
import { library } from "@fortawesome/fontawesome-svg-core";

import { faMessage } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Client() {
  return (
    <div className="bg-sandash relative py-5  ssm:py-[8.75rem] ssm:px-[1.5rem] flex">
      <div className="relative mx-auto container px-5 items-center mmd:pl-20 top-0 max-w-[75rem]">
        <div className="mb-10 ssm:mb-[5.125rem] llg:py-2 px-2 py-[0.9375rem] flex justify-center items-center">
          <h2 className="font-sans font-semibold text-anothergray text-2xl mmd:text-[3.8125rem] text-center leading-[2rem] mmd:leading-[4.0625rem] mt-[3.75rem] mb-[1.875rem]">
            ❤️ from our clients
          </h2>
        </div>
        <div className="relative ssm:w-auto mmd:w-[83.33%] llg:-mt-2 mmd:-mt-[0.9375rem] mmd:mx-auto">
          <div className="flex flex-wrap mmd:flex">
            {/* <div className="absolute -bottom-11 z-[0.125rem] flex w-[5.5rem] h-[5.5rem] mr-auto ml-auto justify-center items-center border border-sandash rounded bg-sandash shadow-xll">
              <Image
                src={catMessage}
                alt=""
                className="border-0 align-middle inline-block max-w-full"
              />
            </div> */}
            <div className="justify-end items-end w-full ssm:mb-4  mmd:w-[50%] mmd:self-end flex">
              <div className="pr-[2.5rem] pl-[3.75rem] p-20 rounded-tl-[80%] rounded-tr-[80%] rounded-bl-[100%] bg-clip-padding bg-anothergray bg-noisebg w-full h-full mmd:w-[29.375rem] mmd:h-[32.75rem] mmd:m-[0.9375rem] text-center text-white ">
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
            <div className="flex pr-[0.625rem] w-[50%]">
              <div className="ag pr-[2.5rem] pl-[3.75rem]  py-[5rem] rounded-tl-[100%] flex flex-col items-center rounded-tr-[100%] rounded-br-[50%] bg-clip-padding bg-seaworthy bg-noisebg w-[370px] h-[45.5625rem] p-[5rem] m-[0.9375rem] text-center text-white ">
                <Image
                  src={thelock}
                  alt="the lock"
                  className="w-[5rem] h-[5rem] mb-6  border-[0.1875rem] border-white rounded-[32%] max-w-full items-center"
                />
                <div className="text-theborder flex flex-col">
                  <h5 className="text-xl font-sans font-semibold leading-[1.875rem]mt-6 mb-3 text-left">
                    “They&apos;re a very well-rounded organization…”
                  </h5>
                  <p className="text-sandash font-sans text-lg leading-[1.6rem] mb-[0.9375rem] text-left">
                    Cost per conversion and all of those metrics have dropped
                    significantly. We used to pay an average of $100 per lead
                    that converts… now we have that down to about $20. Sessions
                    and contacts have also gone up astronomically, at least
                    threefold. Organic search and social media referrals have
                    all continued to skyrocket. We&apos;re really pleased.
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
          <div className="flex">
            <div className="w-[50%] flex pl-[10%]">
              <div className="pr-[2.5rem] pl-[3.75rem] flex flex-col gap-3 lets rounded-tl-[100%] rounded-br-[60%] rounded-bl-[60%] bg-clip-padding w-[23.1244rem] h-[29.2737rem] p-[5rem] m-[0.9375rem] text-white ">
                <Image
                  src={mansmiling}
                  alt="man smiling"
                  className="items-right align-middle inline-block w-[5rem] self-end h-[5rem] mb-6  border-[0.1875rem] border-white rounded-[32%] max-w-full"
                />
                <div className="text-theborder flex flex-col  text-end">
                  <h5 className=" text-xl font-sans font-semibold leading-[1.875rem]mt-6 mb-3">
                    “They&apos;re just good people.”
                  </h5>
                  <p className="text-sandash font-sans text-lg leading-[1.6rem] mb-[0.9375rem] ml-[0.9375rem]">
                    They were a pleasure to work with and I&apos;m really happy
                    with the results. They pretty much nailed it.
                  </p>
                  <div className="font-geomanistBold text-sandash text-xs leading-[1rem] font-bold tracking-[4px] uppercase">
                    <p>ERIC WEISS</p>
                  </div>
                  <div className="mt-[0.3125rem] opacity-70 font-geomanist text-sandash text-xs leading-4 font-semibold">
                    Founder @ Full Cycle Product Development
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-[50%] items-start">
              <div className="hop pr-[2.5rem] pl-[3.75rem]  py-[5rem] rounded-bl-[60%] flex flex-col rounded-tr-[100%] rounded-br-[60%] bg-clip-padding bg-seaworthy bg-noisebg w-[29.3738rem] h-[31.0731rem] p-[5rem] m-[0.9375rem] text-center text-white ">
                <Image
                  src={rambo}
                  alt="rambo"
                  className="items-start w-[5rem] h-[5rem] mb-6  border-[0.1875rem] border-white rounded-[32%] max-w-full align-middle inline-block"
                />
                <div className="text-theborder flex flex-col">
                  <h5 className="text-xl font-sans font-semibold leading-[1.875rem]mt-6 mb-3 text-left">
                    “The project was successful”
                  </h5>
                  <p className="text-sandash font-sans text-lg leading-[1.6rem] mb-[0.9375rem] text-left">
                    They strive to come up with good design, and they focus on
                    all the right things. The quality of their work is high, and
                    all the deliverables are very well-organized and
                    professional.
                  </p>
                  <div className="text-left font-geomanistBold text-sandash text-xs leading-[1rem] font-bold tracking-[4px] uppercase">
                    <p>MICHAEL WEISFELD</p>
                  </div>
                  <div className="text-left mt-[0.3125rem] opacity-70 font-geomanist text-sandash text-xs leading-4 font-semibold">
                    Director of Digital Marketing @ National Funding
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
