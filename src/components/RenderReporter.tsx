import "./renderReporter.scss";

interface Props {
  indexInTree: number;
  descendantsCount: number;
}

export const RenderReporter = ({ indexInTree, descendantsCount }: Props) => {
  console.log(`reporter-${indexInTree} rendered`);
  return (
    <div className={`render-reporter reporter-${indexInTree}`}>
      {descendantsCount <= 0 ? (
        <div className="title">I'm the last one</div>
      ) : (
        <>
          <div className="title">I'm a render reporter</div>
          <RenderReporter
            indexInTree={indexInTree + 1}
            descendantsCount={descendantsCount - 1}
          />
        </>
      )}
    </div>
  );
};
