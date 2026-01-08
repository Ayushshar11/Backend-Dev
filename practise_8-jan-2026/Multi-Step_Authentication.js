const getUser = (username) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: "Rahul", type: "Premium" });
    }, 1500);
  });
};

const checkSubscription = (user) => {
  return new Promise((resolve, reject) => {
    if (user.type === "Premium") {
      resolve("Access Granted to Netflix");
    } else {
      reject("Please Subscribe");
    }
  });
};

async function loginFlow(username) {
  try {
    const user = await getUser(username);
    const accessStatus = await checkSubscription(user);
    console.log(accessStatus);
  } catch (error) {
    console.error(error);
  }
}

loginFlow("rahul_codes");