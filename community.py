from unittest import result
from pymongo import MongoClient
def post_update(obj):
    uname = obj['username']
    client = MongoClient("mongodb+srv://test:test@cluster0.zppnq.mongodb.net/debuggers?retryWrites=true&w=majority")
    db = client.get_database('SIH')
    records = db.user_fisherman
    records = list(records.find_one({"username":uname}))
    landing_center = records["landing_center"]
    obj['landing_center'] = landing_center
    records = db.community_posts
    records.insert_one(obj)
    return {'status':'success'}

def advisory(obj):
    uname = obj['username']
    client = MongoClient("mongodb+srv://test:test@cluster0.zppnq.mongodb.net/debuggers?retryWrites=true&w=majority")
    db = client.get_database('SIH')
    records = db.user_fisherman
    records = list(records.find_one({"username":uname}))
    landing_center = records["landing_center"]
    records = db.community_posts
    records = list(records.find({'landing_center':landing_center}))
    return {'status':200, 'result':records}

