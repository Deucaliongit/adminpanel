import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";

const Welcome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div>
      <h1 className="text-lg font-bold sm:pt-14 px-4">Dashboard</h1>
      <h2 className="px-4">
        Welcome Back <strong>{user && user.name}</strong>
      </h2>
    </div>
  );
};

export default Welcome;
