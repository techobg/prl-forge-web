import { createBrowserRouter } from "react-router-dom";
import WalletPage from "../pages/Wallet/WalletPage";
import PaymentsPage from "../pages/Payments/PaymentsPage";
import MainLayout from "../layouts/MainLayout";
import WorkersPage from "../pages/Workers/WorkersPage";
import HomePage from "../pages/Home/HomePage";
import DashboardPage from "../pages/Dashboard/DashboardPage";
import ExplorerPage from "../pages/Explorer/ExplorerPage";
import BlocksPage from "../pages/Blocks/BlocksPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [

      {
  path: "workers",
  element: <WorkersPage />,
},
{
    path: "payments",
    element: <PaymentsPage />,
},

      {
        path: "wallet/:address",
        element: <WalletPage />,
      },
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "dashboard",
        element: <DashboardPage />,
      },
      {
        path: "explorer",
        element: <ExplorerPage />,
      },
      {
  path: "blocks/:height",
  element: <BlocksPage />,
}
    ],
  },
]);