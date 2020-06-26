document.getElementById('student-register-form').addEventListener('submit', register);

var URL = 'http://localhost:3000/students/register';


function register(e) 
{
    e.preventDefault();

    let id = document.getElementById('id').value;
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let degree = document.getElementById('degree').value;
    let password = document.getElementById('password').value;

    fetch(URL,{
        method:'POST',
        headers: {
            'Accept':'application/json, text/plain, */*',
            'Content-type':'application/json'
        },
        body:JSON.stringify({
            id: id,
            name: name,
            email: email,
            degree: degree,
	        password: password,
        })
    })
    .then((res) => res.json())
    .then((data) => {
        const result = JSON.stringify(data.message);
        if(result!='"pass"')
        {
            alert(result);
        }
        else
        {
            window.location.href = "student-login.html";
        }
    })
} 