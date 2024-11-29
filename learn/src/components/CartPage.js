import React, { useContext, useEffect, useState } from 'react';
import { contextapi } from '../Contextapi';

const CartPage = () => {
  const [message, setMessage] = useState('');
  const [prod, setProd] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const { cart, setCart, totalitems } = useContext(contextapi);

  useEffect(() => {
    if (cart && cart.items) {
      fetch('/api/cart', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ids: Object.keys(cart.items) }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status === 200) {
            setProd(data.apiData);
            calculateTotalPrice(data.apiData);
          } else {
            setMessage(data.message);
          }
        })
        .catch((error) => console.error('Error fetching cart data:', error));
    } else {
      setMessage('Cart is empty or undefined');
    }
  }, [cart]);

  const calculateTotalPrice = (products) => {
    const price = products.reduce((acc, item) => {
      const qty = cart.items[item._id] || 0;
      return acc + item.PPrice * qty;
    }, 0);
    setTotalPrice(price);
  };

  const handleQty = (id) => {
    return cart.items[id];
  };

  const handleInc = (e, id) => {
    let currentQty = handleQty(id);
    let _cart = { ...cart };
    _cart.items[id] = currentQty + 1;
    _cart.totalitems += 1;
    setCart(_cart);
    calculateTotalPrice(prod);
  };

  const handleDec = (e, id) => {
    let currentQty = handleQty(id);
    if (currentQty === 1) {
      return;
    }
    let _cart = { ...cart };
    _cart.items[id] = currentQty - 1;
    _cart.totalitems -= 1;
    setCart(_cart);
    calculateTotalPrice(prod);
  };

  const handleDelete = (id) => {
    let _cart = { ...cart };
    delete _cart.items[id];
    _cart.totalitems -= handleQty(id);
    setCart(_cart);

    const updatedProd = prod.filter((item) => item._id !== id);
    setProd(updatedProd);
    calculateTotalPrice(updatedProd);
  };

  return (
    <div>
      <section className="h-100 gradient-custom">
        <div className="container py-5">
          <div className="row d-flex justify-content-center my-4">
            <div className="col-md-8">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Cart Item : {prod.length}</h5>
                </div>
                <div className="card-body">
                  {prod.map((item) => (
                    <div className="row" key={item._id}>
                      <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                        <img src={`upload/${item.PImg}`} className="w-100" alt={item.PName} />
                      </div>
                      <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                        <p><strong>{item.PName}</strong></p>
                        <p>{item.PDesc}</p>
                        <button
                          type="button"
                          className="btn btn-primary btn-sm me-1 mb-2"
                          onClick={() => handleDelete(item._id)}
                        >
                          <i className="fas fa-trash" /> Remove
                        </button>
                      </div>
                      <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        <div className="d-flex mb-4" style={{ maxWidth: 300 }}>
                          <button
                            className="btn btn-primary px-3 me-2"
                            onClick={(e) => handleDec(e, item._id)}
                          >
                            <i className="fas fa-minus" />
                          </button>
                          <input
                            type="number"
                            value={handleQty(item._id)}
                            readOnly
                            className="form-control"
                          />
                          <button
                            className="btn btn-primary px-3 ms-2"
                            onClick={(e) => handleInc(e, item._id)}
                          >
                            <i className="fas fa-plus" />
                          </button>
                        </div>
                        <p className="text-start text-md-center">
                          <strong>Price: ₹{item.PPrice}</strong>
                        </p>
                      </div>
                    </div>
                  ))}
                  <hr className="my-4" />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Summary</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Total Quantity
                      <span>{totalitems}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <strong>Total Price</strong>
                      <span><strong>₹{totalPrice.toFixed(2)}</strong></span>
                    </li>
                  </ul>
                  <button type="button" className="btn btn-primary btn-lg btn-block">
                    Go to checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CartPage;
