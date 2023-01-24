# Card Business Component with React

This is my first project with React. It is a static website.

The purpose of this project is to practice React. Learn the very basics of React.

You can give feedback on GitHub by creating an issue.

## Links

- [Live review](https://react-laurasmithbusiness.netlify.app/)
- [Documentation](./docs/README.md)

## Screenshots

![Desktop](./design/desktop.jpg)

## Built with

- HTML Semantic Tags
- [BEM (Block, Element, Modifier)](https://sparkbox.com/foundry/bem_by_example)
- React
- CSS Flexbox
- Mobile-first workflow

## What I learned

I learned a little bit of React and JavaScript.

### JavaScript import and export

I learn a little bit of this. I never get a chance to use them in my projects. So, this is the first time I am using the `import` and `export` keywords.

In React it is common thing to use those keywords such as importing components, SVGs, and stylesheets.

I don't take a deep dive into learning `export` and `import`. So, I can't share a lot of things about this.

In the future, I need to understand this.

### Create React components

I learn to separate HTML markup into components.

When creating components, I find it overkill for this size of the project. So, I would prefer to have a single card component. Even better, I would use HTML and CSS to create this. It is just a static website so I don't need to use React.

Anyway, the purpose of this project is to learn React. So, it's okay.

For example, I create a `Button` component which is a link that gets styled like a button. Here is the code snippet.

```javascript
export default function Button({ text, icon, backgroundColor }) {
  return (
    <a href="/" className={`card__button card__button--${backgroundColor}`}>
      {icon}
      {text}
    </a>
  );
}
```

Then to use it, I need to at least do the following in the `index.js`:

```javascript
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ReactComponent as Envelope } from "./assets/envelope.svg";
import "./index.css";
import Button from "./Button";

const root = createRoot(document.querySelector("#root"));

root.render(
  <StrictMode>
    <Button
      text={"Email"}
      icon={
        <Envelope className="card__icon" aria-hidden="true" focusable="false" />
      }
      backgroundColor={"white"}
    />
  </StrictMode>
);
```

The HTML markup that gets generated is the following:

```html
<a href="/" className="card__button card__button--white">
  <!-- prettier-ignore -->
  <svg xmlns="http://www.w3.org/2000/svg" class="card__icon" aria-hidden="true" focusable="false" width="28" height="28" viewBox="0 0 28 28"><path d="M28 11.094V23.5c0 1.375-1.125 2.5-2.5 2.5h-23A2.507 2.507 0 0 1 0 23.5V11.094c.469.516 1 .969 1.578 1.359 2.594 1.766 5.219 3.531 7.766 5.391 1.313.969 2.938 2.156 4.641 2.156h.031c1.703 0 3.328-1.188 4.641-2.156 2.547-1.844 5.172-3.625 7.781-5.391a9.278 9.278 0 0 0 1.563-1.359zM28 6.5c0 1.75-1.297 3.328-2.672 4.281-2.438 1.687-4.891 3.375-7.313 5.078-1.016.703-2.734 2.141-4 2.141h-.031c-1.266 0-2.984-1.437-4-2.141-2.422-1.703-4.875-3.391-7.297-5.078-1.109-.75-2.688-2.516-2.688-3.938 0-1.531.828-2.844 2.5-2.844h23c1.359 0 2.5 1.125 2.5 2.5z"/></svg>
  Email
</a>
```

I am not comfortable doing this. I have a lot of questions, like:

- Is it correct to do this?
- What is the best practice?
- Is there a better way to do this?

This was the same feeling that I felt when I was first learning JavaScript.

But, I hope I can understand React better in the future.

## Useful resources

- [React Docs Beta](https://beta.reactjs.org/) - This helped me to learn the basic of React. By the time I am writing this the updated documentation is on beta version.
- [Create React App](https://create-react-app.dev/) - This helped me to understand the folder structure of the `create-react-app` package.

## License

[MIT](./LICENSE)
