import axios from 'axios';

export const submitEmail = async (email) => {
    try {
        const response = await axios.post(
            'http://101.101.217.98:8080/api/branchify/beta-tester',
            { email }
        );
        return response.data;
    } catch (error) {
        throw new Error('이메일 등록에 실패했습니다. 다시 시도해 주세요.');
    }
};
