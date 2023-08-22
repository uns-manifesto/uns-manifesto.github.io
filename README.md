<!DOCTYPE html>  
<html>  
<head>  
    <title>Hello World</title>  
    <style>  
        body {  
            font-family: Arial, sans-serif;  
            padding: 20px;  
        }  
        .green-text {  
            color: green;  
            font-weight: bold;  
        }  
        .orange-text {  
            color: orange;  
            font-weight: bold;  
        }  
        .menu {  
            display: flex;  
            justify-content: space-around;  
            list-style-type: none;  
            padding: 0;  
            margin-bottom: 20px;  
        }  
        .menu li {  
            background-color: #f8f9fa;  
            padding: 10px 20px;  
            border-radius: 5px;  
        }  
        @media (max-width: 600px) {  
            .menu {  
                flex-direction: column;  
            }  
        }  
    </style>  
</head>  
<body>  
    <ul class="menu">  
        <li><a href="UNS_French.html">Item 1</a></li>  
        <li><a href="UNS_English.html">Item 2</a></li>  
    </ul>  
    <p id="greeting" class="green-text">Hello World</p>  
    <button onclick="swapText()">Swap Text</button>  
    <script>  
        function swapText() {  
            var greeting = document.getElementById("greeting");  
            if (greeting.innerHTML === "Hello World") {  
                greeting.innerHTML = "Bonjour Monde";  
                greeting.className = "orange-text";  
            } else {  
                greeting.innerHTML = "Hello World";  
                greeting.className = "green-text";  
            }  
        }  
    </script>  
</body>  
</html>  
