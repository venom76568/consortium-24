"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Tab } from "@headlessui/react";
import { classNames } from "@/components/utils/helper";
import Link from "next/link";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Cursor from "@/components/Cursor";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


import karthik_sir from "../../public/assets/advisory/karthik_sir.png";
import bhatt_sir from "../../public/assets/advisory/bhatt_sir.png";
import director from "../../public/assets/advisory/director.jpg";
import ratnesh_sir from "../../public/assets/team/ratnesh_sir.jpeg";
import chandra_sir from "../../public/assets/team/chandra_sir.jpg";

import agasti_sir from "../../public/assets/team/agasti_sir.jpeg";
import bhosale_sir from "../../public/assets/team/bhosale_sir.jpg";




import anush1 from "../../public/assets/team/Anushka25.jpg";

import prashant from "../../public/assets/team/Prashant.jpg";


import sram from "../../public/assets/team/Sram.jpeg";
import raksh from "../../public/assets/team/Rkashit.jpg";
import princ from "../../public/assets/team/princ.jpg";
import chavan from "../../public/assets/team/chavan.jpeg";
import sahil from "../../public/assets/team/Sahils.jpeg";
import arja from "../../public/assets/team/arja.jpeg";
import Aryan from "../../public/assets/team/AryanSingh.jpg";
import arpit from "../../public/assets/team/Arpi.png";
import prgya from "../../public/assets/team/Pragya.jpeg";
import mohit from "../../public/assets/team/mohit.jpg";
import dhruv from "../../public/assets/team/Dhrooooov.jpg";
import tanisha from "../../public/assets/team/Tanisha.jpg";
import chayan from "../../public/assets/team/chayan.jpg";
import khatri from "../../public/assets/team/khatri.jpg";

import anshul from "../../public/assets/team/Anshul.jpg";
import tanvi from "../../public/assets/team/tanvi.jpg";
import bhakti from "../../public/assets/team/bhakti.jpg";
import abhijeet from "../../public/assets/team/abhijeet.jpg";
import anurag from "../../public/assets/team/anurag1.jpeg";
import rohit2 from "../../public/assets/team/rohit2.jpg";
import apurva from "../../public/assets/team/apurva.jpg";
import sudhanshu from "../../public/assets/team/sudhanshu.jpg";
import aquib from "../../public/assets/team/aquib.jpg";
import anuj from "../../public/assets/team/anuj.jpg";
import varad from "../../public/assets/team/varad.jpg";
import kaushik from "../../public/assets/team/kaushik.jpg";
import mayank from "../../public/assets/team/mayank.jpg";
import harsh2 from "../../public/assets/team/harsh2.jpeg";
import sourav from "../../public/assets/team/sourav.png";

