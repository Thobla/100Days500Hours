import Downloads from "./Components/Downloads"
import Images from "./Components/Images"

export default function Bubble(){
    return (
        <div className = "flex flex-wrap flex-col items-center  w-full">
            <div className = "flex flex-row object-contain flex-grow">
            <h1 className="text-5xl">To the Moon and Back</h1>
            </div>
            <Downloads projectId={1}/>
            <div className="ml-10 mr-10">
                <Images src="/bubble.gif" alt="gif of bubble game"/>
                <p className="pt-2">Love is in the air, but also in the sea and space. There is no love as 
                unexpected as that of a bubble and the moon. Will you help the bubble Bob reach his one 
                true love? If so, you should watch out for coral reefes, mermaids, and ?flying sharks???
                <span className="block pt-2">
                    To the Moon and Back was a game developed in regards to the global game jam of 2025, hosted at 
                    <a href="https://www.bakom.no/"> Bakom</a>. We were a diverse group of five, with three programmers
                    (me included), one power-point artist, and one musician. Out of the five game jams I have competed 
                    in, this is likely the most polished product (as it actually has a game-loop).
                </span>
                </p>
            </div>
        </div>
    )
}
