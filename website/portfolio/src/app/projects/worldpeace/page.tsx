import Image from 'next/image'
import ProjectBox from './projectBox';

enum PTypes {
    school = 1,
    sparetime = 2,
    game = 3,
    gameJam = 4
}

interface ProjectType {
    school: boolean,
    sparetime: boolean,
    game: boolean,
    gameJam: boolean
}

interface ProjectInfo {
    id: number,
    name: string,
    type: ProjectType,
//    github: string

}

function createProjectType(includedList:PTypes[]): ProjectType{
    return {
        school: includedList.indexOf(PTypes.school) > -1,
        sparetime: includedList.indexOf(PTypes.sparetime) > -1,
        game: includedList.indexOf(PTypes.game) > -1,
        gameJam: includedList.indexOf(PTypes.gameJam) > -1,
    } 
}

const projects : Array<string> = [ 'PondusPanda', 'JordenSindre', 'CorruptedChess', 'Thorgal.no', 'Turbo' ];


const projectInfo : Map<number, ProjectInfo> = new Map<number, ProjectInfo>([
    [1, {id:1, name:'PondusPanda', type:createProjectType([PTypes.sparetime, PTypes.game])}],
    [2, {id:2, name:'JordenSindre', type:createProjectType([PTypes.sparetime, PTypes.game, PTypes.gameJam])}],
    [3, {id:3, name:'CorruptedChess', type:createProjectType([PTypes.school, PTypes.game])}],
    [4, {id:4, name:'Thorgal.no', type:createProjectType([PTypes.sparetime])}],
    [5, {id:5, name:'Turbo', type:createProjectType([PTypes.sparetime, PTypes.game, PTypes.gameJam])}]
])

function ProjectContainer(){
    return(
        <div className = "flex">
            
        </div>
    )
}

//        <Image className="object-cover"
//        src="/example.gif"
//        width={500}
//        height={500}
//        alt="Some jif"
//        />
//
//      <div className="grid grid-flow-col grid-cols-[autofill_minmax(320px,_1fr)] gap-x-10 grid-rows-1 max-w-[80%]">

export default function Page(){
    return(
        <>
        <h1>Projects</h1>
        <div className="flex justify-center">
            <div className="flex flex-row content-start gap-x-[5%] max-w-4/5 w-full">
            <ProjectBox id={1}/>
            <ProjectBox id={2}/>
            <ProjectBox id={3}/>
            <ProjectBox id={3}/>
            </div>
        </div>
        </>

    )
}
