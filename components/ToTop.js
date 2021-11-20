import { ArrowCircleUpIcon } from "@heroicons/react/solid"
import { useEffect, useRef } from "react"

function ToTop() {

    const componentRef = useRef(null)
    componentRef?.current?.classList.add("hide");
    const goToTop = ()=>{
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    useEffect(() => {
        window.addEventListener("scroll", function () {
            if (this.scrollY > 100) {
                componentRef?.current?.classList.remove("hide");
            } else {
                componentRef?.current?.classList.add("hide");
            }
          }); 

          
    }, [])
    return (
        <div ref={componentRef} className="fixed bottom-8 right-8 rounded-full cursor-pointer bg-primary" onClick = {goToTop}>
            <ArrowCircleUpIcon className="h-10  text-primary bg-white border border-gray-300 rounded-full w-full" />
        </div>
    )
}

export default ToTop
