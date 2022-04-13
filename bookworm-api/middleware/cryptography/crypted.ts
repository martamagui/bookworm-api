import bcrypt from "bcrypt";

export const crypted = async (stringtobeCrypted: string): Promise<string> => {
  const salt = await bcrypt.genSalt(19);
  const hash = await bcrypt.hash(stringtobeCrypted, salt);
  return hash;
};
