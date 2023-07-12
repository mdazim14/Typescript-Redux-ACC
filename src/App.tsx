import { useCallback, useReducer, useRef } from 'react';
import './App.css'
import TheLayout from './views/pages/singleProduct/TheLayout';







//  simple todo work...............
interface Todo {
  id: number;
  text: string;
}
type ActionType = { type: "ADD", text: string } | { type: "REMOVE"; id: number }
function App() {
  function reducer(state: Todo[], action: ActionType) {
    switch (action.type) {
      case "ADD":
        return [
          ...state,
          {
            id: state.length,
            text: action.text,
          }
        ];
      case "REMOVE":
        return state.filter(({ id }) => id !== action.id);
    }
  }
  const [todos, dispatch] = useReducer(reducer, []);
  const newTodoRef = useRef<HTMLInputElement>(null);
  const onAddTodo = useCallback(() => {
    if (newTodoRef.current) {
      dispatch({
        type: "ADD",
        text: newTodoRef.current.value
      })
      newTodoRef.current.value = "";
    }
  }, []);

  const onRemoveTodo = useCallback((id: number) => {
    dispatch({
      type: "REMOVE",
      id: id
    })
  }, []);









  return (
    <>

      <TheLayout></TheLayout>


      <h1> &lt; azim lingkon /&gt; </h1>
      <input type={"text"} ref={newTodoRef}></input>
      <button onClick={onAddTodo}>ADD</button>
      {
        todos.map((todo) => (
          <div key={todo.id}>
            {todo.text} <button onClick={() => onRemoveTodo(todo.id)}>Remove</button>
          </div>
        ))
      }
















    </>
  )
}

export default App
