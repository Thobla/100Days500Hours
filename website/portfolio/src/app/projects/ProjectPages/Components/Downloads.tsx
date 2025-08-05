import { projectInfo, Downloadable } from "../../projectContainer"
import { DownloadButton } from "@/app/components/DownloadButton"
export default function Downloads(props: {projectId: number}){
        return (
        projectInfo.get(props.projectId)?.zipPath?.map((zip: Downloadable) => {
            return (
                <DownloadButton key={zip[1]} path={zip[1]} outName={projectInfo.get(props.projectId)?.name ?? "Download"} buttonName={zip[0]}/>
            )
        })
        )

}
