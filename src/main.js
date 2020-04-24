import { Converter } from './../src/exchanger.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";


$(document).ready(function() {
  $("#converter").submit(function(event) {
    event.preventDefault();
    const amount = $("input#amount").val();
    const getCurrency = $("#currency").val();

    (async () => {
      let converter = new Converter();
      const response = await converter.getExchange();
      getElements(response);
  
    })();

    function getElements(response) {
      if (response.conversion_rates[getCurrency]) {
        let rate = response.conversion_rates[getCurrency];
        let conversion = (amount * rate).toFixed(2);
        $("#newAmount").text(" " + conversion + " " + getCurrency);
        $("#result").show();
      }
    }
    
  });
});