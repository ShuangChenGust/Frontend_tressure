import requests
import bs4
from bs4 import BeautifulSoup
import pandas as pd
import time

review_list = []

def extract_review(soup): 
    reviews = []
    for div in soup.find_all(name="div", attrs={"class":"jsx-4290255818"}):
        if len(review) > 0:
            for b in review:
                b_text = b.text.strip()
                if len(b_text) > 0:
                    reviews.append(b_text)
    return reviews


URL = "https://coronavirus.1point3acres.com/en"
page = requests.get(URL)
soup = BeautifulSoup(page.text, "html.parser")
review_list = review_list + extract_review(soup)
print(soup.prettify())

review_list = list(set(review_list))
print(review_list)
print(len(review_list))
df = pd.DataFrame(review_list)
df.to_excel('review.xlsx', header=False, index=False)
