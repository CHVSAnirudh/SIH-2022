from pymongo import MongoClient
from bson.binary import Binary
from requests.utils import DEFAULT_CA_BUNDLE_PATH 
import os
import glob
import json
import math
def predict_image(image,weight):
    # passing the image to model

    # exp = glob.glob('./runs/detect/*/')
    # print(exp)
    # exp.remove('./runs/detect/exp/')
    # exp = sorted(exp,key = lambda x:int(x[17:-1:]),reverse=True)
    # print(exp[0])
    # l = glob.glob('{}/crops/*/'.format(exp[0]))
    # print(l)
    # img = []
    # for x in l:
    #     folders = glob.glob('{}/*jpg'.format(x))
    #     img.extend(folders)
    # print(img)
    catla = 0
    rohu = 0
    mori = 0
    #for x in img:
    os.system("python detect.py --weights specie_detection.pt --source {} --conf 0.01 --save-txt".format(image))  #img should be replaced
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
                    catla+=1
                elif line[0] == '1':
                    mori+=1
                else:
                    rohu+=1
    result = []
    s = catla+rohu+mori
    catla_weight = (catla/s)*weight
    catla_weight = round(catla_weight)
    rohu_weight = (rohu/s)*weight
    rohu_weight = round(rohu_weight)
    mori_weight = (mori/s)*weight
    mori_weight = round(mori_weight)
    catla_proportion = (catla/s)*100
    catla_proportion = round(catla_proportion)
    rohu_proportion = (rohu/s)*100
    rohu_proportion = round(rohu_proportion)
    mori_proportion = (mori/s)*100
    mori_proportion = round(mori_proportion)
    if catla_weight>0:
        result.append({"name":"catla","weight":catla_weight,"proportion":catla_proportion})
    if rohu_weight>0:
        result.append({"name":"rohu","weight":rohu_weight,"proportion":rohu_proportion})
    if mori_weight>0:
        result.append({"name":"mori","weight":mori_weight,"proportion":mori_proportion})

    if catla==0 and rohu==0 and mori==0:
        return {'status': 'Sucess', 'result': "The model is still immature and only detects catla rohu and mori, either the image contains fishes of other species or come back to us with better resolution image"} 
    return {'status': 'Sucess', 'result': result}

def catch_dbupdate(obj):
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
        obj_append['weight'] = int(obj['weight'])
        obj_append['catch'] = obj.get('catch')[0]
        record['all_catch'].append(obj_append)
    except:
        record['all_catch'] = [obj_append]
    records.update_one({'username':obj.get('username')},{'$set':record})
    
    ## uploading it to govt_catch_data
    records = db.govt_catch_data
    for x in obj['catch']:
        update = {}
        update['username'] = obj['username']
        update['dateandtime'] = obj['dateandtime']
        update['landing_centre'] = landing_centre
        update['specie_name'] = x['specie_name']
        update['specie_weight'] = x['specie_weight']
        records.insert_one(update)

    return {"Message":"Catch result added into database successfully", "Status":"200"}
