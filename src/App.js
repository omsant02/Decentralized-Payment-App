import { useState, createContext, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Login from "./components/Login";

const AppState = createContext();

function App() {
  const { ethereum } = window;
  const [login, setLogin] = useState(false);
  const [address, setAddress] = useState("");
  const [chain, setChain] = useState("");

  useEffect(() => {
    ethereum.on("chainChanged", async (chainId) => {
      if (chainId == "0x3") {
        setChain("Ropsten");
      } else if (chainId == "0x4") {
        setChain("Rinkeby");
      } else if (chainId == "0x13881") {
        setChain("Polygon");
      } else {
        setLogin(false);
      }
    });
    ethereum.on("accountsChanged", async (accounts) => {
      setAddress(accounts[0]);
    });
  }, []);

  return (
    <AppState.Provider
      value={{
        login,
        setLogin,
        address,
        setAddress,
        chain,
        setChain,
      }}
    >
      <div className="min-w-full h-screen">
        {login ? (
          <div className="min-w-full min-h-full">
            {/* Main Application */}
            <Header />
            <Main />
          </div>
        ) : (
          <Login />
        )}
      </div>
    </AppState.Provider>
  );
}

export default App;
export { AppState };
