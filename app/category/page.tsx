import AddCategoryButton from "./components/add-category-button";
import CategoryTable from "./components/category-table";

export default function Home() {
    return (
        <div>
            <AddCategoryButton />
            <main>
                <CategoryTable />
            </main>
        </div>
        )
}