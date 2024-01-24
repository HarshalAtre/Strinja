import React, { useState,useEffect } from "react";
import { useForm } from 'react-hook-form';
import InputFileUpload from "./AddProductForm";
import FocusOutlineInput from "./ImageTitle";
import WavingHandRoundedIcon from '@mui/icons-material/WavingHandRounded';
import ButtonIcons from "./SubmitImages";
// import { GalleryData } from "../Buying/gallery/GalleryData";

const AddForm = ({GalleryData})=>{
    const [title,setTitle] = useState('');
    const [image,setImage] = useState();
    const [data, setData] = useState([]);
    useEffect(()=>{
        localStorage.setItem("GalleryData",JSON.stringify(GalleryData))
    },[GalleryData])
    
    // const [collection, setCollection] = useState([]);
    // const { register, handleSubmit, formState: { errors },control } = useForm();
    // const onSubmit = (data) => console.log(data);
    const handleSubmit = (event) => {
        event.preventDefault()
        data.id = 7
        data.title = title
        data.titile = "colour"
        data.image = image
        console.log(data);
        console.log(GalleryData);
        GalleryData.push(data)
        console.log(GalleryData);
        addData(data)
    }
    const addData = (data) => {
        setData(prevData=>{
            return [...prevData,{id:crypto.randomUUID(),title:data.title,titile:data.titile,image:data.image}]
        })
    }
  return (
    <>
    <section>
        <div className='sign_container'>
            <div className='sign_header'>
            </div>
            <div className='sign_form'>
                <form 
                onSubmit={handleSubmit}
                >   
                <div style={{display:'flex',justifyContent:'center',flexDirection:'column'}}>
                    <h2>Hello Admin! <WavingHandRoundedIcon/></h2>
                    <div className='form_data'>
                        <FocusOutlineInput title={title} setTitle={setTitle} />
                    </div>
                    <div className='sign_header'>
                    </div>
                    <div style={{display:'flex',justifyContent:'space-between'}}>
                        <div className='form_data'>
                            <InputFileUpload setImage={setImage}/>
                        </div>
                        <center>
                            <ButtonIcons />
                        </center>
                    </div>
                </div>
                </form>
            </div>
        </div>
    </section>
    </>
  )
}

export default AddForm