
evenetListener();

function evenetListener(){

    document.addEventListener('DOMContentLoaded',function(){
        // create Html Content 
        const html = document.createElement('div');
        html.classList.add('row');

        const colmd12 = document.createElement('div');
        colmd12.classList.add('col-md-12', 'col-sm-12', 'mt-4')
        const htmlFrom = `
                                <form id="form-submit">
                                    <div class="form-row">
                                    <div class="form-group col-md-12">
                                        <input type="text" class="form-control boyname"  placeholder="Boy Name">
                                    </div>
                                    <div class="form-group col-md-12">
                                        <input type="text" class="form-control girlname" placeholder="Girl Name">
                                    </div>
                                    </div>
                                    
                                    <button type="submit" id="calculatBtn" class="btn btn-danger btn-block mt-4 ">Calculat</button>
                                </form>
                    `;
        colmd12.innerHTML = htmlFrom;
        html.appendChild(colmd12);
        
        document.querySelector('.html-content').appendChild(html);
    });

}

document.querySelector('.html-content').addEventListener('click', function(e){
        e.preventDefault();
    //console.log(e.target.getAttribute("id"));

        if(e.target.getAttribute("id") === 'calculatBtn'){
            const boyName = document.querySelector('.boyname').value;
            const girlName = document.querySelector('.girlname').value;

            if(girlName != '' && boyName != ''){
                requsetResult(boyName, girlName)
            }else{
                displayAlert('alert-danger','Pleas fill all fileds !');
            }
            
        }else{
            
        }
        
    
});



// Display errors and Messages
function displayAlert(action, msg){
    const alert = document.querySelector('.alert');
    alert.classList.remove('d-none');
    alert.classList.add(`${action}`, 'text-center');
    alert.innerHTML =` <b>${msg}</b>`;

    setTimeout(()=>{
        alert.classList.add("d-none");
    }, 2000);
}




function requsetResult(boyName, girlName){

    const url = `https://love-calculator.p.rapidapi.com/getPercentage?fname=${boyName}&sname=${girlName}`;
    let xhr = new XMLHttpRequest();

    xhr.open('GET',url , true);
    xhr.setRequestHeader("x-rapidapi-host", "love-calculator.p.rapidapi.com");
    xhr.setRequestHeader("x-rapidapi-key", "40abbeb59dmsh31789adfc7679d8p1abb39jsn6b5161e25af2");


    xhr.onload = function(){
        if(this.status === 200){
            console.log(this.responseText);
        }
    }

    xhr.send();


}
