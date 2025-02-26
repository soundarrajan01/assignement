import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import { AuthPrivateRouter, DashboardPrivateRoute } from "./Route/PrivateRoute";
import AuthLayout from "./Layouts/AuthLayout";
import Login from "./Screens/AuthScreen/Login";
import DashboardLayout from "./Layouts/DashboardLayout";
import Dashboard from "./Screens/MainScreen/Dashboard";
import UserManagement from "./Screens/MainScreen/UserManagement";
import History from "./Screens/MainScreen/History";
import AllBookings from "./Screens/MainScreen/AllBookings";

function App() {
  const router = createBrowserRouter([
    {
      element: <AuthPrivateRouter />,
      children: [
        {
          element: <AuthLayout />,
          children: [
            {
              path: "/",
              element: <Login />,
            },
          ],
        },
      ],
    },
    {
      element: <DashboardPrivateRoute />,
      children: [
        {
          element: <DashboardLayout />,
          children: [
            {
              path: "/dashboard",
              element: <Dashboard />,
            },
            {
              path: "/usermanagement",
              element: <UserManagement />,
            },
            {
              path: "/history",
              element: <History />,
            },
            {
              path: "/allbookings",
              element: <AllBookings />,
            },
          ],
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
