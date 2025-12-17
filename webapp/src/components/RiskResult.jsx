const RiskResult = ({ risk, probability }) => {
  if (!risk) return null;

  return (
    <div className="risk-card">
      <h3>📊 Risk Result</h3>
      <p>
        <strong>Status:</strong>{" "}
        <span className={risk === "HIGH" ? "high" : "low"}>{risk}</span>
      </p>
      <p>
        <strong>Probability:</strong> {probability}
      </p>
    </div>
  );
};

export default RiskResult;
