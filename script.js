//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

const primetext = document.querySelector(".inputs");
const showtext = document.querySelector(".explains");
const EncButton = document.getElementById('.enc');
const DsEncButton = document.getElementById('.desenc');
const CpButton = document.getElementById('.copy');

function Call(){
    EncButton.addEventListener('click',function Encrypt(text){
        let cod = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
        text = text.toLowerCase();
    
        for(let i=0;i<cod.length;i++){
            if(text.includes(cod[i][0])){
                text=text.replaceAll(cod[i][0],cod[i][1]);
            }
        }
        return text;
    });
}



function Decrypt(text){
    let cod = [["enter","e"],["imes","i"],["ai","a"],["o","ober"],["u","ufat"]];
    text = text.toLowerCase();

    for(let i=0;i<cod.length;i++){
        if(text.includes(cod[i][0])){
            text=text.replaceAll(cod[i][0],cod[i][1]);
        }
    }
    return text;
}

function Copy(){
    showtext.select();
    navigator.clipboard.writeText(showtext.value);
}