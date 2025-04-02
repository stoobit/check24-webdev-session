from flask import Flask, request, jsonify, abort
from flask_cors import CORS
import jwt
import datetime
import json
from functools import wraps

app = Flask(__name__)

# enables access 
CORS(app, resources={r"/*": {"origins": "http://localhost:3003"}})

# This secret key should be kept safe and not hard-coded in production!
SECRET_KEY = "very_secret_key"

# In-memory storage for users
users = {}

def _generate_token(username):
    payload = {
        'username': username,  
        'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=1)
    }

    return jwt.encode(payload, SECRET_KEY, algorithm='HS256')

def token_required(f):
    def decorator(*args, **kwargs):
        token = request.headers.get("Authorization")
        if not token or not token.startswith("Bearer "):
            abort(401)  # Unauthorized
        try:
            actual_token = token[len("Bearer "):]
            payload = jwt.decode(actual_token, SECRET_KEY, algorithms=["HS256"])
        except jwt.ExpiredSignatureError:
            abort(401, "token expired")
        except jwt.InvalidTokenError:
            abort(401, "invalid token")
        return f(*args, **kwargs)

    return decorator

@app.route("/")
def hello_world():
    return "Hello, World!"


@app.route("/get_example", methods=["GET"])
@token_required
def get_data():
    return jsonify({"message": "This is a GET response"})


@app.route("/post_example", methods=["POST"])
def post_data():
    data = request.json
    return jsonify({"received_data": data})


@app.route("/register", methods=["POST"])
def register():
    data = request.json
    if data["username"] in users:
        return jsonify({"error": "username already exists"}), 409 # Konflikt zwischen Request und aktuellem Zustand 

    users[data["username"]] = data["password"]
    return jsonify({"token": _generate_token(data["username"])}), 201


@app.route("/login", methods=["POST"])
def login():
    data = request.json
    providedUsername = data["username"]

    if providedUsername in users and data["password"] == users[providedUsername]:
        return jsonify({"token": _generate_token(data["username"])}), 201

    return jsonify({"error": "credentials failed"}), 409


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)
