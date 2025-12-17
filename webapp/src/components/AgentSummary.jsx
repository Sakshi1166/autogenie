import AgentCard from "./AgentCard";

const AgentSummary = ({ agents }) => {
  if (!agents) return null;

  return (
    <div className="agent-panel">
      <h3>🤖 Agent Execution Summary</h3>
      <div className="agent-grid">
        {agents.map((agent, index) => (
          <AgentCard key={index} agent={agent} />
        ))}
      </div>
    </div>
  );
};

export default AgentSummary;
