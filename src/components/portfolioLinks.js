import React from 'react'

export default class PortfolioLInks extends React.Component {
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
    return (
      <div>
        <a className="menuLink" onClick={this.toggler} style={{}}> Portfolio</a>
        {this.state.toggleClass ? 
        <div>
          <a className="menuPortfolioLink" href="/boldvoyage"> Bold Voyage</a>
          <a className="menuPortfolioLink" href="/bold100test"> Bold 100 TEST</a>
          <a className="menuPortfolioLink" href="/bold100"> Bold 100</a>
          <a className="menuPortfolioLink" href="/offroad"> Bold Offroad</a>
        </div>
        :
        <div></div>
        }
      </div>
    )
  }
}