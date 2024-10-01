// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response => response.json())
//     .then(data => data(data))

const getUserData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    nameList(data);
};

window.addEventListener("load", () => {
    getUserData();
});

const nameList = (data) => {
    const name_area = document.getElementById("name_area");
    for (let user of data) {
        const li = document.createElement("li");
        li.classList.add(
            "py-2",
            "list-none",
            "cursor-pointer",
            "font-semibold",
            "w-fit"
        );
        li.textContent = user.name;
        li.addEventListener("click", () => {
            showDetails(user);
        });
        name_area.appendChild(li);
    }
};

const showDetails = (user) => {
    const details_area = document.getElementById("details_area");
    details_area.innerHTML = `<h2 class="font-bold text-lg">${user.name}</h2>
                            <p>City: ${user.address.city || "N/A"}</p>    
                            <p>Phone: ${user.phone || "N/A"}</p>    
                            <p>Website: ${user.website || "N/A"}</p>    
                            <p>Email: ${user.email || "N/A"}</p>
                            `;
};
