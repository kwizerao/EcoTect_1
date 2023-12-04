function processDonation() {
    var amount = document.getElementById('amount').value;

    if (amount <= 0 || isNaN(amount)) {
        alert('Please enter a valid donation amount.');
    } else {
        var resultDiv = document.getElementById('donationResult');
        resultDiv.innerHTML = '<p>Thank you for your donation of $' + amount + '!</p>';
    }
}
