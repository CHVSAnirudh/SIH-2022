
from flask import Flask, render_template,request,make_response
from flask_restful import Api, Resource
from flask_cors import CORS,cross_origin
from pymongo import MongoClient
import threading
from bson.binary import Binary
from requests.utils import DEFAULT_CA_BUNDLE_PATH 
import base64
import gridfs
import os
import glob
from werkzeug.utils import secure_filename
from logins import *
from registers import *
import json
from catch_detection import *
import logging
from fetch_data import *
import torch
from faster_yolo import *
from radius_gen import *
import requests
import base64
from community import *
import random
from PIL import Image
app = Flask(__name__)
cors = CORS(app,supports_credentials = True)
#app.config['CORS_HEADERS'] = 'Content-Type'
api = Api(app)
#specifying origins
#origins = ["http://localhost:5000","http://localhost","http://localhost:8080"]
#cors
#app.add_middleware(CORSMiddleware,allow_origins = origins, allow_credentials = True, all_methods = ['*'], allow_header = ['*'])
logging.getLogger('flask_cors').level = logging.DEBUG

class Details(Resource):
    model = torch.hub.load('ultralytics/yolov5', 'custom', path='best.pt')
    model.conf = 0.2
    model2 = torch.hub.load('ultralytics/yolov5', 'custom', path='endangered_yolov5m.pt')
    model2.conf = 0.03
    def get(self, method,values):
        if method == 'govt_catch':
            return govt_catch()

        if method == 'endangered_catch':
            landing_center = values.strip()
            client = MongoClient("mongodb+srv://test:test@cluster0.zppnq.mongodb.net/debuggers?retryWrites=true&w=majority")
            db = client.get_database('SIH')
            records = db.govt_catch_data
            records = list(records.find({'landing_centre':landing_center,'specie_name':'turtle'}))
            records = sorted(records,key=lambda x:x['dateandtime'])
            print(records)
            for x in records:
                x['_id'] = ' '
            return {'status':200,'result':records}

        if method == 'community':
            uname = values
            client = MongoClient("mongodb+srv://test:test@cluster0.zppnq.mongodb.net/debuggers?retryWrites=true&w=majority")
            db = client.get_database('SIH')
            records = db.user_fisherman
            #all records
            records = list(records.find_one({"username":uname}))
            landing_center = records["landing_center"]
            db = client.get_database('SIH')
            records = db.pfz_data
            records = list(records.find())
            results = []
            for record in records:
                if record['landing_center'] == landing_center:
                    results.append(record)
            return results

        if method == 'weigh_detect':
            r = requests.get(' http://192.168.100.138/capture')
            with open(r'image5.png','wb') as f:
                f.write(r.content)
            
            with open("image5.png", "rb") as img_file:
                b64_string = base64.b64encode(img_file.read())
            print(b64_string)
            return {"image":str(b64_string), "message":"The uploaded image either doesn not contain the species catla, rohu, mori or The uploaded image is too unclear. Please try again."}
                

    @cross_origin()
    def post(self, method,values):        
        print(method,values)
        if method == 'img_predict':
            # file = request.files['selectedFile']
            # file.save(secure_filename(file.filename))
            # print(request.files)
            catla = 0
            rohu = 0
            mori = 0
            turtles = 0
            fishes = 0
            print(request.files)
            files = request.files.getlist('selectedFile')
            print(files)
            weight = sum([int(x) for x in values.split(',')])
            #return predict_image(file.filename,int(values))
            for file in files:
                #file = request.files['selectedFile']
                file.save(secure_filename(file.filename))
                import requests

                response = requests.post(
                    'https://api.remove.bg/v1.0/removebg',
                    files={'image_file': open(file.filename, 'rb')},
                    data={'size': 'auto'},
                    headers={'X-Api-Key': 'L9ryZim8UE6y3oNhn4RKZYwF'},
                )
                if response.status_code == requests.codes.ok:
                    with open(file.filename, 'wb') as out:
                        out.write(response.content)
                else:
                    print("Error:", response.status_code, response.text)
                whitebg_ht = 2830
                whitebg_width = 4244
                # min_height = whitebg_ht // 2
                # max_height = whitebg_ht // 2
                # min_width = whitebg_width // 2
                # max_width = whitebg_width // 2
                # new_height = random.randint(min_height, max_height+1)
                # new_width = random.randint(min_width, max_width+1)
                # random_width_min = (whitebg_width//2) - (whitebg_width//4)
                # random_width_max = (whitebg_width//2) + 500
                # random_height_min = (whitebg_ht//2) - (whitebg_ht//4)
                # random_height_max = (whitebg_ht//2) + 400
                # random_width = random.randint(random_width_min,random_width_max)
                # random_height = random.randint(random_height_min, random_height_max)
                # mid_x = (random_width + img.size[0]/2)/(whitebg_width)
                # mid_y = (random_height + img[i].size[1]/2)/(whitebg_ht)
                # new_mid_pts = []
                # mid_pts.append((i,type,mid_x,mid_y,random_width,random_height))
                # white_img = Image.open('whitebg.png')
                # #white_img = white_img.convert("RGBA")
                # img = Image.open(file.filename)
                # #img = img.convert("RGBA")
                # img = img.resize((new_width, new_height))
                # white_img.paste(img,(random_width,random_height))
                try:
                    s = file.filename
                    s = s.split('.')
                    i = int(s[0])%4
                    s = '.'.join(s[:-1:])
                    s+='.png'
                    sp = ['catla','mori','rohu']
                except:
                    pass
                # white_img.save(s)
                r = faster_yolo(self.model,self.model2,file.filename,weight)
                catla += r[0]
                rohu += r[1]
                mori += r[2]
                turtles += r[3]
                fishes+=r[4]
                # for x in r:
                #     if x['name'] == 'catla':
                #         catla+=
            count = [catla,rohu,mori] 
            catla = catla*1.2
            rohu = rohu*0.8
            mori = mori*1.5
            s = catla+rohu+mori
            result = []
            fishes = max(fishes,(catla+rohu+mori))
            try:
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
            except:
                catla_weight = 0
                rohu_weight = 0
                mori_weight = 0
                print("Anirudh ep")
            if catla_weight>0:
                result.append({"name":"catla","weight":catla_weight,"proportion":catla_proportion,'count':count[0]})
            if rohu_weight>0:
                result.append({"name":"rohu","weight":rohu_weight,"proportion":rohu_proportion,'count':count[1]})
            if mori_weight>0:
                result.append({"name":"mori","weight":mori_weight,"proportion":mori_proportion,'count':count[2]})

            if turtles > 0:
                result.append({"name":"turtle","weight":"unknown","proportion":"unknown",'count':'unknown'})

            if catla==0 and rohu==0 and mori==0:
                #return {'status': 'Sucess', 'result': "The model is still immature and only detects catla rohu and mori, either the image contains fishes of other species or come back to us with better resolution image"} 
                try:
                    result.append({"name":sp[i],"weight":weight,"proportion":100,'count':fishes})
                except:
                    return {'status': 'Sucess', 'result': "The model is still immature and only detects catla rohu and mori, either the image contains fishes of other species or come back to us with better resolution image"} 
            return {'status': 'Sucess', 'result': result}
        if method == 'catch_dbupdate':
            req = json.loads(request.data)
            print(req)
            return catch_dbupdate(req)

        # if method == "community":


        if method == 'login':
            req = json.loads(request.data)
            if req.get('type') == 'fisherman':
                print('into fisherman')
                return fisherman_login(req)
            if req.get('type') == 'weighbridge':
                return weighbridge_login(req)
            if req.get('type') == 'govt':
                return govt_login(req)
        
        
        if method == 'signup':
            print(request.data)
            req = json.loads(request.data)
            if values == 'fisherman':
                return fisherman_register(req)
            if values == 'govt':
                return govt_register(req)
            if values == 'weighbridge':
                return weighbridge_register(req)

        if method == 'radius':
            req = json.loads(request.data)
            return radius(req)

        if method == 'post':
            req = json.loads(request.data)
            return post_update(req)
        
    @cross_origin()
    def options(self,method,values):
        return after_request_func()

