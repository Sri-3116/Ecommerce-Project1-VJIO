var Sidebar = document.querySelector(".side-nav-items")
var Sidebtn = document.getElementById("Menu-btn")
var SideCloseBtn = document.getElementById("MenuClosebtn");

Sidebtn.addEventListener("click",()=>{
    Sidebar.style.transform = `translateX(0%)`
})
SideCloseBtn.addEventListener("click",()=>{
    Sidebar.style.transform = `translateX(-100%)`
})

var Closebtn = document.getElementById("closebtn")
var ads = document.getElementById("ads")
Closebtn.addEventListener("click",function(){
    ads.style.display = "none"
})





var arr = [];

function handleCheckboxes(name) {
    var checkboxes = document.getElementsByName(name);
    for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].addEventListener("change", (event) => {
            if (event.target.checked) {
                arr.push(event.target.value);
            }
            else {
                var index = arr.indexOf(event.target.value);

                if (index != -1) {
                    arr.splice(index, 1);
                }
            }
            filterProducts();
        });
    }
}

handleCheckboxes("Occation");
handleCheckboxes("Colors");
handleCheckboxes("Arrivals");

var JCLASS = document.querySelector(".dress-collection");

var DressData = [
    {
        Name: "Striped Pleated Shirt",
        url: "./images/women6.avif",
        Price: "₹999",
        tags: ["Women Style", "Black", "New"]
    },
    {
        Name: "Odara Scallops",
        url: "./images/women7.avif",
        Price: "₹800",
        tags: ["Women Style", "Blue", "New"]
    },
    {
        Name: "Tiered Suit",
        url: "./images/women5.avif",
        Price: "₹3000",
        tags: ["Women Style", "Red", "New"]
    },
    {
        Name: "Dramy Trend",
        url: "./images/women4.avif",
        Price: "₹600",
        tags: ["Women Style", "White", "Old"]
    },
    {
        Name: "Michael kors",
        url: "./images/shoes4.avif",
        Price: "₹579",
        tags: ["Max shoes", "White", "Old"]
    },
    {
        Name: "Asics",
        url: "./images/shoes8.avif",
        Price: "₹499",
        tags: ["Max shoes", "Red", "New"]
    },
    {
        Name: "Ferragamo",
        url: "./images/shoes3.avif",
        Price: "₹699",
        tags: ["Max shoes", "Blue", "New"]
    },
    {
        Name: "Tod's",
        url: "./images/shoes1.avif",
        Price: "₹849",
        tags: ["Max shoes", "Red", "Old"]
    },
    {
        Name: "Michael kor",
        url: "./images/w89.avif",
        Price: "₹999",
        tags: ["Stylish Watches", "Black", "New"]
    },
    {
        Name: "Emporio Armani",
        url: "./images/w1.avif",
        Price: "₹299",
        tags: ["Stylish Watches", "White", "New"]
    },
    {
        Name: "TISSOT",
        url: "./images/w4.avif",
        Price: "₹749",
        tags: ["Stylish Watches", "Black", "Old"]
    },
    {
        Name: "ZIVANCHE",
        url: "./images/w23.avif",
        Price: "₹1099",
        tags: ["Stylish Watches", "Black", "New"]
    },
    {
        Name: "White T-shirt",
        url: "./images/shirt4.avif",
        Price: "₹899",
        tags: ["Women Style", "White", "Old"]
    },
    {
        Name: "Jeans",
        url: "./images/jean2.avif",
        Price: "₹799",
        tags: ["Women Style", "Blue", "New"]
    },
    {
        Name: "Formal Shirt",
        url: "./images/shirt1.avif",
        Price: "₹449",
        tags: ["Women Style", "White", "Old"]
    },
    {
        Name: "Gloomy Hoodi",
        url: "./images/Hoodi.avif",
        Price: "₹999",
        tags: ["Women Style", "Black", "New"]
    }
];

function renderProducts(products) {  
    JCLASS.innerHTML = "";
    
    if(products == 0){
        var NOT_FOUND = document.createElement("div");
        NOT_FOUND.className = "not-found";
        NOT_FOUND.innerHTML = `
            <h2 style="font-size:3vw">No Products Found</h2>
            <p style="font-size:1.5vw">Try changing your search or filters.</p>
        `;
        JCLASS.append(NOT_FOUND);
    }
    products.forEach(item => {
        var Dress_Card = document.createElement("div");
        Dress_Card.className = "dress-card";
        Dress_Card.innerHTML = `
            <img src="${item.url}">
            <h1>${item.Name}</h1>
            <p>${item.Price}</p>
        `;
        JCLASS.append(Dress_Card);
    });
}

function filterProducts() {
    if (arr.length == 0) {
        renderProducts(DressData);
        return;
    }
    var filtered = DressData.filter(product =>
        product.tags.some(tag => arr.includes(tag))
    );
    renderProducts(filtered);
}
renderProducts(DressData);


var IPBOX = document.getElementById("SearchInput");
IPBOX.addEventListener("input", (evenet) => {
    var value = evenet.target.value.toUpperCase();
    var filtered = DressData.filter(product =>
        product.Name.toUpperCase().includes(value)
    );
    renderProducts(filtered);
});

