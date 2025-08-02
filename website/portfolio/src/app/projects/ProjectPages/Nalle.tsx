import Image from "next/image"
import Link from "next/link"

export default function Nalle(){
    return (
        <div className = "flex flex-wrap flex-col items-center  w-full">
            <div className = "flex flex-row object-contain flex-grow">
            <h1 className="text-5xl">Turbo Nalle</h1>
            </div>
            <div className="mt-10 ml-10 mr-10">
                <Image 
                    className="float-right w-2/5 h-2/5 ml-2"
                    src="/nalle.gif"
                    width={100}
                    height={100}
                    alt="Nalle.gif"/>
                <p className="pt-2">Have you ever experienced the loss of a loved one, a gunshot to your chest, 
                    or losing all your equity in crypto after buying into the hype? Well, none of that pain even 
                comes close to playing Turbo Nalle...
                <span className="block pt-2">
                    This project was a "contribution" to Bakom gamejam in 2022, and was the first gamejam that I---sadly---participated
                    in. This was done as a group project together with four friends, who---due to potential legal reprocussions---shall 
                    remain anonymous. It truly is a wonder how we managed to stay friends after its release...
                </span>
                </p>
            </div>
        </div>
    )
}
