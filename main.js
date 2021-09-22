function notvisi(){

let btn=document.getElementById('ul');
btn.classList.toggle('notvisi')

}

fetch('https://m.cricbuzz.com/cricket-commentary/37567/dc-vs-srh-33rd-match-indian-premier-league-2021')

.then(res=> res.json())
.then( data=> {
  let s=document.getElementById('sct');
 // s.innerHTML='';
 let p=document.createElement('p');
 let p2=document.createElement('p');
 p.setAttribute('class','spara');
 p2.setAttribute('class','spara');
 
 p2.innerText=data.livescore.title;
 if(data.livescore.current==='Data Not Found'){
   p.innerText=data.livescore.update;
 } else{
 p.innerText=data.livescore.current;
};

 s.appendChild(p2);
 s.appendChild(p);
 
  
  console.log(data.livescore)

  
}
);



setInterval(data,2000)
function data(){
fetch('https://m.cricbuzz.com/cricket-commentary/37567/dc-vs-srh-33rd-match-indian-premier-league-2021')

.then(res=> res.json())
.then( data=> {
  let s=document.getElementById('sct');
  s.innerHTML='';
 let p=document.createElement('p');
 let p2=document.createElement('p');
 p.setAttribute('class','spara');
 p2.setAttribute('class','spara');
 
 p2.innerText=data.livescore.title;
 if(data.livescore.current==='Data Not Found'){
   p.innerText=data.livescore.update;
 } else{
 p.innerText=data.livescore.current;
};

 s.appendChild(p2);
 s.appendChild(p);
 
  
//console.log(data.livescore)

  
}
)

}




fetch('https://filmyapp.paycodehelp.workers.dev/data.json')
.then(res => res.json() )
.then (pata =>{
  
  for(i=0; i<=17; i++){
    let div=document.getElementById('score')
    let p= document.createElement('p');
    let p2=document.createElement('p');
    let btn=document.createElement('button');
    let link=document.createElement('a');
    let ndiv=document.createElement('div');
    p2.setAttribute('class','para');
    ndiv.setAttribute('class','kid')
    p.innerText=pata.articles[i].title;
    p2.innerText=pata.articles[i]. description;
    
    link.setAttribute('href',pata.articles[i].url);
    
    
    link.innerText= 'Read more...';
    div.appendChild(ndiv);
    document.getElementsByClassName("kid")[i].appendChild(p)
    document.getElementsByClassName('kid')[i].appendChild(p2)
    //document.getElementsByClassName('kid')[i].appendChild(btn)
    document.getElementsByClassName('kid')[i].appendChild(link)
    
    
    //let img= document.createElement('img')
   // img.setAttribute('src',pata.articles[i].urlToImage)
   
    //div.appendChild(p)
    //div.appendChild(img)
  //console.log(link)
  
  }
})



