import { useEffect, useRef } from "react";

/**
 * Fixed ambient backdrop: dot grid + two soft colour fields + a hairline
 * grid, each translated at a different rate on scroll for a subtle parallax.
 */
export function ParallaxBackground() {
  const a = useRef<HTMLDivElement>(null);
  const b = useRef<HTMLDivElement>(null);
  const grid = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        if (a.current) a.current.style.transform = `translate3d(0, ${y * 0.18}px, 0)`;
        if (b.current) b.current.style.transform = `translate3d(0, ${y * -0.12}px, 0)`;
        if (grid.current) grid.current.style.transform = `translate3d(0, ${y * 0.05}px, 0)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-paper" />
      <div ref={grid} className="bg-linegrid absolute inset-[-10%] opacity-70" />
      <div
        ref={a}
        className="float-slow absolute -left-40 top-[-6rem] h-[34rem] w-[34rem] rounded-full opacity-[0.55] blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(29,78,216,0.18), rgba(29,78,216,0) 70%)",
        }}
      />
      <div
        ref={b}
        className="float-slow absolute right-[-10rem] top-[40rem] h-[30rem] w-[30rem] rounded-full opacity-[0.5] blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(194,113,12,0.16), rgba(194,113,12,0) 70%)",
          animationDelay: "1.5s",
        }}
      />
      {/* fine dot grid on top, masked to fade at edges */}
      <div
        className="bg-dotgrid absolute inset-0 opacity-60"
        style={{
          maskImage:
            "radial-gradient(ellipse at 50% 30%, black 40%, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 50% 30%, black 40%, transparent 85%)",
        }}
      />
      {/* top vignette so topbar reads cleanly */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-paper to-transparent" />
    </div>
  );
}
