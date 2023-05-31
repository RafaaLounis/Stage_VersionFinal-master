#Pour executer le Projet :
 - npm install  (ROOT folder)
 - npm install ( Client folder)

#Pour executer le projet naviguer dans le dossier root puis : 

 - npm run build 
 - npm start

Ecris dans le lien de naviguateur cette adresse : localhost:5000 

Project Tree :

├── client
│   ├── package.json
│   ├── package-lock.json
│   ├── public
│   │   ├── favicon.png
│   │   ├── images
│   │   │   ├── a73.jpg
│   │   │   ├── apple-watch.jpg
│   │   │   ├── deity-vo-7u-boom.webp
│   │   │   ├── flip.jpg
│   │   │   ├── iphone.jpg
│   │   │   ├── landing.jpg
│   │   │   ├── s22.jpg
│   │   │   ├── s4prowatch.jpg
│   │   │   ├── s4watch.jpg
│   │   │   ├── shure-mv7.jpg
│   │   │   ├── tab.jpg
│   │   │   └── tablet.jpg
│   │   ├── index.html
│   │   ├── manifest.json
│   │   └── robots.txt
│   ├── README.md
│   └── src
│       ├── App.js
│       ├── components
│       │   ├── AddNewProduct.jsx
│       │   ├── CartItem.jsx
│       │   ├── CartOrderSummary.jsx
│       │   ├── CheckoutItem.jsx
│       │   ├── CheckoutOrderSummary.jsx
│       │   ├── ConfirmRemovalAlert.jsx
│       │   ├── Footer.jsx
│       │   ├── Navbar.jsx
│       │   ├── OrdersTab.jsx
│       │   ├── PasswordTextField.jsx
│       │   ├── PaymentErrorModal.jsx
│       │   ├── PaymentSuccessModal.jsx
│       │   ├── PayPalButton.jsx
│       │   ├── ProductCard.jsx
│       │   ├── ProductsTab.jsx
│       │   ├── ProductTableItem.jsx
│       │   ├── ReviewsTab.jsx
│       │   ├── ShippingInformation.jsx
│       │   ├── TextField.jsx
│       │   └── UsersTab.jsx
│       ├── index.css
│       ├── index.js
│       ├── redux
│       │   ├── actions
│       │   │   ├── adminActions.js
│       │   │   ├── cartActions.js
│       │   │   ├── orderActions.js
│       │   │   ├── productActions.js
│       │   │   └── userActions.js
│       │   ├── slices
│       │   │   ├── admin.js
│       │   │   ├── cart.js
│       │   │   ├── order.js
│       │   │   ├── products.js
│       │   │   └── user.js
│       │   └── store.js
│       ├── reportWebVitals.js
│       └── screens
│           ├── AdminConsoleScreen.jsx
│           ├── CartScreen.jsx
│           ├── CheckoutScreen.jsx
│           ├── LandingScreen.jsx
│           ├── LoginScreen.jsx
│           ├── ProductScreen.jsx
│           ├── ProductsScreen.jsx
│           ├── ProfileScreen.jsx
│           ├── RegistrationScreen.jsx
│           └── YourOrdersScreen.jsx
├── package.json
├── package-lock.json
├── Projet_Stage2023.postman_collection.json
├── README.md
└── server
    ├── database.js
    ├── index.js
    ├── middleware
    │   └── authMiddleware.js
    ├── models
    │   ├── Order.js
    │   ├── Product.js
    │   └── User.js
    └── routes
        ├── orderRoutes.js
        ├── productRoutes.js
        └── userRoutes.js
