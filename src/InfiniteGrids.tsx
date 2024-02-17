import { Fragment } from "react";
import { useWindowSize } from "@react-hook/window-size";
import InfiniteScroll from "react-infinite-scroll-component";

export const InfiniteGrids = ({
  items,
  loadMore,
  hasMoreItems,
  horizontalGap,
  verticalGap,
  renderItem,
  loader,
}: {
  items: Item[];
  loadMore: () => void;
  hasMoreItems?: boolean;
  horizontalGap: number;
  verticalGap: number;
  renderItem: (item: Item) => JSX.Element;
  loader: JSX.Element;
}) => {
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
    <InfiniteScroll
      dataLength={items.length}
      next={loadMore}
      hasMore={hasMoreItems === undefined ? true : hasMoreItems}
      loader={loader}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          placeContent: "stretch",
          gap: horizontalGap,
        }}
      >
        {[...Array(numberOfColumns)].map((_, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              placeContent: "stretch",
              flex: "1 1 0%",
              gap: verticalGap,
            }}
          >
            {items.map((item, i) => (
              <Fragment key={item.id}>
                {i % numberOfColumns === index && (
                  <Fragment key={item.id}>{renderItem(item)}</Fragment>
                )}
              </Fragment>
            ))}
          </div>
        ))}
      </div>
    </InfiniteScroll>
  );
};

export interface Item {
  id: string;
  img: string;
}