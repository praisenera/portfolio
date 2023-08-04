$(document).ready(function () {
  let currentUrlPage = window.location.href;

  $(".nav a").each(function () {
    let linkUrl = $(this).attr("href");

    if (currentPageUrl.indexOf(linkUrl) !== -1) {
      $(this).addClass("active");
    }
  });
});
