'use client'
import { useState } from 'react';
import { projectInfo, projects } from './projectContainer';
import clsx from 'clsx'


export default function ProjectBox(props : {id: number, 
                                   boxVis: Map<number, boolean>}){
    const [leftIdx, setLeftIdx] = useState();
    console.log("boxVis projectBox: ", props.boxVis)
    return(
        <div id={props.id.toString()}
        hidden={false}
        className={clsx("w-24 h-24 aspect-1/1 bg-orange-300 md:w-48 md:h-48", 
                        {'hidden': !props.boxVis.get(props.id),},
                        )}>
        </div>
    )
}


