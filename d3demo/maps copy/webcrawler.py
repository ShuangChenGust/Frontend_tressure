import requests
import bs4
from bs4 import BeautifulSoup
import pandas as pd
import time

review_list = []
for i in range(0, 200, 20):
    URL = "https://www.indeed.com/cmp/Aventura-Hospital-and-Medical-Center/reviews" + "?start=" + str(i)
    page = requests.get(URL)
    soup = BeautifulSoup(page.text, "html.parser")
    review_list = review_list + extract_review(soup)
print(soup.prettify())
def extract_review(soup): 
    reviews = []
    for div in soup.find_all(name="div", attrs={"class":"cmp-Review-text"}):
        review = div.find_all(name="span", attrs={"class":'cmp-NewLineToBr-text'})
        if len(review) > 0:
            for b in review:
                b_text = b.text.strip()
                if len(b_text) > 0:
                    reviews.append(b_text)
    return reviews
review_list = list(set(review_list))
print(review_list)
print(len(review_list))
df = pd.DataFrame(review_list)
df.to_excel('review.xlsx', header=False, index=False)
