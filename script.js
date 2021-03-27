function generate(){
  const button = document.getElementsByName("useSymbol");
  const length = Number(document.getElementById("length").value);
  if(!Number.isInterger(length)) return alert('おっと！パスワードの長さが無効です… 数字を入力してください');
  if(!length) length = random(8,31);
  let options = {
    useSymbol: button[0].checked;
  };
  let chars = genpass(length, options);
  for(; /^[A-Z0-9\-\+\@\%\!]/.test(base);){
    chars = base.slice(1);
  }
  document.getElementById("output").innerHTML = base;
};
function genpass(length, options = { useSymbol: true }){
  var pattern;
  options.useSymbol ? pattern = /[a-zA-Z0-9]/ : pattern = /[a-zA-Z0-9\-\+\@\%\!]/;
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
