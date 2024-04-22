import nmcli
import re
import dataclasses
from dataclasses import dataclass
import json
from config import interface, own_hotspot, hotspot_interface, hotspot_password


class EnhancedJSONEncoder(json.JSONEncoder):
    def default(self, o):
        if dataclasses.is_dataclass(o):
            return dataclasses.asdict(o)
        return super().default(o)


@dataclass
class NetworkInfo:
    name: str
    secured: bool
    signal: int
    in_use: bool


def start_hotspot():
    nmcli.disable_use_sudo()
    try:
        # Start existing hotspot
        nmcli.connection.show(own_hotspot)
        nmcli.connection.up(own_hotspot)
    except:
        # Create and start hotspot if missing
        nmcli.connection.add('wifi',
                             {'ssid': own_hotspot},
                             ifname=hotspot_interface,
                             name=own_hotspot,
                             autoconnect=True)

        nmcli.connection.modify(own_hotspot, {
                                '802-11-wireless.mode': 'ap',
                                '802-11-wireless.band': 'bg',
                                'ipv4.method': 'shared'})
        nmcli.connection.modify(own_hotspot,
                                {'wifi-sec.key-mgmt': 'wpa-psk'})

        nmcli.connection.modify(own_hotspot,
                                {'wifi-sec.psk': hotspot_password})

        nmcli.connection.up(own_hotspot)


def load_networks_json() -> str:
    # Disable sudo
    nmcli.disable_use_sudo()

    # Load Networks
    networks = nmcli.device.wifi(interface)

    available_networks_dict = {}
    for network in networks:
        # Keep strongest signal or add new network
        if available_networks_dict.get(network.ssid) is not None:
            if available_networks_dict[network.ssid]['signal'] < network.signal:
                available_networks_dict[network.ssid] = {
                    'secured': network.security != '', 'signal': network.signal, 'in_use': network.in_use}
        else:
            available_networks_dict[network.ssid] = {
                'secured': network.security != '', 'signal': network.signal, 'in_use': network.in_use}

    # Remove hidden network from list
    available_networks_dict.pop('', None)

    # Remove own hotspot from list
    available_networks_dict.pop(own_hotspot, None)

    # List of available networks
    available_networks_list = []
    network_items = list(available_networks_dict.items())
    for network in network_items:
        available_networks_list.append(NetworkInfo(
            network[0], network[1]['secured'], network[1]['signal'], network[1]['in_use']))

    # Sort by intensity of signal
    available_networks_list.sort(key=lambda n: n.signal, reverse=True)
    return (json.dumps(available_networks_list, indent=2, cls=EnhancedJSONEncoder))


# Patched method to support hidden networks
def wifi_connect(ssid: str,
                 password: str,
                 hidden: bool = False,
                 wait: int = None) -> None:
    nmcli.disable_use_sudo()
    hidden_val = 'yes' if hidden else 'no'
    cmd = nmcli._device.add_wait_option_if_needed(
        wait) + ['device', 'wifi', 'connect', ssid, 'password', password, 'hidden', hidden_val, 'ifname', interface]
    r = nmcli.device._syscmd.nmcli(cmd)
    m = re.search(r'Connection activation failed:', r)
    if m:
        raise nmcli._exception.ConnectionActivateFailedException(
            'Connection activation failed')


# Method to show all saved connections for selected interface
def get_saved_connections(show_all: bool = False) -> list[str]:
    nmcli.disable_use_sudo()
    r = nmcli._syscmd.nmcli(['connection', 'show'])
    names = []
    for row in r.split('\n'):
        row_data = re.split('  +', row)
        if len(row_data) > 3:
            name = row_data[0]
            type = row_data[2]
            m_interface = row_data[3]
            if name != 'NAME' and name != '' and type == 'wifi' and (m_interface == interface or show_all):
                names.append(name)
    return names

# wifi_connect(ssid='LG wifi', password='12345678', hidden=True)
# print(load_networks_json())


# nmcli.disable_use_sudo()
# print(show_saved_connections(show_all=True))
# start_hotspot()
