const primetext = document.querySelector('.inputs');
const showtext = document.querySelector('.explains');
const EncButton = document.getElementById('.enc');
const DsEncButton = document.getElementById('.desenc');
const CpButton = document.getElementById('.copy');
var intext;

function ECall(){
        intext = Encrypt(primetext.value);
        showtext.value = intext;
}

function DCall(){
    intext = Decrypt(primetext.value);
        showtext.value = intext;
}

function CCall(){
    showtext.select();
    navigator.clipboard.writeText(showtext.value);
}

function Encrypt(text){
        let cod = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
        text = text.toLowerCase();
    
        for(let i=0;i<cod.length;i++){
            if(text.includes(cod[i][0])){
                text=text.replaceAll(cod[i][0],cod[i][1]);
            }
        }
        return text;
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
