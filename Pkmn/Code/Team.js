function changeP() {
        var pokemon1 = "PIKAPI";
        var pokemon2 = "FIONA";
        var pokemon3 = "WOHOO";
        var pokemon4 = "MINDFLAYER";
        var pokemon5 = "LATIOS";
        var pokemon6 = "ARTICUNO";

        document.getElementById("p1").textContent = pokemon1;
        document.getElementById("p2").textContent = pokemon2;
        document.getElementById("p3").textContent = pokemon3;
        document.getElementById("p4").textContent = pokemon4;
        document.getElementById("p5").textContent = pokemon5;
        document.getElementById("p6").textContent = pokemon6;

        document.getElementById("img1").src = "../CurrentTeam/".concat(document.getElementById("p1").textContent.concat(".gif"));
        document.getElementById("shadow1").src = "https://i.postimg.cc/xdmpF4Tm/Shadow.png";
        document.getElementById("pokeballBackground1").src = "https://i.postimg.cc/0QdW9KS2/Pokeball-Background.png";
        document.getElementById("img2").src = "../CurrentTeam/".concat(document.getElementById("p2").textContent.concat(".gif"));
        document.getElementById("shadow2").src = "https://i.postimg.cc/xdmpF4Tm/Shadow.png";
        document.getElementById("pokeballBackground2").src = "https://i.postimg.cc/0QdW9KS2/Pokeball-Background.png";
        document.getElementById("img3").src = "../CurrentTeam/".concat(document.getElementById("p3").textContent.concat(".gif"));
        document.getElementById("shadow3").src = "https://i.postimg.cc/xdmpF4Tm/Shadow.png";
        document.getElementById("pokeballBackground3").src = "https://i.postimg.cc/0QdW9KS2/Pokeball-Background.png";
        document.getElementById("img4").src = "../CurrentTeam/".concat(document.getElementById("p4").textContent.concat(".gif"));
        document.getElementById("shadow4").src = "https://i.postimg.cc/xdmpF4Tm/Shadow.png";
        document.getElementById("pokeballBackground4").src = "https://i.postimg.cc/0QdW9KS2/Pokeball-Background.png";
        document.getElementById("img5").src = "../CurrentTeam/".concat(document.getElementById("p5").textContent.concat(".gif"));
        document.getElementById("shadow5").src = "https://i.postimg.cc/xdmpF4Tm/Shadow.png";
        document.getElementById("pokeballBackground5").src = "https://i.postimg.cc/0QdW9KS2/Pokeball-Background.png";
        document.getElementById("img6").src = "../CurrentTeam/".concat(document.getElementById("p6").textContent.concat(".gif"));
        document.getElementById("shadow6").src = "https://i.postimg.cc/xdmpF4Tm/Shadow.png";
        document.getElementById("pokeballBackground6").src = "https://i.postimg.cc/0QdW9KS2/Pokeball-Background.png";
    }