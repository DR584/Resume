<script>
function opencity(evt,cityName){
  var i, tabcontent, tablinks;
  tabcontents = doument.getElementsByClassName("tabcontent");
  for(i=0; i < tabcontent.length; i++){
    tabcontent[i].style.display="none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for(i=0 ; i <tablinks.length; i++){
    tablinks[i].className =tablinks[i].className.replace("
    active","");
  }
  document.getElementById(cityName).style.display="block";
  evt.currentTarget. ClassName += "active";

}
document.getElementById("defaultOpen").click();
</script>
