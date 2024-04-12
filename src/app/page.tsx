import CellCounting from "@/components/CellCounting";
import Demo from "@/components/Demo";
import Importance from "@/components/Importance";
import Methods from "@/components/Methods";

export default function HomePage() {
  return (
    <main>
      <div className="bg-gray-50 dark:bg-gray-950">
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
