import os.path
import requests
import json
from bs4 import BeautifulSoup

def outputtojson(id_str):
    r = requests.get("https://csboa2.csb.gov.hk/csboa/jve/JVE_001_text.action?languageType=2")
    soup = BeautifulSoup(r.content, 'lxml')

    targetTable = soup.find(id=id_str)
    headers = {}
    thead = targetTable.find("tr",{"class":'thread'})
    thead = thead.find_all("th")
    for i in range(len(thead)):
        headers[i] = thead[i].text.strip().lower()
    data = []
    rows = targetTable.find_all("tr",class_=lambda x: x != 'thread')
    for row in rows:
        cells = row.find_all("td")
        items = {}
        for index in headers:
            items[headers[index]] = cells[index].text.strip()
        data.append(items)

    outputfileName = ''
    if id_str == 'csTable':
        outputfileName = os.path.dirname(__file__) + '/../shared/civil_data.json'
    else:
        outputfileName = os.path.dirname(__file__) + '/../shared/noncivil_data.json'

    with open(outputfileName, 'w') as outfile:
        outfile.write(json.dumps(data,indent=True))

if __name__ == '__main__':
    outputtojson('csTable')
    outputtojson('ncsTable')