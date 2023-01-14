from main import app
from main import request
from main import json
from model import Product
from model.model import Recommender
import sqlite3
import pandas as pd

@app.route('/post',methods=['POST'])
def update_post():
    try:
        data = json.loads(request.data)
        p = Product(data)
        product = json.loads(p.get())

        con = sqlite3.connect("../user_products.db")
        sql_query = pd.read_sql_query("select * from user_products")
        df = pd.DataFrame(sql_query, columns = ['customer', 'product'])

        if p.user in df['customer']:
            if p.item in df['product']:
                print('User and product already in database.')
                return json.dumps(product)
            else:
                cur = con.cursor()
                cur.execute("INSERT INTO user_products (customer, product) VALUES (?, ?);", (p.user, p.item))
                con.commit()
                con.close()

                response = app.response_class(
                    response= json.dumps({'updated_product': p.item, 'user': p.user, 'item': p.item}),
                    status=200,
                    mimetype='application/json'
                )
                return response
        else:
            cur = con.cursor()
            cur.execute("INSERT INTO user_products (customer, product) VALUES (?, ?);", (p.user, p.item))
            con.commit()
            con.close()

            response = app.response_class(
                response= json.dumps({'user': p.user, 'product': p.item}),
                status=200,
                mimetype='application/json'
            )
            return response
    except:
        response = app.response_class(
            response=json.dumps({"message":"The server encountered an error with your request"}),
            status=403,
            mimetype='application/json'
        )
        return response

# @app.route('/post', methods=["GET"])
def get_recs(product):
    conn = sqlite3.connect('../user_products.db')

    if conn.execute("select exists(select * from user_product WHERE product=?)",(product,)).fetchall()[0][0] == 1:  
        recs = Recommender(product)
    conn.close()

    response = app.response_class(
            response=json.dumps({"recommendations": recs}),
            status=200,
            mimetype='application/json'
        )
    return response