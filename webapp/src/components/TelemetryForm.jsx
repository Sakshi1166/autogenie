import { useState } from "react";
import { analyzeRisk } from "../api/autogenieApi";

const TelemetryForm = ({ onResult }) => {
  const [data, setData] = useState({
    engine_temp: "",
    load: "",
    wear: "",
    rpm: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: Number(e.target.value) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await analyzeRisk(data);
    onResult(result);
  };

  return (
    <form className="telemetry-form" onSubmit={handleSubmit}>
      <input name="engine_temp" placeholder="Engine Temp" onChange={handleChange} />
      <input name="load" placeholder="Load" onChange={handleChange} />
      <input name="wear" placeholder="Wear" onChange={handleChange} />
      <input name="rpm" placeholder="RPM" onChange={handleChange} />
      <button type="submit">Analyze Risk</button>
    </form>
  );
};

export default TelemetryForm;
