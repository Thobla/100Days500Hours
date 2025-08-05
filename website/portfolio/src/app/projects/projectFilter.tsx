'use client'

import { useState, useEffect } from 'react';
import { ButtonFunction, initBoxVis} from './clientManager';
import { projectInfo } from './projectContainer';

enum StartState{
    Off = 0,
    On = 1
}

export type ButtonTuple = [string, number, StartState];


const nameTypeTuples: ButtonTuple[] = [
                                        ["All", 1, StartState.On], 
                                        ["School", 2, StartState.Off],
                                        ["Sparetime", 3, StartState.Off],
                                        ["Game", 4, StartState.Off],
                                        ["Game jam", 5, StartState.Off],
                                        ["DO NOT PRESS", 6, StartState.Off]
                                    ]


export function initButtonStates(){
    const bStates: Map<number, boolean> = new Map<number, boolean>();
    nameTypeTuples.forEach((tuple) => {
        const [, type, state] = tuple;
        bStates.set(type, state===StartState.On)
    })
    return bStates
}



export function FilterContainer(props: {bStates: Map<number, boolean>, 
                                setBoxVis: (p1: Map<number, boolean>) => void,
                                boxVis: Map<number, boolean>,
                                bStatesFun: ButtonFunction}){
    return(
        <div>
        {nameTypeTuples.map((data) => {
            const [name, id] = data;
            return(
                <FilterButton key={id} name={name} PType={id} bStates={props.bStates} bStatesFun={props.bStatesFun} boxVis={props.boxVis} setBoxVis={props.setBoxVis}/>
            )
        })}
        </div>
    )
}


export function FilterButton(props: {name: string, 
                             PType: number, 
                             bStates: Map<number, boolean>, 
                             setBoxVis: (p1: Map<number, boolean>) => void;//Function,
                             boxVis: Map<number, boolean>,
                             bStatesFun: ButtonFunction}){

    const [isChecked, setIsChecked] = useState(props.bStates.get(props.PType));

   useEffect(() => {
        const newBoxVis = initBoxVis(props.bStates, projectInfo);
        props.setBoxVis(newBoxVis);
    }, [props.bStates]); // Dependency on button states

    function handleClick(){

        props.bStatesFun(props.PType);
        setIsChecked((prevChecked) => !prevChecked)
        //{
        //    let newBoxVis = initBoxVis(new Map(props.bStates).set(props.PType, !prevChecked), projectInfo);
        //    props.setBoxVis(newBoxVis);
//        let newBoxVis = initBoxVis(props.bStates, projectInfo);
        
        // Return the new checked state
         //   return !prevChecked;
        //});
    }
//        })
//        setIsChecked(!isChecked);
//        props.setBoxVis(newBoxVis);
    return(
        <label className="inline-flex items-center cursor-pointer me-5">
            <input type="checkbox" value="" className="sr-only peer" onChange={handleClick} checked={isChecked}/>
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
            <span className="ms-3 text-sm font-medium text-gray-900">{props.name}</span>
        </label>
    )
}

//export function Filter
