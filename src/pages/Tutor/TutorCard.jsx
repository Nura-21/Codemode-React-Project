export const TutorCard = () => {
  const parseLogin = (telegramLogin) => {
    return telegramLogin.slice(13);
  };

  return (
    <section class="tutor-card glass">
      {/* <img
      :src="require(`@/assets/landing/tutors/${tutor.img}`)"
      class="tutor-card-image GradientBorder"
      alt="Tutor Image"
      draggable="false"
    /> */}
      <p class="tutor-card-name">Tutor</p>
      <div class="tutor-card-courses-wrapper glass">
        {/* <p
        class="tutor-card-courses"
        v-for="(course, courseIndex) of tutor.courses"
        :key="courseIndex"
      >
        <img
          :src="require(`@/assets/landing/icons/${course.icon}`)"
          alt="Course Image"
          class="tutor-card-courses-icon"
          draggable="false"
        />
        {{ course.title }}
      </p> */}
      </div>
      <div class="tutor-card-contacts">
        {/* <a :href="'mailto:' + tutor.email"
        ><i class="fa-solid fa-envelope"></i>{{ tutor.email }}</a
      >

      <a :href="tutor.telegram" target="_blank"
        ><i class="fa-solid fa-paper-plane"></i
        >{{ parseLogin(tutor.telegram) }}</a
      > */}
      </div>
    </section>
  );
};
