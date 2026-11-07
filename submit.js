
const form = document.getElementById("communityForm");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const submission = {
    name: document.getElementById("communityName").value.trim(),
    category: document.getElementById("communityCategory").value,
    description: document.getElementById("communityDescription").value.trim(),
    invite: document.getElementById("communityInvite").value.trim()
  };

  if (!submission.name || !submission.description || !submission.invite) {
    alert("Please complete all fields.");
    return;
  }

  const submissions = JSON.parse(
    localStorage.getItem("communitySubmissions") || "[]"
  );

  submissions.push(submission);
  localStorage.setItem("communitySubmissions", JSON.stringify(submissions));

  alert("Community submission saved on this device!");
  form.reset();
});
