function shakeMagic8Ball(){
    const question=prompt(`Ask The Magic 8-Ball A Question`)
    if(question===null){
document.getElementById(`response-text`).innerText=`ASL A QUESTION DAWG!!`
document.getElementById(`response-text`).classList= `text-danger`
    }
    }
