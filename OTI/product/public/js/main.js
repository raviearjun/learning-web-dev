
  const stepBoxes = document.querySelectorAll(".step-box");
  const stepCircles = document.querySelectorAll(".step-circle");

  // Simpan status visibility setiap step
  let stepVisibility = Array(stepBoxes.length).fill(false);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const idx = Number(entry.target.dataset.index) - 1;
        stepVisibility[idx] = entry.isIntersecting;
        // Update visible class pada step-box
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });

      // Update class active pada step-circle: semua yang terlihat jadi aktif
      stepCircles.forEach((circle, i) => {
        if (stepVisibility[i]) {
          circle.classList.add("active");
        } else {
          circle.classList.remove("active");
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  stepBoxes.forEach((box) => observer.observe(box));

  const groupPhotos = document.querySelectorAll(".group-photo");
  const photoObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    },
    { threshold: 0.3 }
  );
  groupPhotos.forEach((photo) => photoObserver.observe(photo));
