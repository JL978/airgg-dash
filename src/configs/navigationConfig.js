import React from "react";
import * as Icon from "react-feather";
import homeroute from "./homeroute";

const navigationConfig = [
  {
    id: "home",
    title: "Dashboard",
    type: "item",
    icon: <Icon.Home size={20} />,
    permissions: ["admin", "editor"],
    navLink: homeroute,
  },
  {
    id: "analytics",
    title: "Analytics",
    type: "item",
    icon: <Icon.BarChart2 size={20} />,
    permissions: ["admin", "editor"],
    navLink: homeroute + "/analytics",
  },
  {
    id: "products",
    title: "Products",
    type: "item",
    icon: <Icon.ShoppingCart size={20} />,
    permissions: ["admin", "editor"],
    navLink: homeroute + "/products",
  },
  {
    id: "coupons",
    title: "Coupons",
    type: "item",
    icon: <Icon.CreditCard size={20} />,
    permissions: ["admin", "editor"],
    navLink: homeroute + "/coupons",
  },
  {
    id: "payments",
    title: "Payments",
    type: "item",
    icon: <Icon.CreditCard size={20} />,
    permissions: ["admin", "editor"],
    navLink: homeroute + "/payments",
  },
  {
    id: "tickets",
    title: "Tickets",
    type: "item",
    icon: <Icon.Folder size={20} />,
    permissions: ["admin", "editor"],
    navLink: homeroute + "/tickets",
  },
  {
    id: "feedbacks",
    title: "Feedback",
    type: "item",
    icon: <Icon.MessageCircle size={20} />,
    permissions: ["admin", "editor"],
    navLink: homeroute + "/feedback",
  },
  {
    id: "blacklists",
    title: "Blacklists",
    type: "item",
    icon: <Icon.Slash size={20} />,
    permissions: ["admin", "editor"],
    navLink: homeroute + "/blacklists",
  },
  {
    id: "fraud",
    title: "Fraud Protect",
    type: "item",
    icon: <Icon.AlertOctagon size={20} />,
    permissions: ["admin", "editor"],
    navLink: homeroute + "/fraud",
  },
];

export default navigationConfig;
