import Images from "./Components/Images"

export default function Sindre(){
    return (
        <div className = "flex flex-wrap flex-col items-center  w-full">
            <div className="ml-10 mr-10">
            <Images src="/me.png" alt="Png of me"/>
                <p className="pt-2">What you see is what you get : )
                <span className="block pt-2">
                    Thorgal.no is my personal website. It is made using react with next.js, and will 
                    be self hosted once i get my server up and running. This website&apos;s purpose is to 
                    work as a portfolio website, where I can keep an overview and showcase my projects, 
                    and as a playground for me to make whatever web-based stuff I want. The motivation 
                    for making this website is a mix of me wanting to learn web-development, having a good 
                    way of showcasing my projects, and just wanting to make something cool.
                </span>
                </p>
            </div>
        </div>
    )
}
