const ActionSummary = ({ risk }) => {
  if (!risk) return null;

  return (
    <div className="action-summary">
      {risk === "HIGH"
        ? "🚨 Autonomous maintenance workflow triggered"
        : "✅ No action required at this time"}
    </div>
  );
};

export default ActionSummary;
