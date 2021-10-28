const textArea = document.querySelector("textarea");
const encodeDecodeBtn = document.querySelector(".btn-encode");
const outputField = document.getElementById("string-decode");
const timesTo = document.getElementById("timesto");
const copyOutputBtn = document.querySelector(".btn-copy-output");
const activateEncodeBtn = document.querySelector('.encode');
const activateDecodeBtn = document.querySelector('.decode');

let enFlag = true;
let deFlag = false;
let loopFor = 1;

const base64Encode = () => {
    let encodedText = textArea.value;
    let enco;
    for(i = 0; i < loopFor; i++) {
        enco = encodedText;
        encodedText = btoa(enco);
    }
    outputField.value = encodedText;
};
const base64Decode = () => {
    let decodedText = textArea.value;
    let deco;
    for(i = 0; i < loopFor; i++) {
        deco = decodedText;
        decodedText = atob(deco);
    }
    outputField.value = decodedText;
};
const copyOutput = () => {
    outputField.focus();
    outputField.select();
    let copiedText = document.execCommand("copy");
};

const clearFields = () => {
    textArea.value = '';
    outputField.value = '';
    timesTo.value = '';
}
const changeToDecode = () => {
    encodeDecodeBtn.textContent = 'Decode';
    activateDecodeBtn.classList.replace('inactive','active');
    activateEncodeBtn.classList.replace('active','inactive');
    deFlag = true;
    enFlag = false;
    clearFields();
}
const changeToEncode = () => {
    encodeDecodeBtn.textContent = 'Encode';
    activateEncodeBtn.classList.replace('inactive','active');
    activateDecodeBtn.classList.replace('active','inactive');
    deFlag = false;
    enFlag = true;
    clearFields();
}

encodeDecodeBtn.addEventListener("click", () => {
    loopFor = timesTo.value;
    // console.log(isNaN(loopFor))
    if(loopFor === '') loopFor = 1;
    console.log(`loopfor = ${loopFor}`);
    if(enFlag === true) base64Encode();
    else base64Decode();
});

copyOutputBtn.addEventListener("click", copyOutput);
activateEncodeBtn.addEventListener("click", changeToEncode);
activateDecodeBtn.addEventListener("click", changeToDecode);