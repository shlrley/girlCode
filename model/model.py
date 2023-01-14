
from main import app
from main import request
import numpy as np
import pandas as pd
from mlxtend.frequent_patterns import apriori, association_rules

@app.route('/product', methods=['POST'])
def recommender(product: str) -> List[str]:
    # Load data set
    df = pd.read_csv('../dataset/ohe_product.csv')

    # Drop customer
    df = df.drop(columns=['customer'])

    # Retrieve common items
    common_items = apriori(df, min_support=0.01, max_len=2, use_colnames=True, verbose=1)

    # Get association rules
    ap_rules = association_rules(common_items, metric='confidence', min_threshold=0.3)

    # Format data frame
    cols = ['antecedents','consequents']
    ap_rules[cols] = ap_rules[cols].astype('string')

    ap_rules['antecedents'] = ap_rules['antecedents'].str.removeprefix("frozenset({'")
    ap_rules['antecedents'] = ap_rules['antecedents'].str.removesuffix("'})")

    ap_rules['consequents'] = ap_rules['consequents'].str.removeprefix("frozenset({'")
    ap_rules['consequents'] = ap_rules['consequents'].str.removesuffix("'})")

    # Find recommended items
    recs = ap_rules.loc[ap_rules['antecedents'] == product]['consequents'].tolist()

    return recs