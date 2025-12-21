import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const ErrorLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default ErrorLayout;
