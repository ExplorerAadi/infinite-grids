import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

export const InfiniteGrids = ({
  items,
  loadMore,
  hasMoreItems,
  horizontalGap,
  verticalGap,
  renderItem,
  loader,
  numberOfColumns,
}: InfiniteGridsProps) => {
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
              <React.Fragment key={item.id}>
                {i % numberOfColumns === index && (
                  <React.Fragment key={item.id}>
                    {renderItem(item)}
                  </React.Fragment>
                )}
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </InfiniteScroll>
  );
};

export interface InfiniteGridsProps {
  items: Item[];
  loadMore: () => void;
  hasMoreItems?: boolean;
  horizontalGap: number;
  verticalGap: number;
  renderItem: (item: Item) => JSX.Element;
  loader: JSX.Element;
  numberOfColumns: number;
}

export interface Item {
  id: string;
  img: string;
}
