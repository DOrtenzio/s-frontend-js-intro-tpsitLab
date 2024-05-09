//Funzione 1 = Calcolatrice
function calcolatrice(){
    const casellaA=document.getElementById("A");
    const casellaB=document.getElementById("B");
    const segno=document.getElementById("segno").value;
    let n=parseFloat(casellaA.value);
    let n2=parseFloat(casellaB.value);
    if(testIntero){
        switch(segno){
            case "+":
                alert("Il risultato della somma dei due fattori è: "+(n+n2));
                break;
            case "-":
                alert("Il risultato della differenza fra i due fattori è: "+(n-n2));
                break;
            case "*":
                alert("Il risultato del prodotto dei due fattori è: "+(n*n2));
                break;
            case "/":
                if(n==0 && n2==0)
                    alert("Indeterminato");
                else if(n2==0)
                    alert("Impossibile");
                else
                    alert("Il risultato della divisione del fattore uno sul secondo fattore è: "+(n/n2));
                break;
        }
    }else{
        alert("Input non valido");
    } 
}
function cancella(){
    let text;
    if (confirm("Sei sicuro") == true) {
        text = "Alĕa iacta est";
        // Resetta i valori delle caselle di testo A e B
        document.getElementById("A").value = "";
        document.getElementById("B").value = "";
    } else {
        text = "Timor ad infirmos pertinet";
    }
    alert(text);
}
function testCampo(stringa, pattern) {
    return new RegExp(pattern).test(stringa);
}
function testIntero() {
    let testA=testCampo(document.getElementById("A").value,"^[0-9]+$");
    let testB=testCampo(document.getElementById("B").value,"^[0-9]+$");
    if (!testA || !testB)
        return false;
    else
        return true;
} 

//Funzione 2
function testRegex() {
    alert(testCampo(document.getElementById("String").value,document.getElementById("Regex").value));
} 
function cancella2(){
    let text;
    if (confirm("Sei sicuro") == true) {
        text = "Alĕa iacta est";
        // Resetta i valori delle caselle di testo A e B
        document.getElementById("String").value = "";
        document.getElementById("Regex").value = "";
    } else {
        text = "Timor ad infirmos pertinet";
    }
    alert(text);
}
