import React from "react"
import ReactDOM from "react-dom/client"
import Signin from "./routes/Signin.tsx"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Inventory from "./routes/Inventory.tsx"
import Pos from "./routes/pointofsale/Pos.tsx"
import Report from "./routes/Report.tsx"
import Dashboard from "./routes/Dashboard.tsx"
import Revenue from "./routes/revenue/Revenue.tsx"
import Import from "./routes/inventory/Import.tsx"
import ReportForm from "./routes/report/ReportForm.tsx"
import App from "./app.tsx"
import RecordHistory from "./components/tables/RecordHistory.tsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />
      },
      {
        path: "/inventory/",
        element: <Inventory />,
        children: [
          {
            path: "imports",
            element: <RecordHistory 
              title="Today's Inventory Imports"
              headers={["ExportID", "PosID", "Product", "Created Date", "Status", "Quantity", "Unit"]}
              data={["EXP/POS004/001", "001", "Condensed Milk", "2024/02/06",<span className="badge text-bg-info">Processing</span>, 20,"units"]}
            /> 
          },
          {
            path: "exports",
            element: <RecordHistory 
              title="Today's Inventory Exports"
              headers={["ExportID", "PosID", "Product", "Created Date", "Status", "Quantity", "Unit"]}
              data={["EXP/POS004/001", "001", "Condensed Milk", "2024/02/06",<span className="badge text-bg-info">Processing</span>, 20,"units"]}
            /> 
          },
          {
            path: "new",
            element: <Import />
          }
          // {
          //   path: "/inventory/imports/new",
          //   element: <Import heading="New Inventory Import" 
          //   />
          // },
        ]
      },
      // {
      //   path: "/signin",
      //   element: <Signin />
      // },
      {
        path: "/pos",
        element: <Pos />
      },
      {
        path: "/revenue",
        element: <Revenue />
      },
      {
        path: "/reports/",
        element: <Report />,
        children: [
          {
            path: "new",
            element: <ReportForm />
          }
        ]
      }
    ]
  },
])


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
