# 🏠 House Price Prediction in Cairo  

This project predicts **house prices in Cairo** based on property details such as type, location, bedrooms, bathrooms, and size.  
It combines a **Machine Learning model** with a **Lovable-generated web UI** for easy interaction.  

---

## 📌 Features  
- Predicts house prices instantly.  
- Modern one-page UI (built with [Lovable](https://lovable.app)).  
- Input fields:  
  - 🏢 Property Type: Apartment, Villa, Studio, Duplex, Penthouse  
  - 📍 Location: Zamalek, Maadi, New Cairo, Nasr City, 6th of October, Heliopolis, Downtown  
  - 🛏 Bedrooms  
  - 🚿 Bathrooms  
  - 📐 Size in m²  
- Output: 💰 Estimated price in **EGP**  

---

## ⚙️ Tech Stack  
- **Frontend**: Lovable (auto-generated UI)  
- **Backend**: Python (Flask / FastAPI)  
- **ML Model**: Scikit-learn (Linear Regression, Random Forest, etc.)  
- **Dataset**: Cairo housing dataset (synthetic/demo)  

---

## 🚀 Setup  

```bash
# 1. Clone repo
git clone https://github.com/your-username/cairo-house-price-prediction.git
cd cairo-house-price-prediction

# 2. Create virtual environment
python -m venv venv
source venv/bin/activate   # Linux/Mac
venv\Scripts\activate      # Windows

# 3. Install dependencies
pip install -r requirements.txt

# 4. Run backend
python app.py
