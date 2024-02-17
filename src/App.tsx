import { useState } from "react";
import { InfiniteGrids, Item } from "./InfiniteGrids";

export const App = () => {
  const [items, setItems] = useState(initialItems);

  const loadMore = () => {
    setTimeout(() => setItems([...items, ...initialItems]), 2000);
  };

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
      />
    </div>
  );
};

const initialItems = [
  {
    id: Math.random().toFixed(20).toString(),
    img: "https://storage.googleapis.com/pai-images/a4c6e61a50774541ad5b97223b82b74b.jpeg",
  },
  {
    id: Math.random().toFixed(20).toString(),
    img: "https://storage.googleapis.com/pai-images/b055936d4fed41a8882dba086ef2a48b.jpeg",
  },
  {
    id: Math.random().toFixed(20).toString(),
    img: "https://storage.googleapis.com/pai-images/e49f2e45a6b64270afb2a07b932844e9.jpeg",
  },
  {
    id: Math.random().toFixed(20).toString(),
    img: "https://storage.googleapis.com/pai-images/9b796344d52840e9a9062c6d33d9ad50.jpeg",
  },
  {
    id: Math.random().toFixed(20).toString(),
    img: "https://storage.googleapis.com/pai-images/789104cdaea14825b8ba1c45436fb638.jpeg",
  },
  {
    id: Math.random().toFixed(20).toString(),
    img: "https://storage.googleapis.com/pai-images/a4c6e61a50774541ad5b97223b82b74b.jpeg",
  },
  {
    id: Math.random().toFixed(20).toString(),
    img: "https://storage.googleapis.com/pai-images/b055936d4fed41a8882dba086ef2a48b.jpeg",
  },
  {
    id: Math.random().toFixed(20).toString(),
    img: "https://storage.googleapis.com/pai-images/e49f2e45a6b64270afb2a07b932844e9.jpeg",
  },
  {
    id: Math.random().toFixed(20).toString(),
    img: "https://storage.googleapis.com/pai-images/9b796344d52840e9a9062c6d33d9ad50.jpeg",
  },
  {
    id: Math.random().toFixed(20).toString(),
    img: "https://storage.googleapis.com/pai-images/789104cdaea14825b8ba1c45436fb638.jpeg",
  },
  {
    id: Math.random().toFixed(20).toString(),
    img: "https://storage.googleapis.com/pai-images/a4c6e61a50774541ad5b97223b82b74b.jpeg",
  },
  {
    id: Math.random().toFixed(20).toString(),
    img: "https://storage.googleapis.com/pai-images/b055936d4fed41a8882dba086ef2a48b.jpeg",
  },
  {
    id: Math.random().toFixed(20).toString(),
    img: "https://storage.googleapis.com/pai-images/e49f2e45a6b64270afb2a07b932844e9.jpeg",
  },
  {
    id: Math.random().toFixed(20).toString(),
    img: "https://storage.googleapis.com/pai-images/9b796344d52840e9a9062c6d33d9ad50.jpeg",
  },
  {
    id: Math.random().toFixed(20).toString(),
    img: "https://storage.googleapis.com/pai-images/789104cdaea14825b8ba1c45436fb638.jpeg",
  },
  {
    id: Math.random().toFixed(20).toString(),
    img: "https://storage.googleapis.com/pai-images/a4c6e61a50774541ad5b97223b82b74b.jpeg",
  },
  {
    id: Math.random().toFixed(20).toString(),
    img: "https://storage.googleapis.com/pai-images/b055936d4fed41a8882dba086ef2a48b.jpeg",
  },
  {
    id: Math.random().toFixed(20).toString(),
    img: "https://storage.googleapis.com/pai-images/e49f2e45a6b64270afb2a07b932844e9.jpeg",
  },
  {
    id: Math.random().toFixed(20).toString(),
    img: "https://storage.googleapis.com/pai-images/9b796344d52840e9a9062c6d33d9ad50.jpeg",
  },
  {
    id: Math.random().toFixed(20).toString(),
    img: "https://storage.googleapis.com/pai-images/789104cdaea14825b8ba1c45436fb638.jpeg",
  },
];
