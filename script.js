const parentElementSGPA = document.getElementById("subjects");
const parentElementCGPA = document.getElementById("sems");
let numberOfSub;
let numberOfSem;
let currentMode = "light";

const currentHour = new Date().getHours();

if (currentHour >= 5 && currentHour <= 19) {
  if (currentMode == "dark") {
    darkMode();
  }
} else {
  if (currentMode == "light") {
    darkMode();
  }
}

subjectCount.addEventListener("change", () => {
  const numSubject = document.getElementById("subjectCount").value;
  numberOfSub = numSubject;
  parentElementSGPA.innerHTML = "";

  for (let i = 0; i < numSubject; i++) {
    const subjectDiv = document.createElement("div");
    subjectDiv.classList.add("input-group", "mb-3");

    const inputGroup = document.createElement("div");
    inputGroup.classList.add("input-group", "mb-3");

    const marksSpan = document.createElement("span");
    marksSpan.classList.add("input-group-text");

    marksSpan.textContent = `Marks in Subject ${i + 1}`;
    inputGroup.appendChild(marksSpan);

    const inputMarks = document.createElement("input");
    inputMarks.type = "number";
    inputMarks.required = true;
    inputMarks.min = 0;
    inputMarks.max = 100;
    inputMarks.required = true;
    inputMarks.id = `marks${i + 1}`;
    inputMarks.classList.add("form-control");

    inputGroup.appendChild(inputMarks);

    const creditSpan = document.createElement("span");
    creditSpan.classList.add("input-group-text");

    creditSpan.textContent = `Max Credits in Subject ${i + 1}`;
    inputGroup.appendChild(creditSpan);

    const inputCredit = document.createElement("input");
    inputCredit.type = "number";
    inputCredit.required = true;
    inputCredit.min = 0;
    inputCredit.max = 4;
    inputCredit.required = true;
    inputCredit.id = `credit${i + 1}`;
    inputCredit.classList.add("form-control");

    inputGroup.appendChild(inputCredit);

    subjectDiv.appendChild(inputGroup);

    parentElementSGPA.appendChild(subjectDiv);
  }
});

semCount.addEventListener("change", () => {
  const numSem = document.getElementById("semCount").value;
  numberOfSem = numSem;
  parentElementCGPA.innerHTML = "";

  for (let i = 0; i < numSem; i++) {
    const semDiv = document.createElement("div");
    semDiv.classList.add("input-group", "mb-3");

    const inputGroup = document.createElement("div");
    inputGroup.classList.add("input-group", "mb-3");

    const sgpaSpan = document.createElement("span");
    sgpaSpan.classList.add("input-group-text");
    if (currentMode == "dark") {
      sgpaSpan;
    }
    sgpaSpan.textContent = `SGPA in Semester ${i + 1}`;
    inputGroup.appendChild(sgpaSpan);

    const inputMarks = document.createElement("input");
    inputMarks.type = "number";
    inputMarks.required = true;
    inputMarks.min = 0;
    inputMarks.max = 10;
    inputMarks.required = true;
    inputMarks.id = `sgpa${i + 1}`;
    inputMarks.classList.add("form-control");

    inputGroup.appendChild(inputMarks);

    const creditSpan = document.createElement("span");
    creditSpan.classList.add("input-group-text");
    creditSpan.textContent = `Total Credits in Semester ${i + 1}`;
    inputGroup.appendChild(creditSpan);

    const inputCredit = document.createElement("input");
    inputCredit.type = "number";
    inputCredit.required = true;
    inputCredit.min = 0;
    inputCredit.max = 100;
    inputCredit.required = true;
    inputCredit.id = `creditCGPA${i + 1}`;
    inputCredit.classList.add("form-control");

    inputGroup.appendChild(inputCredit);

    semDiv.appendChild(inputGroup);

    parentElementCGPA.appendChild(semDiv);
  }
});

function sgpa() {
  const sgpaSelection = document.getElementsByClassName("sgpaCalculation");
  const cgpaSelection = document.getElementsByClassName("cgpaCalculation");
  for (const element of sgpaSelection) {
    element.style.display = "block";
  }
  for (const element of cgpaSelection) {
    element.style.display = "none";
  }
}

function cgpa() {
  const sgpaSelection = document.getElementsByClassName("sgpaCalculation");
  const cgpaSelection = document.getElementsByClassName("cgpaCalculation");
  for (const element of sgpaSelection) {
    element.style.display = "none";
  }
  for (const element of cgpaSelection) {
    element.style.display = "block";
  }
}

function handleClear() {
  result.innerHTML = "-";
  result.textContent = "-";
}
function handleSubmit() {
  let gradePoint = 0;
  let creditSum = 0;

  for (let i = 0; i < numberOfSub; i++) {
    const currentGrade = parseInt(
      document.getElementById(`marks${i + 1}`).value
    );
    const currentCredit = parseInt(
      document.getElementById(`credit${i + 1}`).value
    );

    if (isNaN(currentGrade) || isNaN(currentCredit)) {
      alert(`Please fill in all fields for Subject ${i + 1}.`);
      marksInput.focus();
      return;
    }
    if (currentGrade > 100) {
      alert(
        `Maximum marks for a subject cannot exceed 100. Please check Subject ${
          i + 1
        }.`
      );
      return;
    }
    if (currentCredit > 4) {
      alert(
        `Maximum credits for a subject cannot exceed 4. Please check Subject ${
          i + 1
        }.`
      );
      return;
    }
    let currentGradePoint;
    if (currentGrade >= 90 && currentGrade <= 100) currentGradePoint = 10;
    if (currentGrade >= 75 && currentGrade <= 89) currentGradePoint = 9;
    if (currentGrade >= 65 && currentGrade <= 74) currentGradePoint = 8;
    if (currentGrade >= 55 && currentGrade <= 64) currentGradePoint = 7;
    if (currentGrade >= 50 && currentGrade <= 54) currentGradePoint = 6;
    if (currentGrade >= 45 && currentGrade <= 49) currentGradePoint = 5;
    if (currentGrade >= 40 && currentGrade <= 44) currentGradePoint = 4;
    if (currentGrade >= 0 && currentGrade <= 39) currentGradePoint = 0;
    const productOfGradeCredit = currentGradePoint * currentCredit;
    gradePoint += productOfGradeCredit;
    creditSum += currentCredit;
  }

  const result = document.getElementById("result");
  result.innerHTML = "";
  result.innerHTML = Math.round((gradePoint / creditSum) * 100) / 100;
  result.textContent = Math.round((gradePoint / creditSum) * 100) / 100;
}

