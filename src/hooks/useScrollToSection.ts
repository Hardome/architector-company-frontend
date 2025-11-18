const offset = 80;

export default function useScrollToSection() {
  return (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({top: offsetPosition, behavior: 'smooth'});
    }
  };
};