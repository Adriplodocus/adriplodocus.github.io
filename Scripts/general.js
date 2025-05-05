function loadUrl(url){
    window.open(url);
}

//Makes all game captures invisible.
function makeCapturesInvisible(){
   const allDivs = document.querySelectorAll('[id^="gameDiv_"]');
   allDivs.forEach(div => {
       div.style.visibility = 'hidden';
   });
}

//Set one of the games captures div visible while hidding the others.
function toggleGameCaptures(n){
    makeCapturesInvisible();
    document.getElementById('gameDiv_'+n).style.visibility = 'visible';
}

function checkForm(f){
    //Values check.
    if(f.nameInput.value.length == 0){
        alert("Name cannot be empty.");
        return false;
    }
    
    if(f.emailInput.value.length == 0){
        alert("Name cannot be empty.");
        return false;
    }

    if(f.messageInput.value.length == 0){
        alert("Message cannot be empty.");
        return false;
    }

    //Checkbox check.
    if(document.getElementById('check').checked == false){
        alert("Please, accept our policies.");
        return false;
    }

    //Form is submitted if all inputs have been filled.
    submitForm(f);
}

function submitForm(f){
    f.submit();
    alert("Thanks.");
}

