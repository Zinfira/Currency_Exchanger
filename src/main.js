import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";

$("form#converter").submit(function(event){
  event.preventDefault();
  let amount = $("input#amount").val();
  let currency = $("#currency").val();
})