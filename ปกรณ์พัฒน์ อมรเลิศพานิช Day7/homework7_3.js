let result = '';

axios.get("homework7_3.json").then(function(response) {
    
    let Data_Api = response.data;
    console.log(Data_Api);

    
    let dataFilter_gender_and_friends = Data_Api.filter( obj => {
        return obj.gender == 'male' && obj.friends.length >= 2 
    });
    console.log(dataFilter_gender_and_friends);

    let Filter_Request_details = dataFilter_gender_and_friends.map(obj => {
        return{
            name: obj.name, 
            gender: obj.gender, 
            company: obj.company, 
            email: obj.email, 
            friends: obj.friends, 
            balance: parseFloat(obj.balance.replace("$","").replace(",","")/10).toFixed(2).toString()
        }   
    })
    console.log(Filter_Request_details);

    let data = (x) => {
        let friend = "";
        for (let i = 0; i < Filter_Request_details[x].friends.length; i++) {
            friend += `<li>${Filter_Request_details[x].friends[i].name}</li>`;
    }
    return `<ol>` + friend + `</ol>`;
}



    result += `<table class="table">
    <thead><tr>
    <th scope="col">name</th>
    <th scope="col">gender</th>
    <th scope="col">company</th>
    <th scope="col">email</th>
    <th scope="col">friends</th>
    <th scope="col">balance</th>
    </tr></thead><tbody><tr>`;

    

    for (i in Filter_Request_details) {
       
        //Col 1  
        result += `<th scope="row">${Filter_Request_details[i].name}</th>`;

        //Col 2
        result += `<td>${Filter_Request_details[i].gender}</td>`;

        //Col 3
        result += `<td>${Filter_Request_details[i].company}</td>`;

        //Col 4
        result += `<td>${Filter_Request_details[i].email}</td>`;

        //Col 5
        result += `<td>${data(i)}</td>`;

        //Col 6
        result += `<td>$${Filter_Request_details[i].balance}</td>`;

        //End 
        result += `</tr><tr>`;
    }

   
    result += `</tr></tbody></table>`;
    document.getElementById("display").innerHTML = result;
});