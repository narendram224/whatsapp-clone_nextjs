import { useState } from 'react';

const useVideoCallModel = () => {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const handleToggleModel = () => {
    const container: any = document.querySelector('#videoCallModel');
    container.classList.toggle('showContainer');
    setIsModelOpen((model) => !model);
  };
  // function windowOnClick(event: any) {
  //   console.log('evnet', event.target.id);

  //   if (event.target.id === 'demo-modal') {
  //     handleToggleModel();
  //   }
  // }

  // window.addEventListener('click', windowOnClick);

  // useEffect(() => {
  //   return () => {
  //     window.removeEventListener('click', windowOnClick);
  //   };
  // }, []);

  return { isModelOpen, handleToggleModel };
};

export default useVideoCallModel;
