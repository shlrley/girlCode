from main import json

class Product:
    def __init__(self, user):
        self.user = user
        self.item = None
        self.color = None
        self.size = none

    def get(self):
        data = {}

        if (self.user == None):
            print("User Not Found")
            data["message"] = "Product Not Found"
            return json.dumps(data)

        data["user"] = self.user
        data["item"] = self.item
        data["color"] = self.color
        data["size"] = self.size
    
        return json.dumps(data)