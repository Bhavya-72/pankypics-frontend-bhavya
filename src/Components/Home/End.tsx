import Image from "next/image"

export default function End(){
    return(
        <div className='h-screen flex justify-center items-center bg-backgroundwhite '>
                <div className='h-[90%] w-[94%] bg-darkbrown rounded-3xl gap-[200px] flex flex-col'>
                <h1 className=' justify-center text-7xl ml-[60px] mt-[50px] text-headtext  h-[100px]  font-bold'>Capturing <span className='text-white'>moments</span><br /> with passion</h1>
                <h3 className=' text-2xl ml-[60px]  text-headtext mt-[-110px]  h-[100px] font-bold'>Explore my extensive collection</h3>
                <Image className='ml-[20px] mt-[-210px] rounded-3xl'
                
                src="https://images.unsplash.com/photo-1733667917418-f4b7ea5a80c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNjl8fHxlbnwwfHx8fHw%3D"
                height={100}
                width={500}
                alt=''
                />

                <div className='ml-[60rem] mt-[-40rem]  h-[40rem]'>
                    <h1 className='text-6xl font-bold text-headtext'>Let's Connect</h1>
                    <div>
                        <Image
                        
                        src=""
                        height={20}
                        width={20}
                        alt=''
                        />
                    </div>
                </div>
                </div>
            </div>
    )
}