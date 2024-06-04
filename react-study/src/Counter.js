import { useState } from 'react';


function Counter() {
  let cnt = 0

  const [count, setCount] = useState(0);

  const plus = () => {
    // 'setCount()' 함수가 실행 될 때 마다 'Counter()' 함수는 재 실행 된다.
    // 따라서 cnt 값은 'plus()' 함수를 여러번 호출 해도 항상 1이다.
    cnt = cnt + 1
    console.log('plus cnt = ' + cnt);

    // state 는 비동기적이기 때문에 'plus()' 함수가 끝나고 나서 'setCount()' 함수가 실행된다.
    // 따라서 화면에 보이는 count 변수값과 console.log에 나오는 count 변수 값은 다르다.
    //setCount(count + 1);
    console.log('plus count = ' + count);

    // setCount() 호출 시 파라미터에 함수를 넣을 수도 있다.
    setCount(number => number + 1)
  }

  const minus = () => {
    //setCount(count - 1);
    console.log('minus count = ' + count);

    // setCount() 호출 시 파라미터에 함수를 넣을 수도 있다.
    setCount(number => number - 1)
  }

  return (
    <div className="Counter">
        <article id="counter">
          <h2>React 에서 카운터</h2>
          <h2>{count}</h2>
          <div>
            <button onClick={plus}>+1</button>
            <button onClick={minus}>-1</button>
          </div>
        </article>
    </div>
  );
}

export default Counter;
