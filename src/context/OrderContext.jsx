import { createContext } from "react";

export default createContext({
  isModeAdmin: false,
  setIsModeAdmin: () => {},
  adminContent: "Ajouter un produit",
  setAdminContent: () => {},
});
