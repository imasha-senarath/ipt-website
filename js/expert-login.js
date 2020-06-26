document.getElementById('expert-login-form').addEventListener('submit', login);

var URL = 'http://localhost:3000/experts/login';


function login(e) 
{
    e.preventDefault();

    let id = document.getElementById('id').value;
    let password = document.getElementById('password').value;

    fetch(URL,{
        method:'POST',
        headers: {
            'Accept':'application/json, text/plain, */*',
            'Content-type':'application/json'
        },
        body:JSON.stringify({
            id: id,
	        password: password,
        })
    })
    .then((res) => res.json())
    .then((data) => {
        const result = JSON.stringify(data.message);
        if(result!='"Authentication successful"')
        {
            alert(result);
        }
        else
        {
            setCookie('id',id,10);
        }
    })
} 


//store member id using cookies
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires;

    window.location.href = "find-students.html";
}