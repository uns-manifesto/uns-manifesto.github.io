<!DOCTYPE html>  
<html>  
<head>  
    <title>Hello World Vince & Benoit </title>  
    <style>  
        body {  
            font-family: Arial, sans-serif;  
            padding: 20px;  
        }  
        .green-text {  
            color: green;  
            font-weight: bold;  
        }  
        .menu {  
            display: flex;  
            justify-content: space-around;  
            list-style-type: none;  
            padding: 0;  
            margin: 0;  
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
        <li>Item 1</li>  
        <li>Item 2</li>  
    </ul>  
    <p id="greeting" class="green-text">Hello World</p>  
    <button onclick="swapText()">Swap Text</button>  
    <script>  
        function swapText() {  
            var greeting = document.getElementById("greeting");  
            if (greeting.innerHTML === "Hello World") {  
                greeting.innerHTML = "Bonjour Monde";  
            } else {  
                greeting.innerHTML = "Hello World";  
            }  
        }  
    </script>  
</body>  
</html>  
