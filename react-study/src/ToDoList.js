import './common.css';

function TodoList() {
  return (
      <div className='TodoList'>
        <section className=''>
          <article className="date_wrap">
            <input type="date" defaultValue="2024-03-11" />
          </article>
          <article className="time_wrap">
            <div>1</div>
            <div>6</div>
            <span>:</span>
            <div>5</div>
            <div>2</div>
          </article>
          <article className="btn_wrap">
            <div className="subtab">
              <button className="active">ALL</button>
              <button>ACTIVE</button>
              <button>COMPLETED</button>
            </div>
            <div className="addBtn">
              <button id="addBtn">Add</button>
            </div>
          </article>
          <article className="addLine">
            <input type="text" id="addText" />
            <button id="addTextBtn">저장</button>
            <button id="cancelBtn">취소</button>
          </article>
          <article className="list">
            <div>
              <li className="checked">
                <input type="checkbox" name="" id="" defaultChecked="" />
                <span className="todoText">HTML5</span>
                <button className="completBtn">완료</button>
                <button className="modifyBtn">수정</button>
                <button className="removeBtn">삭제</button>
              </li>
              <li>
                <input type="checkbox" name="" id="" />
                <span className="todoText">CSS</span>
                <button className="completBtn">완료</button>
                <button className="modifyBtn">수정</button>
                <button className="removeBtn">삭제</button>
              </li>
              <li>
                <input type="checkbox" name="" id="" />
                <span className="todoText">JavaScript</span>
                <button className="completBtn">완료</button>
                <button className="modifyBtn">수정</button>
                <button className="removeBtn">삭제</button>
              </li>
            </div>
          </article>
        </section>
      </div>
  );
}

export default TodoList;
