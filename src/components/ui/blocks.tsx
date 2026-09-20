import React, { useEffect, useState } from 'react';

export interface BlocksProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
  activeDivsClass?: string;
  clickedDivsClass?: string;
  divClass?: string;
  classname?: string;
  activeDivs?: Record<number, Set<number>>;
  rightEdgeActiveDivs?: Record<number, Set<number>>;
}

export const Blocks: React.FC<BlocksProps> = ({
  containerRef,
  activeDivsClass = '',
  clickedDivsClass = 'bg-[#0056ff] border-[#0056ff] shadow-[0_0_16px_rgba(0,86,255,0.35)]',
  divClass = '',
  classname = '',
  activeDivs = {},
  rightEdgeActiveDivs,
}) => {
  const [grid, setGrid] = useState<{ cols: number; rows: number }>({ cols: 16, rows: 12 });
  const [hoveredBlock, setHoveredBlock] = useState<string | null>(null);
  const [clickedBlocks, setClickedBlocks] = useState<Set<string>>(new Set());

  useEffect(() => {
    const updateGrid = () => {
      if (!containerRef?.current) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      const size = 52; // Block cell dimension in px
      const cols = Math.max(16, Math.ceil(width / size));
      const rows = Math.max(10, Math.ceil(height / size));
      setGrid({ cols, rows });
    };

    updateGrid();
    const ro = new ResizeObserver(updateGrid);
    if (containerRef?.current) {
      ro.observe(containerRef.current);
    }
    window.addEventListener('resize', updateGrid);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', updateGrid);
    };
  }, [containerRef]);

  const handleBlockClick = (key: string) => {
    setClickedBlocks((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  };

  return (
    <div
      className={`absolute inset-0 grid h-full w-full pointer-events-auto select-none ${classname}`}
      style={{
        gridTemplateColumns: `repeat(${grid.cols}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${grid.rows}, minmax(0, 1fr))`,
      }}
    >
      {Array.from({ length: grid.rows }).map((_, r) =>
        Array.from({ length: grid.cols }).map((_, c) => {
          const fromRight = grid.cols - 1 - c;
          const isDirectActive = Boolean(activeDivs[c]?.has(r));
          const isRightEdgeActive = Boolean(rightEdgeActiveDivs && rightEdgeActiveDivs[fromRight]?.has(r));
          const isPresetActive = isDirectActive || isRightEdgeActive;

          const blockKey = `${r}-${c}`;
          const isClicked = clickedBlocks.has(blockKey);
          const isHovered = hoveredBlock === blockKey;

          return (
            <div
              key={blockKey}
              onClick={() => handleBlockClick(blockKey)}
              onMouseEnter={() => setHoveredBlock(blockKey)}
              onMouseLeave={() => setHoveredBlock(null)}
              className={`border cursor-pointer transition-all duration-200 ${divClass} ${
                isClicked
                  ? clickedDivsClass
                  : isPresetActive
                  ? activeDivsClass
                  : ''
              } ${
                !isClicked && isHovered
                  ? 'bg-[#0056ff]/20 scale-[0.98] border-[#0056ff]/40 shadow-xs'
                  : ''
              }`}
            />
          );
        })
      )}
    </div>
  );
};

export default Blocks;
