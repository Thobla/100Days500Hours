import Downloads from "./Components/Downloads"
import Images from "./Components/Images"

export default function Nalle(){
    return (
        <div className = "flex flex-wrap flex-col items-center  w-full">
            <div className = "flex flex-row object-contain flex-grow">
            <h1 className="text-5xl">Turbo Nalle</h1>
            </div>
            <Downloads projectId={5}/>
            <div className="ml-10 mr-10">
            <Images src="/nalle.gif" alt="Hell incarnate"/>
                <p className="pt-2">Have you ever experienced the loss of a loved one, a gunshot to your chest, 
                    or losing all your equity in crypto after buying into the hype? Well, none of that pain even 
                comes close to playing Turbo Nalle...
                <span className="block pt-2">
                    This project was a &quot;contribution&quot; to Bakom gamejam in 2022, and was the first gamejam that I---sadly---participated
                    in. This was done as a group project together with four friends, who---due to potential legal reprocussions---shall 
                    remain anonymous. It truly is a wonder how we managed to stay friends after its release...
                </span>
                </p>
            </div>
        </div>
    )
}
