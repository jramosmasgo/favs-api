import bcrypt from "bcrypt";

export const encrypt = async (input: string): Promise<string> => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(input, salt);
};

export const validate = async (
  word: string,
  encryptedWord: string
): Promise<boolean> => {
  return await bcrypt.compare(word, encryptedWord);
};
