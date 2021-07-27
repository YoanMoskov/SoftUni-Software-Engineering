const studentsBoxEl = document.querySelector('#results > tbody');
const idEl = document.querySelector('#id');
const firstNameEl = document.querySelector('#firstName');
const lastNameEl = document.querySelector('#lastName');
const facultyNumEl = document.querySelector('#facultyNumber');
const gradeEl = document.querySelector('#grade');
const btnSubmitEl = document.querySelector('body > form > button');

const baseUrl = `https://students-df609.firebaseio.com/.json`;

loadStudents();

btnSubmitEl.addEventListener('click', addStudent)

function addStudent(e) {
    e.preventDefault();
    addStudentToFirebase();
}

function addStudentToFirebase() {
    let obj = {
        id: idEl.value,
        firstName: firstNameEl.value,
        lastName: lastNameEl.value,
        facultyNum: facultyNumEl.value,
        grade: gradeEl.value,
    }
    if (Number(obj.id) && obj.firstName !== '' && obj.lastName !== '' && obj.lastName && Number(obj.facultyNum) && Number(obj.grade) >= 2.00 && Number(obj.grade) <= 6.00) {
        fetch(baseUrl, {
            method: 'POST',
            body: JSON.stringify(obj),
        })
    } else {
        alert('Invalid input');
    }
    loadStudents();
}

function loadStudents() {
    const studentView = document.getElementById('students-template').innerHTML;
    const studentTemplate = Handlebars.compile(studentView);
    let studentsHTML = ``;
    let arrayStudents = [];

    fetch(baseUrl)
        .then(res => res.json())
        .then(data => {
            if (data != null){
                Object.keys(data).forEach(student => {
                    arrayStudents.push(data[student]);
                });
                arrayStudents.sort((a, b) => {
                    return a.id - b.id;
                })
                arrayStudents.forEach(student => {
                    studentsHTML += studentTemplate(student);
                })
                studentsBoxEl.innerHTML = studentsHTML;
            }
        });
}

