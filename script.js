let uss_button = document.getElementById("useSymbol");
let mlt_button = document.getElementById("multi");
uss_button.checked = true;
function generate(){
  let length = Number(document.getElementById("length").value);
  if(length !== length || typeof length !== 'number'){
    length = random(8, 31);
    alert('パスワードの長さが無効ですお寿司');
  };
  let options = {
    useSymbol: uss_button.checked
  };
  let pow = 1;
  if(length >= 2**32 -1) {
    pow = Math.floor(length / 2**32 -1);
  };
  let chars;
  for(let i = 0; i > pow; i++){
    if(pow === 1) chars = genpass(length, options);
    else chars += genpass(2**32 -1, options);
  };
  document.getElementById("output").innerHTML = String(chars);
  let dofor = 0; 
  while(/^[A-Z0-9\-\+\@\%\!]/.test(chars)){
    dofor += 1;
    chars = chars.slice(1);
  }
  chars += genpass(dofor, options);
  document.getElementById("output").innerHTML = String(chars);
};
function genpass(length, options){
  let pattern;
  options.useSymbol ? pattern = /[a-zA-Z0-9\-\+\@\%\!]/ : pattern = /[a-zA-Z0-9]/;
  return Array(length)
  .fill(null)
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

function copypass(){
  const _textarea = document.getElementById("output");
  _textarea.select();
  document.execCommand("copy");
};

function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
