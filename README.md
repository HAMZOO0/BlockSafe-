# **BlockSafe: Decentralized Data Framework (DDF)**

BlockSafe is a **Decentralized Data Framework** designed to securely store, share, and manage sensitive data using blockchain technology. It serves as a flexible and scalable solution for building decentralized applications (dApps) across various industries, such as healthcare, voting, and certificate verification.

Our first application built on **BlockSafe** is a **Medical Record System**, ensuring the privacy, security, and accessibility of medical data for patients, hospitals, and insurance providers.

---

## **Features**

- **Decentralized Architecture**: Eliminates single points of failure.
- **Data Transparency**: Immutable records for full traceability.
- **Cryptographic Security**: Ensures data integrity and authorized access.
- **Customizable Framework**: Adaptable to multiple use cases, including:
  - Medical Records
  - Voting Systems
  - Supply Chain Management
  - Certificate Verification

---

## **Technologies Used**

| **Layer**              | **Tools/Technologies**                     |
| ---------------------- | ------------------------------------------ |
| **Blockchain**         | Ethereum                                   |
| **Smart Contracts**    | Solidity                                   |
| **Data Storage**       | IPFS (via Pinata)                          |
| **Backend**            | Node.js (Express)                          |
| **Frontend**           | React + Web3.js                            |
| **Wallet Integration** | MetaMask                                   |
| **Authentication**     | Appwrite                                   |
| **Development Tools**  | Hardhat, Remix IDE                         |

---

## **How BlockSafe Works**

1. **Data Submission**: Sensitive data (e.g., medical records) is encrypted and stored off-chain using **IPFS via Pinata**.
2. **Blockchain Logging**: The hash of the stored data is logged on the blockchain, ensuring data integrity and transparency.
3. **Access Control**: Patients (data owners) use their wallets to grant/revoke access to specific entities like hospitals or insurers.
4. **Transparency**: All access requests and transactions are recorded immutably on the blockchain.

---

## **Medical Record System (Use Case)**

### **Overview**

The **Medical Record System** is a dApp built using BlockSafe to securely store and share medical data.

- Patients control their records using their wallets.
- Hospitals upload records, which are stored in IPFS via Pinata.
- Access permissions are logged and managed on the blockchain.

---

## **Setup Instructions**

### **Prerequisites**

- Node.js installed
- MetaMask wallet
- Ethereum development environment (e.g., Hardhat)

### **Environment Variables**

To configure the project, create a `.env` file and add the following environment variables:

```plaintext
VITE_APPWRITE_URL="your-appwrite-url"
VITE_APPWRITE_PROJECT_ID="your-appwrite-project-id"
VITE_APPWRITE_DB_ID="your-appwrite-database-id"
VITE_APPWRITE_COLLECTION_ID="your-appwrite-collection-id"
VITE_APPWRITE_BUCKET_ID="your-appwrite-bucket-id"
VITE_PINATA_SECRET="your-pinata-secret-key"
VITE_API_KEY="your-api-key"
```

## Run the Project
To start the development server, run:

``` npm run dev ```

---
## Screenshots

### Application UI
<img width="673" alt="image (2)" src="https://github.com/user-attachments/assets/adec158a-81e6-4165-8719-f9c2794fa261" />
<img width="658" alt="image (4)" src="https://github.com/user-attachments/assets/88215896-32b7-477d-a8e0-63d4b88bda7a" />
<img width="728" alt="image (5)" src="https://github.com/user-attachments/assets/0915f0b9-fec6-421e-8a16-07de57396bf0" />



### IPFS (Pinata)
<img width="896" alt="image (3)" src="https://github.com/user-attachments/assets/6967d220-576b-4ecd-9c21-159f694f44f0" />

### Appwrite
<img width="776" alt="image (6)" src="https://github.com/user-attachments/assets/576f5e47-c407-4a77-b64e-8fcf21c3fb1e" />

### Ganache
![2021-02-25-22_21_37-ganache](https://github.com/user-attachments/assets/9936231d-60a1-4a71-86a3-c440f02579bd)

### Git Graph - Contributions 
<img width="692" alt="Screenshot 2024-12-21 233041" src="https://github.com/user-attachments/assets/eba86b23-1dd0-4fb1-a367-2be16ba4c3b0" />
