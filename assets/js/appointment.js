// --------------------------------Appointment-Sesign-Scripts-----------------------------

// Function to handle the active state and display block/none
function showSection(activeId, sectionId) {
    // Elements IDs
    const sections = ['service', 'dateTime', 'basicDetails', 'summary'];
    const items = ['serviceItem', 'dateItem', 'basicItem', 'summaryItem'];

    // Loop through all sections and items
    sections.forEach(function(id) {
        document.getElementById(id).style.display = id === sectionId ? 'block' : 'none';
    });

    items.forEach(function(id) {
        document.getElementById(id).classList.toggle('active', id === activeId);
    });
}

// Event listeners for each clickable item
document.getElementById('serviceItem').addEventListener('click', function() {
    showSection('serviceItem', 'service');
});

document.getElementById('dateItem').addEventListener('click', function() {
    showSection('dateItem', 'dateTime');
});

document.getElementById('basicItem').addEventListener('click', function() {
    showSection('basicItem', 'basicDetails');
});

document.getElementById('summaryItem').addEventListener('click', function() {
    showSection('summaryItem', 'summary');
});

// Initially show the service section and set it active
showSection('serviceItem', 'service');


// ------------------------------functionality------------------------


    // Select the serviceRequiredNote element
    const serviceRequiredNote = document.getElementById('serviceRequiredNote');
    
    // Set the innerHTML and the color to red
    serviceRequiredNote.innerHTML = "Please select any service to book an appointment";
    serviceRequiredNote.style.color = 'red';

    // Ensure the message is visible
    serviceRequiredNote.style.display = 'block';

    // Hide the message automatically after 5 seconds (5000ms)
    // setTimeout(function() {
    //     serviceRequiredNote.style.display = 'none';
    // }, 5000);

























// document.addEventListener("DOMContentLoaded", function () {
//     const selectService = document.getElementById("selectService");
//     const serviceRequiredNote = document.getElementById("serviceRequiredNote");
//     const serviceSection = document.getElementById("service");
//     const dateTimeSection = document.getElementById("dateTime");
//     const basicDetailsSection = document.getElementById("basicDetails");
//     const summarySection = document.getElementById("summary");

//     function serviceNextBtn () {
//         serviceRequiredNote.innerHTML = "Please select any service to book an appointment";
//             serviceRequiredNote.style.color = "red";
//             serviceRequiredNote.style.display = "block";

//             // Hide the required note after 5 seconds
//             setTimeout(() => {
//                 serviceRequiredNote.style.display = "none";
//             }, 5000);
//     }


// });







// document.addEventListener("DOMContentLoaded", function () {
//     const nextButton = document.getElementById("next");
//     const selectService = document.getElementById("selectService");
//     const requiredNote = document.querySelector("#service #requiredNote");
//     const serviceSection = document.getElementById("service");
//     const dateTimeSection = document.getElementById("dateTime");
//     const basicDetailsSection = document.getElementById("basicDetails");
//     const summarySection = document.getElementById("summary");
//     const serviceDetails = document.querySelector(".service-details");

//     // Initially hide the dateTime section and others
//     dateTimeSection.style.display = "none";
//     if (basicDetailsSection) basicDetailsSection.style.display = "none";
//     if (summarySection) summarySection.style.display = "none";

//     // Handle 'next' button click
//     nextButton.addEventListener("click", function (e) {
//         e.preventDefault();

//         // Check if selectService was clicked (service not selected)
//         if (!selectService.classList.contains('service-selected')) {
//             // Show the required note message
//             requiredNote.innerHTML = "Please select any service to book an appointment";
//             requiredNote.style.color = "red";
//             requiredNote.style.display = "block";

//             // Hide the required note after 5 seconds
//             setTimeout(() => {
//                 requiredNote.style.display = "none";
//             }, 5000);
//         }
//     });

//     // Add event listener for selecting the service
//     selectService.addEventListener("click", function () {
//         // Add a custom class when the service is selected
//         selectService.classList.add("service-selected");

//         // Change the border color of the service-details class to #12D488
//         serviceDetails.style.borderColor = "#12D488";

//         // Show the dateTime section
//         dateTimeSection.style.display = "block";

//         // Hide other sections
//         serviceSection.style.display = "none";
//         if (basicDetailsSection) basicDetailsSection.style.display = "none";
//         if (summarySection) summarySection.style.display = "none";
//     });
// });






















// document.addEventListener("DOMContentLoaded", function () {
//     const service = document.getElementById("service");
//     const dateTime = document.getElementById("dateTime");
//     const basicDetails = document.getElementById("basicDetails");
//     const summary = document.getElementById("summary");
//     const selectService = document.getElementById("selectService");
//     const nextBtn = document.getElementById("next");
//     const requiredNote = document.getElementById("requiredNote");
//     const slots = document.querySelectorAll(".slot");
//     const goBackBtns = document.querySelectorAll("#goBack");
//     const telInput = document.getElementById("tel");

