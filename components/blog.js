const posts = [
  {
    title: 'Article Title — fill in from company blog',
    category: 'Mobile Development',
    date: '2025-01-01',
    dateLabel: 'Jan 1, 2025',
    excerpt: 'Short excerpt or summary of the article goes here.',
    url: '#',
    thumbnail: null,
  },
  {
    title: 'Article Title — fill in from company blog',
    category: 'Flutter',
    date: '2025-01-01',
    dateLabel: 'Jan 1, 2025',
    excerpt: 'Short excerpt or summary of the article goes here.',
    url: '#',
    thumbnail: null,
  },
];

export function renderBlog() {
  return `
    <article class="blog" data-page="blog">
      <header><h2 class="article-title">Blog</h2></header>
      <section class="blog-posts">
        <ul class="blog-posts-list">
          ${posts.map(p => `
            <li class="blog-post-item">
              <a href="${p.url}" target="_blank">
                <figure class="blog-banner-box">
                  ${p.thumbnail
                    ? `<img src="${p.thumbnail}" alt="${p.title}" loading="lazy">`
                    : `<div class="blog-banner-placeholder"></div>`
                  }
                </figure>
                <div class="blog-content">
                  <div class="blog-meta">
                    <p class="blog-category">${p.category}</p>
                    <span class="dot"></span>
                    <time datetime="${p.date}">${p.dateLabel}</time>
                  </div>
                  <h3 class="blog-item-title">${p.title}</h3>
                  <p class="blog-text">${p.excerpt}</p>
                </div>
              </a>
            </li>
          `).join('')}
        </ul>
      </section>
    </article>
  `;
}
