import styled from "styled-components";
import Profile from "./Profile";
import ToggleButton from "../../../reusable-ui/ToggleButton";
import { toast } from "react-toastify";
import { useState } from "react";
import ToastAdmin from "./ToastAdmin";

export default function NavbarRightSide() {
  const [isModeAdmin, setIsModeAdmin] = useState(false);

  const displayToastNotification = () => {
    if (!isModeAdmin) {
      toast.info("Mode admin activé", {
        // icon: <FaUserSecret size={30} />,
        theme: "dark",
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    setIsModeAdmin(!isModeAdmin);
  };

  return (
    <NavbarRightSideStyled>
      <ToggleButton
        isChecked={isModeAdmin}
        onToggle={displayToastNotification}
        labelIfUnchecked={"Activer le mode admin"}
        labelIfChecked={"Désactiver le mode admin"}
        className={"toggle-btn-navbar-right-side"}
      />
      <ToastAdmin />
      <Profile />
    </NavbarRightSideStyled>
  );
}

const NavbarRightSideStyled = styled.div`
  padding-right: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  .toggle-btn-navbar-right-side {
    margin-right: 50px;
  }
`;
