import requests
from bs4 import BeautifulSoup
print("This program will scrape the populations of each barangay in the philippines, from the site philatlas")

base = 'https://www.philatlas.com/'
url = 'https://www.philatlas.com/barangays.html'
response = requests.get(url)
soup = BeautifulSoup(response.text, "html.parser")

x = 0
startnum = int(input("from what no?"))
#list_provs = soup.findAll('ul', attrs={"id": "brgysByProv"})
for province in soup.find_all('ul', {'id': 'brgysByProv'}):
    
    for provli in province.find_all('li'):
        if x>=startnum:
            filename = provli.text + '.txt'
            print(filename)
            f = open(filename ,"w+", encoding='utf-8')
            a = provli.find('a')
            provlink = base + a.get('href')
            print("link: " , provlink)
            newresponse = requests.get(provlink)
            newsoup = BeautifulSoup(newresponse.text, "html.parser")
            for brgy in newsoup.find_all('ul', {'id': 'brgyList'}):
                for brgyli in brgy.find_all('li'):
                    provname = brgyli.text
                    #print(provname)
                    b = brgyli.find('a')
                    province_link = base + b.get('href')
                    newresponse2 = requests.get(province_link)
                    newsoup2 = BeautifulSoup(newresponse2.text, "html.parser")
                    pop = newsoup2.find('tr', {'class': 'borderBottom'}).find('td').text
                    pop = provname + ', ' + pop + '\n'
                    f.write(pop)

            f.close() 
        else: x+=1

                
        
#links_provs = list_provs.findAll('li')
#print(list_provs)
