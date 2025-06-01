import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
  try {
    const data = JSON.stringify(updatedContacts);
    await fs.writeFile(PATH_DB, data);
  } catch (error) {
    console.error('I am not writing contacts:', error);
  }
};
