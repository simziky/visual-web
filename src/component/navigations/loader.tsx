
import Lottie from 'react-lottie';
import animationData from "../../assets/lotties/loader.json"
const Loader = () =>{
    const defaultOptions1 = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    return (
        <main className="w-full h-svh">
            <div className="flex items-center justify-center w-full h-full bg-white ">
            <Lottie 
              options={defaultOptions1}
              height={350}
              width={250}
            />
            </div>
        </main>
    )
}

export default Loader