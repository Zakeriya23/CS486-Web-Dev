document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    const formData = new FormData(form);
    const formObject = {};

    // Check for empty fields and gather data
    let hasEmptyField = false;

    formData.forEach((value, key) => {
      if (!value.trim()) {
        hasEmptyField = true;
      }
      formObject[key] = value;
    });

    if (hasEmptyField) {
      alert("Please fill in all required fields before submitting the form.");
      return;
    }

    console.log("Form Data Submitted:", formObject);
    alert("Form submitted successfully! Check the console for details.");
  });
});
