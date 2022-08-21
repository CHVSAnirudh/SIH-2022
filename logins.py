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
        return "Username does not exist"
    else:
        ind = usernames.find(obj["username"])
        if(passwords[ind] == obj["password"]):
            return "Login Successful"
        else:
            return "Passwords do not match"
    

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
        return "Username does not exist"
    else:
        ind = usernames.find(obj["username"])
        if(passwords[ind] == obj["password"]):
            return "Login Successful"
        else:
            return "Passwords do not match"

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
        return "Username does not exist"
    else:
        ind = usernames.find(obj["username"])
        if(passwords[ind] == obj["password"]):
            return "Login Successful"
        else:
            return "Passwords do not match"

#print(fisherman_login())