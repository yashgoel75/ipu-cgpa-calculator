const parentElement = document.getElementById('subjects');
let numberOfSub;
subjectCount.addEventListener('change', () => {
    const numSubject = document.getElementById('subjectCount').value;
    numberOfSub = numSubject;
    parentElement.innerHTML = '';
    
    for (let i = 0; i < numSubject; i++) {
        const subjectDiv = document.createElement('div');
        subjectDiv.classList.add('input-group', 'mb-3'); 
        
        const inputGroup = document.createElement('div');
        inputGroup.classList.add('input-group','mb-3'); 
        
        const marksSpan = document.createElement('span');
        marksSpan.classList.add("input-group-text");
        marksSpan.textContent = `Marks in Subject ${i + 1}`;
        inputGroup.appendChild(marksSpan);

        const inputMarks = document.createElement('input');
        inputMarks.type = "number";
        inputMarks.required = true;
        inputMarks.min = 0;
        inputMarks.max = 100;
        inputMarks.required = true;
        inputMarks.id = `marks${i + 1}`;
        inputMarks.classList.add("form-control"); 
        inputGroup.appendChild(inputMarks);
        
        const creditSpan = document.createElement('span');
        creditSpan.classList.add("input-group-text");
        creditSpan.textContent = `Max Credits in Subject ${i + 1}`;
        inputGroup.appendChild(creditSpan);

        const inputCredit = document.createElement('input');
        inputCredit.type = "number";
        inputCredit.required = true;
        inputCredit.min = 0;
        inputCredit.max = 100;
        inputCredit.required = true;
        inputCredit.id = `credit${i + 1}`;
        inputCredit.classList.add("form-control"); 
        inputGroup.appendChild(inputCredit);

        subjectDiv.appendChild(inputGroup);

        parentElement.appendChild(subjectDiv);
    }
});

function handleSubmit() {
    let gradePoint = 0;
    let creditSum = 0;

    for (let i=0; i<numberOfSub; i++) {
        const currentGrade = parseInt(document.getElementById(`marks${i + 1}`).value);
        const currentCredit = parseInt(document.getElementById(`credit${i + 1}`).value);

        if (isNaN(currentGrade) || isNaN(currentCredit)) {
            alert(`Please fill in all fields for Subject ${i + 1}.`);
            marksInput.focus();
            return;
        }
        if (currentGrade > 100) {
            alert(`Maximum marks for a subject cannot exceed 100. Please check Subject ${i + 1}.`);
            return;
        }
        if (currentCredit > 4) {
            alert(`Maximum credits for a subject cannot exceed 4. Please check Subject ${i + 1}.`);
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
        const productOfGradeCredit = currentGradePoint*currentCredit;
        gradePoint += productOfGradeCredit;
        creditSum += currentCredit;
    }
    
    const parentResult = document.getElementById('resultParent');
    parentResult.innerHTML = '';
    const unorderedList = document.createElement('ul');
    unorderedList.classList = "list-group list-group-horizontal";
    const resultHeading = document.createElement('li');
    resultHeading.classList = "list-group-item list-group-item-light";
    resultHeading.innerHTML = "Your CGPA";
    resultHeading.textContent = "Your CGPA";
    unorderedList.appendChild(resultHeading);
    const result = document.createElement('li');
    result.classList = "list-group-item";
    result.innerHTML = Math.round((gradePoint/creditSum)*100)/100;
    result.textContent = Math.round((gradePoint/creditSum)*100)/100;
    result.id = 'result';
    unorderedList.appendChild(result);
    parentResult.appendChild(unorderedList);
}
