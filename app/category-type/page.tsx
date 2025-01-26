import CategoryTypeTable from "./components/category-type-table";


export default function Home() {
  return (
    <div className="min-h-screen items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="">
        <CategoryTypeTable />
      </main>
    </div>
  );
}
