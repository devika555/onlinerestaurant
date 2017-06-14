/*$(document).ready(function(){*/
 $(document).ready(function(){
     

     	var data=		[
	{
		"name":"Bhel puri",
		"description":"A dish made of popcorn and sev,tomatoes,onion and etc",
		"kind":"veg",
		"price":"240"
	},
	{
		"name":"Pani puri",
		"description":"A dish of puri and pani",
		"kind":"veg",
		"price":"280"

	},
	{
		"name":"Masala puri",
		"description":"A dish of puri and pani",
		"kind":"veg",
		"price":"380"
	}
]
				/*singledish -- node to hold an entire dish info
				  name_desc_node -- node to hold div of name and desc
				  price_node-- division to hold price and adding to cart
				   */
	
				for(var item=0;item<data.length;item++){
					var singledish=document.createElement("div");
					singledish.setAttribute("class","single");

					var name_desc_node=document.createElement("div");
					name_desc_node.setAttribute("class","namedesc");
					var name_desc=document.createElement("dl");
					var namenode=document.createElement("dt");
					var name=document.createTextNode(data[item].name);
					namenode.appendChild(name);
					name_desc.appendChild(namenode);
					var descnode=document.createElement("dd");
					var desc=document.createTextNode(data[item].description);
					descnode.appendChild(desc);
					name_desc.appendChild(descnode);

					name_desc_node.appendChild(name_desc);

					var price_add_node=document.createElement("div");
					price_add_node.setAttribute("class","priceadd");
					var pricenode=document.createElement("h4");
					var price=document.createTextNode(data[item].price);
					pricenode.appendChild(price);
					var addnode=document.createElement("button");
					var addtext=document.createTextNode("add");
					addnode.appendChild(addtext);
					addnode.setAttribute("class","add");
					price_add_node.appendChild(pricenode);
					price_add_node.appendChild(addnode);
					singledish.appendChild(name_desc_node);
					singledish.appendChild(price_add_node);
					var final=document.getElementById("dish");
					final.appendChild(singledish); 

				}
				
		

			$(".add").click(function(){
					var cartadd=document.getElementsByClassName("cart");
					var pricenode=document.createElement("h4");
					var elemName=$(this).parent().parent().text();
					var price=document.createTextNode(elemName);
					pricenode.appendChild(price);
					cartadd[0].appendChild(pricenode);


			});


	

   });

		





