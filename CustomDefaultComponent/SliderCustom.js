class SliderCustom extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <style>
        
.container {
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
  
  .wrapper-slider {
    height: 100vh;
    display: inline-flex;
    overflow: hidden;
    scrollbar-width: none;
    transform: translateX(0);
    will-change: transform;
    transition: transform 0.3s ease-out;
    cursor: grab;
  }
  
  .slide{
    max-height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }
  
  @media(min-width: 1200px){
    .slide {
      padding: 3rem;
    }
  }
  
  .slide img{
    max-width: 100%;
    max-height: 100%;
    transition: transform 0.3s ease-in-out;
    box-shadow: 5px 5px 50px -1px var(--shadow);
    border-radius: 4px;
    user-select: none;
  }
  
  .grabbing {
    cursor: grabbing;
  }
  
  .grabbing .slide img{
    transform: scale(0.9);
    box-shadow: 5px 5px 40px -1px var(--shadow);
  }
  
  
  
  
  
  
        
        </style>
        
        
        
        
        
        <div class="container">
        <div class="wrapper-slider">
    <div class="slide">
      <img
        src="https://lh3.googleusercontent.com/pw/ACtC-3cXixh8cfQDKrEJl4TqYD2Ijtzofy50AxJCr7iR3zpawbXtCFSb7pGJCdNsE0RRtxgsdoK-ymi18eI5ODXR3IOqcaoMoWKKxahKlsRfe9TAN2Nt6N_JD6t__N7FsOKPshBcyxfR2tNC-2_H5Xq_QeBpvw=w1560-h929-no?authuser=0"
      />
    </div>
    <div class="slide">
      <img
        src="https://lh3.googleusercontent.com/pw/ACtC-3eayS-NfeEWhiQgXGKtCxzzwHt3UgffDdc6fRexH9brTiw1bFXAjjziKpO1IXU5cBwvtTUlFAcZDmtEQeL5hqttZcyU2VftiYlFlIdFd23B7IUVi95gqEzoApUNOjKGrv7i9BCvMekeWiCySUA9BNyjig=w1320-h979-no?authuser=0"
      />
    </div>
    <div class="slide">
      <img
        src="https://lh3.googleusercontent.com/pw/ACtC-3fBk1O3JzIeEa-rGZ7nDTH9A0fjEmUM9nMkkIIGpQvXR2xJ6bBuyhvxrIX1oZdELrwjbmY1zkIaNyAQ_FxJsC5Tg0Q9S3LTidjq7JkOSHbH5CGozAnKJixtEMTOT82abXeqK7Im8VfjXO2f42dUQBGmSw=w718-h979-no?authuser=0"
      />
    </div>
    <div class="slide">
      <img
        src="https://lh3.googleusercontent.com/pw/ACtC-3f0GPsI83b1C4PtLZkZL7nyL0L8i7YfoTAAR-5HPgyWHwe8P4--fa7bpPfK0IbJ7-fguR9nvFdFRM1f3Yj1QxWkyjzE1JY8B1Zs75WA65u55QpfTp8050mOEaGwTiFnHFQdl9C77rW0IJIXGtwFNwoe3Q=w1560-h878-no?authuser=0"
      />
    </div>
    <div class="slide">
      <img
        src="https://lh3.googleusercontent.com/pw/ACtC-3f7G2vV77t8yi03uKKgstftngql_GQ_ELtpnqQslSN0WL_PWriugNmMV47fFXqaNTPe6pGW8RcI8Q7tIua7f3a1vL4ynrGYsNvxX0zl8v1HSlsLkrEx6IORQIqTXAhJF_mTYi9_vh0_SmqxHIJVN4UcLQ=w719-h979-no?authuser=0"
        alt=""
      />
    </div>
  </div>
    
    
  </div>`;

    // get our elements
    const slider = document.querySelector(".wrapper-slider"),
      slides = Array.from(document.querySelectorAll(".slide"));

    // set up our state
    let isDragging = false,
      startPos = 0,
      currentTranslate = 0,
      prevTranslate = 0,
      animationID,
      currentIndex = 0;

    // add our event listeners
    slides.forEach((slide, index) => {
      const slideImage = slide.querySelector("img");
      // disable default image drag
      slideImage.addEventListener("dragstart", (e) => e.preventDefault());
      // pointer events
      slide.addEventListener("pointerdown", pointerDown(index));
      slide.addEventListener("pointerup", pointerUp);
      slide.addEventListener("pointerleave", pointerUp);
      slide.addEventListener("pointermove", pointerMove);
    });

    // make responsive to viewport changes
    window.addEventListener("resize", setPositionByIndex);

    // prevent menu popup on long press
    window.oncontextmenu = function (event) {
      event.preventDefault();
      event.stopPropagation();
      return false;
    };

    // use a HOF so we have index in a closure
    function pointerDown(index) {
      return function (event) {
        currentIndex = index;
        startPos = event.clientX;
        isDragging = true;
        animationID = requestAnimationFrame(animation);
        slider.classList.add("grabbing");
      };
    }

    function pointerMove(event) {
      if (isDragging) {
        const currentPosition = event.clientX;
        currentTranslate = prevTranslate + currentPosition - startPos;
      }
    }

    function pointerUp() {
      cancelAnimationFrame(animationID);
      isDragging = false;
      const movedBy = currentTranslate - prevTranslate;

      // if moved enough negative then snap to next slide if there is one
      if (movedBy < -100 && currentIndex < slides.length - 1) currentIndex += 1;

      // if moved enough positive then snap to previous slide if there is one
      if (movedBy > 100 && currentIndex > 0) currentIndex -= 1;

      setPositionByIndex();

      slider.classList.remove("grabbing");
    }

    function animation() {
      setSliderPosition();
      if (isDragging) requestAnimationFrame(animation);
    }

    function setPositionByIndex() {
      currentTranslate = currentIndex * -window.innerWidth;
      prevTranslate = currentTranslate;
      setSliderPosition();
    }

    function setSliderPosition() {
      slider.style.transform = `translateX(${currentTranslate}px)`;
    }
  }
}
customElements.define("custom-slider", SliderCustom);

/* custom  */
class RefactorSlider extends HTMLElement {
  connectedCallback() {
    const myImg = [
      "https://lh3.googleusercontent.com/pw/ACtC-3f7G2vV77t8yi03uKKgstftngql_GQ_ELtpnqQslSN0WL_PWriugNmMV47fFXqaNTPe6pGW8RcI8Q7tIua7f3a1vL4ynrGYsNvxX0zl8v1HSlsLkrEx6IORQIqTXAhJF_mTYi9_vh0_SmqxHIJVN4UcLQ=w719-h979-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/ACtC-3f0GPsI83b1C4PtLZkZL7nyL0L8i7YfoTAAR-5HPgyWHwe8P4--fa7bpPfK0IbJ7-fguR9nvFdFRM1f3Yj1QxWkyjzE1JY8B1Zs75WA65u55QpfTp8050mOEaGwTiFnHFQdl9C77rW0IJIXGtwFNwoe3Q=w1560-h878-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/ACtC-3fBk1O3JzIeEa-rGZ7nDTH9A0fjEmUM9nMkkIIGpQvXR2xJ6bBuyhvxrIX1oZdELrwjbmY1zkIaNyAQ_FxJsC5Tg0Q9S3LTidjq7JkOSHbH5CGozAnKJixtEMTOT82abXeqK7Im8VfjXO2f42dUQBGmSw=w718-h979-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/ACtC-3eayS-NfeEWhiQgXGKtCxzzwHt3UgffDdc6fRexH9brTiw1bFXAjjziKpO1IXU5cBwvtTUlFAcZDmtEQeL5hqttZcyU2VftiYlFlIdFd23B7IUVi95gqEzoApUNOjKGrv7i9BCvMekeWiCySUA9BNyjig=w1320-h979-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/ACtC-3cXixh8cfQDKrEJl4TqYD2Ijtzofy50AxJCr7iR3zpawbXtCFSb7pGJCdNsE0RRtxgsdoK-ymi18eI5ODXR3IOqcaoMoWKKxahKlsRfe9TAN2Nt6N_JD6t__N7FsOKPshBcyxfR2tNC-2_H5Xq_QeBpvw=w1560-h929-no?authuser=0",
    ];
    this.innerHTML = `
    <style>
        .slider-container {
          display: block;
          margin: 0 auto;
          min-height: 390px;
          height: 50%;
          width: 90%;
          max-width: 600px;
          background: white;
          border-radius: 10px;
          padding: 20px 10px 40px 10px;
          overflow: hidden;
        }

        .slider-container .slide {
          display: none;
          height: 100%;
          width: 100%;
          margin: 0px auto;
          background: white;
          font-size: 40px;
          font-family: var(--font-1);
          text-align: center;
          align-items: center;
        }

        .slider-container .slide img {
          height: auto;
          width: 100%;
        }

        .slider-container .active {
          display: block;
        }

        .control-container {
          display: inline-flex;
          width: 100%;
        }

        .control-container button {
          border: none;
          border-radius: 50%;
          background: white;
          font-size: 20px;
          height: 35px;
          width: 35px;
          outline: none;
        }

        .control-container button:hover {
          background: #ccc;
        }

        .slide-indicator {
          width: 100%;
          display: flex;
          justify-content: center;
        }

        .slide-indicator .indicator {
          height: 20px;
          width: 20px;
          transition: background 0.5s ease;
          background: #ccc;
          margin: 5px;
          display: inline-block;
          border-radius: 50%;
          cursor: pointer;
        }

        .slide-indicator .indicator:hover {
          background: darkgrey;
        }

        .slide-indicator .active {
          background: grey;
        }
      </style>

      <div class="slider-container">
        ${myImg.map((img, i) => `
          <div class="slide ${i === 0 ? 'active' : ''}">
            <img src="${img}" alt="">
          </div>
        `).join('')}

        <div class="control-container">
          <button class="prev">
            <i class="fa fa-chevron-left"></i>
          </button>
          <div class="slide-indicator">
            ${myImg.map((_, i) => `
              <span class="indicator ${i === 0 ? 'active' : ''}" data-slide="${i}"></span>
            `).join('')}
          </div>
          <button class="next">
            <i class="fa fa-chevron-right"></i>
          </button>
        </div>
      </div>
    `;

    const slides = document.querySelectorAll(".slide");
    const indicators = document.querySelectorAll(".indicator");
    const prev = this.querySelector(".prev");
    const next = this.querySelector(".next");
    let index = 0;

    const setActiveSlide = (index) => {
      slides.forEach((slide, i) => {
        const isActive = i === index;
        slide.classList.toggle("active", isActive);
        indicators[i].classList.toggle("active", isActive);
      });
    };

    const display = (e) => {
      const targetIndex = parseInt(e.target.dataset.slide);
      index = targetIndex;
      setActiveSlide(index);
    };

    const prevSlide = () => {
      index = (index - 1 + slides.length) % slides.length;
      setActiveSlide(index);
    };

    const nextSlide = () => {
      index = (index + 1) % slides.length;
      setActiveSlide(index);
    };

    indicators.forEach((indicator, i) => {
      indicator.dataset.slide = i;
      indicator.addEventListener("click", display);
    });
    prev.addEventListener("click", prevSlide);
    next.addEventListener("click", nextSlide);

    // Set initial slide
    setActiveSlide(index);

    // Add image URLs to the slides
    slides.forEach((slide, i) => {
      slide.querySelector("img").src = myImg[i];
    });

  }
}
customElements.define("custom-refslider", RefactorSlider);
