function createAlert(message)
{
  var alertbox = document.getElementById('message_placeholder');
  alertbox.className = "alert alert-danger alert-dismissable";
  alertbox.innerHTML = message;
  console.log("Alert Added");
}

function createSuccess(message)
{
  var alertbox = document.getElementById('message_placeholder');
  alertbox.className = "alert alert-success alert-dismissable";
  alertbox.innerHTML = message;
  console.log("Success Added");
}

// Return True if the number is positive:
function isPositiveNum(number)
{
  if(number <= 0)   return false;
  if(isNaN(number)) return false;
  return true;
}


// Validate the Form:
function validate()
{
  var status = true;
  var message = "<h1>Error!</h1><br>";
  var Accounts = document.getElementById('nAccounts');
  var Campers = document.getElementById('nCampers');
  var RSVPCards = document.getElementById('nCards');
  var People = document.getElementById('nPeople');
  var Staff = document.getElementById('nStaff');

  // Validate Accounts:
  if(!isPositiveNum(parseInt(Accounts.value)))
  {
    message += "<h4>Accounts doesn't have enough people.</h4><br>";
    status = false;
    Accounts.parentNode.classList.add("has-error");
    console.log("Accounts Failed");
  }
  else
  {
    Accounts.parentNode.classList.remove("has-error");
  }

  // Validate Campers:
  if(!isPositiveNum(parseInt(Campers.value)) || parseInt(Campers.value) > 500)
  {
    message += "<h4>Error with Campers value.</h4><br>";
    status = false;
    Campers.parentNode.classList.add("has-error");
    console.log("Campers Failed");
  }
  else
  {
    Campers.parentNode.classList.remove("has-error");
  }

  // Validate RSVP Cards
  if(!isPositiveNum(parseInt(RSVPCards.value)) ||
      parseInt(RSVPCards.value) > parseInt(People.value))
  {
    status = false;
    message += "<h4>Error with RSVP Cards.</h4><br>";
    RSVPCards.parentNode.classList.add("has-error");
    console.log("RSVPCards Failed");
  }
  else
  {
    RSVPCards.parentNode.classList.remove("has-error");
  }

  // Validate # of People:
  if(!isPositiveNum(parseInt(People.value)) || parseInt(People.value) > 500)
  {
    status = false;
    message += "<h4>Error with the number of people.</h4><br>";
    People.parentNode.classList.add("has-error");
    console.log("People Failed");
  }
  else
  {
    People.parentNode.classList.remove("has-error");
  }

  // Validate # of Staff:
  if(!isPositiveNum(parseInt(Staff.value)) || parseInt(Staff.value) > 500)
  {
    status = false;
    message += "<h4>Error with the number of staff.</h4><br>";
    Staff.parentNode.classList.add("has-error");
    console.log("Staff Failed");
  }
  else
  {
    Staff.parentNode.classList.remove("has-error");
  }

  // Return True if everything passes:
  if(status == false)
  {
    createAlert(message);
    return false;
  }
  else
  {
    message = "<h1>Success!</h1>";
    createSuccess(message);
    return status;
  }
}



// Calculate the Number of Sandwiches to Order:
function calcCFA()
{
  var nAccounts = +document.getElementById('nAccounts').value;
  var nCampers = +document.getElementById('nCampers').value;
  var nCards = +document.getElementById('nCards').value;
  var nPeople = +document.getElementById('nPeople').value;
  var nStaff = +document.getElementById('nStaff').value;

  //Input Validation:
  if(!validate())
  {
    console.log("Failed Validation!");
    return false;
  }

  // The Formula:
  var result = ((nAccounts - nCards) * 2 + nPeople) + nCampers + nStaff;
  document.getElementById('result').value = result;
  document.getElementById('result').focus();

  console.log(result);
}
document.getElementById('calculate').onclick = calcCFA;
