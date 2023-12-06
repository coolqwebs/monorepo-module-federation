import { App } from "@/components/App";
import { createBrowserRouter } from "react-router-dom";
// @ts-ignore
import shopRouter from "shop/Router";
// @ts-ignore
import adminRouter from "admin/Router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [...shopRouter, ...adminRouter],
  },
]);
