const admin = require("firebase-admin");

// Replace with your service account key file
const serviceAccount = require("./path/to/your/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const userUid = "the-user-uid-you-want-to-update";
const newEmail = "new-email@example.com";

async function updateUserEmail() {
  try {
    await admin.auth().updateUser(userUid, {
      email: newEmail,
    });
    console.log(`Successfully updated email for user: ${userUid}`);
  } catch (error) {
    console.error("Error updating user:", error);
  }
}

updateUserEmail();
