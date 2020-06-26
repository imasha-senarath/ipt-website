document.getElementById('submit').addEventListener('click', AddQualifications);


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


var URL = 'http://localhost:3000/students/qualification/'+ID;


function AddQualifications(e) 
{
    e.preventDefault();

    let category = document.getElementById("qualifications-category").value;
    let qualifications = document.getElementById('qualifications').value;

    fetch(URL,{
        method:'PUT',
        headers: {
            'Accept':'application/json, text/plain, */*',
            'Content-type':'application/json'
        },
        body:JSON.stringify({
          category: category,
	        qualifications: qualifications,
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
          alert('Qualifications added successfully');
          document.getElementById('qualifications').value = "";
        }
    })
} 