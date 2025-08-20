'use client'

export const DownloadButton = (props: {path: string,
                                       outName: string,
                                       buttonName?: string,
                                       downloadLock: boolean,
                                       setDownloadLock: (lock: boolean) => void}) => {

                                        
    async function handleDownload(){
        if(props.downloadLock){
            props.setDownloadLock(false);
            console.log(props.downloadLock);
            const defaultPath = "/api/zip"
            const response = await fetch(defaultPath + props.path);
            console.log("response: ", response);
            if (!response.ok){
                alert("File not found");
                throw new Error('file not found');
            }

            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `${props.outName}.zip`;
            link.click();
            window.URL.revokeObjectURL(url);
            console.log(props.downloadLock);
            props.setDownloadLock(true);
        }
        else{
            alert("Only one download at a time");
        }
    }
    return <button className="border rounded-md shadow-lg cursor-pointer bg-blue-400 hover:bg-blue-600" onClick={handleDownload}>{props.buttonName ?? "Download"}</button>;
}
