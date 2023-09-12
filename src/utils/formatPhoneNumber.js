export const formatPhoneNumber = (phoneNumber) => {
    // Убираем все нецифровые символы из номера. Оставляем только цифры и символ "+"
    const cleaned = phoneNumber.replace(/[^+0-9]/g, '');
    // Форматируем номер, например, "0123456789" будет "012-345-67-89"
    const formatted = cleaned.replace(/(\d{3})(\d{2})(\d{3})(\d{2})(\d+)/, '$1-$2-$3-$4-$5');
    return formatted;
};  

