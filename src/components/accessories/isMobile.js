import { useEffect, useState } from "react";

export default function useBreakpoint() {
    const [breakpoint, setBreakpoint] = useState("desktop");

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 640) {
                setBreakpoint("mobile");
            } else if (width >= 640 && width < 1024) {
                setBreakpoint("tablet");
            } else {
                setBreakpoint("desktop");
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return breakpoint;
}
