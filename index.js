
var price   = document.querySelector('#price');
var btn     = document.querySelector('button');
var list    = document.querySelector('#list');
var currency;
var coin;
  

//make the request
var XHR = new XMLHttpRequest();

btn.addEventListener('click', function(){
  XHR.onreadystatechange = function(){
    if(XHR.readyState == 4 &&  XHR.status == 200){
      var data = JSON.parse(XHR.responseText);
      var currentPrice = data.bpi[currency].rate;
      price.innerText = coin + currentPrice ;
    
    }
  };
  
  var url = "https://api.coindesk.com/v1/bpi/currentprice.json";
 
  
  XHR.open('GET', url );
  XHR.send();
});




list.onchange = function() {
var chosenoption=this.options[this.selectedIndex];
  if (chosenoption.value == "euro"){
    currency = "EUR";
    coin = "€  ";
  
  }else if (chosenoption.value == "pound"){
    currency = "GBP";
    coin = "£  ";
  }else if (chosenoption.value == "dolar"){
    currency = "USD";
    coin = "$  ";
  }else{
      price.innerText = "Select first";
  }
};

