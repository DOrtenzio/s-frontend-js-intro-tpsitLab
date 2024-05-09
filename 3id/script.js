function mostraContenutoCasellaA(){
    const casellaA=document.getElementById("A");
    let n=casellaA.value;
    alert(typeof (n));
    n=parseInt(n);
    alert(typeof (n));
    alert(n+1);
}
function testCampo(stringa, pattern) {

    return new RegExp(pattern).test(stringa);
  
}
alert(testCampo("ciao@ciao.it", "^[a-z0-9]+@[a-z0-9]+.(it|com|biz)$"));