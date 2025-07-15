'use client'
import { useState } from 'react';

export default function ProjectBox(props : {id: number}){
    const [leftIdx, setLeftIdx] = useState();
    return(
        <div id={props.id.toString()}hidden={false} className="w-48 h-48 bg-orange-300">
        </div>
    )
}


