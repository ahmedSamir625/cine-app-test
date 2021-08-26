export const Carousel = (data, carouselId, dataFlickity, itemComponent) => {
  const createCarouselItems = () => {
    let items = "";

    data.forEach((item) => {
      itemComponent(item);
      const comp = itemComponent(item);
      items += comp.outerHTML;
    });

    return items;
  };

  var elem = document.querySelector(carouselId);
  elem.innerHTML = createCarouselItems();

  new Flickity(elem, dataFlickity);
};
