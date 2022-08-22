from pymongo import MongoClient

def fisherman_register(obj):
    client = MongoClient("mongodb+srv://test:test@cluster0.zppnq.mongodb.net/debuggers?retryWrites=true&w=majority")
    db = client.get_database('SIH')
    records = db.user_fisherman
    #records = list(records.find())
    records = list(records.find_one({'username':obj.get('username')}))
    if len(records)>0:
        return {"Message":"Username already taken try a different one", "Status":"402"}
    records.insert_one(obj)
    return {"Message":"fisherman added", "Status":"200"}

def weighbridge_register(obj):
    client = MongoClient("mongodb+srv://test:test@cluster0.zppnq.mongodb.net/debuggers?retryWrites=true&w=majority")
    db = client.get_database('SIH')
    records = db.user_weighbridge
    #records = list(records.find())
    records = list(records.find_one({'username':obj.get('username')}))
    if len(records)>0:
        return {"Message":"Username already taken try a different one", "Status":"402"}
    records.insert_one(obj)
    return {"Message":"Weighbridge added", "Status":"200"}

def govt_register(obj):
    client = MongoClient("mongodb+srv://test:test@cluster0.zppnq.mongodb.net/debuggers?retryWrites=true&w=majority")
    db = client.get_database('SIH')
    records = db.user_govt
    records = list(records.find_one({'username':obj.get('username')}))
    if len(records)>0:
        return {"Message":"Username already taken try a different one", "Status":"402"}
    records.insert_one(obj)
    return {"Message":"Govt login added", "Status":"200"}

