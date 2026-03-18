document.getElementById("feedbackForm").addEventListener("submit", function(e) {

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let department = document.getElementById("department").value;
    let feedback = document.getElementById("feedback").value.trim();
    let gender = document.querySelector('input[name="gender"]:checked');

    let errorMsg = document.getElementById("errorMsg");
    let successMsg = document.getElementById("successMsg");

    errorMsg.innerText = "";
    successMsg.innerText = "";

    // Validation
    if (name === "") {
        errorMsg.innerText = "Name cannot be empty";
        e.preventDefault();
        return;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        errorMsg.innerText = "Invalid Email format";
        e.preventDefault();
        return;
    }

    let mobilePattern = /^[0-9]{10}$/;
    if (!mobile.match(mobilePattern)) {
        errorMsg.innerText = "Invalid Mobile Number";
        e.preventDefault();
        return;
    }

    if (!gender) {
        errorMsg.innerText = "Please select gender";
        e.preventDefault();
        return;
    }

    if (department === "") {
        errorMsg.innerText = "Please select department";
        e.preventDefault();
        return;
    }

    let wordCount = feedback.split(" ").filter(word => word !== "").length;
    if (wordCount < 10) {
        errorMsg.innerText = "Feedback must contain at least 10 words";
        e.preventDefault();
        return;
    }

    successMsg.innerText = "Form submitted successfully!";
    e.preventDefault(); // prevent actual submit (for demo)
});