function handleClearCGPA() {
  resultCGPA.innerHTML = "-";
  resultCGPA.textContent = "-";
}
function handleSubmitCGPA() {
  let SGPAsum = 0;
  let creditSum = 0;

  for (let i = 0; i < numberOfSem; i++) {
    const currentSGPA = parseFloat(
      document.getElementById(`sgpa${i + 1}`).value
    );
    const currentCredit = parseInt(
      document.getElementById(`creditCGPA${i + 1}`).value
    );

    if (isNaN(currentSGPA) || isNaN(currentCredit)) {
      alert(`Please fill in all fields for Semester ${i + 1}.`);
      marksInput.focus();
      return;
    }
    if (currentSGPA > 10) {
      alert(
        `Maximum SGPA for a semester cannot exceed 10. Please check Semester ${
          i + 1
        }.`
      );
      return;
    }
    if (currentCredit > 52) {
      alert(
        `Maximum credits for a semester cannot exceed 52. Please check Semester ${
          i + 1
        }.`
      );
      return;
    }
    const productOfSGPACredit = currentSGPA * currentCredit;
    SGPAsum += productOfSGPACredit;
    creditSum += currentCredit;
  }

  const result = document.getElementById("resultCGPA");
  result.innerHTML = "";
  result.innerHTML = Math.round((SGPAsum / creditSum) * 100) / 100;
  result.textContent = Math.round((SGPAsum / creditSum) * 100) / 100;
  console.log(result);
}

function darkMode() {
  if (currentMode == "light") {
    const navigation = document.getElementsByTagName("nav");
    for (const element of navigation) {
      element.classList = "navbar bg-dark";
    }
    const footer = document.getElementsByTagName("footer");
    for (const element of footer) {
      element.classList = "py-3 bg-dark";
    }
    const table = document.getElementsByTagName("table");
    for (const element of table) {
      element.classList = "table table-striped table-dark";
    }
    document.body.style.backgroundColor = "#1e1e1e";
    document.body.style.color = "white";

    const clearButton = document.getElementById("buttonClear");
    clearButton.classList = "btn btn-warning";

    const submitButton = document.getElementById("buttonSubmit");
    submitButton.classList = "btn btn-secondary";

    const clearButtonCGPA = document.getElementById("buttonClearCGPA");
    clearButtonCGPA.classList = "btn btn-warning";

    const submitButtonCGPA = document.getElementById("buttonSubmitCGPA");
    submitButtonCGPA.classList = "btn btn-secondary";

    const switchButtonSGPA = document.getElementById("sgpaSwitch");
    switchButtonSGPA.classList = "btn btn-outline-secondary";
    const switchButtonCGPA = document.getElementById("cgpaSwitch");
    switchButtonCGPA.classList = "btn btn-outline-secondary";

    const switchToLightModeImg = document.getElementById("switchToLightMode");
    switchToLightModeImg.style.display = "inline";

    const switchToDarkModeImg = document.getElementById("switchToDarkMode");
    switchToDarkModeImg.style.display = "none";

    document.documentElement.setAttribute("data-bs-theme", "dark");

    currentMode = "dark";
  } else {
    const navigation = document.getElementsByTagName("nav");
    for (const element of navigation) {
      element.classList = "navbar bg-body-tertiary";
    }
    const footer = document.getElementsByTagName("footer");
    for (const element of footer) {
      element.classList = "py-3";
      element.style.backgroundColor = "#f9f9f9";
    }
    const table = document.getElementsByTagName("table");
    for (const element of table) {
      element.classList = "table";
    }
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";

    const clearButton = document.getElementById("buttonClear");
    clearButton.classList = "btn btn-outline-danger";

    const submitButton = document.getElementById("buttonSubmit");
    submitButton.classList = "btn btn-outline-primary";

    const clearButtonCGPA = document.getElementById("buttonClearCGPA");
    clearButtonCGPA.classList = "btn btn-outline-danger";

    const submitButtonCGPA = document.getElementById("buttonSubmitCGPA");
    submitButtonCGPA.classList = "btn btn-outline-primary";

    const switchButtonSGPA = document.getElementById("sgpaSwitch");
    switchButtonSGPA.classList = "btn btn-outline-primary";
    const switchButtonCGPA = document.getElementById("cgpaSwitch");
    switchButtonCGPA.classList = "btn btn-outline-primary";

    const switchToLightModeImg = document.getElementById("switchToLightMode");
    switchToLightModeImg.style.display = "none";

    const switchToDarkModeImg = document.getElementById("switchToDarkMode");
    switchToDarkModeImg.style.display = "inline";

    document.documentElement.setAttribute("data-bs-theme", "light");

    currentMode = "light";
  }
}
