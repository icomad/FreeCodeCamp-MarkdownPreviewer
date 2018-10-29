import React from 'react'

const Toolbar = ({ children, expand, icon }) => {
  return (
    <div className='toolbar'>
      {children}
      <button className='expand-button' onClick={expand}><i className={"fas " + icon}></i></button>
    </div>
  )
}

export default Toolbar
