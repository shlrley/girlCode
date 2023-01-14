from flask import Flask, request
import json
import csv
import sqlite3
from flask_cors import CORS

app = Flask(__name__)
# CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/db', methods=['POST'])
def create_tables():
    print('Creating databases...')
    con = sqlite3.connect("../clothing.db") # change to 'sqlite:///your_filename.db'
    cur = con.cursor()

    # Drop table if already exists
    cur.execute("DROP TABLE association")
    print("Table dropped... ")

    # Create table
    cur.execute("CREATE TABLE association (item1, item2);") 

    with open('../dataset/aritzia_rules.csv','r') as csvf:
        reader = csv.DictReader(csvf) # comma is default delimiter
        to_db = [(row['antecedents'], row['consequents']) for row in reader]

    cur.executemany("INSERT INTO association (item1, item2) VALUES (?, ?);", to_db)
    con.commit()

    con = sqlite3.connect("../user_products.db") # change to 'sqlite:///your_filename.db'
    cur = con.cursor()

    # Drop table if already exists
    cur.execute("DROP TABLE user_products")
    print("Table dropped... ")

    # Create table
    cur.execute("CREATE TABLE user_products (customer, product);") 

    with open('../dataset/customer_products.csv','r') as csvf:
        reader = csv.DictReader(csvf) # comma is default delimiter
        to_db = [(row['customer'], row['aritzia']) for row in reader]

    cur.executemany("INSERT INTO user_products (customer, product) VALUES (?, ?);", to_db)
    con.commit()
    con.close()
    return print('Tables created and propegated')

from model.post_api import get_recs

@app.route("/")
def index():
    return "Homepage"

@app.route("/post/<product>", methods=['GET'])
def api_get_recs(product):
    return get_recs(product)

if __name__ == '__main__':
    app.run(debug=True)