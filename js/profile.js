const name = document.getElementById('name')
const id = document.getElementById('id')
const degree = document.getElementById('degree')
const qualifications = document.getElementById('qualification')

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

var ID = getCookie('id');


var URL = 'http://localhost:3000/students/'+ID;


GetStudentDetails();


function GetStudentDetails() 
{    
    var request = new XMLHttpRequest()
    request.open('GET', URL, true)
    request.onload = function() 
    {
        var data = JSON.parse(this.response)

        if(request.status >=200 && request.status < 400) 
        {
          id.textContent = 'ID: '+data.id
          name.textContent = data.name  
          degree.textContent = 'Degree: '+data.degree
          qualifications.textContent = data.category +': '+data.qualifications
        } 
        else 
        {
            console.log('error')
        }
    }

request.send()

}