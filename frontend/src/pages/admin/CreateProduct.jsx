import { nanoid } from "@reduxjs/toolkit";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { asynccreateproduct } from "../../store/actions/productAction";


const CreateProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const CreateProductHandler = async (product) => {
    product.id = nanoid();


    console.log("REGISTER product:", product);

     dispatch(asynccreateproduct(product));
    navigate("/products")

  
  };

  return (
    <form
      onSubmit={handleSubmit(CreateProductHandler)}
      className="flex flex-col w-1/4 justify-start items-start"
    >

        <input
        {...register("iamge")}
          
        className="outline-0 border-b p-2 text-2xl mb-1"
        type="url"
        placeholder="image url"
      />


      <input
        {...register("title")}
          
        className="outline-0 border-b p-2 text-2xl mb-1"
        type="text"
        placeholder="title Name"
      />


     

      <input
        {...register("price")} 
        
        className="outline-0 border-b p-2 text-2xl mb-1"
        type="number"
        placeholder="Enter Price Here"
      />

      

      <textarea
         {...register("description")}
         className="outline-0 border-b p-2 text-2xl mb-1"
        placeholder="Enter description here"
         ></textarea>

         
      <input
        {...register("category")} 
        
        className="outline-0 border-b p-2 text-2xl mb-1"
        type="text"
        placeholder="category"
      />
    

     
      {/* BUTTON */}

      <button
        type="submit"
        className="mt-5 px-4 py-2 bg-pink-800 rounded"
      >
        Create Product
      </button>

    
    </form>
  );
};

export default CreateProduct