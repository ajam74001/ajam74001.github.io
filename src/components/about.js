import React from "React"


const About = (props) => (
    <article id="about" className={`${props.article === 'about' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
        <h2 className="major">About</h2>
        <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>
    </article>
)


export default About