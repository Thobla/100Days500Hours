'use client'

export const DownloadButton = (props: {path: string,
                                       outName: string,
                                       buttonName?: string}) => {
    async function handleDownload(){
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
    }
    return <button className="border rounded-md shadow-lg cursor-pointer bg-blue-400 hover:bg-blue-600" onClick={handleDownload}>{props.buttonName ?? "Download"}</button>;
}
