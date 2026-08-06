import json
import ssl
import urllib.request

url = 'https://api.github.com/users/HP04Harsh/repos?per_page=100'
req = urllib.request.Request(url, headers={'User-Agent': 'VSCode'})
with urllib.request.urlopen(req, context=ssl.create_default_context()) as resp:
    repos = json.load(resp)
print(json.dumps([{'name': r['name'], 'html_url': r['html_url'], 'description': r.get('description')} for r in repos], indent=2))
