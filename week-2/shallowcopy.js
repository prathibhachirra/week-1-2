const user = {
                id: 101,
                name: "Ravi",
                preferences: {
                  theme: "dark",
                  language: "en"
                }
              };
              let copyuser = { ...user }; // shallow copy
        // Change:
        // i. name in the copied object
        // ii. preferences.theme in the copied object
        // iii .Log both original and copied objects
        // iv. Observe what changes and what doesn’t
        copyuser.name="kumar"
        copyuser.preferences.theme="light"
        // when i modify the copyuser preferences.theme as light it also modify the original user as also light but firstly it is dark this is because of shallow copy only first level is copied not nested objects
        console.log("original user:",user)
        console.log("copied user:",copyuser)




//Hands-On 2: Deep Copy (Isolation & Safety Use Case)
//---------------------------------------------------

// Given Data:
                const order = {
                  orderId: "ORD1001",
                  customer: {
                    name: "Anita",
                    address: {
                      city: "Hyderabad",
                      pincode: 500085
                    }
                  },
                  items: [
                    { product: "Laptop", price: 70000 }
                  ]
                };

// Task:
  // 1. Create a deep copy of order
  // 2. Modify in copied object:
 //  i. customer.address.city
 //  ii. items[0].price
 //  iii. Verify original object remains unchanged
 //Creation of deep copy
let Copy = structuredClone(order);

// Modification of address and item
Copy.customer.address.city = "Bengaluru";
Copy.items[0].price = 65000;
//Printing it
console.log("Order:",order);
console.log("OrderCopy:",Copy)
        