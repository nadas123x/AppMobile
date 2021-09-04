from flask import Flask,jsonify, make_response
import requests
from bs4 import BeautifulSoup
from flask_cors import CORS, cross_origin
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
@app.route("/", methods=['GET'])
@cross_origin()
def hello_world():
    articles=[]
    html_doc=str(requests.get("https://www.ocpgroup.ma/fr/actualités").text)
    soup = BeautifulSoup(html_doc, 'html.parser')
    articlesHtml=soup.findAll('div', attrs={'role': 'article'})
    for i in range(len(articlesHtml)):
        ocp_textWrapper=articlesHtml[i].find('div',attrs={'class':'ocp_textWrapper'})
        description=ocp_textWrapper.find('div',attrs={'class':'ocp_textWrapper-desc'}).find('p')
        articles.append({'a':articlesHtml[i].find('a')["href"],'title':ocp_textWrapper.find('h2').text,'desc':description.text,'date':ocp_textWrapper.find('p').text})
        articleContent=str(requests.get(f"https://www.ocpgroup.ma{articles[i]['a']}").text)
        soup2 = BeautifulSoup(articleContent, 'html.parser')
        content=soup2.find(attrs={'class':'ocp_textWrapper'}).findAll('p')
        articles[i]['content']=''
        for j in range(len(content)):
            articles[i]['content']+='\n'+content[j].text

        articles[i]['id']=i
    return make_response(jsonify(articles),200)