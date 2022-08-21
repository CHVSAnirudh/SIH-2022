
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
app = Flask(__name__)
CORS(app)
api = Api(app)


class Details(Resource):
    def get(self, method,values):
        pass

    def post(self, method,values):
        if method == 'img_predict':
            file = request.files['selectedFile']
            file.save(secure_filename(file.filename))
            return self.get("run",file.filename)
        if method == 'login':
            print(request.data)
            if values == 'fisherman':
                print(request)
            #return fisherman_login(obj)

@app.errorhandler(404)
def invalid_route(e):
    try:
        return render_template('404.html')
    except:
        print("err")

api.add_resource(Details,'/api/<string:method>/<string:values>', methods =["GET","POST"])


if __name__ == '__main__':
    app.run() 