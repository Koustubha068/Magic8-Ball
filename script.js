function shakeMagic8Ball() {
    const question = prompt('Ask the Magic 8-Ball a question:');
    //if prompt is cancelled or has no value, what happens?
    if (question === null) {
        document.getElementById('response-text').innerText = 'U MUST ASK A QUESTION!'
        document.getElementById('response-text').classList = 'text-danger'
        document.getElementById('response-image').src = '#BAD/BROKENIMAGE' //fix this later
        return
    }

    if (!question.trim()) {
        alert('Please enter a valid question')
        return
    }
    const randomNumber = Math.floor(Math.random()*8);
    let answer,image,color;

    switch(randomNumber){
        case 0:
            answer="Yes"
            image = "yes-image.jpg"//change this****
            color ="text-success"
            break
        case 1:
            answer="No"
            image = "no-image.jpg"//change this****
            color ="text-secondary"
            break
        case 3:
            answer="Maybe"
            image = "Maybe-imgage.jpg"//change this****
            color ="text-warning"
            break
        case 4:
            answer="Ask Again"
            image = "Ask-Again-image.jpg"//change this****
            color ="text-muted"
            break
        case 5:
            answer="Don't Count on It"
            image = "Don't-count-on-it-image.jpg"//change this****
            color ="text-danger"
            break
        case 6:
            answer="Most Likely"
            image = "Most-Likely-image.jpg"//change this****
            color ="text-primary"
            break
        case 7:    
            answer="Definitely NOT!"
            image = "Definetly-not-image.jpg"//change this****
            color ="text-danger"
            break
    }
    
const responseText = document.getElementById('response-text');
responseText.innerText = answer;
responseText.classList = `display-4 ${color}`
document.getElementById('response-image').src= image;



}
