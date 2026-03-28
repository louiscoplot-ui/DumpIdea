import os
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

print(f"PORT env = {os.environ.get('PORT', 'NOT SET')}", flush=True)
print("Minimal app loaded OK", flush=True)

@app.route("/")
def root():
    return "OK"

@app.route("/api/ping")
def ping():
    return jsonify({"status": "alive", "port": os.environ.get("PORT", "unknown")})
