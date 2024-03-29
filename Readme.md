# infinite-grids <a href="https://www.npmjs.com/package/infinite-grids"><img alt="NPM" src="https://img.shields.io/npm/v/infinite-grids.svg"></a>

Masonry layout with infinite loading.

It's a simple and easy to use library that allows you to create a masonry layout with infinite loading while controlling everything about the nodes being rendered in the layout.

<img width="911" alt="image" src="https://github.com/ExplorerAadi/infinite-grids/assets/52901335/8acab796-30c0-4b8e-ab32-d4c93603af02">

## Installation

```bash
npm install infinite-grids

yarn add infinite-grids

pnpm add infinite-grids
```

## Usage

```tsx
import { useState } from "react";
import { useWindowSize } from "react-use";
import { InfiniteGrids, Item } from "infinite-grids";

export const App = () => {
  const [items, setItems] = useState<Item[]>(initialItems);
  const { width } = useWindowSize();

  const loadMore = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos');
    const data = await response.json();
    setItems([...items, ...data]);
  };

  const numberOfColumns =
    width && width < 420
      ? 1
      : width && width > 420 && width < 768
      ? 2
      : width && width > 768 && width < 1024
      ? 3
      : 4;

  return (
    <div style={{ padding: 16 }}>
      <InfiniteGrids
        items={items}
        loadMore={loadMore}
        horizontalGap={16}
        verticalGap={16}
        renderItem={(item: Item) => (
          <div style={{ width: "100%", height: "100%" }}>
            <img
              src={item.img}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 12,
                overflow: "hidden",
              }}
            />
          </div>
        )}
        loader={<h4>Loading...</h4>}
        numberOfColumns={numberOfColumns}
      />
    </div>
  );
};
```

```
Note: I would recommend to use Vercel Image or Cloudinary to have on the fly transformation
and caching enabled on images to help load faster based on the container size.
```

# Demo

[](https://github.com/ExplorerAadi/infinite-grids/assets/52901335/08f7d3ed-16e0-4201-9d2b-a1b2dfa31262)

### Props

| Property               | Type            | Default                   | Description
| ---------------------- | --------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `items`              | [Object] | `required`                | An array of object `Item` with `img` and `id` as required fields (could have other fields as well).                                                                                          |
| `loadMore` ⚡️        | Function        | `required`                      | A function that fires when the user scrolls to the end of the grids container.                                                                                                              |
| `hasMoreItems`      | Boolean          | `true`                      | A boolean value to specify if there are more items to load.                                                                                                                   |
| `horizontalGap`               | Number       | `required`             | Horizontal spacing between grid items.                                                                                                         |
| `verticalGap`               | Number       | `required`             | Vertical spacing between grid items.                                                                                                         |
| `renderItems`               | Function       | `required`             | Function with item as parameter to return the grid component.                                                                                                         |
| `loader`               | Component       | `required`             | Component to render when user has scrolled to the end and more data is being fetched.                                                                                                        |
| `numberOfColumns`               | Number       | `required`             | Specify the number of columns to be rendered for the layout (I'd recommend to keep this value dynamic as shown in the example).                                                                                                         |


## Development

To develop this package locally, you can follow these steps:

1. Clone the repo to your local.
2. Run `pnpm install` to install the dependencies.
5. Run `pnpm dev` to start the development server.
6. Go to `localhost:5173` in your browser.

This will start a hot-reloading setup with a live example.
