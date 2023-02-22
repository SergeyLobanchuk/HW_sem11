const productsData = JSON.parse(dataInfo);
const contentBox = document.querySelector('.content');
const feturedItems = document.querySelector('.feturedItems');
const feturedItemsText = document.createElement('p');


productsData.forEach(element => {

    const productContent = document.createElement('div');
    const productInfo = document.createElement('div');
    const image = document.createElement('img');
    const name = document.createElement('h3');
    const productDescription = document.createElement('p');
    const price = document.createElement('p');



    feturedItemsText.textContent = 'Shop for items based on what we featured in this week';
    image.src = element.image;
    name.textContent = element.name;
    productDescription.textContent = element.productDescription;
    price.textContent = element.price;



    feturedItemsText.style.display = 'flex';
    feturedItemsText.style.justifyContent = 'center';
    feturedItemsText.style.marginRight = '289px';
    contentBox.style.width = '70%';
    contentBox.style.marginTop = '40px';
    contentBox.style.display = 'flex';
    contentBox.style.flexWrap = 'wrap'
    contentBox.style.justifyContent = 'center';
    image.style.boxShadow = "8px 8px 10px gray";
    image.style.width = '180px';
    image.style.height = '281px';
    contentBox.style.gap = '32px';

    feturedItems.appendChild(feturedItemsText);
    contentBox.appendChild(productContent);
    productContent.appendChild(image);
    productInfo.appendChild(name);
    productInfo.appendChild(productDescription);
    productInfo.appendChild(price);


});