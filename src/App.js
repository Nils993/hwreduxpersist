// src/App.js

import React from "react";
import { Provider } from "react-redux";
import TasksList from "./components/TasksList";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1>Мое приложение с задачами</h1>
        </header>
        <main>
          <TasksList />
        </main>
      </div>
    </Provider>
  );
}

export default App;
