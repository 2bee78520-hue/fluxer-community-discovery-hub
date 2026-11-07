
const communities = [
  {
    name: "Tomb of the Mask Community",
    category: "Gaming",
    description: "Explore, socialize and enjoy Tomb of the Mask.",
    invite: ""
  },
  {
    name: "Fluxerize",
    category: "Social",
    description: "A community for everyone.",
    invite: ""
  },
  {
    name: "Advertise Here",
    category: "Social",
    description: "Discover and promote communities.",
    invite: ""
  }
];

const list = document.getElementById("communityList");
const search = document.getElementById("search");

function displayCommunities(query = "") {
  const filtered = communities.filter(c =>
    `${c.name} ${c.category} ${c.description}`
      .toLowerCase().includes(query.toLowerCase())
  );

  list.innerHTML = "";

  if (filtered.length === 0) {
    list.innerHTML = "<p>No communities found.</p>";
    return;
  }

  filtered.forEach(c => {
    const card = document.createElement("div");
    card.className = "card";

    const title = document.createElement("h3");
    title.textContent = c.name;

    const category = document.createElement("p");
    category.textContent = "📂 " + c.category;

    const description = document.createElement("p");
    description.textContent = c.description;

    card.append(title, category, description);
    list.appendChild(card);
  });
}

search.addEventListener("input", e => {
  displayCommunities(e.target.value);
});

displayCommunities();
