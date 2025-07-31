'use client'
import styles from '@/app/markdown.module.css';
import { useEffect, useState } from 'react';


export default function GitHub(props: {selected: number, 
                                             markdowns: Map<number, string | TrustedHTML>}){
    const [htmlContent, setHtmlContent] = useState<string | TrustedHTML>(""); 
    useEffect(() => {
        setHtmlContent(props.markdowns.get(props.selected) ?? "");
    }, [props.selected]
    )
    return(
        <div className={styles.markdown} dangerouslySetInnerHTML={{__html: htmlContent }}/>
    )
}
