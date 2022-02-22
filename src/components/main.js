import React from 'react'
import PropTypes from 'prop-types'
import Page from "./page"


class Main extends React.Component {
  render() {


    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <Page page_name="work" article={this.props.article}  articleTimeout={this.props.articleTimeout} onCloseArticle={this.props.onCloseArticle}>
            <h2 className="Work">About</h2>
            <h2 >About Me</h2>
        </Page>
        
        <Page page_name="about" article={this.props.article}  articleTimeout={this.props.articleTimeout} onCloseArticle={this.props.onCloseArticle}>
            <h2 className="major">About</h2>
            <h2 >About Me</h2>
        </Page>

        <Page page_name="contact" article={this.props.article}  articleTimeout={this.props.articleTimeout} onCloseArticle={this.props.onCloseArticle}>
            <h2 className="major">Contact</h2>
            <form method="post" action="#">
                <div className="field half first">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" />
                </div>
                <div className="field half">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" />
                </div>
                <div className="field">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" rows="4"></textarea>
                </div>
                <ul className="actions">
                <li><input type="submit" value="Send Message" className="special" /></li>
                <li><input type="reset" value="Reset" /></li>
                </ul>
            </form>
            <p>Please reach out to Benjamin if you are interested in his work, either for paid or volunteer projects.</p>
            <ul className="icons">
                <li><a href="https://www.linkedin.com/in/benjamin-kleeman/" target="_blank" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
                <li><a href="https://www.github.com/bkleeman" target="_blank" className="icon fa-github"><span className="label">GitHub</span></a></li>
            </ul>
        </Page>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main