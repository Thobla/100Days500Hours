import Image from "next/image"
import Link from "next/link"
import Downloads from "./Components/Downloads"
import Images from "./Components/Images"

export default function Sindre(){
    return (
        <div className = "flex flex-wrap flex-col items-center  w-full">
            <div className = "flex flex-row object-contain flex-grow h-20">
                <Image src="/Jorden-logo.png"
                width={1000} height={1000}
                alt="Jorden"
                className="object-contain w-full h-full"
                />
                <Image src="/Sindre-logo.png"
                width={1000} height={1000}
                alt="Jorden"
                className="object-contain w-full h-full"
                />
            </div>
            <Downloads projectId={2}/>

            <div className="ml-10 mr-10">
            <Images src="/sindre.gif" alt="Sindre digging a nice hole"/>
                <p className="pt-2">Have you ever wanted to dig yourself down to the core of the earth? Well now you can---atleast virtually---
                <span className="block pt-2">
                Jorden Sindre is a game developed in regards to Bakom Game Jam 2024, together with 
                <Link href="https://github.com/Neelzee">Neelzee, </Link>
                <Link href="https://github.com/MikalDr">MikalDr, </Link>
                <Link href="https://github.com/Kaspetti">Kaspetti, and </Link>
                <Link href="https://github.com/SeaDamm">SeaDamm</Link>
                </span>
                </p>
            </div>
        </div>
    )
}
