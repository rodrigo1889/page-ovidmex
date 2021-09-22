#Programa para separar los datos de vacunación separados

import pandas as pd
import numpy as np
import datetime 


df = pd.DataFrame(pd.read_csv("Coronavirus.csv"))
sub = df[~df["vacunados"].isnull()]
df_new= sub[["vacunados","Dosis-disp","completos","Fecha","Una dosis"]]

fechas = [datetime.datetime.strptime(x,"%d/%m/%y") for x in df_new["Fecha"]]
df_new["date"] = fechas
df_new["strfecha"]= df_new["date"].dt.strftime("%Y-%m-%d")
df_new["new_vaccines"] = np.concatenate(([2924],np.diff(df_new["vacunados"])))
df_new["smooth"] = df_new["new_vaccines"].rolling(window=10,win_type="gaussian",min_periods=1,center=True).mean(std=2)
df_new["Por100"] = df_new["vacunados"].to_numpy()*100/(126014024)
df_new.to_csv("Tabla-vacunados.csv",index=False)

df2 = pd.DataFrame(pd.read_csv("Vacunas.csv"))
df2["Porcentaje"] = df2["Dosis_disp"]*100/df2["Dosis_comp"]
df2["Pie"] = df2["Dosis_comp"]/np.sum(df2["Dosis_comp"])

df2.to_csv("new_Vacunas.csv",index=False)


df3 = pd.DataFrame(pd.read_csv("Complete/ZMVM.csv"))
f = [datetime.datetime.strptime(x,"%Y-%m-%d") for x in df3.iloc[:,0]]
df3.index = f
df3_res = pd.DataFrame(df3.resample("W-Sun").sum())
df3_res.reset_index(level=0,inplace=True)
df3_res["week"] = df3_res["index"].dt.strftime("%U-%Y")
df3_res.to_csv("WeeklyZMVM.csv",index=False)


china = pd.DataFrame(pd.read_csv("/home/rodrigo/Documentos/Programitas/Sitio/Datos/China.csv"))
mexico = pd.DataFrame(pd.read_csv("/home/rodrigo/Documentos/Programitas/Sitio/Datos/Tabla-vacunados.csv"))
mexico = mexico[["date","Por100"]]
china = china[["Fecha","Por100"]]


dates_china = [datetime.datetime.strptime(x,"%Y-%m-%d") for x in china["Fecha"]]
dates_mexico = [datetime.datetime.strptime(x,"%Y-%m-%d") for x in mexico["date"]]
china.index = dates_china
mexico.index = dates_mexico
mexico = mexico[["Por100"]]
china = china[["Por100"]]

m1 = pd.merge(mexico,china,how="right",left_index=True,right_index=True)
m1.columns = ["Mexico","China"]

data = pd.DataFrame(pd.read_csv("https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/vaccinations.csv",usecols=["location","date","total_vaccinations_per_hundred"]))
"""
Mathieu, E., Ritchie, H., Ortiz-Ospina, E. et al. A global database of COVID-19 vaccinations. Nat Hum Behav (2021). https://doi.org/10.1038/s41562-021-01122-8

Usando la base de datos de <<Our World in Data>> con las correcciones a los datos Mexicanos y Chinos, ambos con muchos huecos. 

"""



names = ["Argentina","Paraguay","Chile","United States","Canada","Brazil","Cuba","El Salvador","Panama","Colombia","Peru","Uruguay","Russia","Germany","United Kingdom"]

lista = {}
for i in range(len(names)):
    lista[names[i]] = pd.DataFrame(data.loc[data['location'] == names[i]])
for j in range(len(lista)):
    lista[names[j]].index = [datetime.datetime.strptime(x,"%Y-%m-%d") for x in lista[names[j]]["date"]]
    lista[names[j]] = lista[names[j]][["total_vaccinations_per_hundred"]]


merged = pd.concat([lista[names[j]] for j in range(len(names))] ,axis=1)
merged.columns = names

total = pd.merge(m1,merged,how="outer",left_index=True,right_index=True)
total["date"] = total.index

total.to_csv("international-vaccines.csv",index=False)



