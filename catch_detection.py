from pymongo import MongoClient
from bson.binary import Binary
from requests.utils import DEFAULT_CA_BUNDLE_PATH 
import os
import glob

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
    os.system("python detect.py --weights ./runs/train/exp9/weights/best.pt --source {} --conf 0.1 --save-txt".format(image))#img should be replaced
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
    s = catla+rohu+mori
    catla_proportion = (catla/s)*weight
    rohu_proportion = (rohu/s)*weight
    mori_proportion = (mori/s)*weight

    if catla==0 and rohu==0 and mori==0:
        return {'status': 'Sucess', 'result': "The model is still immature and only detects catla rohu and mori, either the image contains fishes of other species or come back to us with better resolution image"} 
    return {'status': 'Sucess', 'result': {"catla":catla_proportion,"rohu":rohu_proportion,"mori":mori_proportion}}

def catch_dbupdate(obj):
    client = MongoClient("mongodb+srv://test:test@cluster0.zppnq.mongodb.net/debuggers?retryWrites=true&w=majority")
    db = client.get_database('SIH')
    records = db.catch_data
    #records = list(records.find())
    records.insert_one(obj)
    return {"Message":"Catch result added into database successfully", "Status":"200"}
