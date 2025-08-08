'use client'
import { projectInfo, projects, ProjectInfo, ProjectContainer } from './projectContainer';
import { FilterContainer, initButtonStates } from './projectFilter';
import React, { useState } from 'react';

import dynamic from 'next/dynamic';

export type ButtonFunction = (p1: number) => void;

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

function ProjectPage(props: {selected: number}){
    const loadPage = (pageName: string) => {
        const Comp = dynamic(() => import(`./ProjectPages/${pageName}`).catch(() => {
            const ErrorComp = () => <h1> Error Loading Page </h1>;
            ErrorComp.displayName = "ErrorComponent";
            return ErrorComp
        }), {
            loading: () => <h1> Loading... </h1>
        })

        Comp.displayName= `DynamicPage${pageName}`
        return Comp;
    }
    const PageComponent = props.selected != -1 ? loadPage(projectInfo.get(props.selected)?.pageDir ?? "Default") : loadPage("Empty");
    PageComponent.displayName = `DynamicPage${projectInfo.get(props.selected)?.pageDir ?? "Default"}`
    return <PageComponent/>

}

export default function ClientPage(){
    const [buttonStates, setButtonStates] = useState<Map<number, boolean>>(initButtonStates())
    const [boxVis, setBoxVis] = useState<Map<number, boolean>>(initBoxVis(buttonStates, projectInfo))
    const [selected, setSelected] = useState(-1);
    function onClick(id: number){
        const newBStates = new Map(buttonStates);
        newBStates.set(id, !buttonStates.get(id))
        setButtonStates(newBStates);
    }
    return(
        <>
        <FilterContainer bStates={buttonStates} bStatesFun={onClick} setBoxVis={setBoxVis} boxVis={boxVis}/>
        <ProjectContainer size={3} boxVis={boxVis} selected={selected} setSelected={setSelected}/>
        <ProjectPage selected={selected}/>
        </>
    )
}

//<FilterButton name="Interactive button" function={onClick} state={clicked}/>
// <ProjectBox id={1} state={clicked}/>
