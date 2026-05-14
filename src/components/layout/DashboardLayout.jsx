import Sidebar from './Sidebar';
import Navbar from './Navbar';

function DashboardLayout({ children }) {
  return (
    <div className='dashboard-layout'>
      <Sidebar />

      <main className='dashboard-main'>
        <Navbar />

        <div className='dashboard-body'>
          {children}
        </div>
      </main>
    </div>
  );
}

export default DashboardLayout;