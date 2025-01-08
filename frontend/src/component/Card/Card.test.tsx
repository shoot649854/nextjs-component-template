//Card.test.tsx
import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./Card";

describe("Card Components", () => {
  test("renders the Card with base class and children", () => {
    render(
      <Card className="custom-card">
        <p>Card Content</p>
      </Card>,
    );

    //The Card is typically just a <div>. We'll query for the text inside it.
    const card = screen.getByText(/Card Content/i);
    //The base SCSS class name is `styles.card`. We'll check if "card" is in the class list.
    //In your actual environment, it might be hashed or scoped, but let's assume "card" is part of it.
    expect(card.parentElement).toHaveClass("card");
    expect(card.parentElement).toHaveClass("custom-card");
  });

  test("renders the CardHeader with base class and children", () => {
    render(
      <CardHeader className="header-extra">
        <span>Header</span>
      </CardHeader>,
    );

    const header = screen.getByText(/header/i);
    //The base class is `styles.cardHeader`.
    expect(header.parentElement).toHaveClass("cardHeader");
    expect(header.parentElement).toHaveClass("header-extra");
  });

  test("renders the CardTitle with base class and children", () => {
    render(<CardTitle className="title-class">Title Here</CardTitle>);

    const title = screen.getByRole("heading", { name: /title here/i });
    expect(title).toBeInTheDocument();
    //The base class is `styles.cardTitle`.
    expect(title).toHaveClass("cardTitle");
    expect(title).toHaveClass("title-class");
  });

  test("renders the CardDescription with base class and children", () => {
    render(
      <CardDescription className="desc-class">
        This is a description
      </CardDescription>,
    );

    //It's rendered as a <p>.
    const description = screen.getByText(/this is a description/i);
    expect(description).toBeInTheDocument();
    //The base class is `styles.cardDescription`.
    expect(description).toHaveClass("cardDescription");
    expect(description).toHaveClass("desc-class");
  });

  test("renders the CardContent with base class and children", () => {
    render(
      <CardContent className="content-extra">
        <div>Some content</div>
      </CardContent>,
    );

    const content = screen.getByText(/some content/i);
    expect(content.parentElement).toHaveClass("cardContent");
    expect(content.parentElement).toHaveClass("content-extra");
  });

  test("renders the CardFooter with base class and children", () => {
    render(
      <CardFooter className="footer-extra">
        <button>Action</button>
      </CardFooter>,
    );

    const button = screen.getByRole("button", { name: /action/i });
    expect(button.parentElement).toHaveClass("cardFooter");
    expect(button.parentElement).toHaveClass("footer-extra");
  });

  test("passes additional HTML attributes (e.g. id, data-testid)", () => {
    render(
      <CardHeader id="header-id" data-testid="header-test">
        Header with ID
      </CardHeader>,
    );

    const header = screen.getByTestId("header-test");
    expect(header).toHaveAttribute("id", "header-id");
    expect(header).toHaveTextContent("Header with ID");
  });
});
