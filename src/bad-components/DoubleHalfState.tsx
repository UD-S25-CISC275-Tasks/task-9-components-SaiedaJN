import { useState } from "react";

/* cannot use useState outside of a React component or a custom hook.
change : export const [dhValue, setDhValue] = useState<number>(10);  to the following: */ 

export function useDoubleHalfState() {
    return useState<number>(10);
}
