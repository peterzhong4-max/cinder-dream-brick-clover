import { createRoot } from "react-dom/client";
import { GameApp } from "../src/game/GameApp";
import "../src/styles.css";

const root = document.getElementById("root");
if (root) createRoot(root).render(<GameApp />);
