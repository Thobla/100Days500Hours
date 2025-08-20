'use client'
import { useState } from "react";
import { projectInfo, Downloadable } from "../../projectInfo"
import { DownloadButton } from "@/app/components/DownloadButton"
export default function Downloads(props: {projectId: number}){

    const [downloadLock, setDownloadLock] = useState<boolean>(true);
    return (
    <div className="flex flex-row flex-wrap justify-center grow w-4/5 border-3 border-blue-600 rounded-md bg-blue-300 gap-x-10 gap-y-5 pt-3 pb-3 mt-3">
    <h1 className="w-full text-center">Downloads:</h1>
        {projectInfo.get(props.projectId)?.zipPath?.map((zip: Downloadable) => {
            return (
                <DownloadButton key={zip[1]} path={zip[1]} setDownloadLock={setDownloadLock} downloadLock={downloadLock} outName={projectInfo.get(props.projectId)?.name ?? "Download"} buttonName={zip[0]}/>
            )
        })}
    </div>
    )

}
