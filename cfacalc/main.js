
function calcCFA()
{
  var nAccounts = +document.getElementById('nAccounts').value;
  var nCampers = +document.getElementById('nCampers').value;
  var result = nAccounts * nCampers;
  document.getElementById('result').value = result;

  console.log(result);
}
document.getElementById('calculate').onclick = calcCFA;
