document.addEventListener("DOMContentLoaded", function() {
    const surveyForm = document.getElementById("surveyForm");

    surveyForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const formData = new FormData(surveyForm);

        // Create an object to hold the form data
        const formDataObject = {};
        formData.forEach((value, key) => {
            formDataObject[key] = value;
        });

        // Store the form data in local storage
        localStorage.setItem("surveyData", JSON.stringify(formDataObject));

        // Optionally, display a confirmation message or redirect to another page
        alert("Survey data saved locally.");

        // You can also clear the form if needed
        surveyForm.reset();
    });
});
