import StatsCard from './StatsCard';

function DashboardStats() {
  return (
    <div className='stats-grid'>
      <StatsCard title='Experiments' value='124' />
      <StatsCard title='Materials' value='82' />
      <StatsCard title='Alerts' value='14' />
      <StatsCard title='Users' value='39' />
    </div>
  );
}

export default DashboardStats;