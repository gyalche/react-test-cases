import { render, screen } from '@testing-library/react';
import Home from './Home';
import About from './About';
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

// test("change event testing", () => {
//   render(<App />);
//   const input = screen.getByRole("textbox");
//   fireEvent.change(input, { target: { value: 'a' } });
//   expect(input.value).toBe('a')
// })



//before all
// beforeAll(() => {
//   console.log('before all running')
// })
// 
// //beforeEach
// beforeEach(() => {
//   console.log("before each running")
// })
// 
// //after all
// afterAll(() => {
//   console.log("after all running")
// })
// 
// //after each;
// afterEach(() => {
//   console.log("after each running")
//   cleanDb()
// })
// 
// test("click event test case", () => {
//   render(<Home />);
//   const btn = screen.getByRole("button");
//   fireEvent.click(btn);
//   expect(screen.getByText("update")).toBeInTheDocument();
// })

// test("click event test case1", () => {
//   render(<Home />);
//   const btn = screen.getByRole("button");
//   fireEvent.click(btn);
//   expect(screen.getByText("update")).toBeInTheDocument();
// })

// test("click event test case2", () => {
//   render(<Home />);
//   const btn = screen.getByRole("button");
//   fireEvent.click(btn);
//   expect(screen.getByText("update")).toBeInTheDocument();
// })

// test('snapshot for home component', () => {
//   const container = render(<Home />);
//   expect(container).toMatchSnapshot();
// })

// test("class component methods testing", () => {
//   const componentData = renderer.create(<User />).getInstance()
//   expect(componentData.getUserList("match")).toMatch("match")
// })

// test("render about button", () => {
//   render(<About />);
//   const btn = screen.getByRole("button");
//   fireEvent.click(btn);
//   expect(screen.getByText("data")).toBeInTheDocument();
// })

// test("function component method testing case1", () => {
//   render(<About />);
//   const btn = screen.getByTestId('btn1');
//   fireEvent.click(btn);
//   expect(screen.getByText("data")).toBeInTheDocument();
// })

// test("method test case 2", () => {
//   expect(otherMethodTest(2, 2)).toBe(4)
// })

//What is RTL QUERY(React Testing Library query)?
//=> it is used to find out ui element

// test('get by role', () => {
//   render(<Blog />);
//   const inputField = screen.getByRole('textbox');
//   const btn = screen.getByRole('button');
//   expect(inputField).toBeInTheDocument();
//   expect(inputField).toHaveValue('hello');
//   expect(inputField).toHaveAttribute("type", "text");
//   expect(inputField).toBeDisabled();
//   expect(btn).toBeInTheDocument();
// });

// test('Get by role testing', () => {
//   render(<Home />);
//   const btn1 = screen.getByRole('button', { name: 'click me1' });
//   const btn2 = screen.getByRole('button', { name: 'click me2' });
//   const input = screen.getByRole('textbox', { name: 'username' });
//   const input2 = screen.getByRole('textbox', { name: 'userage' });
//   const dv1 = screen.getByRole('hello_world');
// 
//   expect(dv1).toBeInTheDocument();
//   expect(btn1).toBeInTheDocument();
//   expect(btn2).toBeInTheDocument();
//   expect(input).toHaveAttribute("type", "text");
//   expect(input2).toBeInTheDocument();
// 
// })

//getByRole and getAllByRole difference;
//=> getByRole is used for single element testing
//=>getAllByRole is used for multiple elements testing;
//=>getByRole is cal also be used for multiple elements testing when we have different attribute, label
//=>getAllByRole give a value in array element;
test("getAllByRole testing", () => {
  render(<Home />);
  const btn = screen.getAllByRole("button");
  // expect(btn).toBeInTheDocument();
  // you can vive number of use loops;
  // expect(btn[0]).toBeInTheDocument();
  for (let i = 0; i < btn.length - 1; i++) {
    expect(btn[i]).toBeInTheDocument()
  }

  //testing for option;
  const options = screen.getAllByRole("option");
  for (let i = 0; i < options.length; i++) {
    expect(options[i]).toBeInTheDocument()
  }

})

//getByLabelText;
//=>
// test('getByLabelText testing', () => {
//   render(<Home />);
//   const input = screen.getByLabelText('username')
//   const checkBox = screen.getByLabelText("check")
//   expect(checkBox).toBeInTheDocument()
//   expect(checkBox).toBeChecked()
//   expect(checkBox).toHaveAttribute("type", "checkbox")
//   expect(input).toBeInTheDocument()
//   expect(input).toHaveValue('dawa')
// })

//getAllByLabelText;

test("getAllByLabelText", () => {
  render(<Home />);
  const inputTest = screen.getAllByLabelText('username')
  for (let i = 0; i < inputTest.length; i++) {
    expect(inputTest[i]).toBeInTheDocument()
  }
})

//getByPlaceHolderText; test only for one input field;
// test('get by placholder text', () => {
//   render(<Home />)
// 
//   const placeholderTest = screen.getByPlaceholderText("enter user name")
//   expect(placeholderTest).toBeInTheDocument()
// 
// })

//getAllByPlacholderText 
test('get all by placholder text', () => {
  render(<Home />);
  const inputs = screen.getAllByPlaceholderText('enter user name')
  for (let i = 0; i < inputs.length; i++) {
    expect(inputs[i]).toBeInTheDocument()
  }
})

//getByText
// test("Get by text ", () => {
//   render(<Home />);
//   const getbytext = screen.getByText('submit');
//   expect(getbytext).toBeInTheDocument()
//    const pTag = screen.getByText('HELLOW WORLD DON');
//    expect(pTag).toHaveClass('checking')
// })

//getAllByText
test('getAllByText', () => {
  render(<Home />);
  const pTag = screen.getAllByText('HELLOW WORLD DON');
  expect(pTag[0]).toHaveClass('checking')
})

//getByTestId and getAllByTestId;
//getByTestId;
test("Testing with testId", () => {
  render(<About />);
  const divId = screen.getByTestId("div-testid");
  const id = screen.getAllByTestId("id-test");
  expect(divId).toBeInTheDocument();
  for (let i = 0; i < id.length; i++) {
    expect(id[i]).toBeInTheDocument()
  }
})
