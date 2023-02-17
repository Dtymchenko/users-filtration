import React from "react";
import "./App.css";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux/es/exports";
import { setItems, setIsLoading } from "./components/redux/slices/mainSlice"
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import NotFound from "./pages/NotFound";

function App() {

  const dispatch = useDispatch()
  
  React.useEffect(() => {
    const getUsers = async () => {
      try {
        dispatch(setIsLoading(true))
        const data = await axios.get("https://dummyjson.com/users");
        dispatch(setItems(data.data.users));
        dispatch(setIsLoading(false))
      } catch (error: any) {
      } finally {
        dispatch(setIsLoading(false))
      }
    };
    getUsers();
  }, []);

  return <div className="App">
    <Routes>
    <Route index element={<Main />} />
    <Route
          path="/detail"
          element={
            <Detail />
          }
        />
        <Route path="*" element={<NotFound />} />
    </Routes>
    
  </div>;
}

export default App;

