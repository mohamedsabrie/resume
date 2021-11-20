import { ArrowCircleUpIcon } from "@heroicons/react/solid"
import { useEffect, useRef } from "react"

function ToTop() {
const componentRef = useRef(null)

    const goToTop = ()=>{
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    useEffect(() => {
        window.addEventListener("scroll", function () {
            if (this.scrollY > 100) {
                componentRef?.current?.classList.add("show");
            } else {
                componentRef?.current?.classList.remove("show");
            }
          }); 

          
    }, [])
    return (
        <div ref = {componentRef}  className="hidden fixed bottom-8 right-8 rounded-full cursor-pointer bg-primary" onClick = {goToTop}>
            <ArrowCircleUpIcon className="h-10  text-primary bg-white border border-gray-300 rounded-full w-full" />
        </div>
    )
}

export default ToTop
