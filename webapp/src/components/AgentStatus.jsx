const AgentStatus = ({ agents }) => {
  if (!agents) return null;

  return (
    <div className="agent-status">
      {agents.length} agent(s) executed based on risk assessment
    </div>
  );
};

export default AgentStatus;
