const submitBtn = document.getElementById("btn1");
const addBtn = document.getElementById("btn2");
const pastBtn = document.getElementById("btn3");
const futureBtn = document.getElementById("btn4");
const table = document.querySelector("table");
let row = [];
let pastRow = [];
let futureRow = [];

const assignAddition = (event) => {
  event.preventDefault();
  const inp1 = document.getElementById("input1").value;
  const inp2 = document.getElementById("input2").value;
  const inp3 = document.getElementById("input3").value;
  const inp4 = document.getElementById("input4").value;
  const obj = {
    input: inp1,
    description: inp2,
    batchName: inp3,
    dueDate: inp4,
  };
  row.push(obj);
  let addi = `<tr>
    <td>${obj.input}</td>
    <td>${obj.description}</td>
    <td>${obj.batchName}</td>
    <td>${obj.dueDate}</td>
    </tr>`;
  table.innerHTML += addi;
  const date = new Date();
  const currDate = `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()}`;
  const inpDate = obj.dueDate;
  const currDate1 = new Date(currDate).getTime();
  const inpDate1 = new Date(inpDate).getTime();
  if (inpDate1 < currDate1) {
    pastRow.push(obj);
  } else {
    futureRow.push(obj);
  }
};

const pastAssgn = () => {
  table.innerHTML = `<tr class="first-row">
  <th>Title</th>
  <th>Description</th>
  <th>Batch Name</th>
  <th>Due Date</th>
</tr>`;
  for (let i of pastRow) {
    const tableRow = document.createElement("tr");
    const title = document.createElement("td");
    const description = document.createElement("td");
    const batchName = document.createElement("td");
    const dueDate = document.createElement("td");
    title.innerHTML = i.input;
    description.innerHTML = i.description;
    batchName.innerHTML = i.batchName;
    dueDate.innerHTML = i.dueDate;
    tableRow.append(title, description, batchName, dueDate);
    table.append(tableRow);
  }
};
const addition = (event) => {
  table.innerHTML = `<tr class="first-row">
  <th>Title</th>
  <th>Description</th>
  <th>Batch Name</th>
  <th>Due Date</th>
</tr>`;
  for (let i of row) {
    const tableRow = document.createElement("tr");
    const title = document.createElement("td");
    const description = document.createElement("td");
    const batchName = document.createElement("td");
    const dueDate = document.createElement("td");
    title.innerHTML = i.input;
    description.innerHTML = i.description;
    batchName.innerHTML = i.batchName;
    dueDate.innerHTML = i.dueDate;
    tableRow.append(title, description, batchName, dueDate);
    table.append(tableRow);
  }
};
const futureAssgn = () => {
  table.innerHTML = `<tr class="first-row">
  <th>Title</th>
  <th>Description</th>
  <th>Batch Name</th>
  <th>Due Date</th>
  <th>Delete</th>
</tr>`;
  for (let i of futureRow) {
    const tableRow = document.createElement("tr");
    const title = document.createElement("td");
    const description = document.createElement("td");
    const batchName = document.createElement("td");
    const dueDate = document.createElement("td");
    const deleted = document.createElement("button");
    deleted.className="del"
    deleted.innerHTML="Delete"
    title.innerHTML = i.input;
    description.innerHTML = i.description;
    batchName.innerHTML = i.batchName;
    dueDate.innerHTML = i.dueDate;
    tableRow.append(title, description, batchName, dueDate,deleted);
    table.append(tableRow);
    const removed=()=>{
      tableRow.remove()
    }
    deleted.addEventListener("click",removed)
  }
};
submitBtn.addEventListener("click", assignAddition);
addBtn.addEventListener("click", addition);
pastBtn.addEventListener("click", pastAssgn);
futureBtn.addEventListener("click", futureAssgn);
