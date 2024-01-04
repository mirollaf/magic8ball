function shakeMagic8Ball() {
    const question = prompt('Ask the Magic 8-Ball a question:');
    if (question === null) {
        document.getElementById('response-text').innerText = 'ASK A QUESTION BUD!'
        document.getElementById('response-text').classList = 'text-danger'
        document.getElementById('response-image').src = '#BAD/BROKENIMAGE' //FIX THIS
        return
    }

    if (!question.trim()) {
        alert('Please enter a valid question!')
        return
    }

    const randomNumber = Math.floor(Math.random() * 8);
    let answer, image, color;

    switch (randomNumber) {
        case 0:
            answer = "YUP";
            image = "yes.jpg" ;
            color = "text-success";
            break;
        case 1:
            answer = "NOPE!";
            image = "thumbs-down.webp";
            color = "text-danger";
            break;
        case 2:
            answer = "I'M BUSY COME BACK LATER";
            image = "notice_im_busy.jpg" ;
            color = "text-secondary";
            break;
        case 3:
            answer = "MAYBE";
            image = "maybe.jpg",
            color = "text-warning";
            break;
        case 4:
            answer = "I CANNOT PREDICT THAT RIGHT NOW";
            image = "cant predict.jpg";
            color = "text-muted";
            break;
        case 5:
            answer = "HA YOU WISH";
            image = "thats-some-funny.gif";
            color = "text-danger";
            break;
        case 6:
            answer = "PROBABLY PRETTY LIKELY";
            image = "very-likely-story.jpg";
            color = "text-success";
            break;
        case 7:
            answer = "LOOKING ROUGH, DREAM BIG PRINCESS";
            image = "DreamonprincessFeatured.avif";//change this!!;
            color = "text-danger";
            break;
        default:
            break;
    }

const responseText = document.getElementById('response-text');
responseText.innerText = answer;
responseText.classList = `display-4 ${color}`;
document.getElementById('response-image').src = image;

}