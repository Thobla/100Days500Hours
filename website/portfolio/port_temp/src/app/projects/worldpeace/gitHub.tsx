import { remark } from 'remark';
import html from 'remark-html';
import styles from "@/app/markdown.module.css";

export default async function GitHub(){
    const data = await fetch('https://raw.githubusercontent.com/Thobla/Star-Shooter/main/README.md');
    const markdown = await data.text();
    const processedContent = await remark()
    .use(html)
    .process(markdown)
    return(
        <div className={styles.markdown} dangerouslySetInnerHTML={{__html: processedContent.toString() }}/>
    )
}


