const fetchUser = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ name: "Rahul", isPremium: true }), 1000);
  });
};

const fetchOrders = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { item: "Laptop", price: 1000, status: "delivered" },
        { item: "Phone", price: 500, status: "pending" }
      ]);
    }, 2000);
  });
};

async function displayDashboard(id) {
  try {
    // 1. Await both functions (running them in parallel for efficiency)
    const [user, orders] = await Promise.all([fetchUser(id), fetchOrders(id)]);

    // 2. Filter for delivered orders
    // 3. Apply 10% discount if Premium
    const processedOrders = orders
      .filter(order => order.status === "delivered")
      .map(order => {
        const finalPrice = user.isPremium ? order.price * 0.9 : order.price;
        return { ...order, price: finalPrice };
      });

    // 4. Calculate total and print greeting
    const total = processedOrders.reduce((sum, order) => sum + order.price, 0);

    console.log(`Hello, ${user.name}!`);
    console.log(`Your delivered orders total: $${total}`);
    console.log("Details:", processedOrders);

  } catch (error) {
    console.error("Dashboard failed to load:", error);
  }
}

displayDashboard(1);