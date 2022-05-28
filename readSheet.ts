import {Contact} from './types';

const Excel = require('exceljs');


const getEmailsFromSheet = async (filename: string): Promise<Contact[]> => {
  const workbook = new Excel.Workbook();

  await workbook.csv.readFile(`comments.csv`);

  const sheet = workbook.getWorksheet('sheet1')


  const contacts: Contact[] = [];

  sheet.eachRow({ includeEmpty: true }, (row) => {
    const comment = row.values[7];
    const email = comment.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);
    if (email) {
      if (!contacts.find(({email: oldEmail}) => oldEmail === email)) {
        const contact: Contact = {
          email: email[0],
          fullName: row.values[4],
          lastName: row.values[3],
          firstName: row.values[2],
          linkedinProfile: row.values[1]
        }
        contacts.push(contact)
      }
    }
  });

  return contacts;
}

export default getEmailsFromSheet;
