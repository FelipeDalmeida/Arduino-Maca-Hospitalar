# -*- coding: utf-8 -*-
"""
Created on Thu Feb 24 23:59:11 2022

@author: Megazord 2.0
"""

import serial
from serial.tools import list_ports 
conexao=serial.Serial('COM3',9600)

while True:
         
    resposta=conexao.readline()
    valor=float(resposta.decode())
    print(valor)
    
conexao.close()