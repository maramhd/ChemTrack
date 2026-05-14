function ActivityTable() {
  return (
    <div className='table-card'>
      <h3>Recent Experiments</h3>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Chemical Test</td>
            <td>Completed</td>
            <td>12 May</td>
          </tr>

          <tr>
            <td>DNA Analysis</td>
            <td>Pending</td>
            <td>14 May</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ActivityTable;