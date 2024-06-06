import "./pagination.css";

const Pagination = ({pages, currentPage, setCuurentPage}) => {
    const generatedPages = [];
    for(let i = 1; i <= pages; i ++) {
        generatedPages.push(i);
    }

  return (
    <div className="pagination">
        <button onClick={() => setCuurentPage((prev) => prev - 1)} className="page previous" disabled={currentPage === 1}>
            <i className="bi bi-arrow-right"></i>
            السابق
        </button>
        {generatedPages.map((page) => 
            <div 
              onClick={() => setCuurentPage(page)} 
              className={currentPage === page ? "page active" : "page"  } 
              key={page}
            >
                {page}
            </div>
        )}
        <button onClick={() => setCuurentPage((prev) => prev + 1)} className="page next" disabled={currentPage === pages}>
            <i className="bi bi-arrow-left"></i>
            التالي
        </button>
    </div>
  );
};

export default Pagination;
