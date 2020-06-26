const expertsList = document.getElementById('experts-list')

var URL = 'http://localhost:3000/experts';

GetAllExperts();

function GetAllExperts() 
{
    
    var request = new XMLHttpRequest()
    request.open('GET', URL, true)
    request.onload = function() 
    {
        var data = JSON.parse(this.response)

        if(request.status >=200 && request.status < 400) 
        {
            data.forEach(expert => {

               
                    const expertRow = document.createElement('tr')
    
                    const expertID = document.createElement('td')
                    expertID.textContent = expert.id
        
                    const expertName = document.createElement('td')
                    expertName.textContent = expert.name

                    const expertStatus = document.createElement('td')
                    expertStatus.textContent = expert.status

                    const expertAccept = document.createElement('td')
                    const acceptButton = document.createElement('a')
                    acceptButton.setAttribute('href', '#')
                    acceptButton.setAttribute('class', 'edit')
                    acceptButton.textContent = 'Accept'
                    expertAccept.appendChild(acceptButton)


                    acceptButton.addEventListener('click',
                    function() {
    
                        fetch('http://localhost:3000/approve/experts/' + expert.id, {
                            method: 'PUT',
                        })
                        .then(res => res.json())
                        .then((data) => {
                            const result = JSON.stringify(data.message);
                        })

                        location.reload();
                    },
                    false);


                    const expertDelete = document.createElement('td')
                    const deleteButton = document.createElement('a')
                    deleteButton.setAttribute('href', '#')
                    deleteButton.setAttribute('class', 'delete')
                    deleteButton.textContent = 'Delete'
                    expertDelete.appendChild(deleteButton)


                    deleteButton.addEventListener('click',
                    function() {
    
                        fetch('http://localhost:3000/experts/' + expert.id, {
                            method: 'DELETE',
                        })
                        .then(res => res.json())
                        .then((data) => {
                            const result = JSON.stringify(data.message);
                        })

                        location.reload();
                    },
                    false);
        

                    expertsList.appendChild(expertRow)
                    expertRow.appendChild(expertID)
                    expertRow.appendChild(expertName)
                    expertRow.appendChild(expertStatus)
                    expertRow.appendChild(expertAccept)
                    expertRow.appendChild(expertDelete)
                    
            })
        } 
        else 
        {
            console.log('error')
        }
    }

request.send()

}