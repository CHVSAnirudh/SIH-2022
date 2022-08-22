from pymongo import MongoClient
from bson.binary import Binary
from requests.utils import DEFAULT_CA_BUNDLE_PATH 
import os
import glob
import json
import math
def predict_image_endangered(image):
    turtles = 0
    fishes = 0

    os.system("python detect.py --weights endangered_specie.pt --source {} --conf 0.01 --save-txt".format(image))  
    exp = glob.glob('./runs/detect/*/')
    print(exp)
    exp.remove('./runs/detect/exp/')
    exp = sorted(exp,key = lambda x:int(x[17:-1:]),reverse=True)
    print(exp[0])

    txts = glob.glob('{}/labels/*txt'.format(exp[0]))
    for y in txts:
        with open(y,"r") as f:
            Lines = f.readlines()
            for line in Lines:
                if line[0] == '0':
                    turtles+=1
                elif line[0] == '1':
                    fishes+=1
    #result = {}
    #result["turtles":turtles]
    if turtles != 0:
        #turtle_dbupdate(obj,turtles)
        return {'endangered': True, 'turtles': turtles}
    else:
        return {'endangered': False, 'turtles': turtles}
    

def turtle_dbupdate(obj,turtles):
    client = MongoClient("mongodb+srv://test:test@cluster0.zppnq.mongodb.net/debuggers?retryWrites=true&w=majority")
    db = client.get_database('SIH')
    records = db.user_fisherman
    #records = list(records.find())
    record = records.find_one({"username":obj.get('username')})
    print(record)
    landing_centre = record['landing_center']
    try:
        obj_append = {}
        obj_append['dateandtime'] = obj['dateandtime']
        #obj_append['weight'] = int(obj['weight'])
        obj_append['specie_name'] = 'turtle'
        obj_append['specie_quantity'] = turtles
        obj_append['landing_centre'] = landing_centre
    except:
        pass
    endangered_records = db.catch_endangered
    endangered_records.insert_one(obj_append)
