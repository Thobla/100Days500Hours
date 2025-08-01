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
    return(
        <>
        <div className="flex flex-wrap flex-col justify-center gap-y-5 my-8">
        <ClientPage/>
        </div>
        </>
    )

}

