'use state'
import ProjectBox from './projectBox';

export enum PTypes {
    all = 1,
    school = 2,
    sparetime = 3,
    game = 4,
    gameJam = 5,
    nalle = 6
}

export interface ProjectType {
    school: boolean,
    sparetime: boolean,
    game: boolean,
    gameJam: boolean
}

export enum Status {
    inProgress = "In Progress",
    Discontinued = "Discontinued",
    Finished = "Finished",
    Nalle = "@f#!u¤*@c$¤*k&"
}

export interface ProjectInfo {
    id: number,
    name: string,
    type: PTypes[],
    date?: string,
    github?: string,
    pageDir?: string,
    status?: Status,
    image?: string,
    gif?: string
}


export const projects : Array<number> = [1, 2, 3, 4, 5];


export const projectInfo : Map<number, ProjectInfo> = new Map<number, ProjectInfo>([
    [1, {id:1, name:'To the Moon and Back', type:[PTypes.all, PTypes.sparetime, PTypes.game, PTypes.gameJam], github: "Neelzee/ToTheMoonAndBack", pageDir:"Bubble", date:"27.01.2025", status: Status.Finished, image: "/bubble.png", gif: "/bubble.gif"}],
    //[1, {id:1, name:'To the Moon and Back', type:[PTypes.all, PTypes.sparetime, PTypes.game, PTypes.gameJam], pageDir:"Neelzee/ToTheMoonAndBack", date:"27.01.2025", status: Status.Finished, image: "/bubble.png", gif: "/bubble.gif", readme: "https://raw.githubusercontent.com/Thobla/ShotgunPanda/main/README.md"}],
    [2, {id:2, name:'JordenSindre', type:[PTypes.all, PTypes.sparetime, PTypes.game, PTypes.gameJam], github: "404-Game-Not-Found/JordenSindreGJH2024", pageDir: "Sindre", status: Status.Finished, image: "/sindre.png", gif: "/sindre.gif"}],
    //[2, {id:2, name:'JordenSindre', type:[PTypes.all, PTypes.sparetime, PTypes.game, PTypes.gameJam], pageDir: "404-Game-Not-Found/JordenSindreGJH2024", status: Status.Finished, image: "/sindre.png", gif: "/sindre.gif", readme: "https://raw.githubusercontent.com/Thobla/100Days500Hours/main/website/portfolio/public/JordenSindre.md"}],
    [3, {id:3, name:'CorruptedChess', type:[PTypes.all, PTypes.school, PTypes.game], github: "Thobla/Corrupt-Chess", pageDir: "Chess", status: Status.Finished, image: "/chess.png", gif: "/chess.gif"}],
    //[3, {id:3, name:'CorruptedChess', type:[PTypes.all, PTypes.school, PTypes.game], pageDir: "Thobla/Corrupt-Chess", status: Status.Finished, image: "/chess.png", gif: "/chess.gif", readme: "https://raw.githubusercontent.com/Thobla/Corrupt-Chess/refs/heads/master/README.md"}],
    [4, {id:4, name:'Thorgal.no', type:[PTypes.all, PTypes.sparetime], github: "Thobla/100Days500Hours/website/portfolio", pageDir: "Thorgal", status: Status.inProgress}],
    //[4, {id:4, name:'Thorgal.no', type:[PTypes.all, PTypes.sparetime], pageDir: "https://github.com/Thobla/100Days500Hours/tree/main/website/portfolio", status: Status.inProgress}],
    [5, {id:5, name:'Turbonalle', type:[PTypes.nalle], pageDir: "Nalle", status: Status.Nalle, image: "/nalle.png",  gif: "/nalle.gif"}]
    //[5, {id:5, name:'Turbonalle', type:[PTypes.nalle], image: "/nalle.png", gif: "/nalle.gif", readme: "https://raw.pageDirusercontent.com/Thobla/100Days500Hours/main/website/portfolio/public/Turbo.md"}]
])

export function ProjectContainer(props: { size: number, 
                                        boxVis: Map<number, boolean>, 
                                        selected: number,
                                        setSelected: (p1: number) => void}){
    return(
        <div className="flex justify-center">
            <div className="flex flex-row flex-wrap content-start w-full">
                {projects.map((p_id: number) => {return(
                    <ProjectBox id={p_id} key={p_id} boxVis={props.boxVis} 
                    selected={props.selected} setSelected={props.setSelected}/>
                );
                })}
            </div>
        </div>
    )
}

