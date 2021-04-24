"use strict";

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 10
   Case Problem 1

   Author: Brandon Mohamed
   Date:   03-27-21
   
   Filename: tc_cart.js
	
*/
var orderTotal = 0; // Initial value to 0.

var cartHTML ="<table> <tr><th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th></tr>";

for(var i = 0;i < item.length; i++)
{
itemCost = itemPrice [i] * itemQty [i];
orderTotal += itemCost;
cartHTML += " <tr><td><img src='images/tc_item.png' alt=" + item[i] + 
"></td><td>" + itemDescription[i] + "</td><td>" + "$"+itemPrice[i] +
"</td><td>"+itemQty[i] + "</td><td>" + "$" + itemCost + "</td></tr>"; 
}

cartHTML += "<tr><td colspan = '4' > Subtotal</td> <td>" + "$" + orderTotal + "</td></tr></table>";
var elem = document.getElementById("cart");
elem.innerHTML = cartHTML;
