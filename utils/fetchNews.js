export const fetchNews = async (endpoint) => {
    const apiKey = "cdb08039835b4f0ebfff5d6439a764b5"; 
    const url = `https://newsapi.org/v2${endpoint}&apiKey=${apiKey}`;
  
    try {
      console.log("Fetching news from:", url);
  
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log("Fetched data:", data); 
  
      if (data.status !== "ok") {
        throw new Error(`API Error: ${data.message}`);
      }
  
      return data.articles || [];
    } catch (error) {
      console.error("Error fetching news:", error);
      return [];
    }
  };
  