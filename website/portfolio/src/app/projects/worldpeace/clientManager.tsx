'use client'
import ProjectBox from './projectBox';
import { projectInfo, projects, ProjectInfo, ProjectContainer, ProjectType, PTypes } from './projectContainer';
import { FilterButton, FilterContainer} from './projectFilter';
import { useState } from 'react';

export type ButtonFunction = (p1: number) => void;

function initButtonStates(){
    var bStates: Map<number, boolean> = new Map<number, boolean>();
    Object.values(PTypes).forEach((val) => bStates.set(Number(val), true));
    return bStates
}

export function initBoxVis(buttonStates: Map<number, boolean>, info: Map<number, ProjectInfo>): Map<number, boolean>{
    var boxVis: Map<number, boolean> = new Map<number, boolean>();
    projects.forEach((id) => {
        let projectInfo = info.get(id);
        boxVis.set(id, false);
        if (projectInfo){
            projectInfo.type.forEach((elem) => {
                if(buttonStates.get(elem)){
                    boxVis.set(id, true);
                }
                })}
    })
    return boxVis
}


export default function ClientPage(){
    const [buttonStates, setButtonStates] = useState<Map<number, boolean>>(initButtonStates())
    const [boxVis, setBoxVis] = useState<Map<number, boolean>>(initBoxVis(buttonStates, projectInfo))
    console.log(boxVis.get(1));
    console.log(boxVis.get(2));
    console.log(boxVis.get(3));
    console.log(boxVis.get(4));
    console.log(boxVis.get(5));
    const [clicked, setClicked]: [boolean, Function] =  useState(false);
    function onClick(id: number){
        console.log("here", buttonStates.get(id));
        const newBStates = new Map(buttonStates);
        newBStates.set(id, !buttonStates.get(id))
        setButtonStates(newBStates);
    }
    console.log("boxVis client: ", boxVis)
    return(
        <>
        <FilterContainer bStates={buttonStates} bStatesFun={onClick} setBoxVis={setBoxVis} boxVis={boxVis}/>
        <ProjectContainer size={3} boxVis={boxVis}/>
        </>
    )
}
//<FilterButton name="Interactive button" function={onClick} state={clicked}/>
// <ProjectBox id={1} state={clicked}/>
