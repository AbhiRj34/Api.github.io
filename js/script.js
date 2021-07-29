const container = document.querySelector(".container");
// call the api
 const request = new XMLHttpRequest(); 
 request.open('GET',"https://restcountries.eu/rest/v2/name/nepal");
 request.send();
// get respose
request.addEventListener('load',function() {
   //console.log(this.responseText);    
     const [data] = JSON.parse(this.responseText);
     console.log(data);
     const htmlData  = `
     <div class="content">
     <div class="image">
       <img src="${data.flag}" alt="">
     </div>  
     <div class="con">
       <h3> Name : ${data.name}</h3>
       <h3> capital : ${data.capital}</h3>
       <h3> NativeName : ${data.nativeName} </h3>
       <h3> population : ${data.population} </h3>
     </div>  
    </div> `;
 //  console.log(htmlData);

    container.insertAdjacentHTML('afterbegin',htmlData);
});