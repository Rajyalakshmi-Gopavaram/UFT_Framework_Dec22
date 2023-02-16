sSheetName=Environment.Value("TestName")
fnOpenWebApp
row=1
For Iterator = 1 To 3 Step 1
	pim
	row=row+1
Next
'Browser("OrangeHRM").Page("OrangeHRM").Link("PIM").Click @@ script infofile_;_ZIP::ssf69.xml_;_
'Browser("OrangeHRM").Page("OrangeHRM_2").WebEdit("Type for hints...").Set "David" @@ script infofile_;_ZIP::ssf70.xml_;_
'Browser("OrangeHRM").Page("OrangeHRM_2").WebButton("Search").Click @@ script infofile_;_ZIP::ssf71.xml_;_
'Browser("OrangeHRM").Page("OrangeHRM_2").WebEdit("Type for hints...").Set "Chakri" @@ script infofile_;_ZIP::ssf72.xml_;_
'Browser("OrangeHRM").Page("OrangeHRM_2").WebButton("Search").Click @@ script infofile_;_ZIP::ssf73.xml_;_
'Browser("OrangeHRM").Page("OrangeHRM_2").WebButton("Add").Click @@ script infofile_;_ZIP::ssf74.xml_;_
'Browser("OrangeHRM").Page("OrangeHRM_3").WebEdit("firstName").Set "chakri" @@ script infofile_;_ZIP::ssf75.xml_;_
'Browser("OrangeHRM").Page("OrangeHRM_3").WebEdit("lastName").Set "gopavaram" @@ script infofile_;_ZIP::ssf76.xml_;_
'Browser("OrangeHRM").Page("OrangeHRM_3").WebEdit("WebEdit").Set "1176" @@ script infofile_;_ZIP::ssf77.xml_;_
'Browser("OrangeHRM").Page("OrangeHRM_3").WebButton("Save").Click @@ script infofile_;_ZIP::ssf78.xml_;_
'Browser("OrangeHRM").Page("OrangeHRM_8").WebButton("Save").Click @@ script infofile_;_ZIP::ssf79.xml_;_
'Browser("OrangeHRM").Page("OrangeHRM_8").WebButton("Save_2").Click @@ script infofile_;_ZIP::ssf80.xml_;_
'Browser("OrangeHRM").Page("OrangeHRM_8").Link("PIM").Click @@ script infofile_;_ZIP::ssf81.xml_;_
'Browser("OrangeHRM").Page("OrangeHRM_2").WebEdit("Type for hints...").Set "chakri" @@ script infofile_;_ZIP::ssf82.xml_;_
'Browser("OrangeHRM").Page("OrangeHRM_2").WebButton("Search").Click @@ script infofile_;_ZIP::ssf83.xml_;_
'Browser("OrangeHRM").Page("OrangeHRM_2").WebCheckBox("WebCheckBox").Set "ON" @@ script infofile_;_ZIP::ssf84.xml_;_
'Browser("OrangeHRM").Page("OrangeHRM_2").WebButton("Delete Selected").Click @@ script infofile_;_ZIP::ssf85.xml_;_
'Browser("OrangeHRM").Page("OrangeHRM_2").WebButton("Yes, Delete").Click @@ script infofile_;_ZIP::ssf86.xml_;_
