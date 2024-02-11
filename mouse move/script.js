var elem=document.querySelectorAll(".elem")
// var elemimg=document.querySelector("#elem1 img")

// elem1.addEventListener("mousemove",function(good){
//        elemimg.style.left=good.x+"px"
//        elemimg.style.top=good.y+"px"
// })
// elem1.addEventListener("mouseenter",function(good){
//        elemimg.style.opacity=1
//  })
//  elem1.addEventListener("mouseleave",function(good){
//         elemimg.style.opacity=0
//   })
elem.forEach(function(val){
        // console.log(val.childNodes[3]) // point img
        val.addEventListener("mouseenter",function(){
                val.childNodes[3].style.opacity="1"
        })
        val.addEventListener("mouseleave",function(){
                val.childNodes[3].style.opacity="0"
        })
        val.addEventListener("mousemove",function(dets){
                val.childNodes[3].style.left=dets.x+"px"
              
        })
       

})