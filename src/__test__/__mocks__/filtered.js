const Filtered = () => (
  <>
    <div className="filtered">
      <form action="POST">
        <select name="filter" id="form-filter">
          <option value="">-Please choose an option-</option>
          <option value="worst">Worst</option>
          <option value="best">Best</option>
          <option value="all">All</option>
        </select>
        <br />
        <button type="button">Filter</button>
      </form>
    </div>
    <ul className="card-container" />
  </>

);

export default Filtered;
