import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import { useSelector } from "react-redux";

const Main = () => {
  const user = useSelector((state) => state.auth.user);
  return user ? <HomeScreen /> : <LoginScreen />;
};

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
