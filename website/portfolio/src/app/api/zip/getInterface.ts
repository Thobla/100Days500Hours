import path from "path";
import AdmZip from "adm-zip";
import { downloadType, projectInfo } from "@/app/projects/projectContainer";

export async function GETInterface(projectId: number,
                                   dType: downloadType){

    const defaultZipPath: string = "public/Downloadable";
    const headers = new Headers();
    headers.append('Content-Disposition', 'attachment; filename=archive.zip');
    headers.append('Content-Type', 'application/zip');

    const zip = new AdmZip();
    let paths = projectInfo.get(projectId)?.zipPath;
    let index = paths?.map(tuple => tuple[0]).indexOf(dType);
    if (index===undefined || !paths || index==-1){
        return new Response(null);
    }
    let p = paths.at(index);
    if (!p){
        return new Response(null);
    }
                                                                                    
    zip.addLocalFolder(path.join(process.cwd(), defaultZipPath + p[1]));
    
    const zipBuffer = zip.toBuffer();


    return new Response(zipBuffer, {
        headers,
    });
}
