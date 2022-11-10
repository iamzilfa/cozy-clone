import Link from "next/link";

export default function whatWeDo() {
  return (
    <div className="h-screen flex flex-col items-center  justify-center gap-3">
    <h1 className=" text-fieryOrange font-frauncesBlack text-6xl">
      What We Do Page...
    </h1> 
    <p className="text-gray-400 text-lg">Go back to <Link href="/" className="underline text-blue-700 font-frauncesBoldItalic">HomePage</Link></p>
  </div>
  )
}
