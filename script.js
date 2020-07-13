let numCards = 0;

function addCard() {
    // Grab the values from text inputs
    let destination = document.getElementById("destination").value;
    let location = document.getElementById("location").value;
    let photoUrl = document.getElementById("photoUrl").value;
    let description = document.getElementById("description").value;

    // Create new cards and set attributes
    let newCard = document.createElement("div");
    newCard.setAttribute("class", "card");
    newCard.setAttribute("id", "card" + numCards);
    newCard.setAttribute("style", "width: 18rem;");

    // Create image for the card
    let destinationImage = document.createElement("img");
    destinationImage.setAttribute("class", "card-img-top");
    destinationImage.setAttribute("src", photoUrl);
    destinationImage.style.backgroundImage = "url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.universetoday.com%2Fwp-content%2Fuploads%2F2009%2F10%2Fglobe_west_2048.jpg&f=1&nofb=1')";

    // Create body for the card
    let destinationCardBody = document.createElement("div");
    destinationCardBody.setAttribute("class", "card-body");

    // Create the contents for the card body
    let destinationHeader = document.createElement("h4");
    destinationHeader.innerHTML = destination;

    let locationHeader = document.createElement("h6");
    locationHeader.innerHTML = location;

    let destinationDescription = document.createElement("p");
    destinationDescription.innerHTML = description;

    let editButton = document.createElement("button");
    editButton.setAttribute("type", "button");
    editButton.setAttribute("class", "btn btn-warning");
    editButton.innerHTML = "Edit";

    let deleteButton = document.createElement("button");
    deleteButton.setAttribute("type", "button");
    deleteButton.setAttribute("class", "btn btn-danger");
    deleteButton.innerHTML = "Remove";

    // Append the contents to card body, append image and body to card, append newCard to container 
    destinationCardBody.append(destinationHeader, locationHeader, destinationDescription, editButton, deleteButton);
    newCard.append(destinationImage, destinationCardBody);
    document.getElementById("card_container").appendChild(newCard);

    // Reset the form values
    document.getElementById("destination").value = "";
    document.getElementById("location").value = "";
    document.getElementById("photoUrl").value = "";
    document.getElementById("description").value = "";

    // Keep track of how many cards exist
    numCards++;
}

function removeCard() {
    let currentCard = document.getElementsByClassName("card").item();
}