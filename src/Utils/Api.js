import axios from "axios";

export default axios.create({
  // baseURL: `https://us-central1-sme-survey-form.cloudfunctions.net/api/form`,
  baseURL: `http://demo3358311.mockable.io`,
  responseType: "json"
});
