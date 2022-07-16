import React from "react";
import DefaultLayout from "@layouts/Default";
import Homepage from "@pages/Homepage";
import MenuContainer from "@pages/Menu";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <DefaultLayout>
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="restaurant">
              <Route path=":id">
                <Route path="menu" element={<MenuContainer />} />
              </Route>
            </Route>
          </Routes>
        </DefaultLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
