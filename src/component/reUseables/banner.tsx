
type props = {
title: string,
subTitle:string,
text:string
}

const Banner =({title,subTitle, text}:props)=>{
    return(
        <section className=" h-[40svh] md:h-[50svh] bg-[linear-gradient(277.51deg,#1E1E1E_18.33%,_#405F6D_81.67%)] flex justify-center items-center">
          <div className="leading-10 text-center text-white ">
            <h1 className="mb-10 space-y-5 text-xl font-bold md:text-2xl text-primary">{title}</h1>
            <h2 className="text-2xl font-semibold md:text-5xl">
              {subTitle}
            </h2>
            <p>{text}</p>
          </div>
        </section>

    )
}
export default Banner;