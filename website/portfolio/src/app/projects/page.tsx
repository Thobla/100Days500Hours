import ClientPage from './clientManager';
import styles from "@/app/markdown.module.css";
import { projectInfo } from './projectContainer';
import { remark } from 'remark';
import html from 'remark-html';
import path from 'path';
import fs from 'fs'



export default async function Page(){
//    const markdown = await data.text();
//    const processedContent = await remark()
//    .use(html)
//    .process(markdown)
    const markdowns: Map<number, string | TrustedHTML> = await getMarkdowns();
    return(
        <>
        <div className="flex flex-wrap flex-col justify-center gap-y-5 my-8">
        <ClientPage markdowns={markdowns}/>
        </div>
        </>
    )

}

export async function getMarkdowns(): Promise<Map<number, string | TrustedHTML>>{
    var markdownMap = new Map<number, string>();
    let noContentPath = path.join('public', 'noContent.md');
    let noContent = fs.readFileSync(noContentPath, 'utf8').toString();

    for (const [key, value] of projectInfo.entries()){

        let data;
        let validReadme = true;
        let markdown;
        try{
            if (value.readme){
                const response = await fetch(value.readme);
                if (response.ok){
                    markdown = await response.text();
                    markdown = markdown.toString();
                }
                else{
                    console.warn(`fetch failed with ${response.status}`);
                }
            }
            markdown = markdown === undefined || markdown === "<p>404: Not Found</p>\n" ? noContent : markdown;
            const processedHtml : string | TrustedHTML = await remark().use(html).process(markdown);
            let myHtml = processedHtml.toString();
            markdownMap.set(key, myHtml);
        }catch(error){
        console.error("Error with readme fetching", error);
        }

    }    
    return markdownMap

}
