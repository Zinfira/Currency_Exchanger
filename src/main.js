import { Converter } from './../src/exchanger.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";


$(document).ready(function() {
  $("form#converter").submit(function(event) {
    event.preventDefault();

    (async () => {
      let converter = new Converter();
      let response = await converter.getExchange();
      let amount = $("input#amount").val();
      let getCurrency = $("#currency").val();
      checkResponse(response);
    });

    
  });
});