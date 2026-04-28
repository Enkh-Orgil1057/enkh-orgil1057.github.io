/*
----------------------------------
--------Эхний дасгалын код--------
----------------------------------
*/
function das1(){
    //utgaa avah
    var inputElement = document.getElementById("das1-input");
    var utga = inputElement.value;

    // too mun esehiig shalgah
    if (utga === "" || isNaN(utga)) {
        alert("Тоо оруулна уу.");
        return; 
    }

    utga = Number(utga);
    var sum = 0;
    //niilberee oloh
    while (utga > 0){
        var digit = utga % 10;
        sum += digit;
        utga = Math.floor(utga / 10);
    }
    //niilberee hevleh
    document.getElementById("das1-sum").innerHTML = sum;

    //palendrom esehiig shalgah
    var pal_test = 0;
    var sum_cpy = sum;
    while (sum_cpy > 0){
        var digit = sum_cpy % 10;
        pal_test = pal_test*10 + digit;
        sum_cpy = Math.floor(sum_cpy / 10);
    }

    document.getElementById("das1-esreg").innerHTML = pal_test;

    if (pal_test == sum){
        document.getElementById("das1-result").innerHTML = "Мөн байна!";
        document.getElementById("das1-result").setAttribute("style", "color: green;")
    } else {
        document.getElementById("das1-result").innerHTML = "Биш байна!";
        document.getElementById("das1-result").setAttribute("style", "color: red;")   
    }
}

/*
---------------------------------
------------dasgal 2-------------
---------------------------------
*/

function das2(){
    var inputElement = document.getElementById("das2-input");
    var utga = inputElement.value;

    // too mun esehiig shalgah
    if (utga === "" || isNaN(utga)) {
        alert("Тоо оруулна уу.");
        return; 
    }

    var tuulai_loc = Number(utga);
    var chono_loc = 0;
    var chono_hurd = 6.94;   //seconded zam
    var tuulai_hurd = 5;     //seconded zam

    var second = 0;
    var minute = 0;

    while (tuulai_loc - chono_loc > 0){
        second++;
        tuulai_loc += tuulai_hurd;
        chono_loc += chono_hurd;
    }
    //second-iig minute second ruu shiljuuleh
    while (second >= 60){
        minute++;
        second -= 60;
    }

    document.getElementById("das2-result").innerHTML = minute + ":" + second;
}

/*
-----------------------------------
-------------Dasgal 3--------------
-----------------------------------
*/

function das3(){
    var inputElement = document.getElementById("das3-input");
    var utga = inputElement.value;

    // too mun esehiig shalgah
    if (utga === "" || isNaN(utga)) {
        alert("Тоо оруулна уу.");
        return; 
    }
    //valid esehiig shalgah
    var toot = Number(utga);
    if (toot > 108){
        alert("Хамгийн их тоотын айл 108 юм.")
        return;
    }

    toot--;

    var orts = 3;
    var davhar = 9;
    var haalga = 4;

    var butsaah_orts = Math.floor(toot / (haalga * davhar));
    var butsaah_davhar = Math.floor((toot - (butsaah_orts * haalga * davhar)) / haalga);
    var butsaah_haalga = toot - (butsaah_orts * haalga * davhar) - (butsaah_davhar * haalga);

    document.getElementById("das3-orts").innerHTML = butsaah_orts + 1;
    document.getElementById("das3-davhar").innerHTML = butsaah_davhar + 1;
    document.getElementById("das3-haalga").innerHTML = butsaah_haalga + 1;
}

/*
-----------------------------------
-------------Dasgal 4--------------
-----------------------------------
*/
function ham_ih_huvagch(a, b) {
    while (b) {
        a %= b;
        [a, b] = [b, a];
    }
    return a;
}

function ham_baga_huvaagdagch(a, b) {
    if (a === 0 || b === 0) return 0;
    return Math.abs(a * b) / ham_ih_huvagch(a, b);
}

function das4(){
    var inputElement = document.getElementById("das4-input");
    var utga = inputElement.value.trim();

    // zai baival 1 too hursen gj uzeed, herev too bish bol oruulahguiger husnegtleh
    var numArray = utga.split(' ').map(Number).filter(n => !isNaN(n) && utga !== "");

    // yg 5n too baigaa esehiig shalgah
    if (numArray.length !== 5) {
        alert("Та яг 5 ширхэг тоо хооронд нь зай аваад оруулна уу. (Одоогоор: " + numArray.length + "ширхэг тоо байна. )");
        return; 
    }
    var hariu = numArray[0];

    for (var i = 1; i < numArray.length; i++){
        hariu = ham_baga_huvaagdagch(hariu, numArray[i]);
    }

    document.getElementById("das4-result").innerHTML = hariu;
}
/*
-----------------------------------
-------------Dasgal 5--------------<span id="das5-result-desc"></span>&nbsp  &nbsp 
-----------------------------------
*/

function das5(){
    var inputElement = document.getElementById("das5-input");
    var utga = inputElement.value;

    if (utga === "" || isNaN(utga)){
        alert("Тоо оруулна уу.");
        return;
    }

    utga = Number(utga);
    var ognoo = new Date();
    var tsag = ognoo.getHours();
    document.getElementById("das5-tsag").innerHTML = tsag + ":" + ognoo.getMinutes();

    if (tsag >= 7 && tsag <= 18){
        document.getElementById("das5-DoN").innerHTML = "Өдөр";
        document.getElementById("das5-DoN").setAttribute("style", "background-color: yellow; border-radius: 30%;")
        document.getElementById("das5-result").innerHTML = "Квадрат: " + (utga * utga);
    } else {
        document.getElementById("das5-DoN").innerHTML = "Орой";
        document.getElementById("das5-DoN").setAttribute("style", "background-color: blue; border-radius: 30%;")
        document.getElementById("das5-result").innerHTML = "Язгуур: " + Math.sqrt(utga);
    }


}