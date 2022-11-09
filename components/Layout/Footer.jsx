import Image from "next/image";
import Link from "next/link";

// import the library
import { library } from "@fortawesome/fontawesome-svg-core";

// get our fontawesome imports
import {
  faTwitter,
  faFacebookF,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faPlay, faStar, faHeart } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <div className="bg-sandash">
      <div className="mx-auto container">
        <div className="flex flex-col pt-10 pb-6 gap-6 lg:gap-20">
          <div className="md:flex items-center justify-between">
            <div className="flex flex-col items-center gap-10 md:flex-row">
              <div>
                <div></div>
                <Image
                  src={"/assets/vectors/Cozy_logo_denim.svg"}
                  width={72.81}
                  height={50}
                  alt=""
                />
              </div>

              <ul className="flex flex-col items-center gap-2 md:gap-5 pb-10 md:pb-0 text-[0.8125rem] leading-5 font-sans font-bold text-fieryOrange md:flex-row">
                <Link href="#">
                  <li>About</li>
                </Link>
                <Link href="#">
                  <li>Services</li>
                </Link>
                <Link href="#">
                  <li>Work</li>
                </Link>
                <Link href="#">
                  <li>Blog</li>
                </Link>
                <Link href="#">
                  <li>Contact</li>
                </Link>
              </ul>
            </div>

            <div className="flex flex-col items-center lg:flex-row gap-7 md:gap-4">
              <div className="flex space-x-2">
                <div>
                  <Image
                    src="/assets/images/emoji@2x.webp"
                    alt=""
                    width={20}
                    height={20}
                  />
                </div>
                <p className="text-pinklove font-sans font-normal  text-[0.8125rem] ml-2">
                  San Diego Digital Designers
                </p>
              </div>
              <div className="flex items-center space-x-2 lg:pt-0">
                <Link
                  href="#"
                  className="w-6 h-6 bg-lightBlue rounded flex justify-center items-center"
                >
                  <FontAwesomeIcon icon={faTwitter} size="xs" color="white" />
                </Link>
                <Link
                  href="#"
                  className="w-6 h-6 bg-turchesse rounded flex justify-center items-center"
                >
                  <FontAwesomeIcon
                    icon={faLinkedinIn}
                    size="xs"
                    color="white"
                  />
                </Link>
                <Link
                  href="#"
                  className="w-6 h-6 bg-darkBlue rounded flex justify-center items-center"
                >
                  <FontAwesomeIcon icon={faFacebookF} size="xs" color="white" />
                </Link>
                <Link
                  href="#"
                  className="w-6 h-6 bg-brightred rounded flex justify-center items-center"
                >
                  <FontAwesomeIcon icon={faInstagram} size="xs" color="white" />
                </Link>
                <Link
                  href="#"
                  className="w-6 h-6 bg-perisanred rounded flex justify-center items-center"
                >
                  <FontAwesomeIcon icon={faPlay} size="xs" color="white" />
                </Link>
                <Link
                  href="#"
                  className="w-6 h-6 bg-stell rounded flex justify-center items-center"
                >
                  <Image
                    src="/assets/vectors/clutch.svg"
                    alt=""
                    width={12}
                    height={12}
                  />
                </Link>
                <Link
                  href="#"
                  className="w-6 h-6 bg-seal rounded flex justify-center items-center"
                >
                  <FontAwesomeIcon icon={faEnvelope} size="xs" color="white" />
                </Link>
              </div>
            </div>
          </div>

          <div className="footerBorder  md:grid md:grid-cols-2 md:items-center lg:pt-4">
            <div className="flex flex-wrap pt-8  gap-10 ml-10 lg:ml-0 lg:mr-24">
              <div className="flex items-center flex-col gap-6">
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
                  src="/assets/images/bod-new_shield-logo-member-p-500.webp"
                  alt=""
                  width={140}
                  height={73.35}
                />
              </div>
              <div className="flex flex-col gap-20 lg:flex-row ">
                <div className="bg-white h-[3.125rem] border border-concretegray rounded-bl-[1.5625rem] rounded-tr-[1.5625rem]  w-[13.3125rem]">
                  <div className="flex items-center space-x-2">
                    <div>
                      <Link
                        href="#"
                        className="bg-justgray border rounded-bl-[50%] rounded-tr-[50%]  py-[0.625rem] pr-[0.625rem] pl-[0.4375rem] w-[3.1875rem] h-[3.125rem] flex justify-center items-center"
                      >
                        <Image
                          src="/assets/vectors/clutch.svg"
                          alt=""
                          width={23}
                          height={25}
                        />
                      </Link>
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <p className="text-jungleGreen text-xl leading-5 font-robot font-extralight ">5.0</p>
                        <ul className="flex items-center space-x-1">
                          <Link href="#">
                            <li>
                              <FontAwesomeIcon icon={faStar} color="red" />
                            </li>
                          </Link>
                          <Link href="#">
                            <li>
                              <FontAwesomeIcon icon={faStar} color="red" />
                            </li>
                          </Link>
                          <Link href="#">
                            <li>
                              <FontAwesomeIcon icon={faStar} color="red" />
                            </li>
                          </Link>
                          <Link href="#">
                            <li>
                              <FontAwesomeIcon icon={faStar} color="red" />
                            </li>
                          </Link>
                          <Link href="#">
                            <li>
                              <FontAwesomeIcon icon={faStar} color="red" />
                            </li>
                          </Link>
                        </ul>
                      </div>
                      <ul>
                        <Link
                          href="#"
                          className="text-jungleGreen text-[0.6875rem] "
                        >
                          <li>Based on 16 Clutch reviews</li>
                        </Link>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col mt-16 gap-10 lg:flex-row md:items-centermt-16 md:mt-20 lg:mt-0 md:space-x-2">
              <div className="">
                <p className="text-center text-anothergray font-sans font-normal text-xs">
                  Made with{" "}
                  <span>
                    <Link href="#">
                      <FontAwesomeIcon icon={faHeart} color="red" size="xs" />
                    </Link>
                  </span>{" "}
                  in beautiful, sunny San Diego. ©2021
                </p>
              </div>
              <ul className="flex items-center text-xs cursor-pointer text-fieryOrange justify-center space-x-10 md:space-x-5 font-bold font-sans">
                <Link href="#">
                  <li>Privacy</li>
                </Link>
                <Link href="#">
                  <li>Photo credit</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
