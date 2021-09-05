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

df_new.to_csv("Tabla-vacunados.csv",index=False)

df2 = pd.DataFrame(pd.read_csv("Vacunas.csv"))
df2["Porcentaje"] = df2["Dosis_disp"]*100/df2["Dosis_comp"]
df2["Pie"] = df2["Dosis_comp"]/np.sum(df2["Dosis_comp"])

df2.to_csv("new_Vacunas.csv",index=False)




