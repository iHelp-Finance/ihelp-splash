#!/usr/bin/env python
# -*- coding: utf-8 -*-

import pandas as pd
import sys,json,requests,datetime,requests
import pprint as pp
from pprint import pprint

GEN_SOURCE_CSV = False
GEN_LOCALE_JSON = True

if GEN_SOURCE_CSV == True:

    with open('en.json') as data_file:    
        data = json.load(data_file)  
    
    df = pd.json_normalize(data,meta="header")
    df = df.T
    
    df = df.reset_index()
    df.columns = ['token','text']
    
    df.to_csv('en.csv',index=False)


if GEN_LOCALE_JSON == True:
    
    def get_google_sheet_df( google_sheet_id, sheet_name, _range):
    
        url = 'https://sheets.googleapis.com/v4/spreadsheets/%s/values/%s!%s?key=%s' % (google_sheet_id,sheet_name,_range,'AIzaSyBy2prCmUByqzUyueWnhOR_uxSgLdWmzzM')
    
        r = requests.get(url)
        
        values = r.json()['values']
        
        df = pd.DataFrame(values[1:])
        df.columns = values[0]
    
        return df
    
    google_sheet_id = '1ZGQiQI1Je6_OiaubX859fY--fYLYJtTVFnGkzT2AGA0'
    _range = 'A1:Z1000'
    
    languagesToGenerate = ['en','es','fr','cn']
    
    for lang in languagesToGenerate:
        
        df = get_google_sheet_df(google_sheet_id, lang, _range)
    
        result_json = {}
        
        def df_to_json(row):
            section = row['token'].split('.')[0]
            token = row['token'].split('.')[1]
            if section not in result_json:
                result_json[section] = {}
            result_json[section][token] = row['text']
                
        df.apply(df_to_json, axis='columns')
        
        with open(lang+'.json', 'w') as out:
            json.dump(result_json, out)
