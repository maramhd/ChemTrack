import { Link } from 'react-router-dom';
import {
  FiHome,
  FiFlask,
  FiBox,
  FiAlertTriangle,
  FiSettings,
} from 'react-icons/fi';

function Sidebar() {
  return (
    <aside className='sidebar'>
      <div className='sidebar-logo'>
        ChimLink
      </div>

      <nav className='sidebar-nav'>
        <Link to='/dashboard'>
          <FiHome /> Dashboard
        </Link>

        <Link to='/experiments'>
          <FiFlask /> Experiments
        </Link>

        <Link to='/materials'>
          <FiBox /> Materials
        </Link>

        <Link to='/alerts'>
          <FiAlertTriangle /> Alerts
        </Link>

        <Link to='/settings'>
          <FiSettings /> Settings
        </Link>
      </nav>
    </aside>
  );
}

export default Sidebar;