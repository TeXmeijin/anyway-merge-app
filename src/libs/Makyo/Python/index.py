import openpyxl
import os

sheet = openpyxl.load_workbook(os.getcwd() + "/src/libs/Makyo/PHP/Code.xlsx")['Sheet1']

code = ""
for y in range(20):

    line = ""
    for x in range(52):
        value = sheet.cell(row=y+1, column=x+1).value
        line += " " if value is None else value

    line = line.rstrip(" ")

    if line != "":
        code += line + "\n"

f = open(os.getcwd() + "/src/libs/Makyo/PHP/Code.php", "w")
f.write(code)
