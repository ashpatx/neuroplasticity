const accordions = document.querySelectorAll(".group");

accordions.forEach((accordion) => {
  const header = accordion.querySelector("button");
  const content = accordion.querySelector(".hidden");
  const icon = header.querySelector("i"); // Select the icon element within the button

  header.addEventListener("click", () => {
    const isExpanded = header.getAttribute("aria-expanded") === "true";
    header.setAttribute("aria-expanded", !isExpanded);
    content.classList.toggle("hidden");

    // Change the icon based on accordion state
    if (!isExpanded) {
      icon.classList.remove("ri-add-circle-line");
      icon.classList.add("ri-indeterminate-circle-line");
    } else {
      icon.classList.remove("ri-indeterminate-circle-line");
      icon.classList.add("ri-add-circle-line");
    }
  });
});
