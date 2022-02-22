import React from "React"


const Page = (props) => (
    console.log(props.children),

    <article  className={`${props.article === props.page_name ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
        {props.children}
        <div className="close" onClick={() => {props.onCloseArticle()}}></div>
        
    </article>
)


export default Page