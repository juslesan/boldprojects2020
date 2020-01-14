import React from 'react'
import CircleLink from './circleLink';

const linkBalls = (limit, curr, click) => {
  let links = []
  for (let i = 0; i < limit; i++) {
    links.push(<CircleLink key={i} index={i} current={curr} click={click}/>) 
  }
  return links
}

export {linkBalls}