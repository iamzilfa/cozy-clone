import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-banner">
        <div className="flex justify-between items-center ml-6 mr-2 max-w-[312.5rem] bg-transparent">
            <div className="py-5 px-[0.9375rem]">
                <img src="/assets/vectors/Cozy_logo_canvas.svg" alt=""  className="w-[100px] h-[68.66px]"/>
            </div>
            <ul className="flex items-center ">
                <Link href="" className="text-sandash text-[1.5625rem] font-semibold leading-[1.5625rem] py-7 px-4 hover:text-cameo transiti"><li>Get Cozy</li></Link>
                <Link href="" className="text-sandash text-[1.5625rem] font-semibold leading-[1.5625rem] py-7 px-4 hover:text-cameo"><li>What we do</li></Link>
                <Link href="" className="text-sandash text-[1.5625rem] font-semibold leading-[1.5625rem] py-7 px-4 hover:text-cameo"><li>Our work</li></Link>
                <Link href="" className="text-sandash text-[1.5625rem] font-semibold leading-[1.5625rem] py-7 px-4 hover:text-cameo"><li>The blog</li></Link>
                <Link href="" className="text-sandash text-[1.5625rem] font-semibold leading-[1.5625rem] py-7 px-4 hover:text-cameo"><li>Say hi</li></Link>
            </ul>
        </div>
    </div>
  )
}
