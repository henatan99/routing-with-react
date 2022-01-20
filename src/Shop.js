import React, { useState, useEffect } from 'react';

function Shop() {
  const myHeaders = new Headers();

  const myRequest = new Request('https://fortnite-api.com/v1/banners', {
    method: 'GET',
    headers: myHeaders,
    mode: 'cors',
    cache: 'default',
  });

  const fetchItems = async () => {
    const data = await fetch(myRequest);
    const items = await data.json();
    console.log('status: ', data.status);
    console.log('ok: ', data.ok);
    console.log(items);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="Shop">
      <h1>Shop</h1>
    </div>
  );
}

export default Shop;
