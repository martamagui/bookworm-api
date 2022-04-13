import bcrypt from "bcrypt";

export const decrypted = async (
  decrypted: string,
  crypted: string
): Promise<boolean> => {
  return await bcrypt.compare(decrypted, crypted);
};
