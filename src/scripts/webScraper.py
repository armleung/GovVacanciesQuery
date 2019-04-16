import requests
import json
from bs4 import BeautifulSoup

r = requests.get("https://csboa2.csb.gov.hk/csboa/jve/JVE_001_text.action?languageType=2")
soup = BeautifulSoup(r.content, 'lxml')
cstable = soup.find(id="csTable")

headers = {}
thead = cstable.find("tr",{"class":'thread'})
thead = thead.find_all("th")
for i in range(len(thead)):
    headers[i] = thead[i].text.strip().lower()
data = []
rows = cstable.find_all("tr",class_=lambda x: x != 'thread')
for row in rows:
    cells = row.find_all("td")
    items = {}
    for index in headers:
        items[headers[index]] = cells[index].text.strip()
    data.append(items)
print (json.dumps(data, indent=True))