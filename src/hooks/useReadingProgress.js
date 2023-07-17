import { useEffect, useState } from "react"

const useReadingProgress = () => {
  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    const updateScrollCompletion = () => {
      const currentProgress = window.scrollY;
      console.log(currentProgress);
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      console.log(scrollHeight);
      if(scrollHeight) {
        setCompletion(
          Number((currentProgress / scrollHeight).toFixed(2)) * 100
        );
      }
    }

    window.addEventListener('scroll', updateScrollCompletion);

    return () => {
      window.removeEventListener('scroll', updateScrollCompletion);
    }

  }, []);

  return completion;
}

export default useReadingProgress;