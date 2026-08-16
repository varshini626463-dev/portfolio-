// Portfolio Website JavaScript

document.addEventListener("DOMContentLoaded", function () {

    console.log("Portfolio website loaded successfully!");

    // Navigation links
    const links = document.querySelectorAll("nav a");

    links.forEach(function (link) {

        link.addEventListener("click", function () {

            console.log("Navigation clicked");

        });

    });

});