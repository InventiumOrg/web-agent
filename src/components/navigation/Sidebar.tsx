export default function SideBar(){
    return (
        <aside id="sidebar" className="sidebar">

        <ul className="sidebar-nav" id="sidebar-nav">

        <li className="nav-item">
            <a className="nav-link " href="index.html">
            <i className="bi bi-grid"></i>
            <span>Dashboard</span>
            </a>
        </li>

        <li className="nav-item">
            <a className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
            <i className="bi bi-menu-button-wide"></i><span>Inventory</span><i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
            <li>
                <a href="components-pagination.html">
                <i className="bi bi-circle"></i><span>Manage Items</span>
                </a>
            </li>
            <li>
                <a href="components-progress.html">
                <i className="bi bi-circle"></i><span>Create Imports</span>
                </a>
            </li>
            <li>
                <a href="components-spinners.html">
                <i className="bi bi-circle"></i><span>Create Exports</span>
                </a>
            </li>
            <li>
                <a href="components-tooltips.html">
                <i className="bi bi-circle"></i><span>Items Providers</span>
                </a>
            </li>
            </ul>
        </li>

        <li className="nav-item">
            <a className="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#">
            <i className="bi bi-journal-text"></i><span>Points of Sale</span><i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul id="forms-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
            <li>
                <a href="forms-elements.html">
                <i className="bi bi-circle"></i><span>List POS</span>
                </a>
            </li>
            <li>
                <a href="forms-layouts.html">
                <i className="bi bi-circle"></i><span>Create new POS</span>
                </a>
            </li>
            </ul>
        </li>

        <li className="nav-item">
            <a className="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
            <i className="bi bi-layout-text-window-reverse"></i><span>Revenue</span><i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul id="tables-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
            <li>
                <a href="tables-general.html">
                <i className="bi bi-circle"></i><span>Show</span>
                </a>
            </li>
            <li>
                <a href="tables-data.html">
                <i className="bi bi-circle"></i><span>Manage Formulas</span>
                </a>
            </li>
            </ul>
        </li>

        <li className="nav-item">
            <a className="nav-link collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse" href="#">
            <i className="bi bi-bar-chart"></i><span>Report</span><i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul id="charts-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
            <li>
                <a href="charts-chartjs.html">
                <i className="bi bi-circle"></i><span>Create Report</span>
                </a>
            </li>
            <li>
                <a href="charts-apexcharts.html">
                <i className="bi bi-circle"></i><span>List Reports</span>
                </a>
            </li>
            </ul>
        </li>

        <li className="nav-item">
            <a className="nav-link collapsed" data-bs-target="#icons-nav" data-bs-toggle="collapse" href="#">
            <i className="bi bi-gem"></i><span>Users</span><i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul id="icons-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
            <li>
                <a href="icons-bootstrap.html">
                <i className="bi bi-circle"></i><span>Manage User Accounts</span>
                </a>
            </li>
            <li>
                <a href="icons-remix.html">
                <i className="bi bi-circle"></i><span>Create New Account</span>
                </a>
            </li>
            </ul>
        </li>

        <li className="nav-heading">Pages</li>

        <li className="nav-item">
            <a className="nav-link collapsed" href="users-profile.html">
            <i className="bi bi-person"></i>
            <span>Profile</span>
            </a>
        </li>

        <li className="nav-item">
            <a className="nav-link collapsed" href="pages-faq.html">
            <i className="bi bi-question-circle"></i>
            <span>F.A.Q</span>
            </a>
        </li>

        <li className="nav-item">
            <a className="nav-link collapsed" href="pages-contact.html">
            <i className="bi bi-envelope"></i>
            <span>Contact</span>
            </a>
        </li>

        <li className="nav-item">
            <a className="nav-link collapsed" href="pages-register.html">
            <i className="bi bi-card-list"></i>
            <span>Register</span>
            </a>
        </li>

        <li className="nav-item">
            <a className="nav-link collapsed" href="pages-login.html">
            <i className="bi bi-box-arrow-in-right"></i>
            <span>Logout</span>
            </a>
        </li>
        </ul>

    </aside>
    )
}