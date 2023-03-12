import json
import pickle
from collections import Counter, defaultdict
import math
import heapq

def cosine_similarity(top_n, universities, query_codes):
    df = defaultdict(list)
    for key,value in universities.items():
        for unique_id in value:
            if key not in df[unique_id]:
                df[unique_id].append(key)

    doc_length = {}
    for key_i,value_i in universities.items():
        tf = Counter(value_i)
        doc_l = 0
        for key_j,value_j in tf.items():
            div_l = len(universities)/len(df[key_j])
            idf_l = math.log(div_l,2)
            weight = value_j*idf_l
            doc_l += weight*weight
        doc_length[key_i] = math.sqrt(doc_l)
    cosine_sim = {}
    for key_i,value_i in universities.items():
        sumx = 0
        if doc_length[key_i]==0:
            continue
        for unique_id in query_codes:
            if len(df[unique_id])==0:
                continue
            div = len(universities)/len(df[unique_id])
            idf = math.log(div,2)
            term_f = value_i.count(unique_id)
            sumx += term_f*idf*idf

        cosine_sim[key_i] = sumx/doc_length[key_i]


    keys = list(cosine_sim.keys())
    values = list(cosine_sim.values())
    vals = [-val for val in values]
    heapq.heapify(vals)
    top_most = []
    # print(abs(-heapq.heappop(vals)))
    for _ in range(top_n):
        top = abs(-heapq.heappop(vals))
        score_index = values.index(top)
        print(keys[score_index], top)
        top_most.append(keys[score_index])

    return top_most
    
if __name__=='__main__':

    with open("survey.json") as f:
        queries = json.loads(f.read())

    with open('codes.pkl', 'rb') as f:
        codemap = pickle.load(f)

    with open('universities.pkl','rb') as f:
        universities = pickle.load(f)

    query_codes = []

    for field in queries.keys():
        if isinstance(queries[field], list):
            for key in queries[field]:
                query_codes.append(codemap[field][key])
        else:
            query_codes.append(codemap[field][queries[field]])

    top_unis = cosine_similarity(3, universities, query_codes)
    # print(top_unis)

