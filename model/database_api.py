# https://stackoverflow.com/questions/2887878/importing-a-csv-file-into-a-sqlite3-database-table-using-python
import csv, sqlite3
from main import app

@app.route('/', methods=['POST'])
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