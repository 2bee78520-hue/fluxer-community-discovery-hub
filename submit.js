
const form = document.getElementById("communityForm");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const submitButton = form.querySelector('button[type="submit"]');
  submitButton.disabled = true;

  const submission = {
    name: document.getElementById("communityName").value.trim(),
    category: document.getElementById("communityCategory").value,
    description: document.getElementById("communityDescription").value.trim(),
    invite_url: document.getElementById("communityInvite").value.trim(),
    status: "pending"
  };

  try {
    const { error } = await supabaseClient
      .from("communities")
      .insert([submission]);

    if (error) throw error;

    alert("Community submitted successfully! Awaiting approval.");
    form.reset();

  } catch (error) {
    console.error(error);
    alert("Submission failed. Please try again.");
  } finally {
    submitButton.disabled = false;
  }
});
