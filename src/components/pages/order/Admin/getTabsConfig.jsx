import { AiOutlinePlus } from "react-icons/ai";
import { BiSun } from "react-icons/bi";
import { GiBaseballGlove } from "react-icons/gi";
import { MdModeEditOutline, MdOutlineLocalDrink } from "react-icons/md";

export const getTabsConfig = () => [
  // {
  //   index:"",
  //   Icon: isCollapsed ? <FiChevronDown /> : <FiChevronUp />,
  //   label: "",
  //   onClick: actionTogglePanel,
  //   className: isCollapsed ? "is-active" : "",
  // },
  {
    index: "add",
    label: "Ajouter un produit",
    Icon: <AiOutlinePlus />,
  },
  {
    index: "edit",
    label: "Modifier un pr oduit",
    Icon: <MdModeEditOutline />,
  },
  // {
  //   index: "theme",
  //   label: "Changer thème",
  //   Icon: <BiSun />,
  // },
  // {
  //   index: "drink",
  //   label: "Boire un verre",
  //   Icon: <MdOutlineLocalDrink />,
  // },
  // {
  //   index: "baseball",
  //   label: "HomeRun",
  //   Icon: <GiBaseballGlove />,
  // },
];

export const getTabSelected = (tabs, currentTabSelected) => {
  return tabs.find((tab) => tab.index === currentTabSelected);
};
