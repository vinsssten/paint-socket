import { MutableRefObject, useEffect } from 'react';

function useOutsideClick(
    ref: MutableRefObject<HTMLDivElement | null>,
    outsideClickCallback: () => void,
) {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event: any) {
            if (ref) {
                if (ref.current && !ref.current.contains(event.target)) {
                    outsideClickCallback();
                }
            }
        }
        // Bind the event listener
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref]);
}

export default useOutsideClick;
