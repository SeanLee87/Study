import './common.css';

function Header(props){
  console.log('props', props);
  return <header>
    <h1><a href="/">{props.title}</a></h1>
  </header>
}

function Nav(props){
  const lis = []
  for(let i=0; i<props.topics.length; i++){
    let t = props.topics[i];
    lis.push(<li key={t.id}><a href={'/read'+t.id}>{t.title}</a></li>)
  }
  return <nav>
      <ol>
      {lis}
      </ol>
  </nav>
}

function Article(props){
  return <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>
}

// 이벤트 onChangeMode 변수명 다른걸로 시도해보기로 
function App() {
  const topics = [
    {id : 1, title : 'html', body : 'html is ...'}, 
    {id : 2, title : 'css', body : 'css is ...'}, 
    {id : 3, title : 'javascript', body : 'javascript is ...'}
  ];

  return (
    <div>
      <Header title="WEB"></Header>
      <Nav topics={topics}></Nav>
      <Article title='Welcom1' body='Hello, WEB1'></Article>
    </div>
  );
}

export default App;
