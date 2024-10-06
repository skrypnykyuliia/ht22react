// src/features/quote/quoteSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Асинхронное действие для получения случайной цитаты
export const fetchRandomQuote = createAsyncThunk('quote/fetchRandomQuote', async () => {
  const response = await axios.get('https://api.quotable.io/random');
  return response.data;
});

const initialState = {
  quote: '',
  author: '',
  status: 'idle', // idle | loading | succeeded | failed
  error: null,
};

const quoteSlice = createSlice({
  name: 'quote',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomQuote.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRandomQuote.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.quote = action.payload.content;
        state.author = action.payload.author;
      })
      .addCase(fetchRandomQuote.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default quoteSlice.reducer;
