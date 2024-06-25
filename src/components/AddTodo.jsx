import { useRef, useState } from "react";
import { RiAddBoxLine } from "react-icons/ri";

function AddTodo({ onNewItem }) {
  // const [todoName, setTodoName] = useState("");
  // const [todoDate, setTodoDate] = useState("");

  const todoNameElement = useRef();
  const todoDateElement = useRef();

  // const handleNameChange = (event) => {
  //   setTodoName(event.target.value);
  // };
  // const handleDateChange = (event) => {
  //   setTodoDate(event.target.value);
  // };

  const handleAddBtnClick = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const todoDate = todoDateElement.current.value;
    onNewItem(todoName, todoDate);
    // setTodoDate("");
    // setTodoName("");
  };

  return (
    <div>
      <form action="" className="row Pg-Row" onSubmit={handleAddBtnClick}>
        <div className="col-6">
          <input
            ref={todoNameElement}
            // value={todoName}
            type="text"
            placeholder="Add todos to list"
            // onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input
            ref={todoDateElement}
            // value={todoDate}
            type="date"
            // onChange={handleDateChange}
          />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success pg-Button">
            <RiAddBoxLine />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
