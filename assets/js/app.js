
  var img = document.getElementsByClassName('animal');


  select.onchange = function(){
    if(select.value =="original") {
      for (var i = 0; i < img.length; i++) {
        changeColorImg("original")
      }
    } if(select.value =="blanco-negro"){
      for (var i = 0; i < img.length; i++) {
        changeColorImg("blanco-negro");

      }
    } if(select.value =="invertir-colores") {
        for (var i = 0; i < img.length; i++) {
          changeColorImg("invertir-colores");
        }
    } if (select.value =="sepia") {
          for (var i = 0; i < img.length; i++) {
            changeColorImg("sepia");
          }
  }

};

function changeColorImg(clase){
  for (var i = 0; i < img.length; i++) {
    img[i].setAttribute("class","animal"+" "+clase);
  }
}
