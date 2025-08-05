import Image from "next/image"
import Downloads from "./Components/Downloads"

export default function Chess(){
    return (
        <div className = "flex flex-wrap flex-col items-center  w-full">
            <div className = "flex flex-row object-contain flex-grow h-30">
                <Image src="/chessLogo.png"
                width={1000} height={1000}
                alt="Chess"
                className="object-contain w-full h-full"
                />
            </div>
            <Downloads projectId={3}/>
            <div className="mt-10 ml-10 mr-10">
                <Image 
                    className="float-right w-2/5 h-2/5 ml-2"
                    src="/chess.gif"
                    width={100}
                    height={100}
                    alt="Sindre.gif"/>
                <p className="pt-2">Ever since its beta release in the 6th century, chess has not received any major 
                updated or patches. Atleast this was the case until april of 2022, when chess was re-released 
                as a 2d-platformer under its new name "corrupted chess"
                <span className="block pt-2">
                    Corrupted chess was a group project developed in regards to the class INF112-Introduction to system 
                    development at the university of Bergen. Our group consisted of six people, each with our own main 
                    responsibility---my responsibility was code and quality. The development was collectively managed, and 
                    overall a great experience to be a part of.
                </span>
                </p>
            </div>
        </div>
    )
}
