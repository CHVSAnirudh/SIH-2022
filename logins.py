from pymongo import MongoClient


def fisherman_login(obj):
    client = MongoClient("mongodb+srv://test:test@cluster0.zppnq.mongodb.net/debuggers?retryWrites=true&w=majority")
    db = client.get_database('SIH')
    records = db.user_fisherman
    records = list(records.find())
    usernames = []
    passwords = []
    req_obj={}
    for record in records:
        usernames.append(record["username"])
        passwords.append(record["password"])
        if record["username"] == obj["username"]:
            req_obj = record
            req_obj["_id"] = ""
            break

    if obj["username"] not in usernames:
        return {"Message":"Username does not exist", "Status": "402", "login": False, "Response":req_obj}
    else:
        ind = usernames.index(obj["username"])
        if(passwords[ind] == obj["password"]):
            return {"Message":"Login Successful", "Status": "402", "login":True , "Response":req_obj}
        else:
            return {"Message":"Passwords do not match", "Status": "402", "login": False, "Response":req_obj}

    

def weighbridge_login(obj):
    client = MongoClient("mongodb+srv://test:test@cluster0.zppnq.mongodb.net/debuggers?retryWrites=true&w=majority")
    db = client.get_database('SIH')
    records = db.user_weighbridge
    records = list(records.find())
    usernames = []
    passwords = []
    req_obj={}
    for record in records:
        usernames.append(record["username"])
        passwords.append(record["password"])
        if record["username"] == obj["username"]:
            req_obj = record
            req_obj["_id"] = ""
            break

    if obj["username"] not in usernames:
        return {"Message":"Username does not exist", "Status": "402", "login": False, "Response":req_obj}
    else:
        ind = usernames.index(obj["username"])
        if(passwords[ind] == obj["password"]):
            return {"Message":"Login Successful", "Status": "402", "login":True , "Response":req_obj}
        else:
            return {"Message":"Passwords do not match", "Status": "402", "login": False, "Response":req_obj}

def govt_login(obj):
    client = MongoClient("mongodb+srv://test:test@cluster0.zppnq.mongodb.net/debuggers?retryWrites=true&w=majority")
    db = client.get_database('SIH')
    records = db.user_govt
    records = list(records.find())
    usernames = []
    passwords = []
    req_obj={}
    for record in records:
        usernames.append(record["username"])
        passwords.append(record["password"])
        if record["username"] == obj["username"]:
            req_obj = record
            req_obj["_id"] = ""
            break

    if obj["username"] not in usernames:
        return {"Message":"Username does not exist", "Status": "402", "login": False, "Response":req_obj}
    else:
        ind = usernames.index(obj["username"])
        if(passwords[ind] == obj["password"]):
            return {"Message":"Login Successful", "Status": "402", "login":True , "Response":req_obj}
        else:
            return {"Message":"Passwords do not match", "Status": "402", "login": False, "Response":req_obj}