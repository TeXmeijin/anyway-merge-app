import { useState, useEffect } from "react";
import type { NextPage } from "next";
import { nimSetTodo, nimLoadTodos } from "~/libs/nim";

const NimTodo: NextPage = () => {
  const [todoDraft, setTodoDraft] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);

  const setTodo = () => {
    nimSetTodo(todoDraft);
    setTodoDraft("");
    setTodos(nimLoadTodos());
  };

  const deleteTodo = (num: number) => {
    console.log(num);
  };

  useEffect(() => {
    setTodos(nimLoadTodos());
  }, []);

  return (
    <section>
      <h1>TodoApp</h1>
      <input
        type="text"
        value={todoDraft}
        onChange={(e) => {
          setTodoDraft(e.target.value);
        }}
      />
      <button onClick={setTodo}>登録</button>
      <table>
        <tbody>
          {todos.map((todo, i) => {
            <tr>
              <td>{todo}</td>
              <td>
                <button type="button" onClick={() => deleteTodo(i)}>
                  削除
                </button>
              </td>
            </tr>;
          })}
        </tbody>
      </table>
    </section>
  );
};
export default NimTodo;
