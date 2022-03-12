<script>
function  myFunction(RestBtn) {
document.getElementById("box").style = "background-color:orange; height:150px; width:150px; margin:25px"
    
}

document.getElementById("BlueBtn").addEventListener("click", function(){
document.getElementById("box").style = "background-color:Blue; height:150px; width:150px; margin:25px"
}
);    

document.getElementById("FadeBtn").addEventListener("click", function(){
document.getElementById("box").style = "opacity:0; height:150px; width:150px; margin:25px" 
}

);

document.getElementById("GrowBtn").addEventListener("click", function(){
document.getElementById("box").style= "background-color:orange; height:300px; width:150px; margin:25px"
}
);    

</script>
