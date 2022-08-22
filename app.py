
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
    def get(self, method,values):
        pass
    @cross_origin()
    def post(self, method,values):        
        print(method,values)
        if method == 'img_predict':
            file = request.files['selectedFile']
            file.save(secure_filename(file.filename))
            return predict_image(file.filename,int(values))

        if method == 'catch_dbupdate':
            req = json.loads(request.data)
            print(req)
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