//     let slotSelected = false;

//     // Initially display service section only
//     function showServiceSection() {
//         service.style.display = "block";
//         dateTime.style.display = "none";
//         basicDetails.style.display = "none";
//         summary.style.display = "none";
//     }

//     showServiceSection();

//     // Function to hide the required note after 5 seconds
//     function hideRequiredNote() {
//         setTimeout(() => {
//             requiredNote.style.display = "none";
//         }, 5000);
//     }

//     // Show Date & Time section when a service is selected
//     selectService.addEventListener("click", function () {
//         service.style.display = "none";
//         dateTime.style.display = "block";
//         basicDetails.style.display = "none";
//         summary.style.display = "none";
//     });

//     // Display requiredNote if no service selected
//     nextBtn.addEventListener("click", function () {
//         if (!slotSelected) {
//             requiredNote.innerHTML = "Please select a time slot to proceed with the booking.";
//             requiredNote.style.color = "red";
//             requiredNote.style.display = "block";
//             hideRequiredNote();
//         }
//     });

//     // Slot selection logic
//     slots.forEach(function (slot) {
//         slot.addEventListener("click", function () {
//             slotSelected = true;
//             dateTime.style.display = "none";
//             basicDetails.style.display = "block";
//             summary.style.display = "none";
//             service.style.display = "none";
//         });
//     });

//     // Go back button logic
//     goBackBtns.forEach(function (goBack) {
//         goBack.addEventListener("click", function () {
//             if (basicDetails.style.display === "block") {
//                 dateTime.style.display = "block";
//                 basicDetails.style.display = "none";
//                 summary.style.display = "none";
//             } else if (summary.style.display === "block") {
//                 basicDetails.style.display = "block";
//                 dateTime.style.display = "none";
//                 summary.style.display = "none";
//             } else {
//                 showServiceSection();
//             }
//         });
//     });

//     // Proceed to summary or show error in basicDetails
//     nextBtn.addEventListener("click", function () {
//         if (basicDetails.style.display === "block") {
//             const telValue = telInput.value.trim();
//             if (telValue !== "" && /^\d{10,15}$/.test(telValue)) { // Validate phone number
//                 basicDetails.style.display = "none";
//                 summary.style.display = "block";
//             } else {
//                 requiredNote.innerHTML = "Please enter a valid phone number.";
//                 requiredNote.style.color = "red";
//                 requiredNote.style.display = "block";
//                 hideRequiredNote();
//             }
//         }
//     });
// });



// document.addEventListener('DOMContentLoaded', () => {
//     const serviceSection = document.getElementById('service');
//     const selectService = document.getElementById('selectService');
//     const dateTimeSection = document.getElementById('dateTime');
//     const basicDetailsSection = document.getElementById('basicDetails');
//     const summarySection = document.getElementById('summary');
//     const requiredNote = document.getElementById('requiredNote');
//     const nextService = document.getElementById('next');
//     const goBackDateTime = document.getElementById('goBack');
//     const timeSlots = document.querySelectorAll('.slot');
//     let selectedSlot = null;

//     // Helper function to hide or show sections
//     const toggleDisplay = (sectionToShow) => {
//         serviceSection.style.display = 'none';
//         dateTimeSection.style.display = 'none';
//         basicDetailsSection.style.display = 'none';
//         summarySection.style.display = 'none';
//         sectionToShow.style.display = 'block';
//     };

//     // Hide required note after 5 seconds
//     const hideRequiredNote = () => {
//         setTimeout(() => {
//             requiredNote.style.display = 'none';
//         }, 5000);
//     };

//     // When "selectService" is clicked, show Date & Time section
//     selectService.addEventListener('click', () => {
//         toggleDisplay(dateTimeSection);
//     });

//     // When "Next" in the service section is clicked
//     nextService.addEventListener('click', (event) => {
//         if (!selectedSlot) {
//             requiredNote.innerHTML = "Please select any service to book an appointment";
//             requiredNote.style.color = "red";
//             requiredNote.style.display = "block";
//             hideRequiredNote();
//         }
//     });

//     // When a time slot is clicked, select the slot and show Basic Details section
//     timeSlots.forEach(slot => {
//         slot.addEventListener('click', () => {
//             selectedSlot = slot; // Store the selected slot
//             toggleDisplay(basicDetailsSection);
//         });
//     });

//     // When "goBack" in the Date & Time section is clicked, show Select Service
//     goBackDateTime.addEventListener('click', () => {
//         toggleDisplay(serviceSection);
//     });

//     // When "Next" in the Date & Time section is clicked
//     document.querySelector('#dateTime #next').addEventListener('click', () => {
//         if (!selectedSlot) {
//             requiredNote.innerHTML = "Please select a time slot to proceed with the booking.";
//             requiredNote.style.color = "red";
//             requiredNote.style.display = "block";
//             hideRequiredNote();
//         } else {
//             toggleDisplay(basicDetailsSection);
//         }
//     });

