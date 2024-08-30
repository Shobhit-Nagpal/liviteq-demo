import CellCounting from "@/components/CellCounting";
import Demo from "@/components/Demo";
import Importance from "@/components/Importance";
import Methods from "@/components/Methods";
import Note from "@/components/Note";
import { Toaster } from "@/components/ui/sonner";

export default function HomePage() {
  console.log("Test auto deployment")
  return (
    <main>
      <div className="bg-gray-50 dark:bg-gray-950">
        <Toaster
          toastOptions={{
            classNames: {
              error: "bg-red-600 text-xl",
              success: "bg-green-600 text-xl",
              warning: "bg-yellow-600 text-xl",
              info: "bg-blue-600 text-xl",
            },
          }}
        />
        <Note />
        <section className="py-6 lg:py-12 xl:py-16">
          <h1 className="text-5xl font-bold tracking-tighter text-center">
            LiviTeq Demo
          </h1>

          <p className="text-xl font-md tracking-tighter text-center mt-4">
            A prototype to exhibit cell counting.
          </p>
        </section>

        <CellCounting />
        <Importance />
        <Methods />
        <Demo />
      </div>
    </main>
  );
}
