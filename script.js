var txtName = document.getElementById("inputName");
var txtEmail = document.getElementById("inputEmail");
var txtWebsite = document.getElementById("inputWebsite");
var radioMale = document.getElementById("radMale");
var radioFemale = document.getElementById("radFemale");
var checkHTML = document.getElementById("chkHTML");
var checkCSS = document.getElementById("chkCSS");
var checkJavascript = document.getElementById("chkJavascript");
var buttonSubmit = document.getElementById("btnSubmit");
var buttonReset = document.getElementById("btnReset");
var containOut = document.getElementById("containerOutput");

buttonReset.addEventListener("click", function () {
  txtName.value = "";
  txtEmail.value = "";
  radioMale.checked = false;
  radioFemale.checked = false;
  checkHTML.checked = false;
  checkCSS.checked = false;
  checkJavascript.checked = false;
});

buttonSubmit.addEventListener("click", function () {
  const cont = document.createElement("h3");
  const contVal = document.createTextNode(
    " Name        :      " + txtName.value
  );
  cont.appendChild(contVal);
  containOut.append(cont);
  cont.setAttribute("class", "name");

  const cont2 = document.createElement("p");
  const contVal2 = document.createTextNode(
    " Email       :      " + txtEmail.value
  );
  cont2.appendChild(contVal2);
  containOut.append(cont2);
  const cont6 = document.createElement("p");
  const contVal6 = document.createTextNode(
    " Website       :      " + txtWebsite.value
  );
  cont2.appendChild(contVal6);
  containOut.append(cont6);
  cont2.setAttribute("class", "others");
  if (radioMale.checked == true) {
    const cont3 = document.createElement("p");
    const contVal3 = document.createTextNode(" Gender    :       Male");
    cont3.appendChild(contVal3);
    containOut.append(cont3);
    cont3.setAttribute("class", "others");
  }
  if (radioFemale.checked == true) {
    const cont3 = document.createElement("p");
    const contVal3 = document.createTextNode(" Gender     : Female");
    cont3.appendChild(contVal3);
    containOut.append(cont3);
    cont3.setAttribute("class", "others");
  }
  const conta = document.createElement("h3");
  const contVala = document.createTextNode("------Skills--------");
  conta.appendChild(contVala);
  containOut.append(conta);
  if (checkHTML.checked == true) {
    const cont4 = document.createElement("p");
    const contVal4 = document.createTextNode("HTML");
    cont4.appendChild(contVal4);
    containOut.append(cont4);
    cont4.setAttribute("class", "others");
  }
  if (checkCSS.checked == true) {
    const cont4 = document.createElement("p");
    const contVal4 = document.createTextNode("CSS");
    cont4.appendChild(contVal4);
    containOut.appendChild(cont4);
  }
  if (checkJavascript.checked == true) {
    const cont4 = document.createElement("p");
    const contVal4 = document.createTextNode("Javascript");
    cont4.appendChild(contVal4);
    containOut.appendChild(cont4);
  }

  const contLine = document.createElement("hr");
  containOut.append(contLine);
});
