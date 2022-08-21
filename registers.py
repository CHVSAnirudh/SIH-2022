from pymongo import MongoClient

def fisherman_register(obj):
    client = MongoClient("mongodb+srv://test:test@cluster0.zppnq.mongodb.net/debuggers?retryWrites=true&w=majority")
    db = client.get_database('SIH')
    records = db.user_fisherman
    #records = list(records.find())
    records.insert_one(obj)

def weighbridge_register(obj):
    client = MongoClient("mongodb+srv://test:test@cluster0.zppnq.mongodb.net/debuggers?retryWrites=true&w=majority")
    db = client.get_database('SIH')
    records = db.user_weighbridge
    #records = list(records.find())
    records.insert_one(obj)

def govt_register(obj):
    client = MongoClient("mongodb+srv://test:test@cluster0.zppnq.mongodb.net/debuggers?retryWrites=true&w=majority")
    db = client.get_database('SIH')
    records = db.user_govt
    #records = list(records.find())
    records.insert_one(obj)