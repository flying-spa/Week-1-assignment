/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  //calculate the total spent in each category

  let categoryPriceSpent = new Map();
  for (var i=0;i<transactions.length;i++) {
    var currentCategory = transactions[i].category;
    if(categoryPriceSpent.has(currentCategory)) {
      categoryPriceSpent.set(currentCategory, categoryPriceSpent.get(currentCategory)+
       transactions[i].price);
    }
    else {
      categoryPriceSpent.set(currentCategory, transactions[i].price);
    }
  }
  var result = []
  for(let[key, value] of categoryPriceSpent) {
    result.push({
      category: key,
      totalSpent: value
    })
  }
  return result;
}

module.exports = calculateTotalSpentByCategory;
