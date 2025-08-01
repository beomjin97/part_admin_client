import CreateCategoryForm from "@/components/CreateCategoryForm";
import CreateLocationForm from "@/components/CreateLocationForm";
import CreateManufacturerForm from "@/components/CreateManufacturerForm";
import CreatePartForm from "@/components/CreatePartForm";

export default function Create() {
    return (
    <>
      <CreatePartForm />
      <CreateCategoryForm />
      <CreateLocationForm />
      <CreateManufacturerForm />
    </>    
    )
}