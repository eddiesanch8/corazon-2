import "../css/product.css";

export function FilterProduct({ onFilterChange }) {
  return (
    <div className="filter">
      <label htmlFor="products">Filter By</label>
      <select onChange={(e) => onFilterChange(e.target.value)}>
        <option value="High-Low">Price: Highest To Lowest</option>
        <option value="Low-High">Price: Lowest to Highest</option>
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
      </select>
    </div>
  );
}
