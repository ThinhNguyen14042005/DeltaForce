export function getRelatedNews(newsData, currentSlug, limit = 3) {
  return newsData.filter((item) => item.slug !== currentSlug).slice(0, limit);
}