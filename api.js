fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json) =>
    json.map((product) => {
      // Creating a div element 'divCol'
      let divCol = document.createElement("div");
      // assigning a class of 'col-sm-4' to divCol
      divCol.classList.add("col-sm-4");
      // Accessing element by id 'row'
      let row = document.getElementById("row");
      // appeding divCol to row
      row.appendChild(divCol);
      // Creating an image tag
      let img = document.createElement("img");
      img.src = product.image;
      img.style.height = "200px";
      img.style.width = "200px";
      // append img to divCol
      divCol.appendChild(img);
      // Creating an h1 element for product title
      let h1 = document.createElement("h1");
      h1.textContent = product.title;
      // append h1 to divCol
      divCol.appendChild(h1);
      // Creating a p tag for product description
      let p = document.createElement("p");
      p.textContent = product.description;
      // appedn p tag to divCol
      divCol.appendChild(p);
      // creating an i tag for price
      let i = document.createElement("i");
      i.textContent = `$${product.price}`;
      // appeding i tag to divCol
      divCol.appendChild(i);
    })
  );
