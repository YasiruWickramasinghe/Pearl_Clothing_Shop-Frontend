import axios from 'axios'

const BASE_URL = 'http://localhost:5000/api/'
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNjY4MTBhZGY1Yjc4YTdkMDc1YzVmOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MTQ3NTExMiwiZXhwIjoxNjUxNzM0MzEyfQ.D7IUOiD9SdV2CzEFbgiI7MMkYwr67cPCeO1AEuqz9vk'

export const publicRequest = axios.create({
  baseURL: BASE_URL
})
export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Beare ${TOKEN}` }
})
