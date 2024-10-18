document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-button");
    const videoCards = document.querySelectorAll(".video-card");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const filterValue = button.getAttribute("data-filter");

            videoCards.forEach(card => {
                if (filterValue === "all" || card.dataset.category === filterValue) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });

    const emailForm = document.getElementById("email-collector");
    if (emailForm) {
        emailForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const email = emailForm.querySelector('input[type="email"]').value;

            console.log("Email collected: ", email);
            emailForm.reset();
            alert("Thank you for subscribing!");
        });
    }

    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const name = contactForm.name.value;
            const email = contactForm.email.value;
            const phone = contactForm.phone.value;
            const message = contactForm.message.value;

            console.log("Contact form submitted: ", { name, email, phone, message });
            contactForm.reset();
            alert("Your message has been sent!");
        });
    }
});
