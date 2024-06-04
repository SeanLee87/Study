import './common.css';
import { useState } from 'react';

/**
 * React 강의 (생성기능구현 ~ )
 * https://opentutorials.org/course/4900/31269
 */

function Article(props){
  return <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>
}

function Header(props){
  //console.log('props', props);
  return <header>
    <h1><a href="/" onClick={event=>{
      event.preventDefault();
      props.onChangeEvent();
    }}>{props.title}</a></h1>
  </header>
}


function Nav(props){
  const lis = []
  for(let i=0; i<props.topics.length; i++){
    let t = props.topics[i];
    lis.push(<li key={t.id}>
        <a id={t.id} href={'/read'+t.id} onClick={event=>{
          event.preventDefault();
          props.onChangeEvent(t.id);
          //props.onChangeEvent(Number(event.target.id));
        }}>{t.title}</a>
      </li>)
  }
  return <nav>
      <ol>
      {lis}
      </ol>
  </nav>
}

function App() {
  // console.log('App action');
  // const _mode = useState('WELCOME');
  // const mode = _mode[0];
  // const setMode = _mode[1];
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);
  // console.log('mode',mode);
  const topics = [
    {id : 1, title : 'html', body : 'html is ...'}, 
    {id : 2, title : 'css', body : 'css is ...'}, 
    {id : 3, title : 'javascript', body : 'javascript is ...'}
  ]; 

  let content = null;
  if(mode === 'WELCOME') {
    content = <Article title='Welcome' body='Hello, WEB'></Article>;
  } else if (mode === 'READ') {
    /* 
    let title, body = null;
    for (let i=0; i<topics.length; i++) {
      // console.log(topics[i].id, id);
        if(topics[i].id === id) {
          title = topics[i].title;
          body = topics[i].body;
        }
    }
    content = <Article title={title} body={body}></Article>;
    */
    content = <Article title={topics[id-1].title} body={topics[id-1].body}></Article>;
  }

  return (
    <div>
      <Header title="WEB0528" onChangeEvent={()=>{
        setMode('WELCOME');
        }}></Header>
      <Nav topics={topics} onChangeEvent={(_id)=>{
        setMode('READ');
        setId(_id);
      }}></Nav>
      {content}
    </div>
  );
}

export default App;