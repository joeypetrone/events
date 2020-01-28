const pies = [
    {
        name: "Dutch Apple Pie",
        price: 1000,
        isWarm: true,
        isOrganic: true,
        crust: "extra flakey",
        iceCream: "Vanilla Bean",
        isAvailable: true,
        imageUrl: "http://www.michiganapples.com/DesktopModules/DnnForge%20-%20NewsArticles/ImageHandler.ashx?Width=600&Height=600&HomeDirectory=%2FPortals%2F0%2F&FileName=Images%2FRecipes%2FI-Spy-Apple-Pie-Rev.jpg&PortalID=0&q=1",
        drinkPairing: "whiskey",
        instructor: "Zoe"
    },
    {
        name: "Regular Apple Pie",
        price: 5000,
        isWarm: true,
        isOrganic: true,
        crust: "under baked",
        iceCream: "Vegan chocolate",
        isAvailable: false,
        imageUrl: "https://cdn.tasteatlas.com/images/dishrestaurants/dc4c1489d70344b98afcfd63043fe9dc.jpg?w=600&h=450",
        drinkPairing: "All wines",
        instructor: "Mary"
    },
    {
        name: "Pizza Pie",
        price: 2.5,
        isWarm: true,
        isOrganic: false,
        crust: "yeah!",
        iceCream: "nope",
        isAvailable: false,
        imageUrl: "https://image.businessinsider.com/5a7b3662ec1ade0df20d0b2c?width=600&format=jpeg&auto=webp",
        drinkPairing: "High Life",
        instructor: "Luke"
    },
    {
        name: "Berry Pie",
        price: 1,
        isWarm: false,
        isOrganic: false,
        crust: "Oreo",
        iceCream: "nope",
        isAvailable: false,
        imageUrl: "https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/GourmetTraveller/2013/05/09/9351/1212GT-stuffing-recipes-blueberry-crostata-628.jpg?width=600&height=315&quality=75&mode=crop",
        drinkPairing: "Water",
        instructor: "Zoe"
    },
    {
        name: "Chocolate Pie",
        price: 1,
        isWarm: false,
        isOrganic: true,
        crust: "graham",
        iceCream: "Mint",
        isAvailable: true,
        imageUrl: "https://media.phillyvoice.com/media/images/16406147679_45130470be_o.2e16d0ba.fill-735x490.jpg",
        drinkPairing: "Gin",
        instructor: "Mary"
    },
    {
        name: "Pi",
        price: 2.14,
        isWarm: false,
        isOrganic: true,
        crust: "Crumb",
        iceCream: "Moose Tracks",
        isAvailable: true,
        imageUrl: "data:image/jpeg;base64,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",
        drinkPairing: "Milk",
        instructor: "Luke"
    },
    {
        name: "Pumpkin Pie",
        price: 10,
        isWarm: true,
        isOrganic: true,
        crust: "Crispy",
        iceCream: "Vanilla",
        isAvailable: true,
        imageUrl: "https://images-gmi-pmc.edge-generalmills.com/607bb655-5da3-478e-b52c-746f96c5444b.jpg",
        drinkPairing: "Coke",
        instructor: "Joey"
    },
    {
        name: "Cherry Pie",
        price: 12,
        isWarm: true,
        isOrganic: true,
        crust: "Crispy",
        iceCream: "Vanilla",
        isAvailable: true,
        imageUrl: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2009/6/15/0/JI_20731_s4x3.jpg.rend.hgtvcom.826.620.suffix/1371589402748.jpeg",
        drinkPairing: "Moscow Mule",
        instructor: "Joey"
    },
]

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

// 3 cards to a row
// nice big images
// display all information in the pie objects
const pieBuilder = (monkeybuttArray) => {
    let domString = '';
    for (let i = 0; i < monkeybuttArray.length; i++) {
        domString += `<div class="pieCard">`;
        domString += `<section id="pieName"><h2>${monkeybuttArray[i].name}</h2></section>`;
        domString += `<section id="pieImage"><img src=${monkeybuttArray[i].imageUrl} alt="A tastey ${monkeybuttArray[i].name}"></section>`;
        domString += `<section id="pieInfo">`;
        domString += `<section id="piePrice"><span id="pieSection">Price:</span> $${monkeybuttArray[i].price}</section>`;
        if (monkeybuttArray[i].isWarm === true) {
            domString += `<section id="pieIsWarm"><span id="pieSection">Serve:</span> Warm</section>`;
        } else {
            domString += `<section id="pieIsWarm"><span id="pieSection">Serve:</span> Cold</section>`;
        }
        if (monkeybuttArray[i].isOrganic === true) {
            domString += `<section id="pieIsOrganic"><span id="pieSection">Organic:</span> Yes</section>`;
        } else {
            domString += `<section id="pieIsOrganic"><span id="pieSection">Organic:</span> No</section>`;
        }
        domString += `<section id="pieCrust"><span id="pieSection">Crust:</span> ${monkeybuttArray[i].crust}</section>`;
        domString += `<section id="pieIceCream"><span id="pieSection">Ice Cream:</span> ${monkeybuttArray[i].iceCream}</section>`;
        if (monkeybuttArray[i].isAvailable === true) {
            domString += `<section id="pieAvailable"><span id="pieSection">Availability:</span> In Stock!</section>`;
        } else {
            domString += `<section id="pieAvailable"><span id="pieSection">Availability:</span> Out of Stock</section>`;
        }
        domString += `<section id="pieDrink"><span id="pieSection">Drink Pairing:</span> ${monkeybuttArray[i].drinkPairing}</section>`;
        domString += `<section id="pieInstructor"><span id="pieSection">Instructor:</span> ${monkeybuttArray[i].instructor}</section>`;
        domString += `</section>`;
        domString += `</div>`;
    }
    printToDom('pie-cards', domString);
};

const findMyPies = (e) => {
    const buttonId = e.target.id;
    const myPies = [];
    if (buttonId === 'All') {
        pieBuilder(pies);
    } else {
    for (let i=0; i < pies.length; i++) {
        if( pies[i].instructor === buttonId) {
            myPies.push(pies[i]);
        }

        }
    }
    pieBuilder(myPies);
}

pieBuilder(pies);

document.getElementById('Zoe').addEventListener('click', findMyPies);
document.getElementById('Mary').addEventListener('click', findMyPies);
document.getElementById('Luke').addEventListener('click', findMyPies);
document.getElementById('Joey').addEventListener('click', findMyPies);
document.getElementById('All').addEventListener('click', findMyPies);