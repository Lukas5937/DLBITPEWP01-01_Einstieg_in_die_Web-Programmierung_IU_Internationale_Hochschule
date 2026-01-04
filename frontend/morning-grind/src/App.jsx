import "./App.css";
import { Outlet, ScrollRestoration } from "react-router";

function App() {
  return (
    <>
      <ScrollRestoration />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
