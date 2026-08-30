// Store all students
let students = [];


// Get the form
const marksForm = document.getElementById("marksForm");


// Listen for form submission
marksForm.addEventListener("submit", function(event) {

    // Prevent the page from refreshing
    event.preventDefault();


    // Get student information
    const name = document.getElementById("studentName").value.trim();
    const roll = document.getElementById("rollNumber").value.trim();


    // Get marks
    const maths = Number(document.getElementById("maths").value);
    const science = Number(document.getElementById("science").value);
    const english = Number(document.getElementById("english").value);
    const computer = Number(document.getElementById("computer").value);
    const social = Number(document.getElementById("social").value);


    // Calculate total
    const total = maths + science + english + computer + social;


    // Calculate percentage
    const percentage = total / 5;


    // Calculate grade
    let grade;

    if (percentage >= 90) {
        grade = "A+";
    }
    else if (percentage >= 80) {
        grade = "A";
    }
    else if (percentage >= 70) {
        grade = "B";
    }
    else if (percentage >= 60) {
        grade = "C";
    }
    else if (percentage >= 50) {
        grade = "D";
    }
    else {
        grade = "F";
    }


    // Calculate result
    const result = percentage >= 40 ? "PASS" : "FAIL";


    // Create student object
    const student = {
        name: name,
        roll: roll,
        maths: maths,
        science: science,
        english: english,
        computer: computer,
        social: social,
        total: total,
        percentage: percentage.toFixed(2),
        grade: grade,
        result: result
    };


    // Add student to the array
    students.push(student);


    // Display students
    displayStudents();


    // Clear the form
    marksForm.reset();

});


// Display students in the table
function displayStudents() {

    const tableBody = document.getElementById("studentTableBody");

    // Clear the table
    tableBody.innerHTML = "";


    // If there are no students
    if (students.length === 0) {

        tableBody.innerHTML = `
            <tr>
                <td colspan="12">
                    No student records available.
                </td>
            </tr>
        `;

        return;
    }


    // Add every student to the table
    students.forEach(function(student, index) {

        const row = document.createElement("tr");


        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${student.name}</td>
            <td>${student.roll}</td>
            <td>${student.maths}</td>
            <td>${student.science}</td>
            <td>${student.english}</td>
            <td>${student.computer}</td>
            <td>${student.social}</td>
            <td>${student.total}</td>
            <td>${student.percentage}%</td>
            <td>${student.grade}</td>
            <td class="${student.result === "PASS" ? "pass" : "fail"}">
                ${student.result}
            </td>
        `;


        tableBody.appendChild(row);

    });


    // Update summary
    updateSummary();

}


// Update student summary
function updateSummary() {

    const totalStudents = students.length;


    const passedStudents = students.filter(function(student) {
        return student.result === "PASS";
    }).length;


    const failedStudents = students.filter(function(student) {
        return student.result === "FAIL";
    }).length;


    document.getElementById("totalStudents").innerText = totalStudents;

    document.getElementById("passedStudents").innerText = passedStudents;

    document.getElementById("failedStudents").innerText = failedStudents;

}