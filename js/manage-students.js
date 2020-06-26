const studentsList = document.getElementById('students-list')

var URL = 'http://localhost:3000/students';

GetAllStudents();

function GetAllStudents() 
{
    
    var request = new XMLHttpRequest()
    request.open('GET', URL, true)
    request.onload = function() 
    {
        var data = JSON.parse(this.response)

        if(request.status >=200 && request.status < 400) 
        {
            data.forEach(students => {

               
                    const studentRow = document.createElement('tr')
    
                    const studentID = document.createElement('td')
                    studentID.textContent = students.id
        
                    const studentName = document.createElement('td')
                    studentName.textContent = students.name

                    const studentStatus = document.createElement('td')
                    studentStatus.textContent = students.status

                    const studentAccept = document.createElement('td')
                    const acceptButton = document.createElement('a')
                    acceptButton.setAttribute('href', '#')
                    acceptButton.setAttribute('class', 'edit')
                    acceptButton.textContent = 'Accept'
                    studentAccept.appendChild(acceptButton)


                    acceptButton.addEventListener('click',
                    function() {
    
                        fetch('http://localhost:3000/approve/students/' + students.id, {
                            method: 'PUT',
                        })
                        .then(res => res.json())
                        .then((data) => {
                            const result = JSON.stringify(data.message);
                        })

                        location.reload();
                    },
                    false);


                    const studentDelete = document.createElement('td')
                    const deleteButton = document.createElement('a')
                    deleteButton.setAttribute('href', '#')
                    deleteButton.setAttribute('class', 'delete')
                    deleteButton.textContent = 'Delete'
                    studentDelete.appendChild(deleteButton)


                    deleteButton.addEventListener('click',
                    function() {
    
                        fetch('http://localhost:3000/students/' + students.id, {
                            method: 'DELETE',
                        })
                        .then(res => res.json())
                        .then((data) => {
                            const result = JSON.stringify(data.message);
                        })

                        location.reload();
                    },
                    false);
        

        

                    studentsList.appendChild(studentRow)
                    studentRow.appendChild(studentID)
                    studentRow.appendChild(studentName)
                    studentRow.appendChild(studentStatus)
                    studentRow.appendChild(studentAccept)
                    studentRow.appendChild(studentDelete)
                    
            })
        } 
        else 
        {
            console.log('error')
        }
    }

request.send()

}