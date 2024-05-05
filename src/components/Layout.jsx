export default function Layout({ children, top, attr = "" }) {
  return (
    <div
      className={`py-18  container mx-auto mt-${top} flex w-full flex-col${attr}
   items-center justify-around gap-8 px-4 md:flex-row md:space-y-0`}
    >
      {children}
    </div>
  );
}
