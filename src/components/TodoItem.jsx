import { AiFillDelete } from "react-icons/ai";

function TodoItem({ todoName, todoDate, onDeleteClick }) {
  // let todoName = "Buy Milk";
  // let todoDate = "07/03/2024";

  return (
    <div className="container">
      <div className="row Pg-Row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger pg-Button"
            onClick={(event) => onDeleteClick(todoName)}
          >
            <AiFillDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
