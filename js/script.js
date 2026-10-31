
// Portfolio Website JavaScript

console.log("Welcome to Al Amin Hossain's Portfolio!");

// Current year in footer
const footer = document.querySelector("footer p");

if (footer) {
    footer.innerHTML =
        `© ${new Date().getFullYear()} Al Amin Hossain. All Rights Reserved.`;
}

/* Contact Form */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value;

        const recipient = "34alamin0175@gmail.com";

        const emailSubject = encodeURIComponent(subject);

        const emailBody = encodeURIComponent(
            "Name: " + name + "\n" +
            "Email: " + email + "\n\n" +
            "Message:\n" + message
        );

        const mailtoLink =
            "mailto:" + recipient +
            "?subject=" + emailSubject +
            "&body=" + emailBody;

        document.getElementById("formMessage").textContent =
            "Opening your email application...";

        window.location.href = mailtoLink;

    });

}
