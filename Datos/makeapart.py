#Programa para separar los datos de vacunación separados

import pandas as pd
import numpy as np
import datetime 


df = pd.DataFrame(pd.read_csv("Coronavirus.csv"))
df["new_vaccines"] = np.concatenate((np.array([2924]),np.diff(df["vacunados"].to_numpy())))
df_new = df[~df["vacunados"].isnull()]
fechas = [datetime.datetime.strptime(x,"%d/%m/%y") for x in df_new["Fecha"]]
df_new["date"] = fechas
df_new["strfecha"]= df_new["date"].dt.strftime("%Y-%m-%d")
df_new.to_csv("Tabla-vacunados.csv",index=False)

df2 = pd.DataFrame(pd.read_csv("Vacunas.csv"))
df2["Porcentaje"] = df2["Dosis_disp"]*100/df2["Dosis_comp"]
df2["Pie"] = df2["Dosis_comp"]/np.sum(df2["Dosis_comp"])

df2.to_csv("new_Vacunas.csv",index=False)




