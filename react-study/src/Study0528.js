import './common.css';
import { useState } from 'react';

/**
 * React 강의 (이벤트 ~ state)
 * https://opentutorials.org/course/4900/31267
 * https://opentutorials.org/course/4900/31268
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
      <Header title="WEB0521" onChangeEvent={()=>{
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

/**
이벤트 onChangeMode 함수명은 변경 가능하다!
const 는 상수 선언 문법이고, mode는 값이 변하는 변수 인데, 그럼 const 로 선언하는게 잘못된거 아닌가?
const 로 선언한 값이 객체 또는 배열 타입이면 객체 또는 배열의 값은 변경 가능하다고 하는데..
된다고 하더라도 const 로 안하는게 맞지 않나??
 */
