import { useState } from 'react';

const useModel = () => {
  const [isModelOpen, setisModelOpen] = useState(false);
  const handleToggleModel = () => {
    const container: any = document.querySelector('#demo-modal');
    container.classList.toggle('showContainer');
    setisModelOpen((model) => !model);
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

export default useModel;
