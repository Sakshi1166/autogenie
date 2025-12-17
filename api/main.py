from fastapi import FastAPI
from pydantic import BaseModel
import numpy as np
import joblib

app = FastAPI(title="AutoGenie ML Inference API")

# Load model
model = joblib.load("../model/model.pkl")
scaler = joblib.load("../model/scaler.pkl")

# Input schema
class TelemetryInput(BaseModel):
    engine_temp: float
    load: float
    wear: float
    rpm: float

@app.post("/predict")
def predict_risk(data: TelemetryInput):
    input_data = np.array([[ 
        data.engine_temp,
        data.load,
        data.wear,
        data.rpm
    ]])

    scaled = scaler.transform(input_data)

    prediction = model.predict(scaled)[0]
    probability = model.predict_proba(scaled)[0][1]

    return {
        "risk": "HIGH" if prediction == 1 else "LOW",
        "probability": round(float(probability), 2)
    }
