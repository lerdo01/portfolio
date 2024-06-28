import { useState } from "react";
import { TbSocial } from "react-icons/tb";
import { MdWorkspacesFilled } from "react-icons/md";
import { SiPolymerproject } from "react-icons/si";
import { FiInstagram, FiYoutube } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs"
import { FaGithubAlt } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { CgSandClock } from "react-icons/cg";

import { AnimatePresence, motion } from "framer-motion";

export function NavBarMenuMobile() {

    const [menu, setMenu] = useState(false);

    const menuClick = () => {
        setMenu(old => !old)
    }

    return (
        <>

            <section className="z-30 fixed lg:hidden w-screen h-[130px] flex flex-col justify-start items-center">

                <div className={`z-30 flex h-[100px] justify-center items-end pb-2 w-full ${menu ? "bg-gray-500" : "bg-transparent"} duration-[0.8s]`}>
                    <img onClick={menuClick} className="absolute top-[0px] w-[75px] h-[75px]" src="/lerdo.png" alt="Lerdo IconLogo" />

                    <AnimatePresence>
                        {menu ? (
                            <>
                                <motion.nav initial={{ width: 0 }} animate={{ width: '100%' }} exit={{ width: 0 }} transition={{ duration: 0.8 }} className="w-full overflow-hidden">
                                    <ul className="flex flex-row justify-around items-center w-full">
                                        <li className="text-black flex justify-center gap-8 items-center text-lg"><TbSocial /></li>
                                        <li className="text-black flex justify-center gap-8 items-center text-lg"><MdWorkspacesFilled /></li>
                                        <li className="text-black flex justify-center gap-8 items-center text-lg"><SiPolymerproject /></li>
                                    </ul>
                                </motion.nav>

                                <motion.nav initial={{ height: 0, opacity: 0 }} animate={{ height: "115px", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.8 }} className={`absolute top-[100px] h-[115px] ${menu ? "bg-gray-600" : "bg-transparent"} duration-[0.8s] z-20 flex w-[100%] justify-around overflow-hidden`}>
                                    <ul className="flex flex-col justify-center items-center gap-4">
                                        <li className="flex justify-start"><a className="flex justify-start items-center gap-5" href="https://instagram.com/_isantos07"><FiInstagram /> Instagram</a></li>
                                        <li className="flex justify-start"><a className="flex justify-start items-center gap-5" href="https://x.com/_santosm7"><BsTwitterX /> X (Twitter)</a></li>
                                        <li className="flex justify-start"><a className="flex justify-start items-center gap-5" href="https://youtube.com/@lerdo01"><FiYoutube /> YouTube</a></li>
                                    </ul>
                                    <ul className="flex flex-col justify-center items-center gap-4">
                                        <li><a className="flex items-center gap-5" href="https://github.com/lerdo01"><FaGithubAlt /> GitHub</a></li>
                                        <li className="flex items-center gap-5"><AiOutlineClose className="text-red-500" /> L. B.</li>
                                        <li className="flex items-center gap-5"><AiOutlineClose className="text-red-500" />Prototype</li>
                                    </ul>
                                    <ul className="flex flex-col justify-center items-center gap-4">
                                        <li className="flex items-center gap-5"><CgSandClock className="text-yellow-600" />Mirichu</li>
                                        <li className="flex items-center gap-5"><AiOutlineClose className="text-red-500" />L. C. T. S.</li>
                                        <li className="flex items-center gap-5"><CgSandClock className="text-yellow-600" />W. G.</li>
                                    </ul>
                                </motion.nav>

                            </>
                        ) : null}
                    </AnimatePresence>

                </div>

            </section>

            <AnimatePresence>

                {menu ? (
                    <motion.div initial={{ height: 0 }} animate={{ height: "85vh" }} exit={{ height: 0 }} transition={{ duration: 0.8 }} onClick={() => { setMenu(false) }} className="lg:hidden z-20 absolute left-0 top-0 w-screen h-screen bg-gradient-to-b from-black to-black/25"></motion.div>
                ) : null}
            </AnimatePresence>

        </>
    )
}

export function NavBarMenuDesktop() {
    const [menu, setMenu] = useState(false);

    const menuClick = () => {
        setMenu(old => !old)
    }

    return (
        <>

            <AnimatePresence>
                {menu ? (
                    <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ width: 0 }} transition={{ duration: 0.8 }} onClick={() => { setMenu(false) }} className="hidden lg:block absolute h-[85vh] w-full bg-gradient-to-r from-black to-black/20 z-20"></motion.div>
                ) : null}
            </AnimatePresence>

            <section className="hidden lg:flex absolute left-0 flex-row items-start justify-start h-full w-[190px] z-30">

                <div className={`h-full w-1/2 ${menu ? "bg-gray-500" : "bg-transparent"} duration-[0.8s] flex flex-col items-center justify-center`}>
                    <img className="w-16 h-16" src="/lerdo.png" alt="Lerdo IconLogo" onClick={menuClick} />
                    <AnimatePresence>

                        {menu ? (
                            <>
                                <motion.nav initial={{ height: 0 }} animate={{ height: '83.3%' }} exit={{ height: 0 }} transition={{ duration: 0.8 }} className="h-5/6 overflow-hidden w-full">
                                    <ul className="flex flex-col h-full w-full items-center justify-around ">
                                        <li className="h-1/4 flex justify-center gap-8 items-center text-lg"><TbSocial /></li>
                                        <li className="h-1/4 flex justify-center gap-8 items-center text-lg"><MdWorkspacesFilled /></li>
                                        <li className="h-1/4 flex justify-center gap-8 items-center text-lg"><SiPolymerproject /></li>
                                    </ul>
                                </motion.nav>

                            </>) : null}
                    </AnimatePresence>

                </div>
                <AnimatePresence>

                    {menu ? (
                        <motion.nav initial={{ width: 0, opacity: 0 }} animate={{ width: "70%", opacity: 1 }} exit={{ width: 0, opacity: 0 }} transition={{ duration: 0.8 }} className="h-full w-1/2 overflow-hidden flex flex-col items-center justify-around pt-16 bg-gray-600">
                            <ul className="w-full flex flex-col justify-center items-center">
                                <li className="flex justify-start"><a className="flex justify-start items-center gap-5" href="https://instagram.com/_isantos07"><FiInstagram /> Instagram</a></li>
                                <li className="flex justify-start"><a className="flex justify-start items-center gap-5" href="https://x.com/_santosm7"><BsTwitterX /> X (Twitter)</a></li>
                                <li className="flex justify-start"><a className="flex justify-start items-center gap-5" href="https://youtube.com/@lerdo01"><FiYoutube /> YouTube</a></li>
                            </ul>

                            <ul className="w-full flex flex-col justify-center items-center">
                                <li><a className="flex items-center gap-5" href="https://github.com/lerdo01"><FaGithubAlt /> GitHub</a></li>
                                <li className="flex items-center gap-5"><AiOutlineClose className="text-red-500" /> L. B.</li>
                                <li className="flex items-center gap-5"><AiOutlineClose className="text-red-500" />Prototype</li>
                            </ul>

                            <ul className="w-full flex flex-col justify-center items-center">
                                <li className="flex items-center gap-5"><CgSandClock className="text-yellow-600" />Mirichu</li>
                                <li className="flex items-center gap-5"><AiOutlineClose className="text-red-500" />L. C. T. S.</li>
                                <li className="flex items-center gap-5"><CgSandClock className="text-yellow-600" />W. G.</li>
                            </ul>
                        </motion.nav>
                    ) : null}
                </AnimatePresence>


            </section >
        </>
    )

}