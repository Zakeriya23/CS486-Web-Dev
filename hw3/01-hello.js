// Zakeriya Muhumed | CS463 | HW3/01-hello.js

document.addEventListener("DOMContentLoaded", function () {
  // Create a main element if not present
  let main = document.querySelector("main");
  if (!main) {
    main = document.createElement("main");
    document.body.appendChild(main);
  }

  // Create a section element
  let section = document.createElement("section");
  section.className = "container";
  main.appendChild(section);

  // Add a heading if not already present
  let h1 = document.querySelector("h1");
  if (!h1) {
    h1 = document.createElement("h1");
    h1.textContent = "About Me";
    main.prepend(h1);
  }
  section.appendChild(h1);

  // Create an img element
  let img = document.createElement("img");
  img.className = "img";
  img.src = "../images/Zakeriya.jpeg";
  img.alt = "Personal Photo";
  img.width = 200;
  img.id = "self";
  section.appendChild(img);

  // Create a paragraph element
  let p = document.createElement("p");
  p.className = "bio";
  p.textContent =
    "My name is Zakeriya Muhumed and I am taking CS463 to gain experience in Web Development. I am Senior going for Bachelor's Degree in Computer Science. My knowledge and skills in these areas equip me with the ability to make valuable contributions to the tech industry. I am constantly exploring and honing my abilities to stay ahead in this ever-evolving field.";
  section.appendChild(p);

  // Make the first sentence bold
  let sentences = p.textContent.split(". ");
  let firstSentenceSpan = document.createElement("span");
  firstSentenceSpan.className = "first-sentence";
  firstSentenceSpan.textContent = sentences[0] + ". ";
  p.textContent = ""; // Clear the paragraph text
  p.appendChild(firstSentenceSpan);
  p.appendChild(document.createTextNode(sentences.slice(1).join(". ")));
});
