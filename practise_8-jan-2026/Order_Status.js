const checkOrderStatus = (orderId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof orderId === 'number') {
        resolve("Order Shipped");
      } else {
        reject("Invalid Order ID");
      }
    }, 1000);
  });
};

async function processOrder(id) {
  try {
    const status = await checkOrderStatus(id);
    console.log(status);
  } catch (error) {
    console.error("Error:", error);
  }
}

// Test cases
processOrder(101);    // Success: Order Shipped
processOrder("ABC");  // Error: Invalid Order ID