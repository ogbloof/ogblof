from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import sqlite3

app = FastAPI()

# Модель для обновления баланса
class BalanceRequest(BaseModel):
    user_id: str

# Функция для подключения к базе данных
def get_balance_from_db(user_id):
    connection = sqlite3.connect("local.db")
    cursor = connection.cursor()
    cursor.execute("SELECT balance FROM users WHERE user_id = ?", (user_id,))
    result = cursor.fetchone()
    connection.close()
    if result:
        return result[0]
    return None

@app.get("/api/get_balance")
def get_balance(user_id: str):
    balance = get_balance_from_db(user_id)
    if balance is not None:
        return {"balance": balance}
    raise HTTPException(status_code=404, detail="User not found")
