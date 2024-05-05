import ColumnChart from "../components/charts/BarChart";
import Tab from "../components/navigation/Tab";
import { NavLink, Outlet } from "react-router-dom";

export default function Iventory(){
    return (
        <>
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Inventory</h1>
                    <div className="btn-toolbar mb-2 mb-md-0">
                    <div className="btn-group me-2">
                        <NavLink to="/inventory/new" type="button" className="btn btn-sm btn-primary">Export Inventory</NavLink>
                        <NavLink to="/inventory/new" type="button" className="btn btn-sm btn-dark">Import Inventory</NavLink>
                        
                    </div>
                    <button id="graph" type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle d-flex align-items-center gap-1">
                        <svg className="bi"><use xlinkHref="#calendar3"/></svg>
                        This week
                    </button>
                    </div>
                </div>
                
                <ColumnChart />
                <hr className="example-divider"/>
                <Tab />
                <Outlet />
            </main>

        </>
    )
}