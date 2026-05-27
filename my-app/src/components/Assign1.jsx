import React, { useState, useEffect } from "react";
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Link,
// } from "react-router-dom";

export default function Assign1() {
  return (
    <div>
         <h2>Q1.Display Username</h2>
        <Welcome username="Ankit" />
        <Welcome username="Aman" />
        <FavoriteColor />
        <ShowHide />
        <AgeCheck age={20} />
        <InputField />
        <ComponentLoad />
        <CounterApp />
        {/* <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/about">About</Link> |{" "}
          <Link to="/help">Help</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/help" element={<Help />} />
        </Routes>  */}
        <ProfileCard
          name="Ritu"
          age={19}
          course="BCA"
        />
        <BackgroundToggle />
        <FetchData />
        <LoginLogout />
        <Text 
        
        
        />
    </div>
  )
}

// Q1 
function Welcome(props) {
  return <div>
    <h3>Welcome, {props.username}</h3>
  </div>
}

// Q2 
function FavoriteColor() {
  const [color, setColor] = useState("None");
  return (
    <div>
      <h2>Q2 Favorite Color</h2>

      <button onClick={() => setColor("Red")}>Red</button>
      <button onClick={() => setColor("Blue")}>Blue</button>
      <button onClick={() => setColor("Green")}>Green</button>

      <p>Selected Color: {color}</p>
    </div>
  );
}

// Q3
function ShowHide() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <h2>Q3 Show/Hide</h2>

      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"}
      </button>

      {show && <p>This paragraph is visible.</p>}
    </div>
  );
}

// Q4 
function AgeCheck(props) {
  return (
    <div>
      <h2>Q4 Age Check</h2>

      {props.age >= 18 ? (
        <p>Eligible to Vote</p>
      ) : (
        <p>Not Eligible</p>
      )}
    </div>
  );
}

// Q5 
function InputField() {
  const [text, setText] = useState("");

  return (
    <div>
      <h2>Q5 Input Field</h2>

      <input type="text"placeholder="Type here"
      onChange={(e) => setText(e.target.value)}
      />

      <p>You typed: {text}</p>
    </div>
  );
}

// Q6 
function ComponentLoad() {
  useEffect(() => {
    console.log("Component Loaded");
  }, []);

  return (
    <div>
      <h2>Q6.useffect</h2>
    </div>
  );
}

// Q7 
function CounterApp() {
const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Q7 Counter App</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <p>Count: {count}</p>

      {count % 2 === 0 ? (
        <p>Even Number</p>
      ) : (
        <p>Odd Number</p>
      )}
    </div>
  );
}

// Q8 
function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

function Help() {
  return <h2>Help Page</h2>;
}

// Q9 
function ProfileCard(props) {
  return (
    <div>
      <h2>Q9 Profile Card</h2>

      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Course: {props.course}</p>
    </div>
  );
}

// Q10
function BackgroundToggle() {
  const [dark, setDark] = useState(false);

  return (
    <div
      style={{
        backgroundColor: dark ? "black" : "lightblue",
        color: dark ? "white" : "black",
        padding: "20px",
      }}
    >
      <h2>Q10 Background Toggle</h2>

      <button onClick={() => setDark(!dark)}>
        Change Background
      </button>
    </div>
  );
}

// Q11 
function FetchData() {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => res.json())
      .then((data) => setTodo(data));
  }, []);

  return (
    <div>
      <h2>Q11 Fetch API</h2>

      <p>Title: {todo.id}</p>
      <p>Status: {todo.completed ? "Completed" : "Not Completed"}</p>
    </div>
  );
}

// Q12 
function LoginLogout() {
  const [login, setLogin] = useState(false);

  return (
    <div>
      <h2>Q12 Login Logout</h2>

      {login ? (
        <div>
          <h3>Hello User</h3>
          <button onClick={() => setLogin(false)}>
            Logout
          </button>
        </div>
      ) : (
        <button onClick={() => setLogin(true)}>
          Login
        </button>
      )}
    </div>
  );
}

// Q13 
function Text(props){
  const [color,setColor]=useState("None")
  return (
  <div>
    <h2>Q13 Change text</h2>
    <button onChange={()=>setColor({color})}>Change</button>

  </div>
  )
  
}
function Save(){}
