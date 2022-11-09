import Image from "next/image";
import Button from "../ui/Button";

export default function Header() {
  return (
    <>
      <div className="overflow-hidden">
        <div className="sm:mb-0 md:mt-12 h-full bg-headbg ">
          <div className="mx-auto container">``
            <div className="grid md:grid-cols-2 ">
              <div className="">
                <div className="mb-[1.875rem]">
                  <h1 className="text-6xl mb-5 py-[0.625rem] bg-cameo lg:text-[5.625rem] font-frauncesBlack mt-20 lg:leading-[6.1875rem] leadin-[4.125px] bg-noisebg lk">
                    Your design team for the cost of a salary.
                  </h1>
                  <p className="mb-14 mt-5 py-[0.625rem] leading-[3.16875rem] text-3xl opacity-80 tracking-widesr md:text-[2.5rem] font-semibold bg-sandash bg-noisebg lk font-sans">
                    Full-service design support that growing B2B and non-profit
                    organizations need. Are you strained because you should have
                    a design team but you dont?
                  </p>
                </div>
                <div>
                  <Button
                    primary
                    className="bg-noisebg lg:relative lg:bottom-0 "
                  >
                    see how we work & what we can do
                  </Button>
                </div>
              </div>
              <div className="w-full h-full mt-[6.25rem] pd-0 relative -mr-[7.5rem]">
                <Image
                  src={"/assets/images/headerbg.webp"}
                  width={635.31}
                  height={830}
                  className="mt-[13.75rem] "
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
