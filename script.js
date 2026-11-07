
const list = document.getElementById("communityList");
const search = document.getElementById("search");

let communities = [];

async function loadCommunities() {
  list.textContent = "Loading communities...";

  const { data, error } = await supabaseClient
    .from("communities")
    .select("id, name, category, description, invite_url")
    .eq("status", "approved")
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    list.textContent = "Unable to load communities.";
    return;
  }

  communities = data || [];
  displayCommunities(search.value);
}

function displayCommunities(query = "") {
  const filtered = communities.filter(c =>
    `${c.name} ${c.category} ${c.description}`
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  list.replaceChildren();

  if (!filtered.length) {
    list.textContent = "No approved communities found yet.";
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

    const invite = document.createElement("a");
    invite.textContent = "Join Community";
    invite.href = c.invite_url;
    invite.target = "_blank";
    invite.rel = "noopener noreferrer";

    card.append(title, category, description, invite);
    list.appendChild(card);
  });
}

search.addEventListener("input", () => {
  displayCommunities(search.value);
});

loadCommunities();
