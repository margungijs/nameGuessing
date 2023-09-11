document.getElementById('submit').addEventListener('click', () => {
    let name = document.getElementById('name').value;
    let surname = document.getElementById('surname').value;
    let guessName = document.createElement('h1');
    guessName.textContent = ""+name+" "+surname+"";
    document.body.appendChild(guessName);
});


