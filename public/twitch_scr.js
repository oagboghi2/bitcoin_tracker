const url = `https://api.coindesk.com/v1/bpi/currentprice/USD.json`
const output = document.getElementById("output")


//helper function
function createNode(element, className){
  let node = document.createElement(element); //Create the type of element you pass as a parameter
  node.className = className;
  return node;
}

function append(parent, el){
  return parent.appendChild(el); //Append the second parameter to the first one
}

//
document.addEventListener("DOMContentLoaded", function(event) {
   console.log("DOM fully loaded and parsed");
   ajaxCall(url);
 });

function ajaxCall(url){
  console.log(url);

  fetch(url)
  .then(response => {
    response.json().then(data => {
      let USDrate = data.bpi.USD.rate;
      document.getElementById("main-price").innerHTML = USDrate;
      console.log("$", data.bpi.USD.rate);
      console.log("bpi", data);
    });
})
 .catch(err => {
    console.error();
  });
};

function getResponse(){
  fetch('//localhost:3000/api/btc', {method: 'get'})
  .then(refreshData => {
    console.log(refreshData);
  })
  .catch(err => {
    console.log(err);
  });
};

function displayUserData(){
  fetch('//localhost:3000/api/DB', {method: 'get'})
  .then(response => {
    response.json().then(response => {
      console.log(response);
      response.userData.map(function(data){
        let li = createNode('li', 'bit-coin-list-item'); //Create the elements we need
        let span = createNode('span', 'bit-coin-text');
        span.innerHTML = `${data.username} ${data.first_name} ${data.last_name} ${data.btc_quantity} ${data.btc_price} `;
        append(li, span);
        append(output, li);

      })
    }).catch(err => {
    console.log(err);
    });
  })
}
