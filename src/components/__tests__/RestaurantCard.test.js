import { render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";
import RestaurantCard, { WithPromotedLabel } from "../RestaurantCard";

it("should render Restaurant card component with props", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText("Leon's - Burgers & Wings (Leon Grill)");
  expect(name).toBeInTheDocument();
});

// it("should render Higher Ordder component WithPromotedLabel ", () => {
//   const comp = WithPromotedLabel(<RestaurantCard resData={MOCK_DATA} />);
//   render(comp);

//   const name = screen.getByText("Promoted");
//   expect(name).toBeInTheDocument();
// });
