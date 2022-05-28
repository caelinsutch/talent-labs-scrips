import {Contact} from './types';
import Excel from 'exceljs';

const writeSheet = async (filename: string, contacts: Contact[]) => {
  const workbook = new Excel.Workbook();
  const worksheet = workbook.addWorksheet('sheet1');
  worksheet.columns = [
    { header: 'Email', key: 'email', width: 10 },
    { header: 'FullName', key: 'fullName', width: 10 },
  ];
  contacts.forEach(({ email, fullName}) => {
    worksheet.addRow({
      email,
      fullName,
    })
  })
  await workbook.xlsx.writeFile(filename);
}

export default writeSheet;
