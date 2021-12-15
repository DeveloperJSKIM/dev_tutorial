//비밀번호 입력 정규식 적용
export const validateEmail= email =>{
    const regex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    return regex.test(email);
};

export const removeWhitespace = text =>{
    const regex = /\s/g;
    return text.replace(regex,'');
};