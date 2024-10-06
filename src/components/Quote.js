// src/components/Quote.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRandomQuote } from '../features/quote/quoteSlice';
import styles from '../styles/Quote.module.css';

const Quote = () => {
  const dispatch = useDispatch();
  const { quote, author, status, error } = useSelector((state) => state.quote);

  useEffect(() => {
    dispatch(fetchRandomQuote());
  }, [dispatch]);

  const handleNewQuote = () => {
    dispatch(fetchRandomQuote());
  };

  return (
    <div className={styles.quoteContainer}>
      {status === 'loading' && <p>Загрузка...</p>}
      {status === 'succeeded' && (
        <div>
          <p className={styles.quote}>"{quote}"</p>
          <p className={styles.author}>- {author}</p>
        </div>
      )}
      {status === 'failed' && <p>{error}</p>}
      <button className={styles.button} onClick={handleNewQuote}>
        Получить новую цитату
      </button>
    </div>
  );
};

export default Quote;
