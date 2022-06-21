import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      <div>
        <input placeholder="TODOを入力" />
      </div>
      <div>
        <p>未完了のTODO</p>
        <ul>
          <div>
            <li>ほげ</li>
            <button>完了</button>
            <button>削除</button>
          </div>
          <div>
            <li>ほが</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
      </div>
      <div>
        <p>完了のTODO</p>
        <ul>
          <div>
            <li>ほげ</li>
            <button>戻す</button>
          </div>
          <div>
            <li>ほが</li>
            <button>戻す</button>
          </div>
        </ul>
      </div>
    </>
  );
};
