import React from 'react'
import Toolbar from './Toolbar';

const Editor = ({ markdown, editorUpdate, icon, expandEditor }) => {
  return (
    <div className='editor-container'>
      <Toolbar expandEditor={expandEditor} icon={icon}>Editor</Toolbar>
      <textarea name='editor' id='editor' onChange={(e) => editorUpdate(e)} value={markdown}></textarea>
    </div>
  )
}

export default Editor
