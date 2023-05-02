import { useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { GalleryHeading, GalleryWrapper } from "./styles";
import { imagesData } from "./images";
import { MainContainer } from "components/common";
import { AnimationOnScroll } from "react-animation-on-scroll";

const MainGallery = () => {
  const [index, setIndex] = useState(-1);

  const currentImage = imagesData[index];
  const nextIndex = (index + 1) % imagesData.length;
  const nextImage = imagesData[nextIndex] || currentImage;
  const prevIndex = (index + imagesData.length - 1) % imagesData.length;
  const prevImage = imagesData[prevIndex] || currentImage;

  const handleClick = (index: number) => setIndex(index);
  const handleClose = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);
  return (
    <GalleryWrapper>
      <MainContainer>
        <AnimationOnScroll animateIn="animate__zoomIn">
          <GalleryHeading>Image Gallery</GalleryHeading>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__bounceInUp">
          <div className="marginTop">
            <Gallery
              images={imagesData}
              onClick={handleClick}
              enableImageSelection={false}
            />
            {!!currentImage && (
              /* @ts-ignore */
              <Lightbox
                mainSrc={currentImage.src}
                imageTitle={currentImage.src}
                mainSrcThumbnail={currentImage.src}
                nextSrc={nextImage.src}
                nextSrcThumbnail={nextImage.src}
                prevSrc={prevImage.src}
                prevSrcThumbnail={prevImage.src}
                onCloseRequest={handleClose}
                onMovePrevRequest={handleMovePrev}
                onMoveNextRequest={handleMoveNext}
              />
            )}
          </div>
        </AnimationOnScroll>
      </MainContainer>
    </GalleryWrapper>
  );
};

export default MainGallery;
