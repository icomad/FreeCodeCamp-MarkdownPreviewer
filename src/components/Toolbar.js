import React from 'react'

const Toolbar = ({ children, expandEditor, icon }) => {
  return (
    <div className='toolbar'>
      {children}
      <button className='expand-button' onClick={expandEditor}><i className={"fas " + icon}></i></button>
    </div>
  )
}

export default Toolbar
