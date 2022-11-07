import Image from "next/image";

export default function Header() {
  return (
    <div className="">
      <div className="flex justify-between">
        <div className="">
          <h1>Your design team for the cost of a salary.</h1>
          <p>
            Full-service design support that growing B2B and non-profit
            organizations need. Are you strained because you should have a
            design team but you don't?
          </p>
          <button>see how we work & what we can do</button>
        </div>
        <div className="w-full h-full mt-[6.25rem] -mr-[7.5rem]">
          <Image
            src={"/assets/images/headerbg.webp"}
            width={635.31}
            height={830} className="min-w-[1.2rem] max-w-[1.2rem] mb-0"
          />
        </div>
      </div>
    </div>
  );
}
