# 🏠 Cairo House Price Prediction

This project predicts **house prices in Cairo** using **Machine Learning** and provides a simple **web interface** for users to input property details and get real-time predictions.

---

## 📌 Features
- Train ML model with features:
  - Type
  - Location
  - Bedrooms
  - Bathrooms
  - Size (sqm)
- Save trained model (`model.pkl`)
- REST API endpoint for predictions
- Frontend (Lovable / React-based) for user-friendly input & results display

---

## ⚙️ Tech Stack
- **Backend**: Python (Flask), Scikit-learn, Pandas, NumPy  
- **Frontend**: Lovable (React)  
---

## 🚀 Setup & Run

### 1. Clone the repo
```bash
git clone https://github.com/your-username/cairo-house-price-prediction.git
cd cairo-house-price-prediction
```
### 2. Backend
```bash
# Install dependencies
pip install -r requirements.txt

# Train the model
python backend/train_model.py

# Run API
python backend/app.py



```
### 1. Front
```bash

cd frontend

# Install dependencies
npm install

# Run frontend
npm start
```
