import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuthrec } from "../../contextrec/UserAuthContextrec";
const ProtectedRouterec = ({ children }) => {
  const { user } = useUserAuthrec();

  console.log("Check user in Private: ", user);
  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRouterec;
