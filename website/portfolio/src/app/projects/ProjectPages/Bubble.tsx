import Image from "next/image"
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
