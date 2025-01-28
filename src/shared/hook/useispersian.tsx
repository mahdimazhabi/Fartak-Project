const useisPersian = (text: string) => {
  const persianRegex = /[\u0600-\u06FF]/; // محدوده کد یونیکد زبان فارسی
  return persianRegex.test(text);
};

export default useisPersian;
