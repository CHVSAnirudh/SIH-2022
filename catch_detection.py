from click import pass_context
from flask import Flask, render_template,request
from flask_restful import Api, Resource
from flask_cors import CORS
from pymongo import MongoClient
import threading
from bson.binary import Binary
from requests.utils import DEFAULT_CA_BUNDLE_PATH 
import base64
#import gridfs
import os
import glob
from werkzeug.utils import secure_filename
app = Flask(__name__)
CORS(app)
api = Api(app)


class Details(Resource):
    def get(self, platform,username):
        
        if platform == 'run':
            # passing the image to model

            os.system("python detect.py --weights yolov5l.pt --source {} --conf 0.1 --save-crop --hide-labels".format(username))
            
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
            os.system("python detect.py --weights ./runs/train/exp9/weights/best.pt --source {} --conf 0.1 --save-txt".format(img))#img should be replaced
            # exp = glob.glob('./runs/detect/*/')
            # print(exp)
            # exp.remove('./runs/detect/exp/')
            # exp = sorted(exp,key = lambda x:int(x[17:-1:]),reverse=True)
            # print(exp[0])

            txts = glob.glob('{}/labels/*txt'.format(exp[0]))
            for y in txts:
                with open(y,"r") as f:
                    Lines = f.readlines()
                    for line in Lines:
                        if line[0] == '0':
                            catla+=1
                        elif line[0] == '1':
                            rohu+=1
                        else:
                            mori+=1
            s = catla+rohu+mori
            catla_proportion = (catla/s)*100
            rohu_proportion = (rohu/s)*100
            mori_proportion = (mori/s)*100

            if catla==0 and rohu==0 and mori==0:
                return {'status': 'Sucess', 'result': "The model is still immature and only detects catla rohu and mori, either the image contains fishes of other species or come back to us with better resolution image"} 
            return {'status': 'Sucess', 'result': {"catla":catla_proportion,"rohu":rohu_proportion,"mori":mori_proportion}}
        if platform == 'get':
            return {'status':'success'}
            
    def post(self, platform,username):
        file = request.files['selectedFile']
        file.save(secure_filename(file.filename))
        return self.get("run",file.filename)
        #return {"status":"thope"}

    # def insert_image(self):
    #     with open("./king6.jpeg", "rb") as image_file:
    #         file = image_file.read()
    #     client = MongoClient("mongodb+srv://test:test@cluster0.zppnq.mongodb.net/debuggers?retryWrites=true&w=majority")
    #     db = client.get_database('tls')
    #     records = db.catches
    #     fs = gridfs.GridFS(db)
    #     fs.put(file, filename="king6.jpg")

api.add_resource(Details,'/api/<string:platform>/<string:username>', methods =["GET","POST"])

@app.errorhandler(404)
def invalid_route(e):
    try:
        return render_template('404.html')
    except:
        print("err")
def upload():
    content_type = request.headers.get('Content-Type')
    if (content_type == 'application/json'):
        json = request.json
        print(json)
    else:
        return 'Content-Type not supported!'
if __name__ == '__main__':
    app.run()