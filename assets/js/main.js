
/* javascript */

function resetViewbox(e){
   box.setAttribute("viewBox","0 0 "+e[0].contentBoxSize[0].inlineSize+" "+e[0].contentBoxSize[0].blockSize)
   //console.log("New viewBox: ", box.getAttribute("viewBox"))
}

new ResizeObserver(resetViewbox).observe(svgContent)
