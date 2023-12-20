function shakeMagic8Ball() {
    const question = prompt('Ask the Magic 8-Ball a question:');
    //if prompt is cancelled or has no value, what happens?
    if (question === null) {
        document.getElementById('response-text').innerText = 'U MUST ASK A QUESTION!'
        document.getElementById('response-text').classList = 'text-danger'
        document.getElementById('response-image').src = 'quote.png' //fix this later
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
            image = "Yess.png"
            color ="text-success"
            break
        case 1:
            answer="No"
            image = "Noo.png"
            color ="text-secondary"
            break
        case 2:
            answer="Definetly Not!"
            image = "Definetly Not!.png"
            color ="text-secondary"
            break
        case 3:
            answer="Maybe"
            image = "maybe.png"
            color ="text-warning"
            break
        case 4:
            answer="Ask Again"
            image = "AskAgain.png"
            color ="text-muted"
            break
        case 5:
            answer="Better Not Tell You Now"
            image = "BetterNotTell.png"
            color ="text-danger"
            break
        case 6:
            answer="Most Likely"
            image = "MostLikely.png"
            color ="text-primary"
            break
        case 7:    
            answer="Signs Point to Yes"
            image = "Point to yes.png"
            color ="text-danger"
            break
    }
    
const responseText = document.getElementById('response-text');
responseText.innerText = answer;
responseText.classList = `display-4 ${color}`
document.getElementById('response-image').src= image;



}
