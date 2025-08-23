# MCP Project

# Medical Costs Prediction 

**Regression Project** using **Multilinear Regression** and **Polynomial Regression**. The workflow includes data preprocessing, encoding, scaling, model training, evaluation, and testing.

---

## 📂 Project Structure
```
MCP/
│── src/
│ ├── config/ # Configurations (paths, parameters)
│ ├── model/ # saved model
| ├── visuals /   # all visuals for data 
│── notebooks/ # Jupyter Notebooks for experiments & trainning
│── data/
│ ├── raw/ # Original datasets
│ ├── processed/ # Cleaned & preprocessed datasets
│── requirements.txt # Dependencies
│── README.md # Documentation
```


---

## ⚙️ Features
- **Preprocessing**: Encoding categorical features, scaling numerical features.
- **Models**: Multilinear Regression, Polynomial Regression.
- **Evaluation**: MSE, RMSE, R² Score.

---

## 🚀 Installation
```bash
git clone https://github.com/AbdelrahmanGaber528/MCP.git
cd MCP
pip install -r requirements.txt
```
```
📊 Usage

Place raw datasets in data/raw/.

Preprocess → outputs to data/processed/.
```

```
📦 Requirements

Install with:
pip install -r requirements.txt

Main packages: pandas, numpy, scikit-learn, matplotlib, seaborn, jupyter.
```