//     // When "Next" in the Basic Details section is clicked
//     document.querySelector('#basicDetails #next').addEventListener('click', () => {
//         const telInput = document.getElementById('tel').value;
//         const telPattern = /^[+]?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
        
//         if (telInput && telPattern.test(telInput)) {
//             toggleDisplay(summarySection);
//         } else {
//             requiredNote.innerHTML = "Please enter a valid telephone number.";
//             requiredNote.style.color = "red";
//             requiredNote.style.display = "block";
//             hideRequiredNote();
//         }
//     });

//     // When "goBack" in the Basic Details section is clicked, go back to Date & Time
//     document.querySelector('#basicDetails #goBack').addEventListener('click', () => {
//         toggleDisplay(dateTimeSection);
//     });

//     // When "goBack" in the Summary section is clicked, go back to Basic Details
//     document.querySelector('#summary #goBack').addEventListener('click', () => {
//         toggleDisplay(basicDetailsSection);
//     });
// });


// ------------------------------new------------------------------

// // Get elements  
// const serviceElement = document.getElementById('service');  
// const dateTimeElement = document.getElementById('dateTime');  
// const basicDetailsElement = document.getElementById('basicDetails');  
// const summaryElement = document.getElementById('summary');  
// const selectServiceElement = document.getElementById('selectService');  
// const nextElement = document.getElementById('next');  
// const goBackElement = document.getElementById('goBack');  
// const requiredNoteElement = document.getElementById('requiredNote');  
// const slotElements = document.querySelectorAll('.slot');  
// const telElement = document.getElementById('tel');  
  
// // Initial state  
// serviceElement.style.display = 'block';  
// dateTimeElement.style.display = 'none';  
// basicDetailsElement.style.display = 'none';  
// summaryElement.style.display = 'none';  
  
// // Event listeners  
// selectServiceElement.addEventListener('click', () => {  
//   dateTimeElement.style.display = 'block';  
//   serviceElement.style.display = 'none';  
//   basicDetailsElement.style.display = 'none';  
//   summaryElement.style.display = 'none';  
// });  
  
// nextElement.addEventListener('click', () => {  
//   if (selectServiceElement.style.display === 'block') {  
//    requiredNoteElement.innerHTML = 'Please select any service to book an appointment';  
//    requiredNoteElement.style.color = 'red';  
//    requiredNoteElement.style.display = 'block';  
//    setTimeout(() => {  
//     requiredNoteElement.style.display = 'none';  
//    }, 5000);  
//   } else if (dateTimeElement.style.display === 'block') {  
//    if (!slotElements.some(slot => slot.classList.contains('selected'))) {  
//     requiredNoteElement.innerHTML = 'Please select a time slot to proceed with the booking.';  
//     requiredNoteElement.style.color = 'red';  
//     requiredNoteElement.style.display = 'block';  
//     setTimeout(() => {  
//       requiredNoteElement.style.display = 'none';  
//     }, 5000);  
//    } else {  
//     basicDetailsElement.style.display = 'block';  
//     dateTimeElement.style.display = 'none';  
//     serviceElement.style.display = 'none';  
//     summaryElement.style.display = 'none';  
//    }  
//   } else if (basicDetailsElement.style.display === 'block') {  
//    if (telElement.value.trim() !== '' && isValidTelNumber(telElement.value)) {  
//     summaryElement.style.display = 'block';  
//     basicDetailsElement.style.display = 'none';  
//     dateTimeElement.style.display = 'none';  
//     serviceElement.style.display = 'none';  
//    }  
//   }  
// });  
  
// goBackElement.addEventListener('click', () => {  
//   if (summaryElement.style.display === 'block') {  
//    basicDetailsElement.style.display = 'block';  
//    summaryElement.style.display = 'none';  
//    dateTimeElement.style.display = 'none';  
//    serviceElement.style.display = 'none';  
//   } else if (basicDetailsElement.style.display === 'block') {  
//    dateTimeElement.style.display = 'block';  
//    basicDetailsElement.style.display = 'none';  
//    serviceElement.style.display = 'none';  
//    summaryElement.style.display = 'none';  
//   } else if (dateTimeElement.style.display === 'block') {  
//    serviceElement.style.display = 'block';  
//    dateTimeElement.style.display = 'none';  
//    basicDetailsElement.style.display = 'none';  
//    summaryElement.style.display = 'none';  
//   }  
// });  
  
// slotElements.forEach(slot => {  
//   slot.addEventListener('click', () => {  
//    slot.classList.add('selected');  
//   });  
// });  
  
// // Helper function to validate tel number  
// function isValidTelNumber(telNumber) {  
//   // Add your tel number validation logic here  
//   return true; // For demo purposes, always return true  
// }