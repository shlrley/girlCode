from main import json

class Product:
    def __init__(self, user):
        self.user = user
        self.item = None

    def get(self):
        data = {}

        if(self.user == None):
            print("User Not Found")
            data["message"] = "Product Not Found"
            return json.dumps(data)

        data["user"] = self.user
        data["item"] = self.item
    
        return json.dumps(data)