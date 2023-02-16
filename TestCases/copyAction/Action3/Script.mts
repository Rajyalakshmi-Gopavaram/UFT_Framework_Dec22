SystemUtil.Run "C:\Program Files\Google\Chrome\Application\chrome.exe","https://demo.guru99.com/test/newtours/"
Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").Link("REGISTER").Click @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours").WebEdit("firstName").Set DataTable("firstname", dtLocalSheet) @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours").WebEdit("lastName").Set DataTable("lastname", dtLocalSheet) @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours").WebEdit("phone").Set DataTable("phonenumber", dtLocalSheet) @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours").WebEdit("userName").Set DataTable("email", dtLocalSheet) @@ script infofile_;_ZIP::ssf5.xml_;_
Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours").WebEdit("address1").Set "Ashramam Nagar" @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours").WebEdit("city").Set "Badvel" @@ script infofile_;_ZIP::ssf7.xml_;_
Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours").WebEdit("state").Set "Andhra Pradesh" @@ script infofile_;_ZIP::ssf8.xml_;_
Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours").WebEdit("postalCode").Set "516227" @@ script infofile_;_ZIP::ssf9.xml_;_
Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours").WebList("country").Select "INDIA" @@ script infofile_;_ZIP::ssf10.xml_;_
Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours").WebEdit("email").Set "Gopavaram Rajyalakshmi" @@ script infofile_;_ZIP::ssf11.xml_;_
Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours").WebEdit("password").SetSecure "63e4cd845d64ab7aff332c9e8e9e89626135ffaa9b5f67dd2813" @@ script infofile_;_ZIP::ssf12.xml_;_
Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours").WebEdit("confirmPassword").SetSecure "63e4cd8be09d2b51139b2123ac0feed1058210fa811471947a6d" @@ script infofile_;_ZIP::ssf13.xml_;_
Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours").WebButton("Submit Query").Click @@ script infofile_;_ZIP::ssf14.xml_;_
Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours_2").Link("SIGN-OFF").Click @@ script infofile_;_ZIP::ssf15.xml_;_
