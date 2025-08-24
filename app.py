import streamlit as st
import joblib
import pandas as pd

# Load transformer and model
transformer = joblib.load("src/model/transformer.pkl")
model = joblib.load("src/model/poly_model.pkl")

st.title("💰 Medical Costs Prediction App")
st.write("Enter patient details below to estimate medical insurance cost.")

# --- Collect Input Features ---
age = st.number_input("Age", min_value=0, max_value=120, value=30)
sex = st.selectbox("Sex", ["male", "female"])
bmi = st.number_input("BMI", min_value=10.0, max_value=60.0, value=25.0)
children = st.number_input("Number of Children", min_value=0, max_value=10, value=0)
smoker = st.selectbox("Smoker", ["yes", "no"])
region = st.selectbox("Region", ["northeast", "northwest", "southeast", "southwest"])

# --- Prediction Button ---
if st.button("Predict Cost"):
    # Create DataFrame with SAME columns as training
    input_df = pd.DataFrame([{
        "age": age,
        "sex": sex,
        "bmi": bmi,
        "children": children,
        "smoker": smoker,
        "region": region
    }])

    # ✅ Apply preprocessing (keeps feature names if you saved it that way)
    X_processed = transformer.transform(input_df)

    # ✅ Model prediction
    prediction = model.predict(X_processed)[0]

    st.success(f"Estimated Medical Cost: ${prediction:,.2f}")
