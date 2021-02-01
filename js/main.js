fetch("../data/data.json").then(response=>{
    return response.json()
}).then(data=>{
    
    displayData(data)
})

function displayData(info){
 
  var bodyElement=document.querySelector("body");

  var row=document.createElement("section")
  row.classList.add("row","justify-content-center");

  bodyElement.append(row)

  info.mobiles.map(value=>{
      var column=document.createElement("article")
      column.classList.add("col-sm-10","col-md-6","col-lg-3")
      row.append(column);

      //Card
      var card=document.createElement("div");
      card.classList.add("card","mt-3");

      // Card-body
      var cardBody=document.createElement("div");
      cardBody.classList.add("card-body");
      
      //Image
      var imageElement=document.createElement("img");
      imageElement.src=value.image;
      imageElement.classList.add("img-responsive");
      imageElement.alt=value.name;

      //Name
      var name=document.createElement("h2");
      name.textContent=value.name;
      name.classList.add("text-center","#000");

      //Original price
      var op=document.createElement("p");
      op.classList.add("text-danger","text-center","text-strike");
      op.innerHTML= " <s> ₹"+value.originalprice+"/- </s> "
      

      //Price
      var price=document.createElement("p");
      price.classList.add("text-success","text-center");
      price.textContent="₹"+value.price+"/-";

      
      
      
      cardBody.append(imageElement);

      cardBody.append(name);
      cardBody.append(op);

      cardBody.append(price);
       
      //button
      var buttonParent=document.createElement("div")
      buttonParent.classList.add("d-grid","gap-2");
      cardBody.append(buttonParent)
      var button=document.createElement("button");
      button.classList.add("btn","btn-block","btn-primary");
      button.textContent="Add to cart"
      buttonParent.append(button);
      

      card.append(cardBody);
      column.append(card);
  })
}