import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

// test("Test for react app", () => {
//   render(<App />);
//   const text = screen.getByText(/First React Test Case/i);
//   const title = screen.getByTitle('ai generated img');
//   expect(text).toBeInTheDocument();
//   expect(title).toBeInTheDocument();
// })
// 
// test("testing input box", () => {
//   render(<App />);
//   const input = screen.getByRole("textbox");
//   const placeholder = screen.getByPlaceholderText('enter user name');
//   expect(input).toBeInTheDocument();
//   expect(placeholder).toBeInTheDocument();
//   expect(input).toHaveAttribute("name", "username");
//   expect(input).toHaveAttribute("type", "text");
// })
// 
// describe.skip("UI test case group", () => {
//   test("test case 1", () => {
//     render(<App />);
//     let checkInput = screen.getByRole("textbox");
//     expect(checkInput).toBeInTheDocument();
// 
//   })
//   test("test case 2", () => {
//     render(<App />);
//     let checkInput = screen.getByRole("textbox");
//     expect(checkInput).toBeInTheDocument();
//   })
//   test("test case 3", () => {
//     render(<App />);
//     let checkInput = screen.getByRole("textbox");
//     expect(checkInput).toBeInTheDocument();
// 
//   })
// })
// 
// describe.only("API test case", () => {
//   test("api case 1", () => {
//     render(<App />);
//     let checkInput = screen.getByRole("textbox");
//     expect(checkInput).toBeInTheDocument();
//   });
//   test("api case 2", () => {
//     render(<App />);
//     let checkInput = screen.getByRole("textbox");
//     expect(checkInput).toBeInTheDocument();
//   });
//   test("api case 3", () => {
//     render(<App />);
//     let checkInput = screen.getByRole("textbox");
//     expect(checkInput).toBeInTheDocument();
// 
//   })
// 
//   describe("inner test group", () => {
//     test("api inner", () => {
// 
//       render(<App />);
//       const input = screen.getByRole("textbox");
//       expect(input).toBeInTheDocument();
//       expect(input).toHaveAttribute("type", "text")
//     })
//   })
// })

test("change event testing", () => {
  render(<App />);
  const input = screen.getByRole("textbox");
  fireEvent.change(input, { target: { value: 'a' } });
  expect(input.value).toBe('a')
})