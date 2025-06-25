// const heading= React.createElement("h1",{id:"heading"},"Hello World from React!");
// const root= ReactDOM.createRoot(document.getElementById("root"));
// const jsxheading= <h1 id="heading">Hello World from React!</h1>;
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxheading);

// 1. Create a Nested Header Element using React.createElement
// const nestedElement = React.createElement(
//   "div",
//   { className: "title" },
//   [React.createElement("h1", {}, "Heading 1"),
//   React.createElement("h2", {}, "Heading 2"),
//   React.createElement("h3", {}, "Heading 3")]
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(nestedElememt);



// 2.Create the same element using JSX
// jsx
// Copy
// Edit
// const jsxNestedElement = (
//   <div className="title">
//     <h1>Heading 1</h1>
//     <h2>Heading 2</h2>
//     <h3>Heading 3</h3>
//   </div>
// );



// 3. Create a Functional Component using JSX
// jsx
// Copy
// Edit
// const TitleComponent = () => {
//   return (
//     <div className="title">
//       <h1>Heading 1</h1>
//       <h2>Heading 2</h2>
//       <h3>Heading 3</h3>
//     </div>
//   );
// };

// 4. Pass attributes into the tag in JSX
// jsx
// Copy
// Edit
// const TitleComponent = () => {
//   return (
//     <div className="title" id="main-title" data-info="nested-headings">
//       <h1 style={{ color: "red" }}>Heading 1</h1>
//       <h2 className="heading2">Heading 2</h2>
//       <h3 className="heading3">Heading 3</h3>
//     </div>
//   );
// };



// 5. Composition of Components
// jsx
// Copy
// Edit
// const SubHeading = () => <h2>This is a SubHeading Component</h2>;

// const TitleComponent = () => {
//   return (
//     <div className="title">
//       <h1>Heading 1</h1>
//       <SubHeading />
//       <h3>Heading 3</h3>
//     </div>
//   );
// };



