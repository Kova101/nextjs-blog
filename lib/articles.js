import * as fs from 'fs';
import * as path from "path";

const postsDirectory = 'articles';

export function getAllArticles() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return getArticleData(fileName.replace(/\.json$/, ''));
  });
}

export function getAllArticleIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.json$/, ''),
      },
    };
  });
}

export function getArticleData(id) {
  const fullPath = path.join(postsDirectory, `${id}.json`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const result = JSON.parse(fileContents);

  // Combine the data with the id
  return {
    id,
    ...result,
  };
}

