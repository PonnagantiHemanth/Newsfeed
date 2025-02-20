import { render, screen } from "@testing-library/react";
import NewsCard from "../components/NewsCard";
import { BrowserRouter } from "react-router-dom";

const articleMock = {
  title: "Sample News",
  description: "This is a sample news description.",
};

test("renders news card with title and description", () => {
  render(
    <BrowserRouter>
      <NewsCard article={articleMock} />
    </BrowserRouter>
  );

  expect(screen.getByText("Sample News")).toBeInTheDocument();
  expect(screen.getByText("This is a sample news description.")).toBeInTheDocument();
});
