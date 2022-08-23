from pymongo import MongoClient
def govt_catch():
    client = MongoClient("mongodb+srv://test:test@cluster0.zppnq.mongodb.net/debuggers?retryWrites=true&w=majority")
    db = client.get_database('SIH')
    records = db.govt_catch_data
    record = list(records.find())
    record = sorted(record,key=lambda x:x['dateandtime'])
    for x in record:
        x['_id'] = ' '
    return record