'use client'
import Image from 'next/image';
import { projectInfo, Status } from './projectContainer';
import clsx from 'clsx'


export default function ProjectBox(props : {id: number, 
                                   boxVis: Map<number, boolean>,
                                   selected: number, 
                                   setSelected: (p1: number) => void}){
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
        className={clsx("group flex relative flex-col items-center w-24 h-24 m-1 aspect-1/1 bg-black transition-transform duration-300 ease-in-out hover:scale-170 hover:z-10 md:m-2 md:w-48 md:h-48", 
                        {'hidden': !props.boxVis.get(props.id),},
                        )}>
            <div className='w-24 h-18 md:w-48 md:h-36'>
                <Image className={clsx("group-hover:block",
                                       {'hidden': !(props.selected === props.id)})}
                        src={projectInfo?.get(props.id)?.gif ?? "/example.gif"} width={500} height={500} objectFit='cover' alt='Gif or Jif'/>
                <Image className={clsx("group-hover:hidden",
                                       {'hidden': props.selected === props.id})}
                        src={projectInfo?.get(props.id)?.image ?? "/example.png"} width={500} height={500} objectFit='cover' alt='Gif or Jif' hidden={props.selected === props.id}/>
            </div>
            <div className='flex flex-col absolute bottom-0 left-0 right-0 items-center'>
                <div className="flex flex-col w-4/5 bg-white p-1 m-1 shadow-lg items-center">
                    <p className='text-black text-center'>{projectInfo?.get(props.id)?.name ?? `Project ${props.id}`}</p>
                    <a className="text-blue-800 hover:underline" href={`https://github.com/${projectInfo?.get(props.id)?.github}`} hidden={!(props.selected === props.id)}>{projectInfo?.get(props.id)?.github ? "GitHub " : ""}</a>
                    <p hidden={!(props.selected === props.id)}>{projectInfo?.get(props.id)?.date ? ("Date: " + projectInfo?.get(props.id)?.date) : ""}</p>
                    <p className={clsx({
                        'text-green-400': projectInfo?.get(props.id)?.status === Status.Finished,
                        'text-orange-400': projectInfo?.get(props.id)?.status === Status.inProgress,
                        'text-red-600': projectInfo?.get(props.id)?.status === Status.Discontinued,
                        'text-red-900': projectInfo?.get(props.id)?.status === Status.Nalle,
                    })}hidden={!(props.selected === props.id)}>{projectInfo?.get(props.id)?.status ? (projectInfo?.get(props.id)?.status) : ""}</p>
                </div>
            </div>
        </div>
    )
}


