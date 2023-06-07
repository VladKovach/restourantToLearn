export const pizzasItems = [
  { id: 1, price: 5, quantity: 1 },
  { id: 2, price: 6, quantity: 1 },
  { id: 3, price: 4, quantity: 1 },
  { id: 4, price: 5.5, quantity: 1 },
  { id: 5, price: 8, quantity: 1 },
  { id: 6, price: 7, quantity: 1 },
  { id: 7, price: 6.5, quantity: 1 },
  { id: 8, price: 5, quantity: 1 },
  { id: 9, price: 7, quantity: 1 },
  { id: 10, price: 9, quantity: 1 },
  { id: 11, price: 7.5, quantity: 1 },
  { id: 12, price: 4.5, quantity: 1 },
]
export const ingridItems = [
  { id: 13, price: 1, quantity: 1 },
  { id: 14, price: 0.9, quantity: 1 },
  { id: 15, price: 0.8, quantity: 1 },
  { id: 16, price: 0.6, quantity: 1 },
  { id: 17, price: 1, quantity: 1 },
  { id: 18, price: 1.2, quantity: 1 },
  { id: 19, price: 0.8, quantity: 1 },
  { id: 20, price: 0.9, quantity: 1 },
  { id: 21, price: 0.5, quantity: 1 },
  { id: 22, price: 0.6, quantity: 1 },
  { id: 23, price: 0.5, quantity: 1 },
  { id: 24, price: 0.7, quantity: 1 },
]
export const mainMenuItems = [
  { id: 25, price: 6.5, weight: 180, quantity: 1 },
  { id: 26, price: 5, weight: 220, quantity: 1 },
  { id: 27, price: 7, weight: 280, quantity: 1 },
  { id: 28, price: 9, weight: 230, quantity: 1 },
  { id: 29, price: 7.5, weight: 320, quantity: 1 },
  { id: 30, price: 4.5, weight: 250, quantity: 1 },
  { id: 31, price: 5, weight: 200, quantity: 1 },
  { id: 32, price: 6, weight: 250, quantity: 1 },
  { id: 33, price: 4, weight: 300, quantity: 1 },
  { id: 34, price: 5.5, weight: 200, quantity: 1 },
  { id: 35, price: 8, weight: 400, quantity: 1 },
  { id: 36, price: 7, weight: 350, quantity: 1 },
]

export const sushiItems = [
  { id: 37, price: 10, weight: 500, quantity: 1 },
  { id: 38, price: 9, weight: 550, quantity: 1 },
  { id: 39, price: 8, weight: 600, quantity: 1 },
  { id: 40, price: 7.5, weight: 650, quantity: 1 },
  { id: 41, price: 11, weight: 550, quantity: 1 },
  { id: 42, price: 10, weight: 800, quantity: 1 },
  { id: 43, price: 9.5, weight: 750, quantity: 1 },
  { id: 44, price: 8.5, weight: 650, quantity: 1 },
  { id: 45, price: 12, weight: 600, quantity: 1 },
  { id: 46, price: 11.5, weight: 750, quantity: 1 },
  { id: 47, price: 10.5, weight: 700, quantity: 1 },
  { id: 48, price: 9, weight: 680, quantity: 1 },
]
export const grilItems = [
  { id: 49, price: 7, weight: 350, quantity: 1 },
  { id: 50, price: 6.5, weight: 180, quantity: 1 },
  { id: 51, price: 5, weight: 220, quantity: 1 },
  { id: 52, price: 7, weight: 280, quantity: 1 },
  { id: 53, price: 9, weight: 230, quantity: 1 },
  { id: 54, price: 7.5, weight: 320, quantity: 1 },
  { id: 55, price: 4.5, weight: 250, quantity: 1 },
  { id: 56, price: 5, weight: 200, quantity: 1 },
  { id: 57, price: 6, weight: 250, quantity: 1 },
  { id: 58, price: 4, weight: 300, quantity: 1 },
  { id: 59, price: 5.5, weight: 200, quantity: 1 },
  { id: 60, price: 8, weight: 400, quantity: 1 },
]

function MyRound10(val) {
  return Math.round(val / 10) * 10
}

function cloneByKey(arayOfObj, newArrayOfObj = []) {
  arayOfObj.forEach(function (item) {
    newArrayOfObj.push(item.price)
  })
}
const pizzasPrices32 = []
cloneByKey(pizzasItems, pizzasPrices32)
export { pizzasPrices32 }
export const pizzasPrices45 = pizzasPrices32.map((value, index) => Math.ceil((value *= 1.7)))

export function refreshPricesArr(arrayToChange, index, examplArrray) {
  const result = [...arrayToChange]
  result[index] = examplArrray[index]
  return result
}
export function isIdEqual(arrayOfItems, compareItem) {
  let result
  if (Array.isArray(compareItem)) {
    arrayOfItems.map((item, index) => {
      if (item.id === compareItem[index].id) {
        result = item.id
      }
    })
  }
  arrayOfItems.map((item) => {
    if (item.id === compareItem.id) {
      result = item.id
    }
  })

  return result
}
export function itemsQuantityFunk(arrayOfItems, equalId, minus, minusIdArr) {
  const result = [...arrayOfItems]
  if (minus == '-') {
    for (let i = 0; i < result.length; i++) {
      if (result[i].id === minusIdArr[i].id) {
        result[i].quantity -= 1
      }
    }
  } else {
    for (let i = 0; i < result.length; i++) {
      if (result[i].id === equalId) {
        result[i].quantity += 1
      }
    }
  }
  return result
}
function hasKey(object, key) {
  return object.hasOwnProperty(key);
}

// Function to find if the array contains an object with the given key
export function arrayContainsKey(arr, key) {
  for (let i = 0; i < arr.length; i++) {
    if (hasKey(arr[i], key)) {
      return true;
    }
  }
  return false;
}

export default MyRound10
