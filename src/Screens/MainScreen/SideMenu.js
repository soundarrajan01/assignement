import { Card } from "antd";
import React, { useState } from "react";
import style from "./MainScreen.module.css";
import { useLocation, useNavigate } from "react-router";
export default function SideMenu() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [menuItems, setMenuItems] = useState([
    { name: "Dashboard", path: "/dashboard" },
    { name: "User Management", path: "/usermanagement" },
    { name: "Rating and Review", path: "/rating-review" },
    { name: "Settings", path: "/settings" },
    { name: "History", path: "/history" },
    { name: "All Bookings", path: "/allbookings" },
    { name: "Push Notification", path: "/push-notification" },
    { name: "Transaction List", path: "/transaction-list" },
    { name: "Google Analytics", path: "/google-analytics" },
    { name: "Multi-Currency", path: "/multi-currency" },
    { name: "Category", path: "/category" },
    { name: "Live Chat History", path: "/live-chat-history" },
    { name: "Package Plan", path: "/package-plan" },
    { name: "Referral History", path: "/referral-history" },
    { name: "Google Map", path: "/google-map" },
  ]);
  console.log(pathname, "pathname");

  return (
    <div
      style={{
        width: "240px",
        margin: "40px",
        overflowY: "scroll",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      <Card className={style.sidemenucontent}>
        {menuItems.map((item) => {
          return (
            <div
              onClick={() => navigate(item.path)}
              style={{ border: "1px solid #D8D8D8" }}
            >
              <p
                className={
                  pathname === item.path
                    ? style.ActiveSideMenuText
                    : style.SideMenuText
                }
              >
                {item.name}
              </p>
            </div>
          );
        })}
      </Card>
    </div>
  );
}
