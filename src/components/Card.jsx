import React,{useState, useRef} from 'react'
import {ImCloudDownload} from 'react-icons/im'
import {AiFillHeart} from 'react-icons/ai'
import img4 from '../assets/img4.png'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import logo from '../assets/logo.svg'
import html2canvas from 'html2canvas';

const Card = () => {
    const [theme, settheme] = useState('white')
    const [name, setName] = useState('اسمك')
    const [text, setText] = useState('')
    
  const cardRef = useRef(null);
  const bgImageElement = useRef(null);


  const handleDownload = () => {
    html2canvas(cardRef.current).then((canvas) => {
      const link = document.createElement('a');
      link.download = 'card.png';
      link.href = canvas.toDataURL();
      link.click();
    });
  };
 
  return (
    <div className='flex min-h-screen md:gap-20 flex-col items-center p-10   font-cairo '>
          <div  className='flex gap-4  flex-col md:flex-row items-center w-full md:justify-around'>
          <div className=' flex gap-1'>
            <img className='w-6' src={logo} alt="" />
            <p className='font-bold'>afifi</p>
           </div>
             <div className='py-2'>
                <h2 className='text-4xl py-2 text-center font-[700] gradientcolor'>انشاء بطاقة تهنئة العيد المبارك</h2>
           </div>
          </div>
        <div className=' my-20  flex flex-col md:flex-row  gap-8 items-center h-[60vh] w-[100%] md:w-[80%] '>
           <div className='flex mx-10 flex-col gap-3 justify-center items-center'>
           <div ref={cardRef}  className={` min-h-[50vh] ${theme} hero relative shadoww gap-4  flex-1 p-10 h-full   rounded-md flex flex-col justify-center items-center `}>
              <img   className='absolute z-0 left-0 top-0 -rotate-[25deg] ' src={img4} alt="" />
              <img className=' absolute z-0 top-0 right-0' src={img1} alt="" />
              <img className='absolute z-0 w-48  md:w-56 -rotate-[30deg] left-4 top-0 -translate-y-1/2' src={img2} alt="" />
              <img className='absolute z-0 right-28 w-14  rotate-[20deg] top-0 md:top-0 md:w-10' src={img3} alt="" />
               <h2 className='text-3xl z-40 font-[700] text-blue-700'>عيدكم مبارك</h2>
               <div className='z-10'>
               <p className='font-[300] z-40 text-center'>{text}</p>
               <p className='font-[300] z-40 text-center'>أتمنى لكم عيد مبارك سعيد وكل عام وأنتم بألف خير </p>
               </div>
               <p className='relative z-40 -left-20 md:-left-28 top-10'>{name}</p>
           </div>
           <div className='  flex gap-2'>
            <div onClick={()=>settheme('red')} className='w-20 h-10 cursor-pointer rounded-full red'></div>
            <div onClick={()=>settheme('blue')} className='w-20 h-10 cursor-pointer rounded-full blue'></div>
            <div onClick={()=>settheme('green')} className='w-20 h-10 cursor-pointer rounded-full green'></div>
            <div onClick={()=>settheme('yellow')} className='w-20 h-10 cursor-pointer rounded-full yellow'></div>
        </div>
           </div>
           <div className=' flex w-full  flex-col p-3 md:p-8 shadow-md bg-white rounded-xl   gap-4'>
               <input onChange={(e)=>setName(e.target.value)} dir='rtl'  className='shadoww w-full outline-none rounded-md py-2 px-3' type="text" placeholder='اسمك' />
               <textarea onChange={(e)=>setText(e.target.value)} placeholder='أكتب رسالتك هنا' dir ='rtl' className='shadoww rounded-lg w-full py-2 outline-none px-3' name="message" id="" cols="30" rows="5"></textarea>
               <button onClick={handleDownload} className='bg-blue-500 py-2 rounded-md text-white hover:bg-blue-800 duration-200 flex items-center w-full justify-center gap-3'><span>تنزيل الصورة</span> <ImCloudDownload className='text-xl'/></button>
           </div>
        </div>
       
    </div>
  )
}

export default Card