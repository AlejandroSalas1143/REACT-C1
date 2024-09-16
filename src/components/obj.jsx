const goalsData = [
    { id: 1, goal: "Increase iPhone 15 market share by 20%", target: 20, progress: 4, compliance: 20 },  // Crítico
    { id: 2, goal: "Expand presence in emerging markets by 25%", target: 25, progress: 18, compliance: 72}, // Crítico
    { id: 3, goal: "Reduce production costs by 15%", target: 15, progress: 4, compliance: 27  },  // Aceptable
    { id: 4, goal: "Increase customer satisfaction to 90%", target: 90, progress: 50, compliance: 56 },  // Aceptable
    { id: 5, goal: "Reduce technical support response time to 24 hours", target: 24, progress: 22, compliance: 91 } // Exitoso
  ];
  
  // Function to determine status based on compliance percentage
  const getStatus = (compliance) => {
    if (compliance >= 0 && compliance <= 35) {
      return <span className="text-red-500">Critical</span>;
    } else if (compliance >= 36 && compliance <= 75) {
      return <span className="text-orange-500">Acceptable</span>;
    } else if (compliance >= 76 && compliance <= 100) {
      return <span className="text-green-500">Successful</span>;
    }
  };
  
  const StrategicGoalsTable = () => {
    return (
      <section className="pl-6 pr-6 pb-6 bg-white">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Strategic Goals</h2>
        <div className="overflow-x-auto bg-white shadow-md">
          <table className="min-w-full table-auto rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-blue-800 text-white">
                <th className="py-2 px-4 text-start">Code</th>
                <th className="py-2 px-4 text-start">Objective</th>
                <th className="py-2 px-4 text-start">Target</th>
                <th className="py-2 px-4 text-start">Progress</th>
                <th className="py-2 px-4 text-start">Compliance</th>
                <th className="py-2 px-4 text-start">Status</th>
              </tr>
            </thead>
            <tbody>
              {goalsData.map((goal) => (
                <tr key={goal.id} className="border-t">
                  <td className="py-2 px-4">{goal.id}</td>
                  <td className="py-2 px-4">{goal.goal}</td>
                  <td className="py-2 px-4">
                    {goal.target}%
                  </td>
                  <td className="py-2 px-4">
                    {goal.progress}%
                  </td>
                  <td className="py-2 px-4">
                    {goal.compliance}%
                  </td>
                  <td className="py-2 px-4">{getStatus(goal.compliance)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    );
  };
  
  export default StrategicGoalsTable;
  