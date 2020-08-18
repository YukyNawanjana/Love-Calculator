const htmlContent = document.querySelector('.html-content');


evenetListener();

function evenetListener(){

    document.addEventListener('DOMContentLoaded',function(){
        // create Html Content 
        const html = `
                        <h1 class="text-danger text-center">LOVE CALCULATOR</h1>
                        <div class="row">
                            <div class="col-md-12 col-sm-12 mt-5">
                                <form>
                                    <div class="form-row">
                                    <div class="form-group col-md-12">
                                        <input type="email" class="form-control" id="inputEmail4" placeholder="Boy Name">
                                    </div>
                                    <div class="form-group col-md-12">
                                        <input type="text" class="form-control" id="girlname" placeholder="Girl Name">
                                    </div>
                                    </div>
                                    
                                    <button type="submit" class="btn btn-danger btn-block mt-5">Calculat</button>
                                </form>
                            </div>
                        </div> 
                    `;
          
        htmlContent.innerHTML = html;
    });
}



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