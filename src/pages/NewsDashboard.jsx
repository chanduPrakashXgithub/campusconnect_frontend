import React, { useEffect, useState } from 'react';
import axios from 'axios';

function NewsDashboard() {
  const [news, setNews] = useState([]);
  const [filter, setFilter] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    axios.get('/api/news').then(res => setNews(res.data));
  }, []);

  const categories = Array.from(new Set(news.map(item => item.category)));
  const filteredNews = news.filter(item =>
    (item.title.toLowerCase().includes(filter.toLowerCase()) ||
      item.content.toLowerCase().includes(filter.toLowerCase())) &&
    (category === '' || item.category === category)
  );

  return (
    <div className="container mt-5">
      <h3 className="mb-4">📢 College News & Updates</h3>
      <div className="row mb-3">
        <div className="col-md-6 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Search news by title or content..."
            value={filter}
            onChange={e => setFilter(e.target.value)}
            style={{maxWidth:'400px'}}
          />
        </div>
        <div className="col-md-6 mb-2">
          <select
            className="form-select"
            value={category}
            onChange={e => setCategory(e.target.value)}
            style={{maxWidth:'250px'}}
          >
            <option value="">All Categories</option>
            {categories.map((cat, i) => (
              <option key={i} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="row">
        {filteredNews.length === 0 && <div className="text-muted">No news found.</div>}
        {filteredNews.map((item, i) => (
          <div className="col-md-6 col-lg-4" key={i}>
            <div className="card mb-3 shadow-sm border-success">
              <div className="card-body">
                <h5 className="card-title text-success">{item.title}</h5>
                <p className="card-text">{item.content}</p>
                <span className="badge bg-info me-2">{item.category}</span>
                <span className="badge bg-light text-secondary">Published: {item.createdAt ? new Date(item.createdAt).toLocaleDateString() : 'N/A'}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="alert alert-info mt-4" role="alert">
        Stay updated with the latest college news, events, and announcements. Use the filters above to find what matters to you!
      </div>
    </div>
  );
}

export default NewsDashboard;
