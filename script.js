function shakeMagic8Ball(){
    const question = prompt('Ask the Magic 8-Ball a question:');
    if(question === null){
        document.getElementById('response-text').innerText = 'U MUST ASK A QUESTION!'
        document.getElementById('response-text').classList ='text-danger'
        document.getElementById('response-image').src ='#BAD/BROKENIMAGE' //fix this later
    }

    if(!question.trim()){
        alert('Please enter a valid question')
        return
    }
}