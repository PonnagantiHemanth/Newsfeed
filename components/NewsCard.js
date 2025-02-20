const NewsCard = ({ article }) => {
    return (
      <div style={{
        backgroundColor: "#fff",
        padding: "20px",
        margin: "15px",
        borderRadius: "10px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.2s ease-in-out",
        cursor: "pointer",
        maxWidth: "600px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.03)"}
      onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
      >
        <h3 style={{ marginBottom: "10px" }}>{article.title}</h3>
        <p style={{ color: "gray", fontSize: "14px" }}>{article.description}</p>
        <a href={article.url} target="_blank" rel="noopener noreferrer" style={{ color: "#007bff", textDecoration: "none", marginTop: "10px" }}>
          Read more
        </a>
      </div>
    );
  };
  
  export default NewsCard;
  