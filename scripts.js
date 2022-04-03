let users = [
    {
      id: "123456789",
      createdDate: "2021-01-06T00:00:00.000Z",
      status: "En validation",
      firstName: "Mohamed",
      lastName: "Taha",
      userName: "mtaha",
      registrationNumber: "2584",
    },
    {
      id: "987654321",
      createdDate: "2021-07-25T00:00:00.000Z",
      status: "Validé",
      firstName: "Hamid",
      lastName: "Orrich",
      userName: "horrich",
      registrationNumber: "1594",
    },
    {
      id: "852963741",
      createdDate: "2021-09-15T00:00:00.000Z",
      status: "Rejeté",
      firstName: "Rachid",
      lastName: "Mahidi",
      userName: "rmahidi",
      registrationNumber: "3576",
    }
  ]
  
  const Status = {
    VALIDE: "Validé",
    REJECTED: "Rejeté",
    ON_VALIDATION: "En validation"
  }
  
  /* modal scripts */
  var modal = document.getElementById("modal");
  var openModal = document.getElementById("add-user");
  var closeModal = document.getElementById("btn-close");
  
  openModal.onclick = function () {
    modal.style.display = "block";
  }
  
  closeModal.onclick = function () {
    modal.style.display = "none";
  }
  
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  
  
  function fullFunction() {
  
    let tbody = "";
  
    for (let i = 0; i < users.length; i++) {
      var date = new Date(users[i].createdDate).toLocaleDateString();
  
      tbody += `<tr>`;
      tbody += `<td> ${users[i].id}</td>`
      tbody += `<td> ${date}</td>`
      tbody += `<td> 
                    <span 
                      class='status 
                          ${users[i].status === Status.VALIDE ? 
                          'valide' : users[i].status === Status.REJECTED ? 
                          'rejected' : 'on-validation' }'
                        >
                          ${users[i].status}
                    </span>   
                </td>`
      tbody += `<td> ${users[i].firstName}</td>`
      tbody += `<td> ${users[i].lastName}</td>`
      tbody += `<td> ${users[i].userName}</td>`
      tbody += `<td> ${users[i].registrationNumber}</td>`
      tbody += `
              <td> 
                <a onclick="deleteUser(this, ${users[i].id})">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 7L18.1327 19.1425C18.0579 20.1891 17.187 21 16.1378 21H7.86224C6.81296 21 5.94208 20.1891 5.86732 19.1425L5 7M10 11V17M14 11V17M15 7V4C15 3.44772 14.5523 3 14 3H10C9.44772 3 9 3.44772 9 4V7M4 7H20" stroke="#111827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>                
                </a> 
              </td>`
      tbody += `</tr>`;
  
      document.getElementById('tbody').innerHTML = tbody;
  
    }
  }
  
  /* Delete user */ 
  function deleteUser(td, id) {
    if (confirm(`Are you sure to delete this user with id ${id} ?`)) {
      var row = td.parentNode.parentNode;
  
      row.parentNode.removeChild(row)
    }
  }
  
  
  /* Insert User */
  document.getElementById("addUser").addEventListener("click", function (event) {
    event.preventDefault();
  
    var userId = Math.floor(100000000 + Math.random() * 900000000);
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var status = document.getElementById("status").value;
    var userName = document.getElementById("userName").value;
    var createdDate = document.getElementById("createdDate").value;
    var registrationNumber = document.getElementById("registrationNumber").value;
  
    const newUser = {
      id: userId,
      createdDate: createdDate,
      status: status,
      firstName: firstName,
      lastName: lastName,
      userName: userName,
      registrationNumber: registrationNumber,
    }
  
    console.table(newUser)
  
    tableRow = ""
  
    tableRow += `<tr>`
    tableRow += `<td>${userId}</td>`
    tableRow += `<td>${createdDate}</td>`
    tableRow += `<td><span class='status ${status === Status.VALIDE ? 'valide' : status === Status.REJECTED ? 'rejected' : 'on-validation' }'>${status}</span> </td>`
    tableRow += `<td>${firstName}</td>`
    tableRow += `<td>${lastName}</td>`
    tableRow += `<td>${userName}</td>`
    tableRow += `<td>${registrationNumber}</td>`
    tableRow += `<td> 
    <a onclick="deleteUser(this)">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 7L18.1327 19.1425C18.0579 20.1891 17.187 21 16.1378 21H7.86224C6.81296 21 5.94208 20.1891 5.86732 19.1425L5 7M10 11V17M14 11V17M15 7V4C15 3.44772 14.5523 3 14 3H10C9.44772 3 9 3.44772 9 4V7M4 7H20" stroke="#111827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>                
    </a> 
  </td>`
    tableRow += `</tr>`
  
    document.getElementById('tbody').innerHTML = tableRow;
    users.push(newUser)
    fullFunction()
    console.log("users", users)
    modal.style.display = "none";
  })
  
  fullFunction()