

const n = 40
const array = []
init();

function init(){
for(let i =0; i<n; i++){
    array[i] = Math.random();
}
showbars();
}


function play()
{
    const copy = [...array];
    const swaps = bubblesort(copy);
    animate(swaps);
    showbars();
}

function animate(swaps){
   if(swaps.length == 0){
    return;
   }

   const [i,j] = swaps.shift();
   [array[i],array[j]] = [array[j], array[i]];
   showbars();
   setTimeout(function(){
    animate(swaps); 
   }, 10);

   
}



   function bubblesort(array){
    const swaps = [];
   do{
    var swapped = false;
    for(let i =1; i<array.length; ++i){
        if(array[i-1]>array[i]){
            swapped = true;
            swaps.push([i-1,i]);
            [array[i-1],array[i]]=[array[i],array[i-1]];
        }
    }
   }while(swapped);
   return swaps;
}


   function showbars(){
    container.innerHTML = "";
   for(let i =0; i<array.length; ++i)
   {
      const bar=document.createElement("div");
      bar.style.height=array[i]*100+"%";
      bar.classList.add("bar");
      container.appendChild(bar);
   }
}