# Random color pearl

![Pearl](https://github.com/yashrajbharti/random-color-pearl/assets/43868318/46ef4432-3532-41a9-9e9a-0b6e963e3439)

Creating stylish randomly colored pearl using the power of html web components 🪩. Simple and useful for random placeholders for profile pic or avatar.

[DEMO LINK](https://yashrajbharti.github.io/random-color-pearl/)

## Figma Plugin for Designers

[PLUGIN LINK](https://www.figma.com/community/plugin/1380097241436668905)

## Install from npm

```console
npm i random-color-pearl
```

[NPM LINK](https://www.npmjs.com/package/random-color-pearl)

## Use Unpkg

```html
<script src="https://unpkg.com/random-color-pearl@1.0.0/src/randomColorSvg.js"></script>
```

## Or Import
  
```js
import('random-color-pearl');
```
  
Then simply use the web component as:

```html
<random-color-svg></random-color-svg>
```

## Attributes

```html
<random-color-svg width="92px" height="92px" username=""></random-color-svg>
```

> Supports three optional attributes, height and width for sizing the svg, and a username attribute to get a hashed color (optional). Also, it has getter and setter methods for color. Colors attribute is a string of 15 hex color codes.

| Attribute  | Description                                         | Default     |
| ---------- | --------------------------------------------------- | ----------- |
| `width`    | Sets the width of the SVG element                   | `92px`      |
| `height`   | Sets the height of the SVG element                  | `92px`      |
| `username` | If provided, hashes the username to generate colors | `undefined` |
| `colors`   | If provided, fills the svg with the given colors    | `undefined` |

## Set the Color Values

```html
<random-color-svg colors="#000000,#1c1c1c,#333333,#4d4d4d,#666666,#808080,#999999,#b3b3b3,#cccccc,#e6e6e6,#f2f2f2,#f5f5f5,#fafafa,#dcdcdc,#c0c0c0"></random-color-svg>
```

> ⚠️ Note: this will not set the color values if `username` is provided already. As basic purpose of profile pic/ avatar is to set unique pearls using `username` attribute, it has preference over the `colors` string.

## Get the Color values

```js
 document.addEventListener("DOMContentLoaded", () => {
    const svg = document.getElementById("pearl-svg");
    if (svg instanceof RandomColorSvg) {
        svg.getColors(); // Use this as you want!
    }
});
```

[Check Performance and Collision Rates here](https://cybtekk-llp.github.io/Unique-SVG-Generator/)

![Multiple Pearls generated from web components](https://github.com/yashrajbharti/random-color-pearl/assets/43868318/1653ec48-ee34-48e2-ad1e-4c0a21a3e55d)

## Contributing

Feel free to open issues or submit pull requests to enhance the functionality of `RandomColorSvg`. Contributions are welcome and appreciated!

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
