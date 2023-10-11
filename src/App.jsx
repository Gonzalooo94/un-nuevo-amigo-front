import React from "react";
import "./App.css";
import { Nav } from "./components/layout/Nav";
import Rutas from "./components/layout/routes";
import { AuthProvider } from "./components/context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <div className="App ">
        <Nav/>
        <div>
          <div>
            <Rutas />
          </div>
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;
