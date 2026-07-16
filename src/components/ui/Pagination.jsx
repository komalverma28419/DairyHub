const Pagination = ({ currentPage, totalPages, onPageChange }) => {

  const getPages = () => {
    let start = Math.max(currentPage - 1, 1);
    let end = start + 2;

    if (end > totalPages) {
      end = totalPages;
      start = Math.max(end - 2, 1);
    }

    const pages = [];

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  };


  return (
    <div className="flex gap-3">

      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="rounded-lg border px-4 py-2 disabled:opacity-50"
      >
        Previous
      </button>


      {getPages().map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`rounded-lg px-4 py-2 ${
            currentPage === page
              ? "bg-primary text-white"
              : "border"
          }`}
        >
          {page}
        </button>
      ))}


      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="rounded-lg border px-4 py-2 disabled:opacity-50"
      >
        Next
      </button>

    </div>
  );
};

export default Pagination;