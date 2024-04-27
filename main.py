from flask import Flask, send_from_directory, request
import os
from networking import load_networks_json, get_saved_connections, delete_connection, wifi_connect, start_hotspot
import json
import nmcli

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


@app.route('/api/delete', methods=['DELETE'])
def delete_network():
    network_name = request.args.get('name')
    try:
        delete_connection(network_name)
        return json.dumps({'success':True}), 200, {'ContentType':'application/json'}
    except:
        return json.dumps({'success':False}), 404, {'ContentType':'application/json'}

@app.route('/api/connect', methods=['POST'])
def connect_to_network():
    try:
        network_data = request.get_json()
        wifi_connect(network_data["ssid"], network_data["password"], network_data["hidden"])
        return json.dumps({'success':True}), 200, {'ContentType':'application/json'}
    except:
        return json.dumps({'success':False}), 400, {'ContentType':'application/json'}


@app.route('/api/connectToExisting')
def connect_to_existing():
    try:
        network_name = request.args.get('name')
        nmcli.disable_use_sudo()
        nmcli.connection.up(network_name)
        return json.dumps({'success':True}), 200, {'ContentType':'application/json'}
    except:
        return json.dumps({'success':False}), 400, {'ContentType':'application/json'}

# if __name__ == "__main__":
#     app.run(debug=True, host='0.0.0.0')

if __name__ == "__main__":
    from waitress import serve
    start_hotspot()
    serve(app, host="0.0.0.0", port=8080)
