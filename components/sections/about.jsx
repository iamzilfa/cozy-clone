import Image from "next/image";
import Button from "../ui/Button";

export default function About() {
  return (
    <div className="abt h-full">
      <div className="mx-auto container">
        <div className="flex flex-col lg:flex-row py-48">
          <div className="flex flex-col pr-20 pl-20">
            <p className="mb-4 font-geomanistBold text-anothergray text-3xl leading-[1em] font-bold tracking-wide uppercase">
              🌴🐻🇺🇸
            </p>
            <div>
              <h1 className="mb-2 mt-14 text-[4.375rem] font-frauncesSemiBold font-bold leading-[1.1em] ">
                Get Cozy
              </h1>
              <h3 className="text-lightorange font-normal text-[2.3125rem] leading-[3.375rem]">
                Design & digital marketing <br /> in San Diego, California
              </h3>
            </div>
            <div className="mt-10 font-normal text-[1.375rem] leading-[1.6em] font-sans mb-[0.9375rem] text-anothergray">
              <p className="mb-5">
                We’re an award-winning design shop based in South Park, San
                Diego. We efficiently combine the best parts of user experience
                (UX) with creative design and execution to create effective
                collateral that connects with the human beings who interact with
                them. 🤯 <br />
              </p>
              <p>
                No epic quests for inspiration. Just pragmatic collaboration and
                efficient results from big-agency graduates with decades of
                experience.
              </p>
            </div>
            <div className="w-full mt-10">
              <Button primary>why we do what we do</Button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row container mt-20 mx-auto sm:space-x-20 lg:space-x-4 items-center gap-8 sm:gap-16 justify-center  lg:mt-0">
            <div className="space-y-8">
              <div>
                <Image
                  src={"/assets/images/Clutch Global .webp"}
                  alt=""
                  width={140}
                  height={140}
                />
              </div>
              <div>
                <Image
                  src={
                    "/assets/images/ca_san-diego_user-experience_2020_transparent.webp"
                  }
                  alt=""
                  width={140}
                  height={140}
                />
              </div>
              <div>
                <Image
                  src={
                    "/assets/images/SuperbCompanies Leader Award 2021 Digital Marketing.webp"
                  }
                  alt=""
                  width={140}
                  height={140}
                />
              </div>
              <div>
                <Image
                  src={
                    "/assets/images/b_Best-Web-Design-Companies-Badge-2-300x300.webp"
                  }
                  alt=""
                  width={140}
                  height={140}
                />
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex items-center flex-col gap-1">
                <div>
                  <Image
                    src="/assets/vectors/Vector69Com.svg"
                    alt=""
                    width={140}
                    height={52.84}
                  />
                </div>
                <div className="text-seaworthy text-sm font-bold font-sans">
                  BBB rating: A+
                </div>
              </div>
              <div>
                <Image
                  src={
                    "/assets/images/Web-Design-Services-San-Diego-California.webp"
                  }
                  alt=""
                  width={140}
                  height={140}
                />
              </div>
              <div>
                <Image
                  src={"/assets/images/verified-agency-vista-badge.webp"}
                  alt=""
                  width={140}
                  height={140}
                />
              </div>
              <div>
                <Image
                  src={"/assets/images/new-badge20211005-28345-8tkcic.webp"}
                  alt=""
                  width={140}
                  height={140}
                />
              </div>
              <div>
                <Image
                  src={"/assets/images/Design-Rush-Accredited-Badge.webp"}
                  alt=""
                  width={140}
                  height={140}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
