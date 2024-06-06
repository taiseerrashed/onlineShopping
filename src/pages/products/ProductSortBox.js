const ProductSortBox = ({sortItem, setSortItem}) => {

    const onChangeHandler = (e) => {
        setSortItem(e.target.id);
    }

  return (
    <div className="product-sort">
        <div className="form-group">
            <input value={sortItem} onChange={onChangeHandler} type="radio" name="sort" id="noSort" />
            <label htmlFor="noSort">بدون ترتيب</label>
        </div>
        <div className="form-group">
            <input value={sortItem} onChange={onChangeHandler} type="radio" name="sort" id="low" />
            <label htmlFor="low">من الأقل إلى الأعلى</label>
        </div>
        <div className="form-group">
            <input value={sortItem} onChange={onChangeHandler} type="radio" name="sort" id="high" />
            <label htmlFor="high">من الأعلى إلى الأقل</label>
        </div>
    </div>
  );
};

export default ProductSortBox;
