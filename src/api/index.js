import axios from "../plugins/axios";

class ApiClass {
  async axiosCall(config) {
    const { data } = await axios.request(config);
    return data;
  }

  async getCourses() {
    return this.axiosCall({ url: "/courses" });
  }

  async getTutors() {
    return this.axiosCall({ url: "/tutors" });
  }

  async getReviews() {
    return this.axiosCall({ url: "/reviews" });
  }
}

const api = new ApiClass();
export default api;
