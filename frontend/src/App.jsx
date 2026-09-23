import { useEffect } from "react";
import Nav from "./components/Nav";
import Mainroutes from "./routes/Mainroutes";
import { asynccurrentuser } from "./store/actions/userAction";
import { useDispatch } from "react-redux";
import { asyncloadproducts } from "./store/actions/productAction";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asynccurrentuser());
    dispatch(asyncloadproducts());
  }, [dispatch]);

  return (
    <div className=" overflow-auto w-full min-h-screen bg-gray-800 text-white font-thin">
      <div className="px-[10%]">
        <Nav />
        <Mainroutes />
      </div>
    </div>
  );
};

export default App;