import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navigation from "./Components/Shared/Navigation/Navigation";
import Authenticate from "./Pages/Authenticate/Authenticate";
import Activate from "./Pages/Activate/Activate";
import Rooms from "./Pages/Rooms/Rooms";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useLoadingWithRefresh } from "./hooks/useLoadingWithRefresh";
import Loader from "./Components/Shared/Loader/Loader";
import Room from "./Pages/Room/Room";
function App() {
 
  const {loading} = useLoadingWithRefresh();
  return (
    <div className="App">
      {loading ? (
        <Loader message={'Loading, please wait...'}/>
      ) : (
        <BrowserRouter>
          <Navigation />
          <Routes>
            {/* Guest Routes */}
            <Route
              path="/"
              exact
              element={
                <GuestRoute>
                  <Home />
                </GuestRoute>
              }
            />
            <Route
              path="/authenticate"
              element={
                <GuestRoute>
                  <Authenticate />
                </GuestRoute>
              }
            />

            {/* semi protected Area */}
            <Route
              path="/activate"
              element={
                <SemiProtectedRoute>
                  <Activate />
                </SemiProtectedRoute>
              }
            />

            {/* protected area */}
            <Route
              path="/rooms"
              element={
                <ProtectedRoute>
                  <Rooms />
                </ProtectedRoute>
              }
            />
             <Route
              path="/room/:id"
              element={
                <ProtectedRoute>
                  <Room/>
                </ProtectedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

const GuestRoute = ({ children, ...rest }) => {
  const { isAuth } = useSelector((state) => state.auth);
  return isAuth ? <Navigate to={"/rooms"} /> : children;
};

const SemiProtectedRoute = ({ children, ...rest }) => {
  const { isAuth, user } = useSelector((state) => state.auth);
  return !isAuth ? (
    <Navigate to={"/"} />
  ) : isAuth && !user.activated ? (
    children
  ) : (
    <Navigate to={"/rooms"} />
  );
};
const ProtectedRoute = ({ children, ...rest }) => {
  const { isAuth, user } = useSelector((state) => state.auth);
  return !isAuth ? (
    <Navigate to={"/"} />
  ) : isAuth && !user.activated ? (
    <Navigate to={"/activate"} />
  ) : (
    children
  );
};
export default App;
