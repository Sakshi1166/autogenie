import axios from "axios";

const API_URL = "https://autogenie-api.onrender.com/predict";

export const analyzeRisk = async (telemetry) => {
  const response = await axios.post(API_URL, telemetry, {
    headers: { "Content-Type": "application/json" },
  });

  const { risk, probability } = response.data;

  // 🧠 Agent decision logic (local, no n8n)
  const agents =
    risk === "HIGH"
      ? [
          {
            name: "Predictive Maintenance Agent",
            status: "Triggered",
            message: "Failure logged for maintenance analysis",
          },
          {
            name: "Service Scheduling Agent",
            status: "Booked",
            message: "Service booked at AutoCare Pune (18 Dec)",
          },
          {
            name: "Customer Engagement Agent",
            status: "Notified",
            message: "Customer notified via Email/SMS",
          },
          {
            name: "Manufacturing Feedback Agent",
            status: "Analyzed",
            message: "Failure insights shared with OEM team",
          },
        ]
      : [
          {
            name: "Predictive Maintenance Agent",
            status: "Idle",
            message: "Vehicle operating normally",
          },
        ];

  return { risk, probability, agents };
};
