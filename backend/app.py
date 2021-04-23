from flask import Flask, request, jsonify
from flask_jwt_extended import JWTManager, create_access_token, create_refresh_token, set_refresh_cookies
from bcrypt import hashpw, checkpw, gensalt

app = Flask(__name__)

app.config["JWT_SECRET_KEY"] = "super-secret"
app.config["JWT_TOKEN_LOCATION"] = ['headers', 'cookies']
jwt = JWTManager(app)

users = []


@app.route('/login', methods=['POST'])
def login():
    login_data = request.get_json()
    username = login_data.get('username')
    password = login_data.get('password')
    users.append({
        'username': username,
        'password': hashpw(password.encode(), gensalt())
    })

    access_token = create_access_token(identity=username)
    refresh_token = create_refresh_token(identity=username)
    response = jsonify({'access_token': access_token})
    set_refresh_cookies(response, refresh_token)
    return response
