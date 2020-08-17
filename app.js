
let xhr = new XMLHttpRequest();

xhr.open('GET','https://love-calculator.p.rapidapi.com/getPercentage?fname=Yasiru&sname=Kavi');
xhr.setRequestHeader("x-rapidapi-host", "love-calculator.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "40abbeb59dmsh31789adfc7679d8p1abb39jsn6b5161e25af2");


xhr.onload = function(){
    if(this.status === 200){
        console.log(this.responseText);
    }
}

xhr.send();