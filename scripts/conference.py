import urllib.request as request
import re
import time
from bs4 import BeautifulSoup

cfp_url = "http://www.wikicfp.com/cfp/call?conference=computer%20science"

cfp_href_list = []
for page in range(1, 20):
    list_html = request.urlopen(cfp_url + "&page=" + str(page))
    list_soup = BeautifulSoup(list_html, "html.parser")

    a_list = list_soup.find_all("a", href=re.compile("eventid"))
    for a in a_list:
        cfp_href_list.append("http://www.wikicfp.com" + a.get("href"))

    time.sleep(5)

url_list = []
for href in cfp_href_list:
    cfp_html = request.urlopen(href).read().decode("utf-8")
    m = re.search(r"Link: <a href=\"(.*?)\"", cfp_html)
    if m:
        url = m.group(1)
        url_list.append(url)
        print(url)
    time.sleep(5)

f = open("url.js", "w")
f.write("var urlList = ['" + "','".join(url_list) + "'];")
f.close()
