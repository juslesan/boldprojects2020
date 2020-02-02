import React from 'react'
const classNames = require('classnames');

export default class LanguageLinks extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      toggleClass: false,
    }
  }
  toggler = () => {
    if (this.state.toggleClass) {
      this.setState({toggleClass: false})
    } else {
      this.setState({toggleClass: true})
    }
  }
  render () {
    let engCls = classNames({
      'menuPortfolioLink': true,
      'highlight': this.props.language === 'eng'
    })
    let sweCls = classNames({
      'menuPortfolioLink': true,
      'highlight': this.props.language === 'swe'
    })
    let finCls = classNames({
      'menuPortfolioLink': true,
      'highlight': this.props.language === 'fin'
    })
    return (
      <div>
        <a className="menuLink" onClick={this.toggler} style={{}}> Language</a>
        {this.state.toggleClass ? 
        <div>
          <a className={engCls} id="eng" onClick={this.props.langHandler}> English</a>
          <a className={finCls} id="fin" onClick={this.props.langHandler}> Finnish</a>
          <a className={sweCls} id="swe" onClick={this.props.langHandler}> Swedish</a>
        </div>
        :
        <div></div>
        }
      </div>
    )
  }
}