import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import "./App.css";


export default function App() {
  return (
    <div>
      <h1>Currency Converter</h1>
      <Header/>
      <Outlet />
    </div>
  );
}