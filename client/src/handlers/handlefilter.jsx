export default function HandleFilter(selected, products, setFilteredProducts) {
  let sorted = [...products];
  switch (selected) {
    case "High-Low":
      sorted.sort((a, b) => b.price - a.price);
      break;
    case "Low-High":
      sorted.sort((a, b) => a.price - b.price);
      break;
    case "A-Z":
      sorted.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "Z-A":
      sorted.sort((a, b) => b.name.localeCompare(a.name));
      break;
    default:
      break;
  }
  setFilteredProducts(sorted);
}
