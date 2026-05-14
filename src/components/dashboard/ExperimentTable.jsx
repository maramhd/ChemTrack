import DashboardLayout from '../components/layout/DashboardLayout';
import ExperimentGrid from '../components/experiments/ExperimentGrid';

function ExperimentsPage() {
  return (
    <DashboardLayout>
      <ExperimentGrid />
    </DashboardLayout>
  );
}

export default ExperimentsPage;