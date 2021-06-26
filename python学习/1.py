import requests
response = requests.get("https://www.minecraftforum.net/forums/mapping and modding java edition/minecraft mods/mods discussion/1340305 nbt parser for python")
print(response.text)