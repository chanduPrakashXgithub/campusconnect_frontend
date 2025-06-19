import { useEffect, useState } from 'react';
import axios from 'axios';

function GmailDashboard() {
  const [emails, setEmails] = useState([]);
  const [search, setSearch] = useState('');
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) return;
    axios.get(`/api/gmail/inbox?access_token=${token}`)
      .then(res => setEmails(res.data))
      .catch(err => console.error('Error fetching inbox:', err));
  }, [token]);

  const filteredEmails = emails.filter(email =>
    email.snippet.toLowerCase().includes(search.toLowerCase()) ||
    (email.payload && email.payload.headers && email.payload.headers.some(h => h.name === 'Subject' && h.value.toLowerCase().includes(search.toLowerCase())))
  );

  function getSubject(email) {
    const subjectHeader = email.payload && email.payload.headers && email.payload.headers.find(h => h.name === 'Subject');
    return subjectHeader ? subjectHeader.value : '(No Subject)';
  }

  return (
    <div className="container mt-5">
      <h3 className="mb-4">Your Gmail Inbox</h3>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search by subject or content..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{maxWidth:'400px'}}
      />
      <div className="row">
        {filteredEmails.length === 0 && <div className="text-muted">No emails found.</div>}
        {filteredEmails.map((email, i) => (
          <div className="col-md-6 col-lg-4" key={i}>
            <div className="card mb-3 shadow-sm border-primary">
              <div className="card-body">
                <h6 className="card-title text-primary">{getSubject(email)}</h6>
                <p className="card-text">{email.snippet}</p>
                <span className="badge bg-light text-secondary">From: {(email.payload && email.payload.headers && email.payload.headers.find(h => h.name === 'From')?.value) || 'Unknown'}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GmailDashboard;
