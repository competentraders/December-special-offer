const products = [
  {
    id: 1,
    name: "Luxury Christmas Gift Box",
    country: "usa",
    oldPrice: 1500,
    newPrice: 1000
  },
  {
    id: 2,
    name: "Women's Winter Coat",
    country: "uk",
    oldPrice: 900,
    newPrice: 600
  },
  {
    id: 3,
    name: "Family Holiday Decoration Set",
    country: "canada",
    oldPrice: 400,
    newPrice: 250
  }
];

const container = document.getElementById("productContainer");
const filter = document.getElementById("countryFilter");

function renderProducts(country = "all") {
  container.innerHTML = "";

  products
    .filter(p => country === "all" || p.country === country)
    .forEach(product => {
      const deposit = product.newPrice / 2;

      container.innerHTML += `
        <div style="
          background:white;
          padding:15px;
          margin:15px 0;
          border-radius:8px;
          box-shadow:0 0 5px #ccc;
        ">
          <h3 style="margin:0 0 10px 0;">${product.name}</h3>

          <p style="text-decoration:line-through; color:gray; margin:0;">
            $${product.oldPrice}
          </p>

          <p style="color:green; font-size:20px; font-weight:bold; margin:5px 0;">
            $${product.newPrice}
          </p>

          <p style="margin:10px 0; color:#444;">
            Pay $${deposit} now, Pay $${deposit} on delivery.
          </p>

          <button onclick="payDeposit(${product.id})"
            style="
              background:dodgerblue;
              color:white;
              padding:10px;
              border:none;
              border-radius:5px;
              cursor:pointer;
            ">
            Pay Deposit ($${deposit})
          </button>
        </div>
      `;
    });
}

function payDeposit(id) {
  const product = products.find(p => p.id === id);
  const deposit = product.newPrice / 2;

  alert(`
Deposit Invoice Created

Product: ${product.name}
Amount to Pay Now: $${deposit}
Amount on Delivery: $${deposit}

You can integrate Crypto / Gift Card API here.
`);
}

filter.addEventListener("change", () => {
  renderProducts(filter.value);
});

renderProducts();