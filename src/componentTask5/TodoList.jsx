export default function TodoList() {
  const tasks = [
    { id: 101, text: "Finish React Day 2" },
    { id: 102, text: "Learn useState" },
    { id: 103, text: "Learn Props" },
    { id: 104, text: "Build Todo App" }
  ];

  return (
    <div>
      {tasks.map((item) => (
        <li key={item.id}>
          {item.text} <button>Delete</button>
        </li>
      ))}
    </div>
  );
}