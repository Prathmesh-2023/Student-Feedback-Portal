const feedbackForm = document.getElementById("feedbackForm");
const feedbackInput = document.getElementById("feedback");
const wordCounter = document.getElementById("wordCounter");
const errorMsg = document.getElementById("errorMsg");
const successMsg = document.getElementById("successMsg");

function countWords(text) {
    if (!text.trim()) {
        return 0;
    }
    return text.trim().split(/\s+/).length;
}

function clearMessages() {
    errorMsg.innerText = "";
    successMsg.innerText = "";
}

function updateWordCounter() {
    const words = countWords(feedbackInput.value);
    wordCounter.innerText = `Word count: ${words}`;
}

feedbackInput.addEventListener("input", updateWordCounter);

feedbackForm.addEventListener("input", clearMessages);
feedbackForm.addEventListener("change", clearMessages);

feedbackForm.addEventListener("reset", function () {
    window.setTimeout(function () {
        clearMessages();
        updateWordCounter();
    }, 0);
});

feedbackForm.addEventListener("submit", function (e) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const department = document.getElementById("department").value;
    const feedback = feedbackInput.value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');

    clearMessages();

    if (!name) {
        errorMsg.innerText = "Name cannot be empty.";
        e.preventDefault();
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailPattern.test(email)) {
        errorMsg.innerText = "Invalid email format.";
        e.preventDefault();
        return;
    }

    const mobileDigits = mobile.replace(/\D/g, "");
    if (!/^\d{10}$/.test(mobileDigits)) {
        errorMsg.innerText = "Mobile number must contain exactly 10 digits.";
        e.preventDefault();
        return;
    }

    if (!gender) {
        errorMsg.innerText = "Please select gender.";
        e.preventDefault();
        return;
    }

    if (!department) {
        errorMsg.innerText = "Please select department.";
        e.preventDefault();
        return;
    }

    if (countWords(feedback) < 10) {
        errorMsg.innerText = "Feedback must contain at least 10 words.";
        e.preventDefault();
        return;
    }

    successMsg.innerText = "Form submitted successfully!";
    e.preventDefault();
});

updateWordCounter();