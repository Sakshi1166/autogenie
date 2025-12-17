const AgentCard = ({ agent }) => {
  return (
    <div className="agent-card">
      <h4>{agent.name}</h4>
      <span className={`badge ${agent.status.toLowerCase()}`}>
        {agent.status}
      </span>
      <p>{agent.message}</p>
    </div>
  );
};

export default AgentCard;
