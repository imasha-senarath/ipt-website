document.getElementById('submit').addEventListener('click', GetStudents);
const studentList = document.getElementById('student-list');

var state = 'false';


function GetStudents() 
{
   
    let category = document.getElementById("qualifications-category").value;
    var URL = 'http://localhost:3000/'+category+'/students';

    var request = new XMLHttpRequest()
    request.open('GET', URL, true)
    request.onload = function() 
    {
        var data = JSON.parse(this.response)

        if(request.status >=200 && request.status < 400) 
        {
            data.forEach(students => {
    
                const studentName = document.createElement('h4')
                studentName.textContent = students.name+' : '+students.id+' - '+students.degree+' - '+students.qualifications;
                studentList.appendChild(studentName); 
                
                state = 'true';
                    
            })
        } 
        else 
        {
            const notfound = document.createElement('h4')
            notfound.textContent = 'Not found Student with category '+category;
            studentList.appendChild(notfound); 
            console.log('error')
        }
    }

request.send()

}