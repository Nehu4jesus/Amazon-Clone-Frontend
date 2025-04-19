import styles from'./category.module.css'
 import CategoryCards from "./CategoryCard/CategoryCard";
 import catagoryFullData from "./CategoryCard/categoryFullData";
 
 function Category() {
   return (
     <div className={styles.Catagory_conateiner }>
       {catagoryFullData?.map((images, i) => {
         return <CategoryCards key={i} data={images} />;
       })}
     </div>
   );
 }
 
 export default Category;