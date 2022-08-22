
from flask import Flask, render_template,request
from flask_restful import Api, Resource
from flask_cors import CORS
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
app = Flask(__name__)
CORS(app)
#app.config['CORS_HEADERS'] = 'Content-Type'
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})
api = Api(app)

#specifying origins
#origins = ["http://localhost:5000","http://localhost","http://localhost:8080"]
#cors
#app.add_middleware(CORSMiddleware,allow_origins = origins, allow_credentials = True, all_methods = ['*'], allow_header = ['*'])
class Details(Resource):
    def get(self, method,values):
        pass

    def post(self, method,values):  
        print(method,values)
        if method == 'img_predict':
            file = request.files['selectedFile']
            file.save(secure_filename(file.filename))
            return predict_image(file.filename,values)

        if method == 'catch_dbupdate':
            req = json.loads(request.data)
            return catch_dbupdate(req)
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
        
    def options(self,method,values):
        return self.post(method,values)
 

@app.errorhandler(404)
def invalid_route(e):
    try:
        return render_template('404.html')
    except:
        print("err")

api.add_resource(Details,'/api/<string:method>/<string:values>', methods =["GET","POST","OPTIONS"])


if __name__ == '__main__':
    app.run() 