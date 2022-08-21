from pymongo import MongoClient


def fisherman_login(obj):
    client = MongoClient("mongodb+srv://test:test@cluster0.zppnq.mongodb.net/debuggers?retryWrites=true&w=majority")
    db = client.get_database('SIH')
    records = db.user_fisherman
    records = list(records.find())
    usernames = []
    passwords = []
    for record in records:
        usernames.append(record["username"])
        passwords.append(record["password"])

    if obj["username"] not in usernames:
        return {"Message":"Username does not exist", "Status": "402", "login": False}
    else:
        ind = usernames.find(obj["username"])
        if(passwords[ind] == obj["password"]):
            return {"Message":"Login Successful", "Status": "402", "login":True }
        else:
            return {"Message":"Passwords do not match", "Status": "402", "login": False}

    

def weighbridge_login(obj):
    client = MongoClient("mongodb+srv://test:test@cluster0.zppnq.mongodb.net/debuggers?retryWrites=true&w=majority")
    db = client.get_database('SIH')
    records = db.user_weighbridge
    records = list(records.find())
    usernames = []
    passwords = []
    for record in records:
        usernames.append(record["username"])
        passwords.append(record["password"])
    if obj["username"] not in usernames:
        return {"Message":"Username does not exist", "Status": "402", "login": False}
    else:
        ind = usernames.find(obj["username"])
        if(passwords[ind] == obj["password"]):
            return {"Message":"Login Successful", "Status": "402", "login":True }
        else:
            return {"Message":"Passwords do not match", "Status": "402", "login": False}

def govt_login(obj):
    client = MongoClient("mongodb+srv://test:test@cluster0.zppnq.mongodb.net/debuggers?retryWrites=true&w=majority")
    db = client.get_database('SIH')
    records = db.user_govt
    records = list(records.find())
    usernames = []
    passwords = []
    for record in records:
        usernames.append(record["username"])
        passwords.append(record["password"])
    if obj["username"] not in usernames:
        return {"Message":"Username does not exist", "Status": "402", "login": False}
    else:
        ind = usernames.find(obj["username"])
        if(passwords[ind] == obj["password"]):
            return {"Message":"Login Successful", "Status": "402", "login":True }
        else:
            return {"Message":"Passwords do not match", "Status": "402", "login": False}


#print(fisherman_login())