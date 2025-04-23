import Home from "./components/home";

export default function App() {
  return (
    <div className="dark:bg-black min-h-screen">
      <Home />
    </div>
  );
}

{/* <GridPattern
  squares={squareFill}
  className={cn(
    "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
    "inset-x-0 inset-y-[-30%] h-[180%] skew-y-12"
  )}
></GridPattern> */}
