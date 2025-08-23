import React, { useState, useMemo } from "react";

const BLOG_POSTS = [
  {
    id: 1,
    title: "Understanding Labour Laws in 2025",
    summary: "Up-to-date guide to the latest labour laws businesses must know.",
    date: "2025-07-15",
    category: "Compliance",
    url: "/blog/labour-laws-2025",
  },
  {
    id: 2,
    title: "Payroll Compliance Best Practices",
    summary: "Tips to stay compliant with evolving payroll regulations.",
    date: "2025-06-10",
    category: "Payroll",
    url: "/blog/payroll-compliance",
  },
  {
    id: 3,
    title: "Staffing Trends Post-COVID",
    summary: "How remote work and flexible staffing shape the future workforce.",
    date: "2025-06-25",
    category: "Staffing",
    url: "/blog/staffing-trends-post-covid",
  },
  // Add more posts as needed
];

const GUIDES = [
  {
    id: 1,
    title: "Employee Onboarding Checklist",
    description: "Comprehensive checklist for smooth onboarding processes.",
    fileUrl: "/downloads/onboarding-checklist.pdf",
    category: "HR",
  },
  {
    id: 2,
    title: "Workplace Safety Guidelines",
    description: "Essential safety policies and procedures for compliance.",
    fileUrl: "/downloads/safety-guidelines.pdf",
    category: "Compliance",
  },
  // Add more guides as needed
];

const FAQS = [
  {
    question: "What is manpower compliance?",
    answer:
      "Manpower compliance ensures that organizations follow labor laws, employment standards, and safety regulations to protect both employees and employers.",
  },
  {
    question: "How often should payroll audits be conducted?",
    answer:
      "Payroll audits should be conducted at least annually, but more frequent checks help catch issues early and maintain compliance.",
  },
  {
    question: "Can your staffing solutions be customized?",
    answer: "Yes, we tailor our solutions to meet the unique needs of each client and project.",
  },
  // Add more FAQs as needed
];

function Resources() {
  const [articleSearch, setArticleSearch] = useState("");
  const [articleCategory, setArticleCategory] = useState("");
  const [guideCategory, setGuideCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  // Filter and search blog posts
  const filteredBlogPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      return (
        (!articleCategory || post.category === articleCategory) &&
        post.title.toLowerCase().includes(articleSearch.toLowerCase())
      );
    });
  }, [articleCategory, articleSearch]);

  // Pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredBlogPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredBlogPosts.length / postsPerPage);

  // Unique categories for dropdowns
  const blogCategories = [...new Set(BLOG_POSTS.map((p) => p.category))];
  const guideCategories = [...new Set(GUIDES.map((g) => g.category))];

  // FAQ accordion state
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  return (
    <div className="container my-5">
      <h1 className="mb-4">Resources</h1>

      {/* Blog Section */}
      <section className="mb-5">
        <h2 className="mb-3">Latest Articles</h2>

        {/* Filters */}
        <div className="row mb-3">
          <div className="col-md-6 mb-2">
            <input
              type="search"
              className="form-control"
              placeholder="Search articles..."
              value={articleSearch}
              onChange={(e) => { setArticleSearch(e.target.value); setCurrentPage(1); }}
              aria-label="Search articles"
            />
          </div>
          <div className="col-md-6 mb-2">
            <select
              className="form-select"
              value={articleCategory}
              onChange={(e) => { setArticleCategory(e.target.value); setCurrentPage(1); }}
              aria-label="Filter by article category"
            >
              <option value="">All Categories</option>
              {blogCategories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Articles */}
        {currentPosts.length === 0 ? (
          <p>No articles found matching your criteria.</p>
        ) : (
          currentPosts.map((post) => (
            <article key={post.id} className="mb-4">
              <h5>
                <a href={post.url} className="text-decoration-none">
                  {post.title}
                </a>
              </h5>
              <small className="text-muted">{new Date(post.date).toLocaleDateString()}</small>
              <p>{post.summary}</p>
            </article>
          ))
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <nav aria-label="Articles pagination">
            <ul className="pagination justify-content-center">
              <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                <button className="page-link" onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))} aria-label="Previous">
                  &laquo;
                </button>
              </li>
              {[...Array(totalPages)].map((_, i) => (
                <li key={i} className={`page-item ${currentPage === i + 1 ? "active" : ""}`}>
                  <button className="page-link" onClick={() => setCurrentPage(i + 1)}>
                    {i + 1}
                  </button>
                </li>
              ))}
              <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                <button className="page-link" onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))} aria-label="Next">
                  &raquo;
                </button>
              </li>
            </ul>
          </nav>
        )}
      </section>

      {/* Guides Section */}
      <section className="mb-5">
        <h2 className="mb-3">Downloadable Guides</h2>
        <div className="mb-3">
          <select
            className="form-select w-auto"
            value={guideCategory}
            onChange={(e) => setGuideCategory(e.target.value)}
            aria-label="Filter guides by category"
          >
            <option value="">All Categories</option>
            {guideCategories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        <ul className="list-group">
          {GUIDES.filter(g => !guideCategory || g.category === guideCategory).map(guide => (
            <li key={guide.id} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <h6 className="mb-1">{guide.title}</h6>
                <small>{guide.description}</small>
              </div>
              <a href={guide.fileUrl} download className="btn btn-outline-primary btn-sm" aria-label={`Download ${guide.title}`}>
                Download
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* FAQ Section */}
      <section>
        <h2 className="mb-3">Frequently Asked Questions</h2>
        <div className="accordion" id="faqAccordion">
          {FAQS.map(({ question, answer }, i) => (
            <div className="accordion-item" key={i}>
              <h2 className="accordion-header" id={`heading${i}`}>
                <button
                  className={`accordion-button ${i !== openFaqIndex ? "collapsed" : ""}`}
                  type="button"
                  onClick={() => setOpenFaqIndex(i === openFaqIndex ? null : i)}
                  aria-expanded={i === openFaqIndex}
                  aria-controls={`collapse${i}`}
                >
                  {question}
                </button>
              </h2>
              <div
                id={`collapse${i}`}
                className={`accordion-collapse collapse ${i === openFaqIndex ? "show" : ""}`}
                aria-labelledby={`heading${i}`}
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">{answer}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Resources;
