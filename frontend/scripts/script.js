const form = document.getElementById("waitlistForm");
const feedback = document.getElementById("formFeedback");

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const payload = Object.fromEntries(formData.entries());

  console.log("Préinscription SAFE :", payload);

  feedback.textContent =
    "Merci ! Vous êtes bien préinscrit. Vous serez informé du lancement de SAFE.";

  form.reset();
});