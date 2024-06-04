import CategoryItemComponent from "../categoryItem/CategoryItemComponent";
import '../directory/DirectoryStyles.scss';

function DirectoryComponent({categories}) {
  return (
    <div className="directory-container">
        {categories.map((category)=>(
            <CategoryItemComponent key={category.id} category={category} />
        ))}
    </div>
  )
}

export default DirectoryComponent;