import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navbar/Navbar";
import HomePage from "./components/Home/HomePage";
import Category from "./components/Category/Category";
import Reviews from "./components/Review/Reviews";
import Contacts from "./components/Contact/Contacts";
import Footer from "./components/Footer/Footer";
import AddCart from "./components/Addcart/Addcart";
import Wishlist from "./components/Wishlist/Wishlist";
function App() {
  const [cartItems, setCartItems] = useState([]);
  const [savedItems, setSavedItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const existingProduct = prevItems.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  const handleIncreaseQuantity = (productId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecreaseQuantity = (productId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleSaveForLater = (productId) => {
    setCartItems((prevItems) => {
      const item = prevItems.find((item) => item.id === productId);
      setSavedItems((prevSavedItems) => [...prevSavedItems, item]);
      return prevItems.filter((item) => item.id !== productId);
    });
  };

  const handleRemoveFromSaved = (productId) => {
    setSavedItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  const handleAddBackToCart = (productId) => {
    const item = savedItems.find((item) => item.id === productId);
    setSavedItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
    setCartItems((prevItems) => [...prevItems, { ...item, quantity: 1 }]);
  };

  const handleShowCart = () => setShowCart(true);
  const handleCloseCart = () => setShowCart(false);

  // handle wishlist
  const [wishlistItems, setWishlistItems] = useState([]);
  const [showWishlist, setShowWishlist] = useState(false);

  const handleToggleWishlist = (product) => {
    setWishlistItems((prevItems) => {
      const existingProduct = prevItems.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevItems.filter((item) => item.id !== product.id);
      } else {
        return [...prevItems, product];
      }
    });
  };

  const handleRemoveFromWishlist = (product) => {
    setWishlistItems((prevItems) =>
      prevItems.filter((item) => item.id !== product.id)
    );
  };

  const handleShowWishlist = () => setShowWishlist(true);
  const handleCloseWishlist = () => setShowWishlist(false);
  return (
    <div className="App">
      <NavBar onShowCart={handleShowCart} onShowWishlist={handleShowWishlist} />
      <div id="home" style={{ height: "100vh", background: "#F8E5E5" }}>
        <HomePage />
      </div>
      <div id="bouquet" style={{ background: "#F8E5E5" }}>
        <Category
          categoryName="Bouquet"
          onAddToCart={handleAddToCart}
          onToggleWishlist={handleToggleWishlist}
          wishlistItems={wishlistItems}
        />
      </div>
      <div id="basket" style={{ background: "#F8E5E5" }}>
        <Category
          categoryName="Basket"
          onAddToCart={handleAddToCart}
          onToggleWishlist={handleToggleWishlist}
          wishlistItems={wishlistItems}
        />
      </div>
      <div id="vase" style={{ background: "#F8E5E5" }}>
        <Category
          categoryName="Vase"
          onAddToCart={handleAddToCart}
          onToggleWishlist={handleToggleWishlist}
          wishlistItems={wishlistItems}
        />
      </div>
      <div id="perfume" style={{ background: "#F8E5E5" }}>
        <Category
          categoryName="Perfume"
          onAddToCart={handleAddToCart}
          onToggleWishlist={handleToggleWishlist}
          wishlistItems={wishlistItems}
        />
      </div>
      <div id="review" style={{ background: "#F8E5E5" }}>
        <Reviews />
      </div>
      <div id="contact" style={{ background: "#F8E5E5" }}>
        <Contacts />
      </div>
      <Footer />
      <AddCart
        cartItems={cartItems}
        savedItems={savedItems}
        show={showCart}
        handleClose={handleCloseCart}
        onRemoveFromCart={handleRemoveFromCart}
        onIncreaseQuantity={handleIncreaseQuantity}
        onDecreaseQuantity={handleDecreaseQuantity}
        onSaveForLater={handleSaveForLater}
        onRemoveFromSaved={handleRemoveFromSaved}
        onAddBackToCart={handleAddBackToCart}
      />
      <Wishlist
        wishlistItems={wishlistItems}
        onRemoveFromWishlist={handleRemoveFromWishlist}
        onAddToCart={handleAddToCart}
        show={showWishlist}
        handleClose={handleCloseWishlist}
      />
    </div>
  );
}

export default App;
