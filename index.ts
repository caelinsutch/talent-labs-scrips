import {sidemailApiKey} from './constants';
import getEmailsFromSheet from './readSheet';
import splitIntoChunks from './splitIntoChunks';
import writeSheet from './writeSheet';

const configureSidemail = require("sidemail");
const sidemail = configureSidemail({ apiKey: sidemailApiKey });

const main = async () => {
	const contacts = await getEmailsFromSheet('./comments.csv')
	await writeSheet('./contacts.xlsx', contacts);
	// const chunks = splitIntoChunks(contacts, 50);
	// console.log(chunks.length)
	// for (const chunk of chunks) {
	// 	await Promise.all(chunk.map(async ({ email, ...contact}) => {
	// 		try {
	// 			await sidemail.contacts.createOrUpdate({
	// 				emailAddress: email,
	// 				identifier: email + contact.fullName,
	// 				customProps: {
	// 					...contact
	// 				},
	// 			});
	// 		} catch (e) {
	// 			console.error(e);
	// 			console.log(email)
	// 		}
	// 	}))
	// }
}

main().then(() => console.log('done'))
