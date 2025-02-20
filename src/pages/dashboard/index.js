import React from 'react';
import { useRouter } from 'next/router';

const Dashboard = () => {
  const router = useRouter();

  return (
    <div>
      <h1>Dashboard</h1>
      {/* Add your dashboard content here */}
    </div>
  );
};

export default Dashboard;
