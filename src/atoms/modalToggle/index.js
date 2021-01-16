import { useState } from 'react';
import './styles.css';

const useModal = () => {
   const [isShow, setIsShow] = useState(false);

   function toggle() {
       setIsShow(!isShow);
   }

    return {
        isShow,
        toggle
    }
}

export default useModal;
