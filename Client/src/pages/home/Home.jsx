import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ClothSection } from "../../components/home/ClothSection.jsx";
import { ShoeSection } from "../../components/home/ShoeSection.jsx";
 
 


export const Home = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading, error, clothData, shoeData } = useSelector((state) => state.homeReducer);



    const handleSection = (gender) => {
   ;
       
    
        navigate(`/${gender}`)
    };


    useEffect(() => {
        // dispatch(getClothData());
        // dispatch(getShoeData());
    }, []);


    return   (
     
        <>
            {shoeData.map((data, index) => (
                <ShoeSection handleSection={handleSection} key={index} {...data} />
            ))}

            {clothData.map((data, index) => (
                <ClothSection handleSection={handleSection} key={index} {...data} />
            ))}
        </>
    );
};

