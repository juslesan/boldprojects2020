import React from 'react'
import PortfolioLinks from './portfolioLinks'
import LanguageLinks from './languageLinks'
const classNames = require('classnames');

export default function Menu(props) {
  let cls = classNames({
    'change': props.toggleClass
  })
  return (
    <div className={cls}>
      <div className="menu">
        <a className="menuLink" href="/"> Home</a>
        <a className="menuLink" href="/contact"> Contact</a>
        <a className="menuLink" href="/info"> Info</a>
        <a className="menuLink" href="/project2022"> Project 2022</a>
        <PortfolioLinks/>
        <LanguageLinks language={props.language} langHandler={props.langHandler}/>
      </div>
    </div>
  )
  
}