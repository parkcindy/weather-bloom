// import axios from "axios";
import React, { useState, useEffect } from "react";

const ArticleTable = ({ articles, onEdit, onDelete }) => {
  // const [articles, setArticles] = useState([]);



  return (
    <table className="w-11/12 table-auto my-14 mx-auto border-collapse border border-gray-200">
      <thead>
        <tr className="bg-gray-100">
          <th className="border p-2">ID</th>
          <th className="border p-2">Title</th>
          <th className="border p-2">Content</th>
          <th className="border p-2">Service</th>
          <th className="border p-2">Duration</th>
          <th className="border p-2">Author</th>
          <th className="border p-2">Location</th>
          <th className="border p-2">Image Path</th>
          <th className="border p-2">Source</th>
          <th className="border p-2">Date</th>
          <th className="border p-2">Action</th>
        </tr>
      </thead>
      <tbody>
        {articles.length > 0 ? (
          articles?.map((article) => (
            <tr key={article.id} className="hover:bg-gray-50">
              <td className="border p-2 text-center">{article.id}</td>
              <td className="border p-2">{article.title}</td>
              <td className="border p-2 min-w-40">{article.content}</td>
              <td className="border p-2">{article.service}</td>
              <td className="border p-2">{article.duration}</td>
              <td className="border p-2">{article.author}</td>
              <td className="border p-2">{article.location}</td>
              <td className="border p-2">{article.image_path}</td>
              <td className="border p-2">{article.source}</td>
              <td className="border p-2">{article.dates}</td>
              <td className="border p-2 text-center">
                <button
                  onClick={() => onEdit(article)}
                  className="bg-yellow-400 text-white px-2 py-1 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(article.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="11" className="text-center p-4">No articles available</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default ArticleTable;
