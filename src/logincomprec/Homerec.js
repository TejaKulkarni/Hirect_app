import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useUserAuthrec } from "../contextrec/UserAuthContextrec";

const Homerec = () => {
  const { logOut, user } = useUserAuthrec();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <div className="p-4 box mt-3 text-center">
        Hello lets start hiring<br />
        {user && user.email}
      </div>
      <div className="d-grid gap-2">
        <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button>
      </div>
    </>
  );
};

export default Homerec;
