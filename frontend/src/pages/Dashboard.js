import React from "react";
import { Line } from "react-chartjs-2";

const Dashboard = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr"],
    datasets: [
      {
        label: "Revenue",
        data: [12000, 19000, 30000, 50000],
        borderColor: "rgba(75,192,192,1)",
        fill: false,
      },
    ],
  };

  return (
    <div>
      <h2>Revenue Overview</h2>
      <Line data={data} />
    </div>
  );
};

export default Dashboard;
