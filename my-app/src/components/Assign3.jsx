import React, { useState, useEffect } from "react";

// ==================== Q1 Student Card ====================
function StudentCard({ name, course, city }) {
  return (
    <div style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
      <h3>{name}</h3>
      <p>Course: {course}</p>
      <p>City: {city}</p>
    </div>
  );
}

// ==================== Q5 Product Card ====================
function ProductCard({ name, price, addToCart }) {
  return (
    <div style={{ border: "1px solid blue", padding: "10px", margin: "10px" }}>
      <h3>{name}</h3>
      <p>Price: ₹{price}</p>
      <button onClick={addToCart}>Add To Cart</button>
    </div>
  );
}

// ==================== Q7 Todo Item ====================
function TodoItem({ task, deleteTask, toggleComplete }) {
  return (
    <li>
      <span
        style={{
          textDecoration: task.completed ? "line-through" : "none",
          marginRight: "10px",
        }}
      >
        {task.text}
      </span>

      <button onClick={() => toggleComplete(task.id)}>
        {task.completed ? "Undo" : "Complete"}
      </button>

      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
}

// ==================== Main Component ====================
export default function Assign3() {
  // Q2 Light Dark Mode
  const [dark, setDark] = useState(false);

  // Q3 Login Logout
  const [login, setLogin] = useState(false);

  // Q4 Counter
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  // Q5 Cart
  const [cart, setCart] = useState(0);

  // Q6 Form
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  // Q7 Todo
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  // Q8 Password Toggle
  const [showPassword, setShowPassword] = useState(false);

  // Q9 Character Counter
  const [text, setText] = useState("");

  // Q10 Search Filter
  const [search, setSearch] = useState("");

  const products = [
    "Laptop",
    "Mouse",
    "Keyboard",
    "Monitor",
    "Phone",
  ];

  const filteredProducts = products.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  // Todo Functions
  const addTask = () => {
    if (!task) return;

    setTodos([
      ...todos,
      {
        id: Date.now(),
        text: task,
        completed: false,
      },
    ]);

    setTask("");
  };

  const deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  return (
    <div
      style={{
        padding: "20px",
        background: dark ? "black" : "white",
        color: dark ? "white" : "black",
      }}
    >
      <h1>React Assignment 2</h1>

      {/* Q1 */}
      <h2>Q1 Student Cards</h2>

      {[
        { name: "Ankit", course: "BCA", city: "Delhi" },
        { name: "Ravi", course: "MCA", city: "Mumbai" },
        { name: "Priya", course: "B.Tech", city: "Pune" },
      ].map((student, index) => (
        <StudentCard
          key={index}
          name={student.name}
          course={student.course}
          city={student.city}
        />
      ))}

      {/* Q2 */}
      <h2>Q2 Light/Dark Mode</h2>

      <button onClick={() => setDark(!dark)}>
        {dark ? "Light Mode" : "Dark Mode"}
      </button>

      {/* Q3 */}
      <h2>Q3 Login Logout</h2>

      {!login ? (
        <>
          <p>Please Login</p>
          <button onClick={() => setLogin(true)}>Login</button>
        </>
      ) : (
        <>
          <p>Welcome User</p>
          <button onClick={() => setLogin(false)}>Logout</button>
        </>
      )}

      {/* Q4 */}
      <h2>Q4 Counter</h2>

      <h3>{count}</h3>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      {/* Q5 */}
      <h2>Q5 Product Card</h2>

      <h3>Cart Items: {cart}</h3>

      <ProductCard
        name="Laptop"
        price="50000"
        addToCart={() => setCart(cart + 1)}
      />

      <ProductCard
        name="Phone"
        price="20000"
        addToCart={() => setCart(cart + 1)}
      />

      {/* Q6 */}
      <h2>Q6 Registration Form</h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSubmittedData(form);
        }}
      >
        <input
          type="text"
          placeholder="Name"
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <br />
        <br />

        <input
          type="email"
          placeholder="Email"
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <br />
        <br />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />

        <br />
        <br />

        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div>
          <h4>Name: {submittedData.name}</h4>
          <h4>Email: {submittedData.email}</h4>
          <h4>Password: {submittedData.password}</h4>
        </div>
      )}

      {/* Q7 */}
      <h2>Q7 Todo App</h2>

      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTask}>Add</button>

      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            task={todo}
            deleteTask={deleteTask}
            toggleComplete={toggleComplete}
          />
        ))}
      </ul>

      {/* Q8 */}
      <h2>Q8 Password Visibility</h2>

      <input
        type={showPassword ? "text" : "password"}
        placeholder="Enter Password"
      />

      <button
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? "Hide Password" : "Show Password"}
      </button>

      {/* Q9 */}
      <h2>Q9 Character Counter</h2>

      <textarea
        rows="5"
        cols="30"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          color: text.length > 100 ? "red" : "black",
        }}
      />

      <p>Characters: {text.length}</p>

      <p>
        Words:{" "}
        {
          text.trim().split(/\s+/).filter(Boolean)
            .length
        }
      </p>

      {text.length > 100 && (
        <p>Character limit exceeded!</p>
      )}

      {/* Q10 */}
      <h2>Q10 Search Filter</h2>

      <input
        type="text"
        placeholder="Search Product"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredProducts.length > 0 ? (
        <ul>
          {filteredProducts.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <h4>No Product Found</h4>
      )}
    </div>
  );
}