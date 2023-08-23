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
        <li><a href="UNS_French.html">Français</a></li>    
        <li><a href="UNS_English.html">Anglais</a></li>
    </ul>    
    <p id="greeting" class="green-text">Hello World</p>    
    <button onclick="swapText()">Swap Text</button>    
    <button> <a href="https://forms.gle/7FtuUKGRoCt2Gm9D6" target="_blank"> Sign ! </a></button>
    <button> <a href="https://docs.google.com/spreadsheets/d/1fFfL4rwlw4ma0uxxYQPquoQY0zfFYDOrMytqiIF0TiI" target="_blank"> List of Signatories </a></button>
    
    <p>Top 20 first Signatories :
    * 2023 08 23, Vincent Thavonekham
    * 2023 08 23, Benoit Prieur
    </p>
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
