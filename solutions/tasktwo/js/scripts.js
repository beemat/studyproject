function get_margin($elementClass, $outputElementId) {
  $element = document.getElementsByClassName($elementClass);
  $dest = document.getElementById($outputElementId);
  if($element && $dest){
     $dest.innerHtml = $element.style.margin;
     return 1;
  } else {
    return 0;
  }
}
