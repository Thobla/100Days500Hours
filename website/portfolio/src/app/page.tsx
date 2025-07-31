import Image from 'next/image'
import Link from 'next/link';


function Parimg() {
    const mytest = "I am Thorgal Blanco";
    return (
        <div className = "flex w-1/1 align-center">
            <div className="flex-auto w-3/5">
                <p className=" ml-10 mt-20 text-4xl">I am Thorgal,
                <span className="block ml-6 text-blue-500 text-3xl">Developer and Nerd</span>
                <span className="block mt-10 text-2xl">Feel free to check out some of my personal projects in 
                the <Link className="text-blue-500" href="/Projects">Projects</Link> directory.
                </span>
                </p>
            </div>
            <Image className="flex-auto w-2/5 rounded-full object-cover m-6 border-5 border-blue-500" // aspect-square
            width = {100}
            height = {100}
            src = '/avatar.png'
            alt = 'Beautiful portrait of moi'/>
        </div>
        )
}

export default function Home() {
    return (
        <>
        <div className="flex w-1/1 align-center bg-black min-h-3">
            <p className="flex-auto text-white pb-5 pt-3 text-center text-4xl">Welcome to my website :)</p>
        </div>
        <Parimg/>
        </>
        )
}
