'use state'
import ProjectBox from './projectBox';
import { useState } from 'react';

export enum PTypes {
    school = 1,
    sparetime = 2,
    game = 3,
    gameJam = 4
}

export interface ProjectType {
    school: boolean,
    sparetime: boolean,
    game: boolean,
    gameJam: boolean
}

export enum Status {
    inProgress = "In Progress",
    Discontinued = "Discontinued",
    Finished = "Finished"
}

export interface ProjectInfo {
    id: number,
    name: string,
    type: PTypes[],
    date?: string,
    github?: string,
    status?: Status,
    image?: string,
    gif?: string
}


//function createProjectType(includedList:PTypes[]): ProjectType{
//    return {
//        school: includedList.indexOf(PTypes.school) > -1,
//        sparetime: includedList.indexOf(PTypes.sparetime) > -1,
//        game: includedList.indexOf(PTypes.game) > -1,
//        gameJam: includedList.indexOf(PTypes.gameJam) > -1,
//    } 
//}

export const projects : Array<number> = [1, 2, 3, 4, 5];


export const projectInfo : Map<number, ProjectInfo> = new Map<number, ProjectInfo>([
    [1, {id:1, name:'PondusPanda', type:[PTypes.sparetime, PTypes.game], github:"Thobla/ShotgunPanda", date:"someDate", status: Status.Discontinued, image: "/apple.png", gif: "/apple.gif"}],
    [2, {id:2, name:'JordenSindre', type:[PTypes.sparetime, PTypes.game, PTypes.gameJam], github: "404-Game-Not-Found/JordenSindreGJH2024", status: Status.Finished, image: "/fish.png", gif: "/fish.gif"}],
    [3, {id:3, name:'CorruptedChess', type:[PTypes.school, PTypes.game], status: Status.inProgress, image: "/sircus.png", gif: "/sircus.gif"}],
    [4, {id:4, name:'Thorgal.no', type:[PTypes.sparetime]}],
    [5, {id:5, name:'Turbo', type:[PTypes.sparetime, PTypes.game, PTypes.gameJam]}]
])

export function ProjectContainer(props: { size: number, 
                                        boxVis: Map<number, boolean>}){
    const [selected, setSelected] = useState(-1);
    return(
        <div className="flex justify-center">
            <div className="flex flex-row flex-wrap content-start w-full">
                {projects.map((p_id: number) => {return(
                    <ProjectBox id={p_id} key={p_id} boxVis={props.boxVis} 
                    selected={selected} setSelected={setSelected}/>
                );
                })}
            </div>
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


