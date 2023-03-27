import React from 'react'
import './student.css'
import Navigation from '../Navigation/Navigation'
import table_2 from './table_2.webp'
import ws from './ws.webp'
import image from './image.jpg'
import VideoPlayer from './VideoPlayer'
import ArrDee from './ArrDee.mp4'
const Student = (props) => {
  return (
    <div>
    <Navigation/>
    <div><img src={image} alt="not found" className='pc'/>

    <p className='stud-name'> Richard Musime </p>
<div className='stud-phot'>
</div>
    </div>
    <p className='stud-title'> Wanna know me </p>
    <div className='stud-phot1'> </div>
    <p className='stud-desciption'> What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry.
     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
     when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      It has survived not only five centuries, but also the leap into electronic typesetting,
       remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    <p className='project-title'>The Projects</p>
    <div className='video_1'>
    <VideoPlayer src={ArrDee}/>
    </div>
    


    </div>
  )
}

export default Student
