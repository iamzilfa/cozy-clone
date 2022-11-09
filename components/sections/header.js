import Image from "next/image";
import heroImage from "../../public/assets/images/headerbg.webp";
import Button from "../ui/Button";

export default function Header() {
  return (
    <>
      <div className="overflow-hidden">
        <div className="xl:h-[60rem] xl:min-h-auto bg-headbg">
          <div className="xl:relative mx-auto container px-6 max-w-[1200px] xl:max-w-[1400px] h-full min-h-[45rem] pt-0 w-full ">
            <div className="xl:grid xl:grid-cols-2 xl:h-[36.0625rem] w-full ">
              <div className="llg:mb-[1.875rem] px-[0.5rem]">
                <h1 className="text-6xl mb-5 py-[0.625rem] bg-cameo llg:text-[5.625rem] font-frauncesBlack mt-20 llg:leading-[6.1875rem] leadin-[4.125px] bg-noisebg lk">
                  Your design team for the cost of a salary.
                </h1>
                <p className="mb-14 mt-5 py-[0.625rem] llg:leading-[3.16875rem] leading-[1.3em] text-3xl opacity-80 tracking-wider mmd:text-[2.5rem] font-semibold bg-sandash bg-noisebg lk font-sans">
                  Full-service design support that growing B2B and non-profit
                  organizations need. Are you strained because you should have a
                  design team but you dont?
                </p>
                <div>
                  <Button
                    primary
                    className="bg-noisebg llg:relative llg:bottom-0 "
                  >
                    see how we work & what we can do
                  </Button>
                </div>
              </div>
              <div className="ssm:mt-[6.25rem] xl:absolute xl:-mr-[220px] xl:right-0 llg:w-[846px] mt-[3.75rem] -mb-[3.75rem] pt-0 ">
                <Image
                  src={heroImage}
                  className="xl:w-full xl:h-auto w-[22.8125rem] h-[22.6262rem] xl:min-w-[120%] mb-0 llg:mt-[13.75rem]"
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
