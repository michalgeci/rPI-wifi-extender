from flask import Flask, send_from_directory, request
import os
from networking import load_networks_json, get_saved_connections
import json

app = Flask(__name__, static_folder='rpi-wifi-ui/out')


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')


@app.route('/api/getNetworks')
def get_networks():
    return load_networks_json()


@app.route('/api/getSavedConnections')
def get_saved_networks():
    show_all = request.args.get('showAll') == 'true'
    return json.dumps(get_saved_connections(show_all))


@app.route('/api/testPost', methods=['POST'])
def test_post():
    print(request.get_json())
    return json.dumps({'success':True}), 200, {'ContentType':'application/json'} 


if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0')

# if __name__ == "__main__":
#     from waitress import serve
#     serve(app, host="0.0.0.0", port=8080)
