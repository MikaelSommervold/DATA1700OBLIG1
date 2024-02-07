// Create an array to store ticket data
var ticketArray = [];

function submitForm() {
  var film = document.getElementById("film").value;
  var antall = document.getElementById("antall").value;
  var fornavn = document.getElementById("fornavn").value;
  var etternavn = document.getElementById("etternavn").value;
  var telefon = document.getElementById("telefon").value;
  var epost = document.getElementById("epost").value;

  // Create an object to represent the ticket
  var ticket = {
    film: film,
    antall: antall,
    fornavn: fornavn,
    etternavn: etternavn,
    telefon: telefon,
    epost: epost
  };

  // Add the ticket object to the array
  ticketArray.push(ticket);

  // Display the array in a table underneath <h2>Alle Billetter</h2>
  displayTickets();

  // Reset input fields in form for next input
  document.getElementById("bestilling").reset();
}

function displayTickets() {
  var ticketsContainer = document.getElementById("ticketsContainer");
  ticketsContainer.innerHTML = ""; // Prevent duplicate tables

  // Create a table to display the tickets
  var ticketTable = document.createElement("table");

  // Add a class to the table for styling
  ticketTable.className = "ticket-table";

  // Create the table header
  var headerRow = ticketTable.insertRow(0);
  var headers = ["Film", "Antall", "Fornavn", "Etternavn", "Telefon", "Epost"];

  for (var i = 0; i < headers.length; i++) {
    var headerCell = headerRow.insertCell(i);
    headerCell.textContent = headers[i];
  }

  // Loop through the array and create rows for each ticket
  for (var i = 0; i < ticketArray.length; i++) {
    var ticket = ticketArray[i];
    var row = ticketTable.insertRow(i + 1);

    // Loop through ticket properties and create cells for each ticket
    for (var j = 0; j < headers.length; j++) {
      var cell = row.insertCell(j);
      cell.textContent = ticket[headers[j].toLowerCase()];
    }
  }

  ticketsContainer.appendChild(ticketTable);
}

function slettAlle() {
  // Clear the form inputs
  document.getElementById("film").value = "";
  document.getElementById("antall").value = "";
  document.getElementById("fornavn").value = "";
  document.getElementById("etternavn").value = "";
  document.getElementById("telefon").value = "";
  document.getElementById("epost").value = "";

  // Reset the ticketArray
  ticketArray = [];

  // Clear the displayed tickets
  displayTickets();
} 
