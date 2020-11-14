import React, { useState, useEffect, useRef, FormEvent } from 'react';

import Loader from './Loader';
import Product from './Product';

export interface SearchModalProps {
  closeModal: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ closeModal }) => {
  const [submited, setSubmited] = useState(false);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmited(true);

    setTimeout(() => {
      setLoading(true);
    }, 600);
  };

  return (
    <div className="search-modal">
      <button className="close" onClick={closeModal}>
        <span>&times;</span>
      </button>

      <div
        style={{ top: `${submited ? '20px' : null}` }}
        className="search-modal_input"
      >
        <form onSubmit={onSubmit}>
          <input
            ref={inputRef}
            type="text"
            name="keyword"
            placeholder="Tìm kiếm thứ bạn muốn"
          />
          <span>và nhấn Enter</span>
          <div>
            <Loader loading={loading} />
          </div>
        </form>
      </div>

      {submited && (
        <div className="product-wrap">
          <div className="list-product">
            {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, index) => (
              <Product key={index} />
            ))}
          </div>

          <div className="view-more">
            <span>
              <Loader loading={true} />
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchModal;
