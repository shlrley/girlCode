from main import json

class User:
    def __init__(self, user):
        self.user = user
        self.post = None

    def get(self):
        data = {}

        if (self.user == None):
            print("User Not Found")
            data["message"] = "Product Not Found"
            return json.dumps(data)
        
        data["user"] = self.user
        data["post"] = self.post

        return json.dumps(data)