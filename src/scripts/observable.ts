function doRectanglesTouch(rect1: DOMRect, rect2: DOMRect) {
  return (
    rect1.right >= rect2.left &&
    rect1.left <= rect2.right &&
    rect1.bottom >= rect2.top &&
    rect1.top <= rect2.bottom
  );
}

function isRectInViewport(rect: DOMRect) {
  return (
    rect.top <= window.innerHeight &&
    rect.bottom >= 0 &&
    rect.left >= 0 &&
    rect.right <= window.innerWidth
  );
}

export function intersectionTrigger(
  trigger: HTMLElement,
  elements: HTMLElement[],
  intersectionCallback: (
    intersecting: boolean,
    triggers: [HTMLElement, HTMLElement]
  ) => void
) {
  let frame: number | null = null;
  let triggerRect = trigger.getBoundingClientRect();
  let cacheResult = new Map();

  function handleScroll() {
    const triggerIntersected = isRectInViewport(triggerRect);

    if (triggerIntersected) {
      elements.some((element, index) => {
        const observableRect = element.getBoundingClientRect();
        const isIntersecting = doRectanglesTouch(triggerRect, observableRect);
        const previousResult = cacheResult.get(index) ?? false;

        if (previousResult !== isIntersecting) {
          intersectionCallback(isIntersecting, [trigger, element]);
          cacheResult.set(index, isIntersecting);
        }

        return isIntersecting; // Exit the loop if an intersection is found
      });
    }
  }
  
  window.addEventListener("scroll", () => {
    if (!window.requestAnimationFrame) {
      handleScroll();
    } else {
      // Use requestAnimationFrame for smoother scrolling
      frame = window.requestAnimationFrame(handleScroll);
    }
  });

  window.addEventListener("resize", () => {
    // Update triggerRect when the window is resized
    triggerRect = trigger.getBoundingClientRect();
  });

  return () => {
    if (frame) window.cancelAnimationFrame(frame);
  };
}
