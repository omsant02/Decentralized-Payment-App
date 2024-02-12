import { useState, createContext, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Login from "./components/Login";

function App() {
  const [login, setLogin] = useState(false);
  return (
    <div className="min-w-full h-screen">
      {login ? (
        <div className="min-w-full min-h-full">
          {}

          <Header />
          <Main />
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
