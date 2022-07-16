import DefaultLayout from "@layouts/Default";
import Homepage from "@pages/Homepage";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <DefaultLayout>
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
          </Routes>
        </DefaultLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
