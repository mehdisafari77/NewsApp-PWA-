// @TODO Add remove from favorites functionality
import { createElement, createPlaceholders, createPlaceholder, renderPlaceHolders, createArticle } from './domMethods';
import { useIndexedDb, checkForIndexedDb } from './indexedDB';
import { createArticles } from './api'
import { getParams } from './utilities'


// Empties article container and appends articles
function renderArticles(articleData) {
  renderPlaceHolders();
  const articleContainer = document.querySelector(".article-container");
  const topicHeader = document.querySelector("header h1");

  const articles = createArticles(articleData);

  while (articleContainer.firstChild) {
    articleContainer.removeChild(articleContainer.firstChild);
  }

  const { query } = getParams();

  topicHeader.textContent = query;
  articleContainer.appendChild(articles);
}

// Formats and returns date in MMMM/DD/YYYY format
function formatDate(dateStr) {
  const date = new Date(dateStr);

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric"
  };

  return date.toLocaleDateString(options);
}

function loadPage() {
  if (checkForIndexedDb()) {
    useIndexedDb("articles", "ArticleStore", "get").then(results => {
      renderArticles(results);
    });
  }
}

loadPage();
