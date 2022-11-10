import Image from "next/image";
import Link from "next/link";

// import the library
import { library } from "@fortawesome/fontawesome-svg-core";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
  return (
    <div className="bg-banner z-50 fixed left-0 top-0 right-0 overflow-hidden w-full">
      <div className="flex justify-center llg:justify-between space-x-5  items-center ml-6 mr-2 max-w-[312.5rem] bg-transparent">
        <Link href="/" className="py-5 px-[0.9375rem]">
          <Image
            src="/assets/vectors/Cozy_logo_canvas.svg"
            alt=""
            width={100}
            height={68.66}
          />
        </Link>
        <div className="block llg:hidden text-sandash p-[1.125rem]">
          <FontAwesomeIcon icon={faBars} size="2x" />
        </div>
        <div className="hidden llg:block">
          <ul className="flex items-center  ">
            <Link
              href="/getCozy"
              className="text-sandash text-[1.5625rem] font-semibold font-sans leading-[1.5625rem] py-7 px-4 hover:text-cameo transition ease-in-out delay-150 hover:-translate-y-1 hover:text-Stone duration-300"
            >
              <li>Get Cozy</li>
            </Link>
            <Link
              href="/whatWeDo"
              className="text-sandash text-[1.5625rem] font-semibold font-sans leading-[1.5625rem] py-7 px-4 hover:text-cameo transition ease-in-out delay-150 hover:-translate-y-1 hover:text-Stone duration-300"
            >
              <li>What we do</li>
            </Link>
            <Link
              href="/ourWork"
              className="text-sandash text-[1.5625rem] font-semibold font-sans leading-[1.5625rem] py-7 px-4 hover:text-cameo transition ease-in-out delay-150 hover:-translate-y-1 hover:text-Stone duration-300"
            >
              <li>Our work</li>
            </Link>
            <Link
              href="/theBlog"
              className="text-sandash text-[1.5625rem] font-semibold font-sans leading-[1.5625rem] py-7 px-4 hover:text-cameo transition ease-in-out delay-150 hover:-translate-y-1 hover:text-Stone duration-300"
            >
              <li>The blog</li>
            </Link>
            <Link
              href="/sayHi"
              className="text-sandash text-[1.5625rem] font-semibold font-sans leading-[1.5625rem] py-7 px-4 hover:text-cameo transition ease-in-out delay-150 hover:-translate-y-1 hover:text-Stone duration-300"
            >
              <li>Say hi</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