export default function Team() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [members] = React.useState({
    Admin: [
      {
        id: 0.1,
        title: "Dr. P. L. Patel",
        position: "Director, VNIT",
        image: director,
        show: true,
        linkedin: undefined,
        phone: undefined,
        mail: undefined,
      },
      /*{
        id: 0.2,
        title: "Dr. R. Kumar",
        position: "Dean Student Welfare, VNIT",
        image: ratnesh_sir,
        show: true,
        linkedin: undefined,
        phone: undefined,
        mail: undefined,
      },
      {
        id: 0.3,
        title: "Dr. G. Chandra",
        position: "Assoc. Dean Student Activity & Sports, VNIT",
        image: chandra_sir,
        show: true,
        linkedin: undefined,
        phone: undefined,
        mail: undefined,
      },
      {
        id: 0.4,
        title: "Dr. S. S. Bhat",
        position: "Advisory",
        image: bhatt_sir,
        show: true,
        linkedin: undefined,
        phone: undefined,
        mail: undefined,
      },*/
      {
        id: 0.5,
        title: "Dr. Amrut Agasti",
        position: "Professor Incharge",
        image: agasti_sir,
        show: true,
        linkedin: undefined,
        phone: undefined,
        mail: undefined,
      },
      {
        id: 0.6,
        title: "Dr. Ashish P. Khatri",
        position: "Professor Incharge",
        image: khatri,
        show: true,
        linkedin: undefined,
        phone: undefined,
        mail: undefined,
      },
      {
        id: 0.7,
        title: "Dr. Chayan Das",
        position: "Professor Incharge",
        image: chayan,
        show: true,
        linkedin: undefined,
        phone: undefined,
        mail: undefined,
      },
    ],
    Core: [
      {
        
        id: 1,
        title: "Abhijeet Singh",
        position: "President",
        image: abhijeet,
              show: true,
        linkedin: "https://www.linkedin.com/in/abhijeet-singh-as1510",
        mail: "abhijeettsingh2715@gmail.com",
        phone: "09106392134",
      },
      {
        id: 2,
        title: "Tanvi Malode",
        position: "Vice President",
        image: tanvi,
        show: true,
        linkedin: "https://www.linkedin.com/in/tanvi-malode-5744a4258",
        mail: "malodetanvi01@gmail.com",
        phone: "9096779472",
      },
      {
        id: 3,
        title: "Prashant T Labde",
        position: "Treasurer",
        image: prashant,
        show: true,
        linkedin: "https://www.linkedin.com/in/prashanttlabde",
        mail: "Prashantlabade108@gmail.com",
        phone: "7499995479",
      },
      {
        id: 4,
        title: "K D Sriram",
        position: "Head of Corporate Communications",
        image: sram,
        show: true,
        linkedin: "https://www.linkedin.com/in/dhana-sriram-katta-961b6a335",
        mail: "kdsriram.11@gmail.com",
        phone: "9130692448",
      },
      {
        id: 5,
        title: "Anushka Kumari",
        position: "Head of Corporate Communications",
        image: anush1,
        show: true,
        linkedin: "https://www.linkedin.com/in/anushkak0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        mail: "anushkak0954@gmail.com",
        phone: "8779165100",
      },
      {
  id: 6,
  title: "Rakshit Singhvi",
  position: "Head of Corporate Communications",
  image: raksh,
  show: true,
  linkedin: "https://www.linkedin.com/in/rakshit-singhvi-75252a239/",
  mail: "rakshitsinghvi2005@gmail.com",
  phone: "9702696983",
},
{
  id: 7,
  title: "Prince Kumar",
  position: "Head of Brand Marketing",
  image: princ,
  show: true,
  linkedin: "https://www.linkedin.com/in/prince-nirala-201546284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  mail: "princet905624@gmail.com",
  phone: "9878259975",
},
{
  id: 8,
  title: "Saurabh Chavan",
  position: "Head of Brand Marketing",
  image: chavan,
  show: true,
  linkedin: "",  // no LinkedIn link provided
  mail: "chavansaurabh782@gmail.com",
  phone: "7841953918",
},
{
  id: 9,  
  title: "Sahil Shetty",
  position: "Head Of Public Relations",
  image: sahil,
  show: true,
  linkedin: "https://www.linkedin.com/in/sahillshetty",
  mail: "shetty.sahil2006@gmail.com",
  phone: "9137702898",
},

{
  id: 10,
  title: "Aarja Kaur Wadhwa",
  position: "Head Of Public Relations",
  image: arja,
  show: true,
  linkedin: "https://www.linkedin.com/in/aarja-kaur-wadhwa-773679365?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  mail: "aarjakaurw@gmail.com",
  phone: "8767042611",
},

{
  id: 11,
  title: "Aryan Singh",
  position: "Head of Technical Affairs",
  image: Aryan,
  show: true,
  linkedin: "https://www.linkedin.com/in/aryan-singh0811",
  mail: "aryansingh81104@gmail.com",
  phone: "7985447278",
},
{
  id: 12, // assuming next id
  title: "Pragya Chakravarty",
  position: "Head of Operations and Planning",
  image: prgya,
  show: true,
  linkedin: "https://www.linkedin.com/in/pragya-chakravarty-a82209327",
  mail: "pragyac09@gmail.com",
  phone: "9769091274",
},
{
  id: 13, // assuming next id
  title: "Arpit Sahu",
  position: "Head of Operations and Planning",
  image: arpit,
  show: true,
  linkedin: "https://www.linkedin.com/in/arpit-sahu-894058288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  mail: "arpit.shahu827@gmail.com",
  phone: "7897416094",
},
{
  id: 14, // assuming next id
  title: "Mohit Chavan",
  position: "Head of Operations and Planning",
  image: mohit,
  show: true,
  linkedin: "https://www.linkedin.com/in/mohit-chavan-5188761b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  mail: "mohitchavan917@gmail.com",
  phone: "9322010629",
},
{
  id: 15, // example id, update as needed
  title: "Dhroov Jindal",
  position: "Head of Growth & Partnerships",
  image: dhruv,
  show: true,
  linkedin: "https://linkedin.com/in/dhroov-jindal",
  mail: "dhroovjindal@gmail.com",
  phone: "8950674313",
},
{
  id: 16, // example id, update as needed
  title: "Tanisha Kanchan",
  position: "Head of Growth & Partnerships",
  image: tanisha,
  show: true,
  linkedin: "https://www.linkedin.com/in/tanisha-kanchan?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  mail: "tanishakanchan20@gmail.com",
  phone: "9695449226",
},













      



    ],
    Advisory: [
      {
        id: 3,
        title: "Anshul Mukati",
        position: "Treasurer",
        image: anshul,
        show: true,
        linkedin: "https://www.linkedin.com/in/anshul-mukati-643a15285",
        mail: "anshulmukati2021@gmail.com",
        phone: "9479402002",
      },
      
      {
        id: 5,
        title: "Rohit Shrivas",
        position: "Head of Operations & Planning",
        image: rohit2,
        show: true,
        linkedin: "Rohit Shrivas",
        mail: "rohitshrivas453@gmail.com",
        phone: "7440391889",
      },
      
      {
        id: 7,
        title: "Harsh Agrawal",
        position: "Head of Technical Affairs",
        image: harsh2,
        show: true,
        linkedin: "https://www.linkedin.com/in/harsh-agrawal-1o0",
        mail: "hagrawal560@gmail.com",
        phone: "8805214581",
      },
      {
        id: 8,
        title: "Bhakti Umarkar",
        position: "Head of Brand Marketing",
        image: bhakti,
        show: true,
        linkedin: "https://www.linkedin.com/in/bhakti-umarkar-101754282",
        mail: "bhaktiumarkar497@gmail.com",
        phone: "9552990692",
      },
      {
        id: 9,
        title: "Anurag Tiwari",
        position: "Head of Brand Marketing",
        image: anurag,
        show: true,
        linkedin:
          "https://www.linkedin.com/in/anurag-tiwari-172a59250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        mail: "tiwanurag44@gmail.com",
        phone: "7572041766",
      },
      {
        id: 10,
        title: "Apurva Ugale",
        position: "Head of Corporate Communications",
        image: apurva,
        show: true,
        linkedin: "https://www.linkedin.com/in/apurva-ugale-3964b1267",
        mail: "bt22mme018@vnit.students.ac.in",
        phone: "8208874080",
      },
      {
        id: 11,
        title: "Sudhanshu Tiwari",
        position: "Head Of Corporate Communications",
        image: sudhanshu,
        show: true,
        linkedin: "https://www.linkedin.com/in/sudhanshu-tiwari-843ba525b",
        mail: "sudhanshutiwari4117@gmail.com",
        phone: "9130692448",
      },
      {
        id: 12,
        title: "Aquib Iqbal Shaikh",
        position: "Head Of Public Relations",
        image: aquib,
        show: true,
        linkedin: "https://www.linkedin.com/in/aquib-iqbal-shaikh-042504253",
        mail: "aquibshaikh200215@gmail.com",
        phone: "8581930601",
      },
      {
        id: 14,
        title: "Anuj Singh",
        position: "Head of Public Relations",
        image: anuj,
        show: true,
        linkedin: "https://www.linkedin.com/in/anujsingh5",
        mail: "anujsingh.442211@gmail.com",
        phone: "9373765481",
      },
      {
        id: 15,
        title: "Mayank Gupta",
        position: "Client Services and Partnership Director",
        image: mayank,
        show: true,
        linkedin: "https://www.linkedin.com/in/mayank-gupta-mak1708/",
        mail: "mayankgupta170804@gmail.com",
        phone: "9326060530",
      },
      {
        id: 16,
        title: "Varad nilawar ",
        position: "Consulting Director",
        image: varad,
        show: true,
        linkedin: "https://www.linkedin.com/in/varad-nilawar-9630a9202",
        mail: "Varadnilawar23@gmail.com",
        phone: "86684 54798 ",
      },
      {
        id: 17,
        title: "Sourav Vishwakarma",
        position: "Client Services and Partnership Director",
        image: sourav,
        show: true,
        linkedin: "https://www.linkedin.com/in/souravish",
        mail: "its.souravish@gmail.com",
        phone: "7354651575",
      },
      {
        id: 18,
        title: "Kaushik kumar Reddyshetty",
        position: "Consulting Director",
        image: kaushik,
        show: true,
        linkedin: "https://www.linkedin.com/in/kaushik-reddyshetty-2b4b80229",
        mail: "kaushikreddyshetty123@gmail.com",
        phone: "9063060617",
      },
    ],
  });

  gsap.registerPlugin(ScrollTrigger);
  gsap.config({ nullTargetWarn: false });

  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const { orientation, history } = window;

    const result =
      typeof orientation === "undefined" &&
      navigator.userAgent.indexOf("IEMobile") === -1;
    history.scrollRestoration = "manual";

    setIsDesktop(result);
  }, [isDesktop]);

  const [activeTab, setActiveTab] = useState(null);

  const handleClick = (tab: any) => {
    setActiveTab(tab === activeTab ? null : tab);
  };

  const defaultSelectedId = "default-selected-tab";
  // render() {
  return (
    <>
      <Cursor isDesktop={isDesktop} />
      <Navbar />
      <div className="bg-red-800 bg-[url('/assets/event_red2.png')] bg-blend-darken bg-cover bg-left bg-no-repeat">
        <div className="h-full bg-gradient-to-b from-[rgba(0,0,0,0.78)] via-[rgba(0,0,0,0.72)] to-[rgb(0,0,0,1)]">
          <div className="w-full min-h-screen flex justify-center overflow-hidden">
            <div className="p-14 lg:p-6 mt-6">
              <div className="md:col-span-2 lg:col-span-3 justify-center items-center flex flex-col gap-6">
                <Tab.Group
                  selectedIndex={selectedIndex}
                  onChange={setSelectedIndex}
                >
                  <Tab.List className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-40 items-center justify-between max-w-xs md:max-w-5xl text-lg md:text-2xl lg:text-4xl font-semibold">
                    {Object.keys(members).map((member) => (
                      <Tab
                        key={member}
                        className={({ selected }) =>
                          classNames(
                            "uppercase text-transparent bg-clip-text bg-gradient-to-b from-[#FF2D34] to-[#D5242A] outline-none",
                            selected ? "" : "text-white"
                          )
                        }
                      >
                        {member.toUpperCase()}
                      </Tab>
                    ))}
                  </Tab.List>
                  <Tab.Panels className="mt-6">
                    {Object.values(members).map((memberGp, idx) => (
                      <Tab.Panel
                        key={idx}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20"
                      >
                        {memberGp.map((member, idx) => (
                          <>
                            {!member?.show ? (
                              <div key={idx} />
                            ) : (
                              // <div
                              //   key={idx}
                              //   className="shadow-[0_8px_40px_2px_rgba(255,45,52,0.15)] bg-black lg:scale-90"
                              // >
                              //   <div className="bg-black">
                              //     <div className="flex flex-col justify-center gap-6 h-72 overflow-clip">
                              //       <Image
                              //         src={member.image}
                              //         alt={member.title}
                              //         className="scale-[1.2] md:scale-[1.5] lg:scale-100 w-full"
                              //       />
                              //     </div>
                              //     <div className="flex flex-col justify-center items-center gap-2 p-4">
                              //       <span className="font-bold uppercase text-base md:text-lg lg:text-xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#FF2D34] to-[#D5242A]">
                              //         {member.title}
                              //       </span>
                              //       <div className="w-2/3 h-[0.02rem] bg-[#ffff] my-1" />
                              //       {member.position && (
                              //         <span className="font-medium text-xs xl:text-base text-center text-[#949494]">
                              //           {member.position}
                              //         </span>
                              //       )}
                              //       <div className="flex justify-center gap-2">
                              //         {member.linkedin && (
                              //           <Link
                              //             href={`${member.linkedin}`}
                              //             target="_blank"
                              //           >
                              //             <svg
                              //               className="h-6 w-6 lg:h-7 lg:w-7 ml-4 sm:ml-0"
                              //               viewBox="0 0 43 43"
                              //               fill="none"
                              //               xmlns="http://www.w3.org/2000/svg"
                              //             >
                              //               <path
                              //                 d="M21.5 0C9.62573 0 0 9.62573 0 21.5C0 33.3743 9.62573 43 21.5 43C33.3743 43 43 33.3743 43 21.5C43 9.62573 33.3743 0 21.5 0ZM16.237 30.4113H11.8832V16.4005H16.237V30.4113ZM14.0332 14.6805C12.6581 14.6805 11.769 13.7062 11.769 12.5014C11.769 11.2718 12.685 10.3267 14.0892 10.3267C15.4934 10.3267 16.3534 11.2718 16.3803 12.5014C16.3803 13.7062 15.4934 14.6805 14.0332 14.6805ZM32.138 30.4113H27.7843V22.6467C27.7843 20.8393 27.1527 19.612 25.5783 19.612C24.3756 19.612 23.6612 20.4429 23.3454 21.2424C23.229 21.5269 23.1998 21.93 23.1998 22.3309V30.4091H18.8439V20.8684C18.8439 19.1193 18.7879 17.6569 18.7296 16.3982H22.5123L22.7116 18.3444H22.799C23.3723 17.4307 24.7765 16.0824 27.1258 16.0824C29.9903 16.0824 32.138 18.0018 32.138 22.1271V30.4113Z"
                              //                 fill="#FF2D34"
                              //               />
                              //             </svg>
                              //           </Link>
                              //         )}
                              //         {member.mail && member.phone && (
                              //           <div className="text-white text-[10px] lg:text-[14px] w-3/4 lg:w-full">
                              //             <div className="grid grid-rows-2 gap-0 justify-items-start">
                              //               <Link
                              //                 href={`mailto:${member.mail}`}
                              //                 target="_blank"
                              //               >
                              //                 {member.mail}
                              //               </Link>
                              //               <Link
                              //                 href={`tel:${member.phone}`}
                              //                 target="_blank"
                              //               >
                              //                 +91 {member.phone}
                              //               </Link>
                              //             </div>
                              //           </div>
                              //         )}
                              //       </div>
                              //     </div>
                              //   </div>
                              // </div>
                              <div
                                key={idx}
                                className="bg-black gap-8 flex-wrap flex justify-center items-center"
                              >
                                <div className="w-64 h-82 p-2 bg-whilte rounded-lg transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl relative">
                                  <div className="absolute bg-[#d5242a] w-full h-32  top-0 right-0"></div>

                                  {/* <!-- Image --> */}
                                  <div className="flex justify-center mt-4">
                                    <Image
                                      src={member.image}
                                      alt=""
                                      className="h-52 w-52 rounded-full object-cover border-[#d5242a] z-10 hover:scale-105 hover:duration-150"
                                      width="210 "
                                    />
                                  </div>

                                  <div className="p-2 mb-3 hover:static">
                                    {/* <!-- NAME --> */}
                                    <div>
                                      <h2 className="font-extrabold text-lg mb-2 z-10 ">
                                        {member.title}
                                      </h2>
                                    </div>

                                    {/* <!-- post --> */}
                                    <div>
                                      <p className="text-sm text-gray-400">
                                        {member.position}
                                      </p>
                                    </div>
                                    {member.mail && member.phone && (
                                      <div className="flex mt-3  gap-2 ml-2 justify-evenly	">
                                        {/* Linkedin */}
                                        <div>
                                          <Link
                                            href={`${member.linkedin}`}
                                            target="_blank"
                                          >
                                            <FaLinkedin
                                              size="1.8rem"
                                              className="hover:scale-110 hover:duration-150"
                                            />
                                          </Link>
                                        </div>

                                        {/* email */}
                                        <div>
                                          <Link
                                            href={`mailto:${member.mail}`}
                                            target="_blank"
                                          >
                                            <MdEmail
                                              size="1.8rem"
                                              className="hover:scale-110 hover:duration-150 "
                                            />
                                          </Link>
                                        </div>

                                        {/* phone number */}
                                        <div>
                                          <Link
                                            href={`tel:${member.phone}`}
                                            target="_blank"
                                          >
                                            <FaPhone
                                              size="1.8rem"
                                              className="hover:scale-110 hover:duration-150"
                                            />
                                          </Link>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            )}
                          </>
                        ))}
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
  // }
}
