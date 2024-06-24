
function Product(id, title, price, description, image) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.description = description;
    this.image = image;
  }
  
  let products = [];
  
  fetch('https://fakestoreapi.com/products?limit=20')
   .then(res => res.json())
   .then(data => {
      data.forEach(product => {
        let newProduct = new Product(product.id, product.title, product.price, product.description, product.image);
        products.push(newProduct);
      });
      render_products();
    });
  
  function render_products() {
    products.forEach(product => {
      const title = document.createElement('h2');
      const price = document.createElement('h4');
      const des = document.createElement('p');
      const div = document.createElement('div');
      const image = document.createElement('img');
  
      div.classList = 'card';
      image.src = product.image;
      title.innerText = `Name: ${product.title}`;
      price.innerText = `Price: ${product.price}`;
      des.innerText = `Description: ${product.description}`;
  
      div.appendChild(image);
      div.appendChild(title);
      div.appendChild(price);
      div.appendChild(des);
  
      card_container.appendChild(div);
    });
  }
  
  const card_container = document.getElementById('product_container');

 
  // Import the functions you need from the SDKs you need
//   import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
//   import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
//   // TODO: Add SDKs for Firebase products that you want to use
//   // https://firebase.google.com/docs/web/setup#available-libraries

//   // Your web app's Firebase configuration
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   const firebaseConfig = {
//     apiKey: "AIzaSyCnzYhMH0aFLAZ_96CS5etkPEl7Y9P_pNA",
//     authDomain: "noor-b92a5.firebaseapp.com",
//     projectId: "noor-b92a5",
//     storageBucket: "noor-b92a5.appspot.com",
//     messagingSenderId: "401636808225",
//     appId: "1:401636808225:web:9a71a4ec8417872700f560",
//     measurementId: "G-Q5FL89J9SZ"
//   };



 // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);
//   const createPostForm = document.getElementById('create-post-form');
//   const postTitleInput = document.getElementById('post-title');
//   const postContentInput = document.getElementById('post-content');
  
//   createPostForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const post = {
//       title: postTitleInput.value,
//       content: postContentInput.value,
//     };
//     firebase.firestore().collection('posts').add(post);
//     postTitleInput.value = '';
//     postContentInput.value = '';
//   });