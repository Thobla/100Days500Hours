import Image from 'next/image'
import { FilterButton } from './projectFilter';
import { ProjectContainer }  from './projectContainer';
import ClientPage from './clientManager';
import GitHub from './gitHub';
export default function Page(){
    return(
        <>
        <div className="flex flex-wrap flex-col justify-center gap-y-5 my-8">
        <ClientPage/>
        <GitHub/>
        </div>
        </>

    )
}
//        <div className="flex justify-center">
//            <div className="flex flex-row content-start gap-x-[5%] w-full">
//                <ProjectContainer size={3}/>
//            </div>
//        </div>

