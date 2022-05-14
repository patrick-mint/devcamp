import axios from 'axios';


export default function App() {

  axios.get("/api/users").then(function(response) {
    console.log(response.data.data);
    let rowDisplay = document.getElementById('rowDisplay')
    let textHtml = '';
     for (let i=0; i<response.data.data.length; i++) {
         textHtml += "<td><h5>" + response.data.data[i].first_name + "</h5>";
         textHtml += "<p>" + response.data.data[i].email + "</p>";
         textHtml += "<img src=" + response.data.data[i].avatar + "></td>" ;
     }
     rowDisplay.innerHTML = textHtml;
})
return(
  <>
<h1 className="d-flex justify-content-center">Hello ReqRes user!</h1>

<table className="d-flex justify-content-center"><tbody><tr id="rowDisplay"></tr></tbody></table>


</>
)
}

