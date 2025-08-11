'use client'
'use state'
import ProjectBox from './projectBox';
import { RefObject, useRef } from 'react';
import { projects } from './projectInfo';

function SlideButton(props: {
    containerRef: RefObject<null | HTMLDivElement>,
    shiftValue: number
}){


    const slide = () => {
        if (props.containerRef.current){
            props.containerRef.current.scrollLeft += props.containerRef.current.clientWidth*props.shiftValue;
        }
    }

    const text = props.shiftValue >= 0 ? ')' : '(';
    const sidePadding = props.shiftValue >= 0 ? 'pr-5' : 'pl-5';
    
        return (
            <div className='flex'>
            <button onClick={slide} type='button' className={`text-9xl text-black hover:text-blue-500 pt-15 pb-15 ${sidePadding}`}>{text}</button>
            </div>
        )
}

export function ProjectContainer(props: { size: number, 
                                        boxVis: Map<number, boolean>, 
                                        selected: number,
                                        setSelected: (p1: number) => void}){

    const containerRef = useRef<HTMLDivElement>(null);
    return(
        <div className="flex flex-column grow justify-center w-full">
            <SlideButton containerRef={containerRef} shiftValue={-0.4}/>
            <div className="flex flex-row hide-scrollbar overscroll-contain snap-x snap-mandatory overflow-x-auto overflow-y-hidden content-start max-w-1/1 p-15" 
            ref={containerRef}>
                {projects.map((p_id: number) => {return(
                    <ProjectBox id={p_id} key={p_id} boxVis={props.boxVis} 
                    selected={props.selected} setSelected={props.setSelected}/>
                );
                })}
            </div>
            <SlideButton containerRef={containerRef} shiftValue={0.4}/>
        </div>
    )
}

