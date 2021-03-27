const button = document.getElementById("useSymbol");
button.checked = true;
function generate(){
  const length = Number(document.getElementById("length").value);
  if(Number.isNaN(length)) length = random(8,31);
  let options = {
    useSymbol: button.checked
  };
  let chars = genpass(length, options);
  document.getElementById("output").innerHTML = String(chars);
  let dofor = 0;
  for(; /^[A-Z0-9\-\+\@\%\!]/.test(chars);){
    dofor += 1;
    chars = chars.slice(1);
  }
  chars += genpass(dofor, options);
  document.getElementById("output").innerHTML = String(chars);
};
function genpass(length, options){
  let pattern;
  options.useSymbol ? pattern = /[a-zA-Z0-9\-\+\@\%\!]/ : pattern = /[a-zA-Z0-9]/;
  return Array.apply(null, {'length': length})
  .map(function(){
    var result;
    while(true) {
      result = String.fromCharCode(Math.floor(Math.random()*256));
      if(pattern.test(result)){
        return result;
      }
    }        
  }, this)
  .join('');  
};

function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
