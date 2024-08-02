import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./globals.css";

const rootElement = document.getElementById("root");

rootElement &&
	ReactDOM.createRoot(rootElement).render(
		<React.StrictMode>
			<App />
		</React.StrictMode>,
	);
