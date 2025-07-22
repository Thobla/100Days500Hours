import Image from 'next/image'


function Parimg() {
    const mytest = "test";
    return (
        <div className = "flex w-1/1 align-center bg-blue-300">
            <p className="flex-auto w-2/3 bg-orange-300 text-center text-4xl">{mytest}</p>
            <Image className="flex-auto w-1/3 rounded-full object-cover" // aspect-square
            width = {1}
            height = {1}
            src = '/window.svg'
            alt = 'Beautiful portrait of moi'/>
        </div>)
}

export default function Home() {
    return (
        <Parimg/>
        )
}
