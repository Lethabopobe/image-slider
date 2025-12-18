let images=["1661520557100.jpg","meme1.jpg",
   "d7eb936a6df7bb401eb865b0627f61e1.jpg",
    "works-doesnt-work.jpg",
    "f7093817fbae3d37a1245315c9172f89.jpg", ]

 let index=0;
  document.getElementById("prev").addEventListener("click",function(){
    index=(index-1)% images.length
document.getElementById("img").src=images[index]
 }) 
  document.getElementById("next").addEventListener("click",function(){
  index=(index+1)% images.length
  document.getElementById("img").src=images[index]
 })

 function nextimage(){
     index=(index+1)% images.length
      document.getElementById("img").src=images[index]
 }
  setInterval(nextimage,2600);