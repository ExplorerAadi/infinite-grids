import { Fragment, useState } from "react";
import { useWindowSize } from "@react-hook/window-size";
import InfiniteScroll from "react-infinite-scroll-component";

export const App = () => {
  const [items, setItems] = useState(initialItems);
  const [width] = useWindowSize();

  const numberOfColumns =
    width && width < 420
      ? 1
      : width && width > 420 && width < 768
      ? 2
      : width && width > 768 && width < 1024
      ? 3
      : 4;

  return (
    <>
      <InfiniteScroll
        dataLength={items.length}
        next={() =>
          setTimeout(() => setItems([...items, ...initialItems]), 5000)
        }
        hasMore={true}
        loader={
          <h4 className="pl-4 pb-4 text-lg font-semibold text-gray-500 w-full text-center">
            Loading...
          </h4>
        }
      >
        <div className="flex place-content-stretch gap-4 flex-wrap p-4">
          {[...Array(numberOfColumns)].map((_, index) => (
            <div
              key={index}
              className="flex flex-col place-content-stretch flex-1 space-y-4"
            >
              {items.map((item, i) => (
                <Fragment key={item.id}>
                  {i % numberOfColumns === index && (
                    <Grid key={item.id} item={item} />
                  )}
                </Fragment>
              ))}
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </>
  );
};

const Grid = ({ item }: { item: Item }) => {
  return (
    <div className="w-full h-full">
      <img
        src={item.img}
        alt=""
        className="w-full h-full object-contain overflow-hidden rounded-md"
      />
    </div>
  );
};

interface Item {
  id: number;
  img: string;
}

const initialItems = [
  {
    id: 1,
    img: "https://storage.googleapis.com/pai-images/a4c6e61a50774541ad5b97223b82b74b.jpeg",
  },
  {
    id: 2,
    img: "https://storage.googleapis.com/pai-images/b055936d4fed41a8882dba086ef2a48b.jpeg",
  },
  {
    id: 3,
    img: "https://storage.googleapis.com/pai-images/e49f2e45a6b64270afb2a07b932844e9.jpeg",
  },
  {
    id: 4,
    img: "https://storage.googleapis.com/pai-images/9b796344d52840e9a9062c6d33d9ad50.jpeg",
  },
  {
    id: 5,
    img: "https://storage.googleapis.com/pai-images/789104cdaea14825b8ba1c45436fb638.jpeg",
  },
  {
    id: 6,
    img: "https://storage.googleapis.com/pai-images/a4c6e61a50774541ad5b97223b82b74b.jpeg",
  },
  {
    id: 7,
    img: "https://storage.googleapis.com/pai-images/b055936d4fed41a8882dba086ef2a48b.jpeg",
  },
  {
    id: 8,
    img: "https://storage.googleapis.com/pai-images/e49f2e45a6b64270afb2a07b932844e9.jpeg",
  },
  {
    id: 9,
    img: "https://storage.googleapis.com/pai-images/9b796344d52840e9a9062c6d33d9ad50.jpeg",
  },
  {
    id: 10,
    img: "https://storage.googleapis.com/pai-images/789104cdaea14825b8ba1c45436fb638.jpeg",
  },
  {
    id: 11,
    img: "https://storage.googleapis.com/pai-images/a4c6e61a50774541ad5b97223b82b74b.jpeg",
  },
  {
    id: 12,
    img: "https://storage.googleapis.com/pai-images/b055936d4fed41a8882dba086ef2a48b.jpeg",
  },
  {
    id: 13,
    img: "https://storage.googleapis.com/pai-images/e49f2e45a6b64270afb2a07b932844e9.jpeg",
  },
  {
    id: 14,
    img: "https://storage.googleapis.com/pai-images/9b796344d52840e9a9062c6d33d9ad50.jpeg",
  },
  {
    id: 15,
    img: "https://storage.googleapis.com/pai-images/789104cdaea14825b8ba1c45436fb638.jpeg",
  },
  {
    id: 16,
    img: "https://storage.googleapis.com/pai-images/a4c6e61a50774541ad5b97223b82b74b.jpeg",
  },
  {
    id: 17,
    img: "https://storage.googleapis.com/pai-images/b055936d4fed41a8882dba086ef2a48b.jpeg",
  },
  {
    id: 18,
    img: "https://storage.googleapis.com/pai-images/e49f2e45a6b64270afb2a07b932844e9.jpeg",
  },
  {
    id: 19,
    img: "https://storage.googleapis.com/pai-images/9b796344d52840e9a9062c6d33d9ad50.jpeg",
  },
  {
    id: 20,
    img: "https://storage.googleapis.com/pai-images/789104cdaea14825b8ba1c45436fb638.jpeg",
  },
];
