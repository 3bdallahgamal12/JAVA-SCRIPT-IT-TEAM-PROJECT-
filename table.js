var counter = 1;

var defaultData = [
  ["Abdallah Gamal ", "Developer", "Active"],

  ["abdelrahman omar mohamed", "Manager", "Active"],
  ["abdallah Aamer nagy", "QA Engineer", "Inactive"]
];

function addRow() {
  var name = document.getElementById("nameInput").value.trim();
  var role = document.getElementById("roleInput").value.trim();
  var status = document.getElementById("statusInput").value;

  if (name == "" || role == "") {
    alert("من فضلك اكتب الاسم والوظيفة!");
    return;
  }

  buildRow(counter, name, role, status);
  counter++;

  document.getElementById("nameInput").value = "";
  document.getElementById("roleInput").value = "";
}

function buildRow(id, name, role, status) {
  var tbody = document.getElementById("tableBody");
  var tr = document.createElement("tr");
  var values = [id, name, role, status];

  for (var i = 0; i < values.length; i++) {
    var td = document.createElement("td");
    if (i === 3) td.className = "status-" + status.toLowerCase();
    td.textContent = values[i];
    tr.appendChild(td);
  }

  var deleteTd = document.createElement("td");
  var btn = document.createElement("button");
  btn.className = "btn-delete";
  btn.textContent = "حذف";
  btn.onclick = (function (row) {
    return function () { row.remove(); };
  })(tr);
  deleteTd.appendChild(btn);
  tr.appendChild(deleteTd);

  tbody.appendChild(tr);
}

for (var i = 0; i < defaultData.length; i++) {
  buildRow(counter, defaultData[i][0], defaultData[i][1], defaultData[i][2]);
  counter++;
}
