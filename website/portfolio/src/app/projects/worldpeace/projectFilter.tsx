'use client'
import { useState, useEffect } from 'react';
import { ButtonFunction, initBoxVis} from './clientManager';
import { projectInfo } from './projectContainer';


export type ButtonTuple = [string, number];


const nameTypeTuples: ButtonTuple[] = [["school", 1], ["sparetime", 2], ["game", 3], ["game jam", 4]]


export function FilterContainer(props: {bStates: Map<number, boolean>, 
                                setBoxVis: Function,
                                boxVis: Map<number, boolean>,
                                bStatesFun: ButtonFunction}){
    return(
        <div>
        {nameTypeTuples.map((data) => {
            let [name, id] = data;
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
                             setBoxVis: Function,
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
