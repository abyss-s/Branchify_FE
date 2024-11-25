import axios from 'axios';

const SERVER = import.meta.env.VITE_SERVER_API;

export const submitEmail = async (email) => {
  try {
    const response = await axios.post(`${SERVER}/api/branchify/beta-tester`, {
      email: email,
    });
    return response.data;
  } catch (error) {
    throw new Error('이메일 등록에 실패했습니다. 다시 시도해 주세요.');
  }
};
