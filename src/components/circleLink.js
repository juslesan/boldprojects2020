import React from 'react';

export default class CircleLink extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  } 

  render() {
    let opacity = "30%"
    if (this.props.current === this.props.index) {
      opacity = "80%"
    }
    return (
      <div id={this.state.index} className="circleLink" style={{opacity: opacity}} onClick={(e) => this.props.click(this.props.index, e)}> 
      </div>
    )
  }
}