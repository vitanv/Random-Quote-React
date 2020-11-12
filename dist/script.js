function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const data = [
{
  quote: "Be yourself; everyone else is already taken",
  author: "Oscar Wilde" },

{
  quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe",
  author: "Albert Einstein" },

{
  quote: "So many books, so little time",
  author: "Frank Zappa" },

{
  quote: "Be the change that you wish to see in the world",
  author: "Mahatma Gandhi" },

{
  quote: "In three words I can sum up everything I've learned about life: it goes on",
  author: "Robert Frost" },

{
  quote: "No one can make you feel inferior without your consent",
  author: "Eleanor Roosevelt" },

{
  quote: "If you tell the truth, you don't have to remember anything",
  author: "Mark Twain" },

{
  quote: "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that",
  author: "Martin Luther King Jr" },

{
  quote: "Be yourself; everyone else is already taken",
  author: "Oscar Wilde" },

{
  quote: "Without music, life would be a mistake",
  author: "Friedrich Nietzsche" },

{
  quote: "We accept the love we think we deserve",
  author: "Stephen Chbosky" }];



class App extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "newQuote",






    () => {
      let index = Math.floor(Math.random() * data.length);
      this.setState({
        quotes: data[index].quote,
        author: data[index].author });

    });this.state = { quotes: data[0].quote, author: data[0].author };this.newQuote = this.newQuote.bind(this);}
  render() {
    return (
      React.createElement("div", { className: "jumbotron", id: "quote-box" },
      React.createElement("div", { className: "text-center", id: "text" },
      this.state.quotes),

      React.createElement("div", { className: "text-right", id: "author" }, "-",
      this.state.author),

      React.createElement("button", { className: "btn btn-default", id: "new-quote", onClick: this.newQuote }, "New Quote!"),


      React.createElement("a", { href: "https://twitter.com/share", class: "btn btn-default ", id: "tweet-quote" },
      React.createElement("i", { class: "fab fa-twitter" }), " Tweet")));



  }}



ReactDOM.render(React.createElement(App, null), document.getElementById('root'));