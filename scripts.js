document.getElementById('rental-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const carSelect = document.getElementById('car-select').value;
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;

    if (new Date(startDate) > new Date(endDate)) {
        alert("End date must be after the start date.");
        return;
    }

    const confirmationMessage = You have rented a ${carSelect} from ${startDate} to ${endDate}.;
    document.getElementById('confirmation').innerText = confirmationMessage;
});