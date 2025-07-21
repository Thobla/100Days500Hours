'use client'
import { useState } from 'react';
import { projectInfo, projects } from './projectContainer';
import clsx from 'clsx'


export default function ProjectBox(props : {id: number, 
                                   boxVis: Map<number, boolean>,
                                   selected: number, 
                                   setSelected: Function}){
//    const [leftIdx, setLeftIdx] = useState();
    function onclick(){
        if (props.selected === props.id){
            props.setSelected(-1);
        }
        else{
            props.setSelected(props.id);
        }
        console.log("click")
        console.log(props.selected)
        console.log("id: ", props.id)
    }
    return(
        <div id={props.id.toString()}
        hidden={false}
        onClick={onclick}
        className={clsx("w-24 h-24 aspect-1/1 md:w-48 md:h-48", 
                        {'hidden': !props.boxVis.get(props.id),
                         'bg-blue-300': props.selected === props.id,
                         'bg-orange-300': !(props.selected === props.id)},
                        )}>
        </div>
    )
}


