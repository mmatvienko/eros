#!/usr/bin/env python
from flask import Flask, jsonify
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

# definitely don't have this here forever
# keep it temporarily
resume_object = None


@app.route('/resume')
def get_resume():
    print("resume requested")
    return jsonify(resume_object)


if __name__ == '__main__':
    with open("resume.json") as json_resume:
        resume_object = json.load(json_resume)
    app.run(debug=True, host='localhost', port=8063)
