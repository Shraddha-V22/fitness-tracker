import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Dashboard, Exercises, Food, Goals } from "./pages";
import { Header } from "./components";

function App() {
  return (
    <div className="grid grid-rows-[auto_1fr]">
      <Header />
      <section>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/food" element={<Food />} />
          <Route path="/exercises" element={<Exercises />} />
          <Route path="/goals" element={<Goals />} />
        </Routes>
      </section>
      <Toaster
        position="top-center"
        reverseOrder={false}
        containerStyle={{ top: "10%" }}
        toastOptions={{
          style: { maxWidth: 500 },
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
    </div>
  );
}

export default App;
