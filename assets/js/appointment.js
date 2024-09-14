document.addEventListener("DOMContentLoaded", function () {
    const service = document.getElementById("service");
    const dateTime = document.getElementById("dateTime");
    const basicDetails = document.getElementById("basicDetails");
    const summary = document.getElementById("summary");
    const selectService = document.getElementById("selectService");
    const nextBtn = document.getElementById("next");
    const requiredNote = document.getElementById("requiredNote");
    const slots = document.querySelectorAll(".slot");
    const goBackBtns = document.querySelectorAll("#goBack");
    const telInput = document.getElementById("tel");

    let slotSelected = false;

    // Initially display service section only
    function showServiceSection() {
        service.style.display = "block";
        dateTime.style.display = "none";
        basicDetails.style.display = "none";
        summary.style.display = "none";
    }

    showServiceSection();

    // Function to hide the required note after 5 seconds
    function hideRequiredNote() {
        setTimeout(() => {
            requiredNote.style.display = "none";
        }, 5000);
    }

    // Show Date & Time section when a service is selected
    selectService.addEventListener("click", function () {
        service.style.display = "none";
        dateTime.style.display = "block";
        basicDetails.style.display = "none";
        summary.style.display = "none";
    });

    // Display requiredNote if no service selected
    nextBtn.addEventListener("click", function () {
        if (!slotSelected) {
            requiredNote.innerHTML = "Please select a time slot to proceed with the booking.";
            requiredNote.style.color = "red";
            requiredNote.style.display = "block";
            hideRequiredNote();
        }
    });

    // Slot selection logic
    slots.forEach(function (slot) {
        slot.addEventListener("click", function () {
            slotSelected = true;
            dateTime.style.display = "none";
            basicDetails.style.display = "block";
            summary.style.display = "none";
            service.style.display = "none";
        });
    });

    // Go back button logic
    goBackBtns.forEach(function (goBack) {
        goBack.addEventListener("click", function () {
            if (basicDetails.style.display === "block") {
                dateTime.style.display = "block";
                basicDetails.style.display = "none";
                summary.style.display = "none";
            } else if (summary.style.display === "block") {
                basicDetails.style.display = "block";
                dateTime.style.display = "none";
                summary.style.display = "none";
            } else {
                showServiceSection();
            }
        });
    });

    // Proceed to summary or show error in basicDetails
    nextBtn.addEventListener("click", function () {
        if (basicDetails.style.display === "block") {
            const telValue = telInput.value.trim();
            if (telValue !== "" && /^\d{10,15}$/.test(telValue)) { // Validate phone number
                basicDetails.style.display = "none";
                summary.style.display = "block";
            } else {
                requiredNote.innerHTML = "Please enter a valid phone number.";
                requiredNote.style.color = "red";
                requiredNote.style.display = "block";
                hideRequiredNote();
            }
        }
    });
});
