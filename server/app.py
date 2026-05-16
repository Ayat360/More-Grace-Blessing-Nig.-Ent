from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3

app = Flask(__name__)
CORS(app)

# DATABASE

conn = sqlite3.connect("reviews.db", check_same_thread=False)

cursor = conn.cursor()

cursor.execute("""
CREATE TABLE IF NOT EXISTS reviews (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    role TEXT,
    message TEXT
)
""")

conn.commit()

# GET REVIEWS

@app.route("/reviews", methods=["GET"])
def get_reviews():

    cursor.execute("SELECT * FROM reviews ORDER BY id DESC")

    rows = cursor.fetchall()

    reviews = []

    for row in rows:
        reviews.append({
"id": row[0],
"name": row[1],
"role": row[2],
"message": row[3]
})


    return jsonify(reviews)

# POST REVIEW
@app.route("/reviews", methods=["POST"])
def add_review():
    data = request.json

    conn = sqlite3.connect("reviews.db")
    cursor = conn.cursor()

    cursor.execute("""
        INSERT INTO reviews (name, role, message)
        VALUES (?, ?, ?)
    """, (
        data.get("name"),
        data.get("role", "Customer"),
        data.get("message")
    ))

    conn.commit()
    conn.close()

    return jsonify({
        "success": True,
        "message": "Review added successfully"
    })

if __name__ == "__main__":
    app.run(debug=True)