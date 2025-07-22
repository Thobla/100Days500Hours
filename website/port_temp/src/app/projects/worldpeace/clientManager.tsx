'use client'
import { projectInfo, projects, ProjectInfo, ProjectContainer, PTypes } from './projectContainer';
import { FilterContainer} from './projectFilter';
import { useState } from 'react';

export type ButtonFunction = (p1: number) => void;

function initButtonStates(){
    const bStates: Map<number, boolean> = new Map<number, boolean>();
    Object.values(PTypes).forEach((val) => bStates.set(Number(val), true));
    return bStates
}

export function initBoxVis(buttonStates: Map<number, boolean>, info: Map<number, ProjectInfo>): Map<number, boolean>{
    const boxVis: Map<number, boolean> = new Map<number, boolean>();
    projects.forEach((id) => {
        const projectInfo = info.get(id);
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
    function onClick(id: number){
        const newBStates = new Map(buttonStates);
        newBStates.set(id, !buttonStates.get(id))
        setButtonStates(newBStates);
    }
    return(
        <>
        <FilterContainer bStates={buttonStates} bStatesFun={onClick} setBoxVis={setBoxVis} boxVis={boxVis}/>
        <ProjectContainer size={3} boxVis={boxVis}/>
        </>
    )
}
//<FilterButton name="Interactive button" function={onClick} state={clicked}/>
// <ProjectBox id={1} state={clicked}/>
