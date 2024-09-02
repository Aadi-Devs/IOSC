import React, {useState} from 'react'
import {motion} from 'framer-motion'
import event1 from '../../Assets/event1.png'
import event3 from '../../Assets/event3.png'
import hunt from '../../Assets/hunt.jpg'
import ideathon from '../../Assets/ideathon.jpg'

function OpenCard() {
    const [expandedIndex, setexpandedIndex] = useState(null)

    const handleCardClick = (index) =>{
        setexpandedIndex(index === expandedIndex ? -1 : index)
    }

    const cardVarients = {
        expanded : {
            width:"400px"
        },
        collapsed : {
            width: "200px"
        }
    }

    const cardImages = [event1,event3,hunt,ideathon]

    const cardDescription = [
        'this is a description, write anything',
        'this is a description, write anything',
        'this is a description, write anything',
        'this is a description, write anything',
    ]

  return (
    <section className='py-16 pb-[300px] bg-gradient-to-r from-purple-800 to-indigo-800 '>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h1 className='text-3xl font-extrabold text-white'>Featured events</h1>
            <p className='mt-4 text-xl text-gray-300'>check Out our upcomig work</p>
        </div>
        <div className='mt-12 flex flex-col md:flex-row justify-center items-center gap-5'>
            {[0,1,2,3].map((index)=>(
                <motion.div
                key={index}
                className={`card cursor-pointer h-[500px] bg-cover bg-center rounded-[20px] ${index === expandedIndex ? 'expanded':''}`}
                variants={cardVarients}
                initial="collapsed"
                animate={index === expandedIndex ? 'expanded': 'collapsed'}
                transition={{duration: 0.5}}
                onClick={()=> handleCardClick(index)}
                style={{
                    backgroundImage: `url(${cardImages[index]})`,
                }}
                >
                    <div className='card-content h-full flex flex-col justify-end'> 
                        <div className='card-footer rounded-b-[20px] bg-gray-800 bg-opacity-75 min-h-[100px] flex flex-col items-center justify-center'>
                            <h2 className='text-xl font-semibold text-white text-center'> Card {index + 1}</h2>
                            {index === expandedIndex && (
                                <p className='mt-2 text-gray-300 text-center'>{cardDescription[index]}</p>
                            )}

                        </div>
                    </div>
                </motion.div>
            ))}

        </div>


    </section>
  )
}

export default OpenCard    
