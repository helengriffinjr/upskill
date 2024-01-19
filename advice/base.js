const Advice_Slip_URL = 'https://api.adviceslip.com/advice';
const Advice_Text = document.getElementById('advice_text');
const Advice_ID = document.getElementById('advice_id');

fetch(Advice_Slip_URL).then(
    response => {
        if(!response.ok) {
            throw new Error('Oh oh! Something is wrong with the network response');
        }
        return response.json();
    })
    .then(
        data => {
            const id = data.slip.id;
            const text = data.slip.advice;
            console.log(id);
            console.log(text);
            console.log(data);
            Advice_Text.textContent = JSON.stringify(text, null, 2);
            Advice_ID.textContent = JSON.stringify(id, null, 2);
        })
    .catch(error => {
        console.error('Error: ', error);
});