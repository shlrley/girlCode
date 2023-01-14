from flask import Flask, request
import json
from flask_cors import CORS

app = Flask(__name__)
# CORS(app, resources={r"/*": {"origins": "*"}})

from model import database_api
from model.post_api import get_recs

@app.route("/")
def index():
    return "Homepage"

@app.route("/post/<product>", methods=['GET'])
def api_get_recs(product):
    return get_recs(product)

if __name__ == '__main__':
    app.run(debug=True)