async function getuser(rangeVal){
    const response = await fetch(`https://randomuser.me/api/?results=${rangeVal}`);
    const data = await response.json();
    let user = data.results;  
    document.getElementById('myTable').innerHTML =""; 

    let table = document.getElementById('myTable')


    if (rangeVal>=1){
        document.getElementById("userDetails").style.display = "block";

            for (let i=0; i<user.length; i++){
                let row = `<tr>
                                <td>${i +1}</td>
                                <td>${user[i].name.first}</td>
                                <td>${user[i].dob.age}</td>
                                <td>${user[i].gender}</td>
                                <td>${user[i].email}</td>
                </tr>`
                    table.innerHTML += row

            }
        }
    }

    document.getElementById("fetchUser").addEventListener('click', () =>{
        const rangeVal = document.getElementById("rangeval").value;

        getuser(rangeVal)
    });

    document.getElementById("clear").addEventListener('click', () =>{
        document.getElementById("userDetails").style.display = "none";
        document.getElementById("rangeval").value="";
        document.getElementById('myTable').innerHTML ="";

    });