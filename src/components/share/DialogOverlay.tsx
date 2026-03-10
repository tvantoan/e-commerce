export default function DialogOverlay() {
  return (
    <div
      data-state="open"
      data-slot="dialog-overlay"
      className="cpsui:data-[state=open]:animate-in cpsui:data-[state=closed]:animate-out cpsui:data-[state=closed]:fade-out-0 cpsui:data-[state=open]:fade-in-0 cpsui:fixed cpsui:inset-0 cpsui:z-9999 cpsui:bg-overlay-black-500 cpsui:backdrop-blur-[3px]"
      style={{ pointerEvents: "auto" }}
      data-aria-hidden="true"
      aria-hidden="true"
    ></div>
  );
}
