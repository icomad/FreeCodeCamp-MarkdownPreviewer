import React, { Component } from 'react';
import Markdown from 'react-markdown/with-html';
import breaks from 'remark-breaks';

import ThemeToggle from './ThemeToggle';
import Editor from './Editor';

const Header = () => (
  <header>
    <h1>Markdown Previewer</h1>
  </header>
)

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      markdown: markdown,
      icon: 'fa-plus',
    }
  }

  editorUpdate = (e) => {
    this.setState({ markdown: e.target.value });
  }

  expandEditor = () => {
    const grid = document.querySelector('.grid');
    const editor = document.getElementById('editor');
    const preview = document.getElementById('preview');
    if (preview.style.display === 'none') {
      editor.removeAttribute('style');
      preview.removeAttribute('style');
      grid.removeAttribute('style');
      this.setState({ icon: 'fa-plus' });
    } else {
      editor.style.height = '100vh';
      preview.style.display = 'none';
      grid.style.gridTemplateColumns = "100%";
      grid.style.columnGap = '0';
      grid.style.alignItems = 'initial';
      grid.style.gridTemplateAreas = '"editor"';
      this.setState({ icon: 'fa-minus' });
    }
  }

  render() {
    const { markdown, icon } = this.state;
    return (
      <div className='container'>
        <Header />
        <ThemeToggle />
        <div className='grid'>
          <Editor markdown={markdown} editorUpdate={this.editorUpdate} icon={icon} expandEditor={this.expandEditor} />
          <Markdown source={this.state.markdown} escapeHtml={false} className='preview' linkTarget='_blank' renderers={{ root: rootComponent }} plugins={[breaks]} someProps={{ test: 'success' }} />
        </div>
      </div>
    )
  }
}

class rootComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      icon: 'fa-plus',
    }
  }

  expandPreview = () => {
    const grid = document.querySelector('.grid');
    const editor = document.getElementById('editor');
    const toolbar = document.querySelector('.toolbar');
    if (editor.style.display === 'none') {
      grid.removeAttribute('style');
      editor.removeAttribute('style');
      toolbar.removeAttribute('style');
      this.setState({ icon: 'fa-plus' });
    } else {
      toolbar.style.display = 'none';
      editor.style.display = 'none';
      grid.style.gridTemplateColumns = "100%";
      grid.style.columnGap = '0';
      grid.style.alignItems = 'initial';
      grid.style.gridTemplateAreas = '"preview"';
      this.setState({ icon: 'fa-minus' });
    }
  }

  render() {
    return (
      <div {...this.props} id='preview'>
        <div className='toolbar-prev'>
          <button className='expand-button' onClick={this.expandPreview}><i className={"fas " + this.state.icon}></i></button>
        </div>
        {this.props.children}
      </div>
    )
  }
}

const markdown =
  `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`


export default App
