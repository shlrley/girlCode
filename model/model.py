
from main import app
from main import request
import numpy as np
import pandas as pd
from mlxtend.frequent_patterns import apriori, association_rules

@app.route('/product', methods=['POST'])
def recommender(product: str) -> List[str]:
    # Load data set
    df = pd.read_csv('../dataset/ohe_product.csv')

    # Retrieve common items
    common_items = apriori(df, min_support=0.4, use_colnames=True, verbose=1)

    # Get association rules
    ap_rules = association_rules(common_items, metric='confidence')
    rule_list = list(ap_rules)

    recommendations = {}
    for product in rule_list:
        collect = product[0]
        clothes = [item for item in collect]
        recommendations[clothes[0]] = clothes[1:]