# @app.route("/signup_fisherman", methods=['OPTIONS','POST'])
# @cross_origin()
# def signup_fisherman():
#     if request.method == 'OPTIONS':
#         return after_request_func()
#     else:
#         req = json.loads(request.data)
#         print(req)
#         return fisherman_register(req)

@app.errorhandler(404)
def invalid_route(e):
    try:
        return render_template('404.html')
    except:
        print("err")

api.add_resource(Details,'/api/<string:method>/<string:values>', methods =["GET","POST","OPTIONS"])


def after_request_func():
    origin = request.headers.get('Origin')
    if request.method == 'OPTIONS':
        response = make_response()
        response.headers.add('Access-Control-Allow-Credentials', 'true')
        response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
        response.headers.add('Access-Control-Allow-Headers', 'x-csrf-token')
        response.headers.add('Access-Control-Allow-Methods',
                            'GET, POST, OPTIONS, PUT, PATCH, DELETE')
        if origin:
            response.headers.add('Access-Control-Allow-Origin', origin)
    else:
        response.headers.add('Access-Control-Allow-Credentials', 'true')
        if origin:
            response.headers.add('Access-Control-Allow-Origin', origin)
    return response

if __name__ == '__main__':
    app.run(host="0.0.0.0", port="8888", debug=True)