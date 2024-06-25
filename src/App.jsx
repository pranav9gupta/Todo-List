import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import { useState } from "react";
function App() {
  const initialTodoItems = [
    {
      name: "Buy Milk",
      dueDate: "07/03/2024",
    },
    {
      name: "Go to office",
      dueDate: "07/03/2024",
    },
  ];

  const [todoItems, setTodoItems] = useState(initialTodoItems);

  const handleNewItem = (itemName, itemDueDate) => {
    const newTodoItems = [
      ...todoItems,
      {
        name: itemName,
        dueDate: itemDueDate,
      },
    ];

    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const modifiedTodoItems = todoItems.filter(
      (item) => item.name !== todoItemName
    );
    setTodoItems(modifiedTodoItems);
  };

  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo onNewItem={handleNewItem}></AddTodo>
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems
        todoItems={todoItems}
        onDeleteClick={handleDeleteItem}
      ></TodoItems>
    </center>
  );
}

export default App;
