import "../css/product.css";

export function FilterProduct() {
  return (
    <div className="filter">
      <label for="products">Filter By</label>
      <select name="products" id="products">
        <option value="High-Low">Price: Highest To Lowest</option>
        <option value="Low-High">Price: Lowest to Highest</option>
        <option value="Alpha">A-Z</option>
      </select>
    </div>
  );
}
