import React from "react";
import DefaultLayout from "@layouts/Default";
import Homepage from "@pages/Homepage";
import MenuContainer from "@pages/Menu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MealsContainer from "@pages/Meals";
import MealContainer from "@pages/Meal";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <DefaultLayout>
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="restaurant">
              <Route path=":restaurantId">
                <Route path="menu/:date" element={<MenuContainer />} />
              </Route>
            </Route>
            <Route path="meal" element={<MealsContainer />} />
            <Route path="meal/:id" element={<MealContainer />} />
          </Routes>
        </DefaultLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
