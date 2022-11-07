import Image from "next/image";

export default function Header() {
  return (
    <div className="bg-headbg h-[64rem] px-6 py-[8.75rem]">
      <div className="flex">
        <div className="mb-[1.875rem] w-full pr-[3.75rem]">
          <div className="mb-[1.875rem]">
            <h1 className="mb-5 py-[0.625rem] bg-cameo text-[5.625rem] font-black font-sans bg-noisebg lk">
              Your design team for the cost of a salary.
            </h1>
            <p className="mt-5 py-[0.625rem] text-[2.5rem] font-semibold bg-sandash bg-noisebg lk font-sans">
              Full-service design support that growing B2B and non-profit
              organizations need. Are you strained because you should have a
              design team but you don't?
            </p>
            <button>see how we work & what we can do</button>
          </div>
        </div>
        <div className="w-full h-full mt-[6.25rem]">
          <Image
            src={"/assets/images/headerbg.webp"}
            width={635.31}
            height={830}
            className="mt-[13.75rem]"
          />
        </div>
      </div>
    </div>
  );
}
