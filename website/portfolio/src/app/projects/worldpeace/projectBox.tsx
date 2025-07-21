'use client'
import Image from 'next/image';
import { useState } from 'react';
import { ProjectInfo, projectInfo, projects } from './projectContainer';
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
    }
    return(
        <div id={props.id.toString()}
        hidden={false}
        onClick={onclick}
        className={clsx("flex relative flex-col items-center w-24 h-24 aspect-1/1 bg-black md:w-48 md:h-48", 
                        {'hidden': !props.boxVis.get(props.id),},
                        )}>
            <div className='w-24 h-18 md:w-48 md:h-36'>
                <Image src="/example.gif" width={500} height={500} objectFit='cover' alt='Gif or Jif' hidden={!(props.selected === props.id)}/>
                <Image src="/example.png" width={500} height={500} objectFit='cover' alt='Gif or Jif' hidden={props.selected === props.id}/>
            </div>
            <div className='flex flex-col absolute bottom-0 left-0 right-0 items-center'>
                <div className="flex flex-col w-4/5 bg-white p-1 m-1 shadow-lg items-center">
                    <p className='text-gray'>{projectInfo?.get(props.id)?.name ?? `Project ${props.id}`}</p>
                    <p hidden={!(props.selected === props.id)}className='text-gray'>{projectInfo?.get(props.id)?.github ? "GitHub " : ""}</p>
                    <p hidden={!(props.selected === props.id)}className='text-gray'>{projectInfo?.get(props.id)?.date ? ("Date: " + projectInfo?.get(props.id)?.date) : ""}</p>
                </div>
            </div>
        </div>
    )
}


