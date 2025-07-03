
document.getElementById('crash-btn').addEventListener('click', () => {
    const number = document.getElementById('number').value; 
    const resultDiv = document.getElementById('result');
    if (number) {
        resultDiv.innerText = `USER "${number}" HAS BEEN CRASHED`;
    } else {
        resultDiv.innerText = 'Please enter a phone number or IP address';
    }
});
