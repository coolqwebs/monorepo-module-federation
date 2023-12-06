import { App } from "@/components/App";
import { LazyShop } from "@/pages/Shop/index.lazy";
import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const routes = [
  {
    path: "/shop",
    element: <App />,
    children: [
      {
        path: "/shop/main",
        element: (
          <Suspense fallback="Loading...">
            <LazyShop />
          </Suspense>
        ),
      },
      {
        path: "/shop/primary",
        element: (
          <Suspense fallback="Loading...">
            <div style={{ color: "red" }}>Primary page for Shop Module</div>
          </Suspense>
        ),
      },
    ],
  },
];

export const router = createBrowserRouter(routes);

export default routes;
