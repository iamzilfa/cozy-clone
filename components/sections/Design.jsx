import Image from "next/image";
import lockup from "../../public/assets/vectors/lockup_reverse.svg";

export default function Design() {
  return (
    <div className="">
      <div className="relative overflow-hidden lvlang">
        <video
          src="/assets/images/c_Black And White Video Of Man Infront Of The Computer-transcode (2).mp4"
          autoPlay
          muted
          loop
          className="absolute -z-10"
        ></video>
        <div className="flex items-center justify-center gap-20">
          <div>
            <Image
              src={lockup}
              alt="logo"
              className="w-[7.2831rem] h-[6.2219rem]"
            />
          </div>
          <div className="w-[45%] py-[8.75rem]">
            <h2 className="font-sans text-sandash text-5xl leading-[1.1em] mt-12 mb-6 font-bold ">
             <span className="italic">Psst...</span> 
              <br />
              are you a designer?
            </h2>
            <p className="font-sans text-sandash leading-[1.6em] font-normal text-xl">
              Consider joining our <span className="text-pinklove">San Diego Design Designers</span> group. More than
              700 people, we meet online via Slack and in person at social
              events around the city. It’s a great opportunity to share ideas,
              get inspired, find support, and celebrate great design.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
