import Image from "next/image"

export default function Images(props: {src: string,
                                        alt: string}){
    return (
        <div className="mt-10 ml-10 mr-10">
            <Image 
                className="float-right w-2/5 h-2/5 ml-2"
                src={props.src}
                width={100}
                height={100}
                alt={props.alt}/>
        </div>
    )
}
