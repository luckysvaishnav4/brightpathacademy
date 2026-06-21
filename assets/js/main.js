"use strict";

$(function () {
  var savedTheme = localStorage.getItem("school-theme") || "light";
  $("html").attr("data-theme", savedTheme);
  updateThemeIcon(savedTheme);

  if (window.AOS) {
    AOS.init({ duration: 700, once: true, offset: 80 });
  }

  $(".theme-toggle").on("click", function () {
    var nextTheme = $("html").attr("data-theme") === "dark" ? "light" : "dark";
    $("html").attr("data-theme", nextTheme);
    localStorage.setItem("school-theme", nextTheme);
    updateThemeIcon(nextTheme);
  });

  $(window).on("scroll", function () {
    $(".back-to-top").toggleClass("show", $(this).scrollTop() > 420);
  });

  $(".back-to-top").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 450);
  });

  $(".needs-validation").on("submit", function (event) {
    event.preventDefault();

    if (!this.checkValidity()) {
      event.stopPropagation();
      $(this).addClass("was-validated");
      return;
    }

    this.reset();
    $(this).removeClass("was-validated");
    showToast("Thank you. Your request has been received.");
  });

  var current = window.location.pathname.split("/").pop() || "index.html";
  $(".nav-link").each(function () {
    $(this).toggleClass("active", $(this).attr("href") === current);
  });
});

function updateThemeIcon(theme) {
  $(".theme-toggle i").attr("class", theme === "dark" ? "bi bi-sun" : "bi bi-moon-stars");
}

function showToast(message) {
  var toast = $("<div>").addClass("floating-toast").text(message);
  $("body").append(toast);
  setTimeout(function () { toast.addClass("show"); }, 20);
  setTimeout(function () {
    toast.removeClass("show");
    setTimeout(function () { toast.remove(); }, 300);
  }, 2600);
}
