import "./App.css";

import { UserContext } from "../src/context/UserToken";
import { useContext, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { Toaster } from "react-hot-toast";

function App() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("SomeComponent must be used within a UserContextProvider");
  }

  const { setUserToken } = context;

  useEffect(() => {
    if (localStorage.getItem("userToken") !== null) {
      setUserToken(localStorage.getItem("userToken"));
    }
  }, []);

  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
}

export default App;
