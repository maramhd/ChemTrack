import DashboardLayout from '../components/layout/DashboardLayout';
import DashboardStats from '../components/dashboard/DashboardStats';
import ActivityTable from '../components/dashboard/ActivityTable';
import AlertOverview from '../components/dashboard/AlertOverview';

function DashboardPage() {
  return (
    <DashboardLayout>
      <DashboardStats />

      <div className='dashboard-grid'>
        <ActivityTable />
        <AlertOverview />
      </div>
    </DashboardLayout>
  );
}

export default DashboardPage;