import React from 'react'
import Menu from './menu'
const classNames = require('classnames');

export default class ThreeBars extends React.Component {
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
    let cls = classNames({
      'threeBars': true,
      'change': this.state.toggleClass
    })

    return(
      <div>
        <div className={cls} onClick={this.toggler}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
        <Menu toggleClass={this.state.toggleClass} toggler={this.toggler}/>
      </div>
    )
  }
}