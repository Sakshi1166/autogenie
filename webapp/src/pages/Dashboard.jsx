import { useState } from "react";
import TelemetryForm from "../components/TelemetryForm";
import RiskResult from "../components/RiskResult";
import AgentSummary from "../components/AgentSummary";
import AgentStatus from "../components/AgentStatus";
import ActionSummary from "../components/ActionSummary";

const Dashboard = () => {
  const [result, setResult] = useState(null);

  return (
    <div className="dashboard">
      <h1>AutoGenie Agentic AI Dashboard</h1>

      <TelemetryForm onResult={setResult} />

      {result && (
        <>
          <RiskResult
            risk={result.risk}
            probability={result.probability}
          />
          <ActionSummary risk={result.risk} />
          <AgentStatus agents={result.agents} />
          <AgentSummary agents={result.agents} />
        </>
      )}
    </div>
  );
};

export default Dashboard;
